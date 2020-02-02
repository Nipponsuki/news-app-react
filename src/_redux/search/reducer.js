import actions from "./actions";

const initState = {
  results: [],
  isLoading: false,
  isLoaded: false
};

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case actions.SEARCH__LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actions.SEARCH__LOAD_SUCCESS: {
      return {
        ...state,
        results: action.results,
        isLoading: false,
        isLoaded: true
      };
    }
    case actions.SEARCH__LOAD_FAILURE: {
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
