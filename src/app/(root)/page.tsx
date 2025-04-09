import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";


const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList
        // data={sampleData?.products}
        data={latestProducts}
        title="Featured Products"
        limit={4}
      />
    </>
  )
}

export default Homepage
