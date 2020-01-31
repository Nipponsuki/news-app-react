import React from "react";

import { NewsCardContainer } from "./styles";

const NewsCard = ({ article }) => {
  return <NewsCardContainer>{article.description}</NewsCardContainer>;
};

export default NewsCard;
