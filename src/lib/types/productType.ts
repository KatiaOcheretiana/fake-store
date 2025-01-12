export interface ProductType {
  id: number;
  title: string;
  category: string;
  description: string;
  brand: string;
  images: string[];
  price: number;
  rating: number;
  amount?: number;
}

export interface ErrorType {
  message: string;
}
