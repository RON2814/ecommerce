import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  return (
    <div className="bg-slate-100 min-h-[calc(100vh-4rem)] py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl px-6 sm:px-20 py-10 flex flex-col sm:flex-row items-center justify-between text-white mx-6 mb-12">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Story
          </h1>
          <p className="text-white text-lg sm:text-base max-w-md">
            Founded with passion, driven by style. Discover the journey behind
            Clift - your destination for quality fashion that speaks your
            language.
          </p>
        </div>
        <div className="w-40 sm:w-60 h-40 sm:h-60 relative mt-6 sm:mt-0">
          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
          <div className="absolute inset-4 bg-white/40 rounded-full flex items-center justify-center">
            <span className="text-blue-800 text-4xl font-bold">CLIFT</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Mission and Vision */}
        <section className="bg-white p-8 rounded-xl shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">
                Our Mission
              </h2>
              <p className="text-gray-700">
                At Clift, our mission is to provide high-quality, affordable
                fashion that empowers individuals to express themselves
                confidently. We believe style should be accessible to everyone,
                which drives us to create clothing that combines comfort,
                quality, and contemporary design at prices that don't break the
                bank.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">
                Our Vision
              </h2>
              <p className="text-gray-700">
                We envision a world where fashion is both sustainable and
                inclusive. Our goal is to become the leading brand that
                celebrates diversity in style, size, and identity while
                minimizing our environmental footprint. By constantly innovating
                our practices and products, we aim to set new standards in the
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value Cards */}
            <div className="bg-white rounded-3xl p-6 text-center shadow-md transition-transform hover:scale-105 duration-300">
              <div className="bg-pink-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the materials and craftsmanship that go
                into our products.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center shadow-md transition-transform hover:scale-105 duration-300">
              <div className="bg-cyan-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honesty and transparency guide every decision we make and every
                relationship we build.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center shadow-md transition-transform hover:scale-105 duration-300">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to reducing our environmental impact through
                responsible practices.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 text-center shadow-md transition-transform hover:scale-105 duration-300">
              <div className="bg-yellow-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Diversity
              </h3>
              <p className="text-gray-600">
                We celebrate uniqueness and create products for people from all
                walks of life.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-xl p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-5xl">JD</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-blue-500 mb-2">Founder & CEO</p>
              <p className="text-center text-gray-600 text-sm">
                Fashion enthusiast with over 10 years of industry experience,
                committed to making style accessible to all.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-5xl">JS</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-blue-500 mb-2">Creative Director</p>
              <p className="text-center text-gray-600 text-sm">
                Former runway designer bringing high fashion concepts to
                everyday wear with a focus on comfort and style.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-slate-200 rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                  <span className="text-white text-5xl">RL</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">Robert Lee</h3>
              <p className="text-blue-500 mb-2">Head of Operations</p>
              <p className="text-center text-gray-600 text-sm">
                Supply chain expert ensuring our products are ethically sourced
                and delivered with care to your doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us CTA Section */}
        <section className="bg-gradient-to-r from-red-500 to-red-700 rounded-3xl p-8 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join the Clift Community</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Be the first to know about new arrivals, exclusive offers, and
            fashion tips. Join thousands of style-conscious shoppers who trust
            Clift for their wardrobe essentials.
          </p>
          <Link
            href="/products"
            className="bg-white text-red-600 font-medium px-6 py-3 rounded-full inline-block hover:bg-red-100 transition duration-200"
          >
            Shop Our Collection
          </Link>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
