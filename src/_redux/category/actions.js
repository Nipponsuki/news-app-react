const actions = {
  CATEGORY__LOAD: "CATEGORY__LOAD",
  CATEGORY__LOAD_SUCCESS: "CATEGORY__LOAD_SUCCESS",
  CATEGORY__LOAD_FAILURE: "CATEGORY__LOAD_FAILURE",
  loadCategoryResults: params => ({ type: actions.CATEGORY__LOAD, params })
};

export default actions;
