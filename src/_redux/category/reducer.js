import actions from "./actions";

const initState = {
  articles: [],
  isLoading: false,
  isLoaded: false
};

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case actions.CATEGORY__LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actions.CATEGORY__LOAD_SUCCESS: {
      return {
        ...state,
        articles: action.articles,
        isLoading: false,
        isLoaded: true
      };
    }
    case actions.CATEGORY__LOAD_FAILURE: {
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
