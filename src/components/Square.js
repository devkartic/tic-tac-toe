function Square({value, onSquareClick}) {

    return (
        <button type="button" className="square border btn btn-outline-primary" onClick={onSquareClick}>{value}</button>
    );
}

export default Square;