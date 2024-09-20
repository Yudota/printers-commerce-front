import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

export const AddToCartButton = styled.button`
  padding: 10px 15px;
  background-color: #febd69;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f90;
  }
`;
