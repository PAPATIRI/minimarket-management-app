export function formatToRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Adjust this if you want to show decimal places
    maximumFractionDigits: 0, // Adjust this if you want to show decimal places
  }).format(amount);
}
