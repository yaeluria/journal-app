import
 {
  SAVE_ENTRY, 
  GET_ERRORS, 
  GET_ENTRIES, 
  DELETE_ENTRY,
  EDIT_ENTRY
 }
  from "./types";
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
// export const registerUser = (userData, history) => dispatch => {
//   axios
//     .post("/api/users/register", userData)
//     .then(res => history.push("/login")) // re-direct to login on successful register
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
export const saveEntry = (entryData, history) => dispatch => {
  axios
    .post("/api/entries/new", entryData)
    .then(res => {
      history.push("/dashboard");
      dispatch({
        type: SAVE_ENTRY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: ((err || {}).response || {}).data || "Error unexpected"
      })
    );
};
export const getEntries = currentUser => dispatch => {
  axios
    .get("/api/entries/entries?userId=" + currentUser)
    .then(res => {
      dispatch({
        type: GET_ENTRIES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: ((err || {}).response || {}).data || "Error unexpected"
      })
    );
};
export const deleteEntry = entryToDelete => dispatch => {
  axios
    .get("/api/entries/delete?entryId=" + entryToDelete)
    .then(res => {
      dispatch({
        type: DELETE_ENTRY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: ((err || {}).response || {}).data || "Error unexpected"
      })
    );
};
export const editEntry = entryToEdit => dispatch => {
  axios
    .get("/api/entries/edit?entryId=" + entryToEdit)
    .then(res => {
      dispatch({
        type: EDIT_ENTRY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: ((err || {}).response || {}).data || "Error unexpected"
      })
    );
};
