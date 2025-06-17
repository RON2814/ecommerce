"use client";
import useCartStore from "@/app/(store)/store/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";

interface AddToCartButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents server-side rendering issues
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      AddToCartButton
    </div>
  );
}

export default AddToCartButton;
