import {
  GET_STUDENT,
  STUDENT_ERROR,
  SET_LOADING,
  SEARCH_STUDENT,
  DELETE_STUDENT,
  GET_RANDOM_STUDENT,
} from '../actions/types';

// set initial state
const initialState = {
  students: null,
  random: null,
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

    case SEARCH_STUDENT:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };

    case GET_RANDOM_STUDENT:
      return {
        ...state,
        random: action.payload,
        loading: false,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
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
