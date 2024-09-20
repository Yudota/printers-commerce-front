import { ProductCard } from "../components/ProductCard/ProductCard.component";

export const Home = () => {
  return (
    <>
      <ProductCard
        imageUrl={""}
        price={""}
        description={""}
        onAddToCart={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};
