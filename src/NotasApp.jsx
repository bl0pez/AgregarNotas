import { NotasForm, NotasList } from "./components"
import { useNotas } from "./hooks/useNotas";

export const NotasApp = () => {

    const { notas, addNota, deleteNota, toggleNota } = useNotas();

  return (
    <div className="container">
        <NotasForm 
            addNota={addNota}
            />
        <NotasList 
            notas={notas}
            deleteNota={deleteNota}
            toggleNota={toggleNota}
            />
    </div>
  )
}
