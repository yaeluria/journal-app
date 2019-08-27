import { SAVE_ENTRY, GET_ENTRIES, DELETE_ENTRY, EDIT_ENTRY } from "../actions/types";

const initialState = {
  items: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_ENTRY:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case GET_ENTRIES:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_ENTRY:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.id)]
      };

    case EDIT_ENTRY:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
}
