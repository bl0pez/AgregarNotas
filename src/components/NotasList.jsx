import { NotasItem } from "./NotasItem"
export const NotasList = ({notas}) => {

    return (
        <>
            <div>
                <h2 className="text-center py-4">Notas</h2>
                <ul className="list-group">
                    {
                        notas.map(nota => (
                            <NotasItem  nota={nota}  key={nota.id}/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
