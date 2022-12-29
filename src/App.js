import './App.css';
import Board from './components/board/Board';

function App() {
	return (
		<body className="App">
			<header className="App-header">
				<h1>Tic Tac Toe</h1>
			</header>
			<main className="App-main">
				<div>
					<Board />
				</div>
			</main>
			<div className="winning-message" id="winningMessage">
				<div>
					<h2>'s Wins!</h2>
					<button id="restartButton">Restart</button>
				</div>
			</div>
		</body>
	);
}

export default App;
