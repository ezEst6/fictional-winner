import Square from '../square/Square';
import './board.css';

function Board() {
	return (
		<div className="container">
			<div className='board'>
        <Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
			</div>
		</div>
	);
}

export default Board;
