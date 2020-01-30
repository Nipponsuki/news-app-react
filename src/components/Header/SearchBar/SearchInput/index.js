import React from "react";

import { StyledInput } from "./styles";

const SearchInput = ({ value, onChange, ...props }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter search term"
      {...props}
    />
  );
};

export default SearchInput;
