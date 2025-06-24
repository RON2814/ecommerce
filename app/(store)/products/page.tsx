import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export const dynamic = "force-static"; // Force static rendering for this page
export const revalidate = 60; // Revalidate every 60 seconds

async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="">
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-top min-h-screen bg-slate-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}

export default ProductsPage;
