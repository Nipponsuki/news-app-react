const actions = {
  SEARCH__LOAD: "SEARCH__LOAD",
  SEARCH__LOAD_SUCCESS: "SEARCH__LOAD_SUCCESS",
  SEARCH__LOAD_FAILURE: "SEARCH__LOAD_FAILURE",
  fetchSearchResults: params => ({ type: actions.SEARCH__LOAD, params })
};

export default actions;
