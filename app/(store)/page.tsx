// import { imageUrl } from "@/lib/imageUrl";
import { getLatestProduct } from "@/sanity/lib/products/getLatestProduct";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static"; // Force static rendering for this page
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // get latest product from sanity
  const latestProduct = await getLatestProduct();

  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl px-6 sm:px-20 py-10 flex flex-col sm:flex-row items-center justify-between text-white min-h-[300px] gap-x-4">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Style Starts Here Only at Clift
          </h1>
          <p className="text-white font-bold text-lg sm:text-base max-w-md">
            From timeless classics to modern trends, Clift offers fashion that
            fits your vibe.
          </p>
          <Link
            href={"/products"}
            className="bg-blue-900 text-white-900 px-4 py-2 rounded-2xl text-base font-medium hover:bg-blue-700 transition duration-200"
          >
            Shop Now
          </Link>
        </div>
        <Image
          width={300}
          height={300}
          src="/images/cap.png"
          alt="Hero"
          className="w-70 sm:w-60 mt-0 sm:mt-0 drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)"
        />
      </section>

      {/* Featured Categories Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href={"/categories/tops"}
          className="bg-cyan-100 rounded-3xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/shirts.png"
            alt="tshirtljsdshuhusvdu"
            className="w-60 mb-4"
          />
          <p className="text-2xl font-bold text-blue-900">Tops & Shirts</p>
        </Link>

        <Link
          href={"/categories/bottoms"}
          className="bg-blue-100 rounded-3xl p-6 flex flex-col items-center relative transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/pants.png"
            alt="Camera"
            className="w-45 mb-4"
          />
          {/* <span className="absolute top-4 right-4 bg-yellow-300 text-sm font-bold px-3 py-1 rounded-full">
            50% OFF
          </span> */}
          <p className="text-2xl font-bold text-blue-900">Bottoms & Pants</p>
        </Link>

        <Link
          href={"/categories/dresses"}
          className="bg-blue-100 rounded-3xl p-6 flex flex-col items-center relative transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/red.png"
            alt="Camera"
            className="w-34 mb-4"
          />
          {/* <span className="absolute top-4 right-4 bg-yellow-300 text-sm font-bold px-3 py-1 rounded-full">
            50% OFF
          </span> */}
          <p className="text-2xl font-bold text-blue-900">Dress and Skirts</p>
        </Link>
      </section>

      {/* Promo Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          href={"/categories/jackets"}
          className="bg-pink-100 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/jacket.png"
            alt="Jackets & Coats"
            className="w-30 mx-auto mb-3"
          />
          <p className="text-xl font-bold text-blue-900">Jackets & Coats</p>
        </Link>

        <Link
          href={"/categories/shoes"}
          className="bg-red-100 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/shoes.png"
            alt="Smartphone"
            className="w-30 mx-auto mb-3"
          />
          <p className="text-xl font-bold text-blue-900">Shoes & Footwear</p>
        </Link>

        <Link
          href={"/categories/accessories"}
          className="bg-red-500 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
        >
          <Image
            width={300}
            height={300}
            src="/images/watch.png"
            alt="Controller"
            className="w-37 mx-auto mb-3"
          />
          <p className="text-xl font-bold text-white">Accessories</p>
        </Link>

        <Link
          href={`/product/${latestProduct?.slug?.current || ""}`}
          className="bg-white rounded-3xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            New Arrival: Summer Picks
          </h3>
          <p className="text-gray-600 text-sm">
            Explore our top styles for the summer season in comfort and fashion.
          </p>
          <div className="flex justify-between mt-4">
            <span className="text-lg font-bold text-blue-900">
              ₱
              {latestProduct?.price?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            {/* <span className="text-sm text-gray-500 line-through">₱6,750</span> */}
          </div>
        </Link>
      </section>

      {/* Color Showcase & CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
        <div className="bg-red-500 rounded-3xl p-8 text-white text-center lg:col-span-3">
          <h3 className="text-2xl font-bold mb-4">Discover More</h3>
          <p className="mb-4">
            Find trendy outfits, shoes, and accessories curated just for you.
          </p>
          <Link
            href={"products"}
            className="bg-white text-red-500 font-medium px-4 py-2 rounded-full text-sm hover:bg-red-100 transition duration-200"
          >
            Explore
          </Link>
        </div>
        {/* <div className="lg:col-span-2">
          <Image
            width={300}
            height={300}
            src={imageUrl(latestProduct?.image || "").url()} // 👈 Replace with your actual image file
            alt="Summer Banner"
            className="w-full h-70 rounded-3xl object-contain"
          />
        </div> */}
      </section>
    </div>
  );
}
