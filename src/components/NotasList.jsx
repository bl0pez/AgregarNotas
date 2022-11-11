import { NotasItem } from "./NotasItem"
export const NotasList = ({ notas, deleteNota, toggleNota }) => {

    return (
        <>
            <div>
                <h2 className="text-center py-4">Notas</h2>
                <ul className="list-group">
                    {
                        notas.map(nota => (
                            <NotasItem
                                key={nota.id}
                                nota={nota}
                                deleteNota={deleteNota}
                                toggleNota={toggleNota}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
