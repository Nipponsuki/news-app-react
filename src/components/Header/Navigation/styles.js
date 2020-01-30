import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => (props.active ? "#000" : props.theme.textLight)};
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  font-weight: 700;
  transition: 0.3s ease all;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #000;
  }

  &.selected {
    color: #000;
  }
`;

const IconContainer = styled.div`
  margin: 0 10px;

  img {
    width: 15px;
    height: 15px;
  }
`;

const Navbar = styled.nav`
  display: flex;
`;

export { StyledNavLink, IconContainer, Navbar };
