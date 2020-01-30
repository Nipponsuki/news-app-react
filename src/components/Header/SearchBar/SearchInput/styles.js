import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  color: ${props => props.theme.textLight};
  border: 1.5px solid ${props => props.theme.background};
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-color: ${props => props.theme.background};
  transition: all 0.3s ease;
  padding: 0 10px;
  font-family: Ubuntu, sans-serif;
  font-weight: bold;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1.5px solid #000;
  }
  &:focus + div {
    svg {
      fill: #000;
    }
  }
`;

export { StyledInput };
