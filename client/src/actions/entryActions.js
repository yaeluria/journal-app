import {SAVE_ENTRY, GET_ERRORS} from "./types";
import axios from "axios";

// export const registerUser = (userData, history) => dispatch => {
//     axios
//       .post("/api/users/register", userData)
//       .then(res => history.push("/login")) // re-direct to login on successful register
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   };
// export const saveEntry = (entryData, history) => dispatch => {
//     axios
//     .post("/api/entries/new",entryData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//                   type: GET_ERRORS,
//                   payload: ((err||{}).response||{}).data || 'Error unexpected'
//                 })
//               );
// }
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
// export const saveEntry = entryData => {
//   return{
//     type: SAVE_ENTRY,
//     payload: entryData
//   }
  
// }
export const saveEntry = (entryData, history) => dispatch => {
  axios
    .post("/api/entries/new", entryData)
    .then(res => {
      dispatch({
        type: SAVE_ENTRY,
        payload: res.data
      })
      history.push("/dashboard")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};