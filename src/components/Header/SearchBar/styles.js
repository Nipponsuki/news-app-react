import styled from "styled-components";

const StyledForm = styled.form`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  position: relative;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 13px;
  right: 11px;

  svg {
    fill: ${props => props.theme.textLight};
  }
`;

export { StyledForm, SearchIconContainer };
