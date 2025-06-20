import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function ProductThumbnail({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {/* Fixed height container for consistent sizing */}
      <div className="relative w-full h-[250px] flex items-center justify-center bg-white p-4">
        <div className="relative w-full h-full max-w-[180px] max-h-[180px]">
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name || "Product Image"}
              fill
              sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        {isOutOfStock && (
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4 min-h-[150px] flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">
          {product.description
            ?.map((block) =>
              block._type === "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ") || "No description available."}
        </p>
        <p className="mt-2 text-lg font-bold text-gray-900">
          ₱{product.price?.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductThumbnail;
