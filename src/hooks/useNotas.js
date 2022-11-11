import { useEffect, useReducer } from 'react';
import { reducerNotes } from '../reducer/reducerNotes';
import { types } from '../reducer/types/types';

const init = () => {
    return JSON.parse(localStorage.getItem('notas')) || [];
}

export const useNotas = () => {
  
    const [notas, dispatch] = useReducer(reducerNotes, [], init);

    useEffect(() => {
        localStorage.setItem('notas', JSON.stringify(notas));
    }, [notas]);

   const addNota = (nota) => {
        
        const action = {
            type: types.addNote,
            payload: {
                id: new Date().getTime(),
                nota,
                done: false
            }
        }

        dispatch(action);

   }

   const deleteNota = (id) => {

        const action = {
            type: types.deleteNote,
            payload: id
        }

        dispatch(action);
   }

   const toggleNota = (id) => {
        const action = {
            type: types.toggleNote,
            payload: id
        }

        dispatch(action);
   }

   return {
         notas,
            addNota,
            deleteNota,
            toggleNota
   }
}
