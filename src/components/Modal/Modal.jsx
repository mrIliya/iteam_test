import { useGlobalContext } from '../../context';
import './Modal.css';

const Modal = () => {
	const { setFirst, setSecond, setName } = useGlobalContext()

	return (
		<div className="modal">
			<form className="modal__window">
				<input className="modal__input x-user" type="text" placeholder="Player1"
					onInput={(e) => setFirst(e.target.value)} maxLength="23" />
				<input className="modal__input o-user" type="text" placeholder="Player2"
					onInput={(e) => setSecond(e.target.value)} maxLength="23" />
				<button className="modal__btn" type="button" onClick={() => setName(true)}>Start</button>
			</form>
		</div>
	)
}

export default Modal;