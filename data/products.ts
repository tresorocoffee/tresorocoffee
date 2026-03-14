export interface Variant {
  weight: string;
  price: number;
  discountPrice?: number;
  status: 'available' | 'coming-soon'; // Added status field
}

export interface Product {
  id: string;
  name: string;
  description: string;
  variants: Variant[];
}

export const tresoroCollection: Product = {
  id: "tresoro-signature",
  name: "Founder's Initial Reserve",
  description: "Our signature 100% pure Chikmagalur blend. Zero fillers, zero chicory—just the honest treasure of the land.",
  variants: [
    { weight: "250g", price: 699, status: 'available' },
    { weight: "500g", price: 1299, status: 'coming-soon' },
    { weight: "1kg", price: 2299, status: 'coming-soon' }
  ]
};