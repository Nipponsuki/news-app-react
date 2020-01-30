import React from "react";

import { StyledLogo } from "./styles";

import { StyledLink } from "components/Common/StyledLink";

const Logo = () => {
  return (
    <StyledLink to="/">
      <StyledLogo>news</StyledLogo>
    </StyledLink>
  );
};

export default Logo;
