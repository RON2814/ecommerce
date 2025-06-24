export default async function Home() {
  return (
    <div className="p-6 space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl px-6 sm:px-20 py-10 flex flex-col sm:flex-row items-center justify-between text-white min-h-[300px] gap-x-4">

        <div className="space-y-4 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
           Style Starts Here Only at Clift
          </h1>
          <p className="text-white font-bold text-lg sm:text-base max-w-md">
            From timeless classics to modern trends, Clift offers fashion that fits your vibe.
          </p>
          <button className="bg-blue-900 text-white-900 px-4 py-2 rounded-full text-base font-medium hover:bg-blue-700 transition duration-200">
            Shop Now
          </button>
        </div>
        <img
  src="/images/cap.png"
  alt="Hero"
  className="w-70 sm:w-60 mt-0 sm:mt-0 drop-shadow-[0_6px_6px_rgba(0,0,0,0.3)"
/>
      </section>
    
      {/* Featured Categories Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-cyan-100 rounded-3xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="/images/shirts.png" alt="tshirtljsdshuhusvdu" className="w-60 mb-4" />
          <p className="text-2xl font-bold text-blue-900 hover:opacity-50 cursor-pointer">
            Tops & Shirts
          </p>
        </div>

        <div className="bg-blue-100 rounded-3xl p-6 flex flex-col items-center relative transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="/images/pants.png" alt="Camera" className="w-45 mb-4" />
          <span className="absolute top-4 right-4 bg-yellow-300 text-sm font-bold px-3 py-1 rounded-full">
            50% OFF
          </span>
          <p className="text-2xl font-bold text-blue-900 hover:opacity-50 cursor-pointer">
            Bottoms & Pants
          </p>
        </div>

        <div className="bg-blue-100 rounded-3xl p-6 flex flex-col items-center relative transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src="/images/red.png" alt="Camera" className="w-34 mb-4" />
          <span className="absolute top-4 right-4 bg-yellow-300 text-sm font-bold px-3 py-1 rounded-full">
            50% OFF
          </span>
          <p className="text-2xl font-bold text-blue-900 hover:opacity-50 cursor-pointer">
            Dress and Skirts
          </p>
        </div>
      </section>


      {/* Promo Grid Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-pink-100 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <img src="/images/jacket.png" alt="Jackets & Coats" className="w-30 mx-auto mb-3" />
        <p className="text-xl font-bold text-blue-900 hover:opacity-50 cursor-pointer">
          Jackets & Coats
        </p>
      </div>

      <div className="bg-red-100 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <img src="/images/shoes.png" alt="Smartphone" className="w-30 mx-auto mb-3" />
        <p className="text-xl font-bold text-blue-900 hover:opacity-50 cursor-pointer">
          Shoes & Footwear
        </p>
      </div>

      <div className="bg-red-500 rounded-3xl p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <img src="/images/watch.png" alt="Controller" className="w-37 mx-auto mb-3" />
        <p className="text-xl font-bold text-white hover:opacity-50 cursor-pointer">
          Accessories
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          New Arrival: Summer Picks
        </h3>
        <p className="text-gray-600 text-sm">
          Explore our top styles for the summer season in comfort and fashion.
        </p>
        <div className="flex justify-between mt-4">
          <span className="text-lg font-bold text-blue-900">₱4,990</span>
          <span className="text-sm text-gray-500 line-through">₱6,750</span>
        </div>
      </div>
    </section>


      {/* Product Grid Section */}
     <section className="pt-12">
  <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-8">Our Latest Clothing</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { name: 'Denim Jacket', image: '/images/denim.png' },
      { name: 'Yellow Hoodie', image: '/images/yellow.png' },
      { name: 'Pastel Top', image: '/images/pastel.png' },
      { name: 'Blue Shirt', image: '/images/blue.png' },
      { name: 'Green Joggers', image: '/images/green.png' },
      { name: 'Black Jeans', image: '/images/black.png' },
      { name: 'White Dress', image: '/images/whitedress.png' },
      { name: 'Orange Bag', image: '/images/orange.png' },
    ].map((product, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl p-4 text-center shadow transition-transform transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 duration-300"
      >
<div className="h-40 w-full rounded-xl mb-4 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="h-40 w-40 object-cover mx-auto"
  />
</div>

        <h3 className="text-lg font-bold text-blue-900">{product.name}</h3>
        <p className="text-gray-500 mt-1 line-through">₱5,600.00</p>
        <p className="text-blue-900 font-bold">₱3,350.00</p>
      </div>
    ))}
  </div>
</section>


      {/* Color Showcase & CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
        <div className="bg-red-500 rounded-3xl p-8 text-white text-center lg:col-span-1">
          <h3 className="text-2xl font-bold mb-4">Discover More</h3>
          <p className="mb-4">Find trendy outfits, shoes, and accessories curated just for you.</p>
          <button className="bg-white text-red-500 font-medium px-4 py-2 rounded-full text-sm hover:bg-red-100 transition duration-200">
            Explore
          </button>
        </div>
      <div className="lg:col-span-2">
  <img
    src="/images/random.jpg"  // 👈 Replace with your actual image file
    alt="Summer Banner"
    className="w-full h-70 rounded-3xl object-cover"
  />
</div>

      </section>

   {/* Footer Call-to-Action */}
{/* Footer Call-to-Action */}
<section className="bg-slate-500 text-white px-20 py-4 shadow-md">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
    
    {/* Left Side: Brand and Categories */}
    <div>
      <h2 className="text-3xl font-extrabold text-white mb-1">Clift: Your Style Hub</h2>
      <p className="text-sm text-white mb-3">
        Where fashion meets comfort and affordability!
      </p>

      {/* Vertical Category Links */}
      <div className="flex flex-col space-y-1 text-white text-sm font-medium">
        <a href="#shoes" className="hover:underline">Shoes</a>
        <a href="#tshirts" className="hover:underline">T-Shirts</a>
        <a href="#dress" className="hover:underline">Dress</a>
        <a href="#accessories" className="hover:underline">Accessories</a>
        <a href="#pants" className="hover:underline">Pants</a>
        <a href="#jackets" className="hover:underline">Jackets</a>
      </div>
    </div>

    {/* Right Side: Contact Info (aligned with links) */}
    <div className="flex flex-col justify-start space-y-4 text-white text-base pt-[58px]">
      {/* Phone */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.59.57 1 1 0 011 1v3.55a1 1 0 01-1 1A17.91 17.91 0 013 5a1 1 0 011-1h3.54a1 1 0 011 1 11.36 11.36 0 00.57 3.59 1 1 0 01-.21 1.11z" />
        </svg>
        <span>09307822586</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 7.73 7 13 7 13s7-5.27 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 11.5z" />
        </svg>
        <span>Las Piñas City</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l11.985-7.466A.998.998 0 0023 4H1a1 1 0 00-.985 1.247L12 12.713z" />
          <path d="M12 14.857L0 7.533V20a1 1 0 001 1h22a1 1 0 001-1V7.533L12 14.857z" />
        </svg>
        <span>cliftstore@gmail.com</span>
      </div>
    </div>
  </div>

  {/* Footer Note */}
  <p className="text-xs text-center text-gray-300 pt-4 border-t border-gray-400 mt-4">
    &copy; 2025 Clift. All rights reserved.
  </p>
</section>

    </div>
  );
}
