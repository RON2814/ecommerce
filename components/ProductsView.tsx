import { Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
// import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductsViewProps {
  products: Product[];
  // categories: Category[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* Categories */}
      <div className="w-full sm:w-[200px]">
        {/* <CategorySelectorComponent categories={categories} /> */}
      </div>
      {/* Products */}
      <div>
        <div className="flex-1">
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
