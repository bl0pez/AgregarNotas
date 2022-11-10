import { types } from "./types/types";

export const reducerNotes = (state = [], action) => {
    switch(action.type){
        case types.addNote: {
            return [action.payload, ...state];
        }

        default:
            return state;
    }
}