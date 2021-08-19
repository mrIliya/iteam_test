import './Square.css';

const Square = ({ onClick, value}) => {

	return (
		<>
			<button className="square"  type="button" onClick={onClick}>
				{!value ? '' :
					value === 'x' ?
						<div className="cross"></div> : <div className="zero"></div>}
			</button>

		</>
	)
}

export default Square;