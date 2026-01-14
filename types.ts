
export interface Product {
  id: string;
  name: string;
  image: string;
  topPrice: number;
  percentage: number;
  bottomPrice: number;
  badge: string;
  description: string;
}

export interface Catalog {
  title: string;
  products: Product[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
