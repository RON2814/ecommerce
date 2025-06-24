"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import {
  PackageIcon,
  TrolleyIcon,
  MenuIcon,
  CloseIcon,
  SearchIcon,
} from "@sanity/icons";
import useCartStore from "@/app/(store)/store/store";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const { user } = useUser();
  const pathname = usePathname();
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowSearch(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full">
      <nav className="flex justify-between items-center shadow-md px-4 py-2 bg-white">
        <Link
          href={"/"}
          className="text-2xl font-bold text-slate-500 hover:text-blue-400 cursor-pointer mx-2"
        >
          CLift
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 uppercase px-4">
          {links.map((link) => (
            <Link
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-blue-500 underline underline-offset-8"
                  : "text-slate-600 hover:text-blue-400"
              } py-2 px-1 transition-colors duration-300`}
              key={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions section */}
        <div className="flex items-center space-x-4">
          {/* Search button - visible on both mobile and desktop */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-slate-600 hover:text-blue-400"
            aria-label="Search"
          >
            <SearchIcon className="w-7 h-7" />
          </button>

          <Link
            href="/cart"
            className="relative flex items-center text-slate-600 hover:text-blue-400"
          >
            <TrolleyIcon className="w-7 h-7" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>

          {/* User section - visible on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <ClerkLoaded>
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton />
                  <div className="hidden sm:block text-xs">
                    <p className="text-slate-400">Welcome Back</p>
                    <p className="font-bold">{user.fullName}!</p>
                  </div>
                </div>
              ) : (
                <SignInButton>
                  <button className="border border-slate-600 hover:text-blue-500 hover:border-blue-500 py-2 px-4 rounded">
                    Sign In
                  </button>
                </SignInButton>
              )}
              <SignedIn>
                <Link
                  href="/orders"
                  className="flex items-center space-x-2 border border-slate-600 hover:bg-blue-300 py-2 px-4 rounded"
                >
                  <PackageIcon className="w-5 h-5" />
                  <span>My orders</span>
                </Link>
              </SignedIn>
            </ClerkLoaded>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-slate-400"
          >
            {isOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Search form - toggleable on both mobile and desktop */}
      {showSearch && (
        <div
          ref={searchRef}
          className="absolute top-full left-0 right-0 bg-white shadow-md p-3 z-50 transition-all duration-300 ease-in-out"
        >
          <Form action="/search" className="flex mx-4">
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-slate-100 text-slate-900 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-300 focus:opacity-50 border w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r border border-slate-500 hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
            >
              Search
            </button>
          </Form>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-white shadow-md z-50"
        >
          <div className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <Link
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-blue-500 underline underline-offset-8"
                    : "text-slate-600 hover:text-blue-400"
                } py-2 transition-colors duration-300`}
                key={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-slate-200 pt-2 mt-2">
              <ClerkLoaded>
                <SignedIn>
                  <Link
                    href="/orders"
                    className="flex items-center space-x-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    <PackageIcon className="w-5 h-5" />
                    <span>My orders</span>
                  </Link>
                </SignedIn>

                {user ? (
                  <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="hidden sm:block text-xs">
                      <p className="text-slate-400">Welcome Back</p>
                      <p className="font-bold">{user.fullName}!</p>
                    </div>
                  </div>
                ) : (
                  <SignInButton />
                )}
              </ClerkLoaded>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
