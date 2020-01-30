import actions from "./actions";

const initState = {
  words: [],
  isLoading: false,
  isLoaded: false
};

export default function autocompleteReducer(state = initState, action) {
  switch (action.type) {
    case actions.AUTOCOMPLETE__LOAD: {
      return {
        ...state,
        isLoading: true
      };
    }
    case actions.AUTOCOMPLETE__LOAD_SUCCESS: {
      return {
        ...state,
        words: action.words,
        isLoading: false,
        isLoaded: true
      };
    }
    case actions.AUTOCOMPLETE__LOAD_FAILURE: {
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
