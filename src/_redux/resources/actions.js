const actions = {
  RESOURCES__LOAD: "RESOURCES__LOAD",
  RESOURCES__LOAD_SUCCESS: "RESOURCES__LOAD_SUCCESS",
  RESOURCES__LOAD_FAILURE: "RESOURCES__LOAD_FAILURE",
  loadResourcesResults: () => ({ type: actions.RESOURCES__LOAD })
};

export default actions;
