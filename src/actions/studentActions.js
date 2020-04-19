import {
  GET_STUDENT,
  STUDENT_ERROR,
  SET_LOADING,
  SEARCH_STUDENT,
  DELETE_STUDENT,
  ADD_STUDENT,
  GET_RANDOM_STUDENT,
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

//SEARCH STUDENTS
export const searchStudents = (student) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //fetch student from database
    const res = await fetch(`students?q=${student}`);

    //turn string into javascript object
    const data = await res.json();

    //dispatch result to reducer

    dispatch({ type: SEARCH_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_ERROR, payload: error.response.statusText });
  }
};

//get random student

export const getRandomStudent = (gender) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`https://randomuser.me/api/?gender=${gender}`);

    const data = await res.json();

    dispatch({ type: GET_RANDOM_STUDENT, payload: data });
  } catch (error) {
    dispatch({ type: STUDENT_ERROR, payload: error.response.statusText });
  }
};

export const addStudent = () => async (dispatch) => {};

//DELETE STUDENT

export const deleteStudent = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/students/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: DELETE_STUDENT, payload: id });
  } catch (error) {
    dispatch({ type: STUDENT_ERROR, payload: error.response.statusText });
  }
};

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
