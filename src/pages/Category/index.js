import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &.selected {
    color: cornflowerblue;
  }
`;

const CATEGORIES = [
  {
    id: 1,
    category: "general"
  },
  {
    id: 2,
    category: "entertainment"
  },
  {
    id: 3,
    category: "business"
  },
  {
    id: 4,
    category: "health"
  },
  {
    id: 5,
    category: "science"
  },
  {
    id: 6,
    category: "sports"
  },
  {
    id: 7,
    category: "technology"
  }
];

const Category = ({ match }) => {
  return (
    <>
      <header style={{ display: "flex", flexDirection: "column" }}>
        {CATEGORIES.map(({ category, id }) => (
          <StyledNavLink
            to={`/categories/${category}`}
            key={id}
            activeClassName="selected"
          >
            {category}
          </StyledNavLink>
        ))}
      </header>
      {match.params.category}
    </>
  );
};
export default Category;
