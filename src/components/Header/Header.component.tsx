import {
  HeaderContainer,
  Logo,
  SearchBar,
  SearchInput,
  SearchButton,
  IconsContainer,
  UserIcon,
  CartIcon,
} from "./Header.styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src={"logoUrl"} alt="Printers Logo" />
        <SearchBar>
          <SearchInput placeholder="Pesquise em Printers" />
          <SearchButton>Pesquisar</SearchButton>
        </SearchBar>
        <IconsContainer>
          <UserIcon />
          <CartIcon />
        </IconsContainer>
      </HeaderContainer>
    </>
  );
}
