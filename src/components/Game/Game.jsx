import { useGlobalContext } from '../../context';
import Board from '../Board';
import Score from '../Score/Score';
import './Game.css';

const Game = () => {
	const { isDraw } = useGlobalContext()

	return (
		<div className="game">
			{isDraw ? <div className="draw">Draw!</div> : ''}
			<Board />
			<Score />
		</div>
	)
}

export default Game;