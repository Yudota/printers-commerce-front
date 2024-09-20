export interface ProductCardProps {
  imageUrl: string;
  price: string;
  description: string;
  onAddToCart: () => void;
}
