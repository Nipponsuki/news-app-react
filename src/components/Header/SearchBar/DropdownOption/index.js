import React from "react";

import { DropdownOptionContainer } from "./styles";

import { StyledLink } from "components/Common/StyledLink";

const DropdownOption = ({ word, setTerm, active }) => {
  return (
    <StyledLink to={`/search/${word}`}>
      <DropdownOptionContainer onClick={() => setTerm("")} active={active}>
        {word}
      </DropdownOptionContainer>
    </StyledLink>
  );
};

export default DropdownOption;
