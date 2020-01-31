import React from "react";
import { connect } from "react-redux";

import { CategoryResultsContainer } from "./styles";
import { CategoryTitle } from "pages/Category/styles";

import NewsCard from "components/NewsCard";
import LoadingScreen from "components/LoadingScreen";

const CategoryResults = ({ title, articles, isLoading, error }) => {
  return (
    <CategoryResultsContainer>
      <CategoryTitle>{title}</CategoryTitle>
      {isLoading && <LoadingScreen />}
      {articles.length > 0 &&
        articles.map(article => (
          <NewsCard key={article.url} article={article} />
        ))}
    </CategoryResultsContainer>
  );
};

export default connect(
  state => ({
    articles: state.category.articles,
    isLoading: state.category.isLoading,
    error: state.category.error
  }),
  null
)(CategoryResults);
