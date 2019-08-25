import {SAVE_ENTRY} from "../actions/types";
  const isEmpty = require("is-empty");
 
 
  
  const initialState = {
   items: []
  };
  export default function(state = initialState, action) {
    const newItem = action.payload;
    switch (action.type) {
      case SAVE_ENTRY:
        return {
          ...state,
          items: [...state.items, newItem]
        };
                                                                                                                                                                                                                                                  
      default:
        return state;
    }
  };