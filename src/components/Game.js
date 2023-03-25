import Board from "./Board";
import {useState} from "react";
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        console.log(nextSquares);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move} className="list-group-item">
                <button className="btn btn-sm btn-outline-info" onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">Game History</div>
                            <div className="card-body">
                                <ul className="list-group">{moves}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}