import { product } from "./schemas/product-schema";
import { order } from './schemas/order-schema';
import { contact } from "./schemas/contact-schema";

export const schema = {
  types: [product, order, contact],
}
