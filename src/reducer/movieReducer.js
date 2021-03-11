const initialMoviesValue = [];

const movieReducer = (state = initialMoviesValue, action) => {
  switch (action.type) {
    case "ADD": {
      return [action.payload, ...state];
    }
    case "DELETE": {
      return state.filter((ele) => {
        return ele.id !== action.payload;
      });
    }

    case "EDIT": {
      return state.map((ele) => {
        if (ele.id === action.payload.id) {
          return { ...ele, ...action.payload };
        } else {
          return { ...ele };
        }
      });
    }

    default: {
      return [...state];
    }
  }
};

export default movieReducer;
