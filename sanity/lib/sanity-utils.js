import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import Orders from "@/components/Orders";

export const client = createClient({
  projectId,
  dataset,
  title: "Tech Trove",
  apiVersion,
  useCdn,
  token,
});

//products

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "Product"]{
      _id,
      createdAt,
      name,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
    }`,
    {},
    { next: {revalidate : 3600}}
  );
};

export async function getProductBySlug(slug) {
  return client.fetch(
    groq`*[_type == "Product" && slug.current == $slug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      price,
      "image": image.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      colors,
    }`,
    { slug },
    {next: { 
      revalidate: 3600, 
    }});
}

// orders

export async function createOrder(email, cart){
  console.log(email, cart);
  try {
    const orderCreationPromises = [];

    cart.forEach((orderData) => {
      const { name, quantity, price, color} = orderData;

      const orderCreationPromise = client.create({
        _type: 'Order',
        name,
        qty: quantity,
        price,
        color,
        paid: true,
        delivered: false,
        email: email,
        createdAt: new Date().toISOString(),
      });

      orderCreationPromises.push(orderCreationPromise)
    });

    const createdOrders = await Promise.all(orderCreationPromises);
    
    return createdOrders;
  } catch(error) {
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
}

export async function getOrdersByEmail(email) {
  try {
    const orders = await client.fetch(
      groq`*[_type == "Order" && email==$email] | order(createdAt desc)`,
      { email },
      {next: {
        revalidate: 1, 
      }});

    return orders;
  } catch(error) {
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}

// contact

export async function createContactMessage(name, email, issue) {
  const currentDate = new Date().toISOString();

  const data = {
    _type: 'Contact',
    name,
    email,
    issue,
    createdAt: currentDate,
  };

  const response = await client.create(data).catch((error) => {
    console.error('Error creating contact:', error.message);
    throw new Error('Failed to create contact');
  });

  return response;
}


