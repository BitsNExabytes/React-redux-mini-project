import {
  GET_STUDENT,
  STUDENT_ERROR,
  SET_LOADING,
  DELETE_STUDENT,
} from '../actions/types';

// //GET STUDENTS
// export const getStudents = () => async (dispatch) => {
//   try {
//     //set loading state
//     setLoading();

//     console.log('fetching students');

//     //fetch students from server
//     const res = await fetch('/students');

//     //convert students from string into a json object
//     const data = await res.json();

//     //dispatch result to the reducer
//     dispatch({ type: GET_STUDENT, payload: data });
//   } catch (error) {
//     dispatch({ type: STUDENT_ERROR, payload: error.response.statusText });
//   }
// };

// get logs from server
export const getStudents = () => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //fetch logs
    const res = await fetch('/students');

    //convert logs to json
    const data = await res.json();

    dispatch({ type: GET_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_ERROR, payload: error.response.statusText });
  }
};

//DELETE STUDENT

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
