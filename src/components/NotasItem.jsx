export const NotasItem = ({ nota }) => {
    return (
        <>
            <li className="list-group-item">
                <button
                    className="btn"
                >{
                        nota.disbale
                            ? <i className='bx bxs-bookmark bx-flip-horizontal'></i>
                            : <i className='bx bx-bookmark bx-flip-horizontal'></i>

                    }
                </button>
                {
                    nota.disbale
                        ? <p className="text-decoration-line-through d-inline">{nota.nota}</p>
                        : <p className="d-inline">{nota.nota}</p>
                }
                <button className="btn btn-danger btn-sm float-end mx-2">
                    <i className='bx bx-trash' ></i>
                </button>
                <button className="btn btn-warning btn-sm float-end mx-2">
                    <i className='bx bxs-edit text-white' ></i>
                </button>
            </li>

        </>
    )
}
