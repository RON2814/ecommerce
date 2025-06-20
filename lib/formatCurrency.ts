export function formatCurrency(
  amount: number,
  currencyCode: string = "PHP"
): string {
  try {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
      // Using minimumFractionDigits: 0 to avoid showing decimal zeros for PHP
      minimumFractionDigits: 0,
    }).format(amount);
  } catch (error) {
    // Fallback formatting if currency code is invalid
    console.error("Invalid currency code:", currencyCode, error);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
