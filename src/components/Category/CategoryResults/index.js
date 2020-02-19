import React from "react";
import { connect } from "react-redux";

import { CategoryResultsContainer } from "./styles";
import { CategoryTitle } from "pages/Home/styles";

import NewsCard from "components/NewsCard";
import LoadingScreen from "components/LoadingScreen";

const CategoryResults = ({ title, articles, isLoading, error }) => {
  return (
    <CategoryResultsContainer data-test-id="categories">
      <CategoryTitle>{title}</CategoryTitle>
      {isLoading && !error && <LoadingScreen />}
      {error && <h2>{error}</h2>}
      {articles.length > 0 &&
        articles.map((article, index) => (
          <NewsCard key={article.url} article={article} delay={index} />
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
