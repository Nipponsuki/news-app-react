import React from "react";
import { connect } from "react-redux";

import { CategoryResultsContainer } from "components/Category/CategoryResults/styles";
import { CategoryTitle } from "pages/Home/styles";

import searchActions from "_redux/search/actions";
import LoadingScreen from "components/LoadingScreen";
import NewsCard from "components/NewsCard";

const { fetchSearchResults } = searchActions;

const Search = ({ match, results, fetchSearchResults, isLoading, error }) => {
  React.useEffect(() => {
    fetchSearchResults(match.params.term);
  }, [fetchSearchResults, match.params.term]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [match.params.term]);

  return (
    <CategoryResultsContainer>
      <CategoryTitle>
        <span>search results for</span> '{match.params.term}'
      </CategoryTitle>
      {isLoading && <LoadingScreen />}
      {error && <h2>{error}</h2>}
      {results.length === 0 && <h2>No results found</h2>}
      {results.length > 0 &&
        results.map((article, index) => (
          <NewsCard key={article.url} article={article} delay={index} />
        ))}
    </CategoryResultsContainer>
  );
};

export default connect(
  state => ({
    results: state.search.results,
    isLoading: state.search.isLoading,
    error: state.search.error
  }),
  {
    fetchSearchResults
  }
)(Search);
