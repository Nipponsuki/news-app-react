import React from "react";
import { connect } from "react-redux";

import { CatergoryPageContainer } from "./styles";

import CategoriesHeader from "components/Category/CateroriesHeader";
import CategoryResults from "components/Category/CategoryResults";

import categoryActions from "_redux/category/actions";

const { loadCategoryResults } = categoryActions;

const Home = ({ match, loadCategoryResults }) => {
  React.useEffect(() => {
    loadCategoryResults(match.params.category);
  }, [loadCategoryResults, match.params.category]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [match.params.category]);

  return (
    <>
      <CatergoryPageContainer>
        <CategoriesHeader />
        <CategoryResults title={match.params.category} />
      </CatergoryPageContainer>
    </>
  );
};
export default connect(null, {
  loadCategoryResults
})(Home);
