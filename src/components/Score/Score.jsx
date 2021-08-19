import { useGlobalContext } from '../../context';
import './Score.css';

const Score = () => {
	const { first, second, countX, countO } = useGlobalContext()

	return (
		<div className="score">
			<ul className="score__list">
				<li className="score__line">
					<span className="score__name">Score</span>
				</li>
				<li className="score__line">
					<span className="score__name">{first}</span>
					<span className="score__count">: {countX}</span>
				</li>
				<li className="score__line">
					<span className="score__name">{second}</span>
					<span className="score__count">: {countO}</span>
				</li>
			</ul>
		</div>
	)
}

export default Score;