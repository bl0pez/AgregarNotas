export const NotasItem = ({ nota,  deleteNota, toggleNota }) => {
    return (
        <>
            <li className="list-group-item">
                <button
                    className="btn"
                    onClick={() => toggleNota(nota.id)}
                >{
                        nota.done
                            ? <i className='bx bxs-bookmark bx-flip-horizontal'></i>
                            : <i className='bx bx-bookmark bx-flip-horizontal'></i>

                    }
                </button>
                     <p className={`d-inline ${nota.done ? 'text-decoration-line-through' : ''}`}>{nota.nota}</p>
                
                <button 
                    onClick={() => deleteNota(nota.id)}
                    className="btn btn-danger btn-sm float-end mx-2">
                    <i className='bx bx-trash' ></i>
                </button>
            </li>

        </>
    )
}
