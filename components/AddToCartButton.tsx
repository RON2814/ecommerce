"use client";
import useCartStore from "@/app/(store)/store/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product._id);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddItem = () => {
    addItem(product);

    // Show "Added to cart" message
    setShowAddedMessage(true);

    // Hide message after 500ms
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 500);
  };

  if (!isClient) {
    return null; // Prevents server-side rendering issues
  }

  // If no items in cart yet, show an "Add to Cart" button instead
  if (itemCount === 0) {
    return (
      <div className="relative">
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={handleAddItem}
            disabled={disabled}
            className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Added to cart message */}
        {showAddedMessage && (
          <div className="absolute top-[-40px] left-1/2 transform duration-700 -translate-x-1/2 bg-green-100 text-green-800 text-center py-1 px-3 rounded-md text-sm animate-fade-in-out">
            Added to cart!
          </div>
        )}
      </div>
    );
  }

  // Otherwise show the quantity selector
  return (
    <div className="relative">
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => removeItem(product._id)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 bg-gray-200 hover:bg-gray-300"
          disabled={disabled}
        >
          <Minus size={16} className="text-gray-600" />
        </button>
        <span className="w-8 text-center font-semibold">{itemCount}</span>
        <button
          onClick={handleAddItem}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={disabled}
        >
          <Plus size={16} className="text-white" />
        </button>
      </div>

      {/* Added to cart message */}
      {showAddedMessage && (
        <div className="absolute top-[-40px] left-1/2 transform duration-700 -translate-x-1/2 bg-green-100 text-green-800 text-center py-1 px-3 rounded-md text-sm animate-fade-in-out">
          Added to cart!
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;
