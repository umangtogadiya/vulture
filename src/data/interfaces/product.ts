export interface product {
  id: number;
  category: string;
  name: string;
  discount?: number;
  price: string;
  description: string;
  sizes: string;
  color: string;
  images: Array<string>;
}

interface common {
  id: number;
  title: string;
}
