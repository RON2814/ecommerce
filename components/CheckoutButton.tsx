"use client";

import { useRouter } from "next/navigation";
import { useAuth, useUser, SignInButton } from "@clerk/nextjs";
import { useRef, useState } from "react";
import { CreditCard } from "lucide-react";
import { Product } from "@/sanity.types";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";

interface CheckoutButtonProps {
  product: Product;
  disabled?: boolean;
}

function CheckoutButton({ product, disabled }: CheckoutButtonProps) {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const signInRef = useRef<HTMLButtonElement>(null); // 👈 ref for modal trigger

  const handleCheckout = async () => {
    if (!isSignedIn) {
      signInRef.current?.click(); // 👈 triggers Clerk modal
      return;
    }

    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user?.id ?? "unknown",
      };

      const checkoutUrl = await createCheckoutSession(
        [{ product, quantity: 1 }],
        metadata
      );

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={handleCheckout}
          disabled={disabled || isLoading}
          className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
            disabled || isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } text-white`}
        >
          <CreditCard size={18} />
          <span>{isLoading ? "Redirecting..." : "Checkout"}</span>
        </button>
      </div>

      {/* 🔒 Hidden Clerk modal trigger */}
      <SignInButton mode="modal">
        <button ref={signInRef} className="hidden" />
      </SignInButton>
    </>
  );
}

export default CheckoutButton;
