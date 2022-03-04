function Item(props) {
    return (
        <div>
            <li key={props.id} className="border justify-content-between align-item-center p-2 m-2">
            <p>{props.txt}</p>
            <button onClick={() => props.delFunc(props.id)} className="btn btn-danger p-2">Supprimer</button>    
            </li>
        </div>
    )
}

export default Item;

