import React from "react";

import {
  CategoriesHeaderContainer,
  CategoryLink,
  CategoryHeaderTitle,
  categoriesHeaderVariants
} from "./styles";

import { CATEGORIES } from "utils/constants";

const CategoriesHeader = () => {
  return (
    <CategoriesHeaderContainer
      variants={categoriesHeaderVariants}
      animate="enter"
      initial="exit"
      transition={{ duration: 0.5 }}
    >
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
