import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function ProductThumbnail({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-2xl p-4 text-center shadow transition-transform transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 duration-300 sm:min-h-[10vh] sm:min-w-[22vw] ${
        isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {/* Image container with gradient background */}
      <div className="h-50 w-full rounded-xl mb-4 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center relative">
        <div className="relative w-[160px] h-[160px]">
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

      {/* Product Name */}
      <h2 className="text-lg font-bold text-blue-900">{product.name}</h2>

      {/* Description (optional, but you can keep it as needed) */}
      {/* <p className="mt-2 text-sm text-gray-600 line-clamp-2 flex-grow">
        {product.description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join(" ") || "No description available."}
      </p> */}

      {/* Price (optional, add this if you want to show it) */}
      <p className="mt-2 text-lg font-semibold text-gray-700">
        ₱
        {product.price?.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </Link>
  );
}

export default ProductThumbnail;
