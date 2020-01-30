import React from "react";

import { HeaderContainer, StyledHeader } from "./styles";

import Logo from "components/Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import SocialApps from "./SocialApps";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <Logo />
        <Navigation />
        <SocialApps />
        <SearchBar />
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
