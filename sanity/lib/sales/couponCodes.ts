export const COUPON_CODES = {
  BFSALE: "BFSALE",
  NY2025: "NY2025",
  SPRINGSALE: "SPRINGSALE",
  CHRISTMASSALE: "CHRISTMASSALE",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
