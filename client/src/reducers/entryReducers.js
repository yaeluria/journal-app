import {SAVE_ENTRY, GET_ENTRIES} from "../actions/types";
  const isEmpty = require("is-empty");
 
 
  
  const initialState = {
   items: [],
   entries: []
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SAVE_ENTRY:
        return {
          ...state,
          newItem: action.payload,
          items: [...state.items, newItem]
        };
      case GET_ENTRIES:
      return {
        ... state,
        entries: 
      }
                                                                                                                                                                                                                                                  
      default:
        return state;
    }
  };