import {
  GET_STUDENT,
  STUDENT_ERROR,
  SET_LOADING,
  DELETE_STUDENT,
} from '../actions/types';

// set initial state
const initialState = {
  students: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };

    case STUDENT_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
