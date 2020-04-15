import {
  GET_STUDENT,
  STUDENT_ERROR,
  SET_LOADING,
  DELETE_STUDENT,
} from '../actions/types';

// set initial state
const initialState = {
  students: null,
  loading: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return {
        ...state,
        students: action.payload,
        loading: null,
      };
  }
};
