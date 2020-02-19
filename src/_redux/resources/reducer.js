import actions from "./actions";

const initState = {
  resources: [],
  isLoading: false,
  isLoaded: false
};

export default function resourcesReducer(state = initState, action) {
  switch (action.type) {
    case actions.RESOURCES__LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actions.RESOURCES__LOAD_SUCCESS: {
      return {
        ...state,
        resources: action.resources,
        isLoading: false,
        isLoaded: true
      };
    }
    case actions.RESOURCES__LOAD_FAILURE: {
      return {
        ...state,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
