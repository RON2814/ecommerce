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
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

function Header() {
  const { user } = useUser();

  // passkey removed due to complexity :D
  // const createClerkPasskey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   } catch (err) {
  //     console.error("Error creating passkey:", JSON.stringify(err, null, 2));
  //     alert("Failed to create passkey. Please try again.");
  //   }
  // };

  return (
    <header className="flex flex-wrap fixed justify-between items-center px-4 py-2 shadow-md z-20 w-screen bg-white">
      {/* Top row */}
      <div className="flex flex-wrap w-full justify-between items-center">
        <Link
          href={"/"}
          className="text-2xl font-bold text-slate-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          CLift
        </Link>
        <Form
          action={"/search"}
          className="w-full sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-slate-100 text-slate-900 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:opacity-50 border w-full max-w-4xl"
          />
        </Form>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href={"/cart"}
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon />
            {/* Span item count once global state is implemented */}
            <span>Cart</span>
          </Link>

          {/* User area */}
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
              >
                <PackageIcon className="w-6 h-6" />
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

            {/* Create Passkey Button */}
            {/* {user?.passkeys.length === 0 && (
              <button
                onClick={createClerkPasskey}
                className="bg-white hover:bg-slate-700 hover:text-white animate-pulse text-slate-500 font-bold py-2 px-4 rounded border-slate-300 border"
              >
                Create a Passkey
              </button>
            )} */}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
