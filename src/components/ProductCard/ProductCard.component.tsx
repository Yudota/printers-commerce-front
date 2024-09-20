import {
  CardContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductDescription,
  AddToCartButton,
} from "./ProductCard.styles";
import { ProductCardProps } from "./ProductCard.types";

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  price,
  description,
  onAddToCart,
}) => {
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Evita que o clique no botão dispare essa função
    if ((event.target as HTMLElement).tagName !== "BUTTON") {
      // Função vazia
    }
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ProductImage src={imageUrl} alt="Product Image" />
      <ProductInfo>
        <ProductPrice>{price}</ProductPrice>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
      <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};
