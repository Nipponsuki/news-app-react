import React from "react";

import { NewsCardContainer, newsCardVariants } from "./styles";

const NewsCard = ({ article, delay }) => {
  return (
    <NewsCardContainer
      variants={newsCardVariants}
      animate="enter"
      initial="exit"
      transition={{ delay: delay * 0.1 }}
    >
      {article.description}
    </NewsCardContainer>
  );
};

export default NewsCard;
