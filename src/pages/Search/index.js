import React from "react";

const Search = ({ match }) => {
  return <div>search page for {match.params.term}</div>;
};

export default Search;
