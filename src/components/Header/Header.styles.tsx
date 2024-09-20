import styled from "styled-components";
import { FiShoppingCart, FiUser } from "react-icons/fi";
export interface HeaderProps {
  logoUrl: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #131921;
  padding: 10px 20px;
  color: white;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #febd69;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserIcon = styled(FiUser)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const CartIcon = styled(FiShoppingCart)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
