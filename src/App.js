import './App.css';
import Board from './components/board/Board';

function App() {
	return (
		<body className="App">
			<header className="App-header">
				<h1>Tic Tac Toe</h1>
			</header>
			<main className='App-main'>
				<Board />
			</main>
		</body>
	);
}

export default App;
