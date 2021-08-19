import Square from '../Square';
import { useGlobalContext } from '../../context';

import './Board.css';

const Board = () => {
	const { board, handleClick, activeClass } = useGlobalContext()

	return (
		<div className="board">
			<div className="line__left"></div>
			<div className="line__right"></div>
			<div className="horizontal-line__top"></div>
			<div className="horizontal-line__bot"></div>
			<div className={`redline ${activeClass}`}></div>
			{
				board.map((square, index) => {
					return <Square key={index}
						value={square}
						onClick={() => handleClick(index)} />
				})
			}
		</div>

	)
}

export default Board;