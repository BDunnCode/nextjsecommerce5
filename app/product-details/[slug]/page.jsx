import { getProductBySlug } from "@/sanity/lib/sanity-utils";
import Details from "../../../components/Details";

export default async function ProductDetails({params}) {
  const {slug} = params;
  const product = await getProductBySlug(slug);

  return (
    <div>
      <Details product={product[0]} />
    </div>
  )
}