import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getLatestProduct = async () => {
  const LATEST_PRODUCT_QUERY = defineQuery(`
    *[_type == "product"] | order(_createdAt desc)[0]`);

  try {
    const latestProduct = await sanityFetch({
      query: LATEST_PRODUCT_QUERY,
    });
    return latestProduct.data || null;
  } catch (error) {
    console.error("Error fetching latest product:", error);
    return null;
  }
};
