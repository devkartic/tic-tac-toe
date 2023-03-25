import './App.css';
import Game from "./components/Game";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="card">
                    <div className="card-header bg-info">
                        <h3>Tic Toc Toe Game</h3>
                    </div>
                    <div className="card-body">
                        <Game/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
