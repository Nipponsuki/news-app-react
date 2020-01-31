import React from "react";

import {
  CategoriesHeaderContainer,
  CategoryLink,
  CategoryHeaderTitle
} from "./styles";

import { CATEGORIES } from "utils/constants";

const CategoriesHeader = () => {
  return (
    <CategoriesHeaderContainer>
      <CategoryHeaderTitle>Category</CategoryHeaderTitle>
      {CATEGORIES.map(({ category, id }) => (
        <CategoryLink
          to={`/categories/${category}`}
          key={id}
          activeClassName="selected"
        >
          {category}
        </CategoryLink>
      ))}
    </CategoriesHeaderContainer>
  );
};

export default CategoriesHeader;
