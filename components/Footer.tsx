import Link from "next/link";

function Footer() {
  return (
    <section className="bg-slate-500 text-white px-20 py-4 shadow-md">
      {/* Footer Call-to-Action */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Side: Brand and Categories */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-1">
            Clift: Your Style Hub
          </h2>
          <p className="text-sm text-white mb-3">
            Where fashion meets comfort and affordability!
          </p>

          {/* Vertical Category Links */}
          <div className="flex flex-col space-y-1 text-white text-sm font-medium">
            <Link href="/categories/shoes" className="hover:underline">
              Shoes
            </Link>
            <Link href="/categories/tops" className="hover:underline">
              T-Shirts
            </Link>
            <Link href="/categories/dresses" className="hover:underline">
              Dress
            </Link>
            <Link href="/categories/accessories" className="hover:underline">
              Accessories
            </Link>
            <Link href="/categories/bottoms" className="hover:underline">
              Pants
            </Link>
            <Link href="/categories/jackets" className="hover:underline">
              Jackets
            </Link>
          </div>
        </div>

        {/* Right Side: Contact Info (aligned with links) */}
        <div className="flex flex-col justify-start space-y-4 text-white text-base pt-[58px]">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.59.57 1 1 0 011 1v3.55a1 1 0 01-1 1A17.91 17.91 0 013 5a1 1 0 011-1h3.54a1 1 0 011 1 11.36 11.36 0 00.57 3.59 1 1 0 01-.21 1.11z" />
            </svg>
            <span>09307822586</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 7.73 7 13 7 13s7-5.27 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 11.5z" />
            </svg>
            <span>Las Piñas City</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12.713l11.985-7.466A.998.998 0 0023 4H1a1 1 0 00-.985 1.247L12 12.713z" />
              <path d="M12 14.857L0 7.533V20a1 1 0 001 1h22a1 1 0 001-1V7.533L12 14.857z" />
            </svg>
            <a href="mailto:cliftstore@gmail.com">cliftstore@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-center text-gray-300 pt-4 border-t border-gray-400 mt-4">
        &copy; 2025 Clift. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
