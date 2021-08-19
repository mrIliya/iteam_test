
import Game from './components/Game/Game';
import Modal from './components/Modal/Modal';
import { useGlobalContext } from './context';

const App=()=> {
	const {name} = useGlobalContext()
	return (
		<>
			{name ? <Game/> : <><Modal/> <Game/></>}		
		</>
	)
}

export default App;