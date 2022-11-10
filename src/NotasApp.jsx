import { useReducer } from "react";
import { NotasForm, NotasList } from "./components"
import { reducerNotes } from "./reducer/reducerNotes";
import { types } from "./reducer/types/types";

const initialState = [
    {
        id: 1,
        nota: 'Nota 1',
        disbale: false
    },
    {
        id: 2,
        nota: 'Nota 2',
        disbale: false
    },
    {
        id: 3,
        nota: 'Nota 3',
        disbale: true
    }
]

export const NotasApp = () => {

    const [notas, dispatch] = useReducer(reducerNotes, initialState);

   const addNota = (nota) => {
        
        const action = {
            type: types.addNote,
            payload: {
                id: new Date().getTime(),
                nota,
                disbale: false
            }
        }

        dispatch(action);

   } 

  return (
    <div className="container">
        <NotasForm addNota={addNota}/>
        <NotasList notas={notas} />
    </div>
  )
}
