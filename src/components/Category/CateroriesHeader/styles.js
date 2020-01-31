import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CategoriesHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 20px 20px 20px;
  border-radius: 10px;
  background-color: white;
  position: sticky;
  top: 10px;
  height: 100%;
`;

const CategoryLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.textLight};
  font-weight: 500;
  text-transform: capitalize;
  font-size: 18px;
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
  &.selected {
    color: ${props => props.theme.activeLink};
  }
`;

const CategoryHeaderTitle = styled.h2`
  color: #000;
  margin-bottom: 25px;
`;

export { CategoriesHeaderContainer, CategoryLink, CategoryHeaderTitle };
