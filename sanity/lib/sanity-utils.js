import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  title: "Tech Trove",
  apiVersion,
  useCdn,
  token,
})

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