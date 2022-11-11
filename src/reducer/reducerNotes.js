import { types } from './types/types';

export const reducerNotes = (state, action) => {
    switch(action.type){
        case types.addNote: {
            return [action.payload, ...state];
        }
        case types.deleteNote: {
            return state.filter(note => note.id !== action.payload);
        }

        case types.toggleNote: {
            return state.map(note =>
                note.id === action.payload
                ? {...note, done: !note.done}
                : note
            );
        }
        default:
            return state;
    }
}