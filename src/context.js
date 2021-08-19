import React, { useState, useContext, useEffect } from 'react'
import { calculateWinner } from './helper.js';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [name, setName] = useState(false)
	const [first, setFirst] = useState('Player1')
	const [second, setSecond] = useState('Player2')
	const [activeClass, setActiveClass] = useState('')

	const [countX, setCountX] = useState(0)
	const [countO, setCountO] = useState(0)
	const [isDraw, setIsDraw] = useState(false)

	const [board, setBoard] = useState(Array(9).fill(null))
	const [xNext, setXNext] = useState(true)
	const winnerInfo = calculateWinner(board)
	const winner = winnerInfo.winner
	const draw = winnerInfo.isDraw
	const winIndex = winnerInfo.index

	const handleClick = (index) => {
		const boardCopy = [...board]
		if (winner || boardCopy[index]) {
			return
		}
		boardCopy[index] = xNext ? 'x' : 'o'
		setBoard(boardCopy)
		setXNext(!xNext)
	}

	const whoWin = (winner,draw) => {
		if (winner && winner === 'x') {
			setCountX(countX + 1)
			setXNext(!xNext)
		} if (winner && winner === 'o') {
			setCountO(countO + 1)
		} if (draw) {
			setIsDraw(draw)
		}
		setTimeout(() => {
			setBoard(Array(9).fill(null))
		}, 1000);
		setTimeout(() => {
			setIsDraw(false)
		}, 1000);
	}
	
	const winLine = (index) => {
		if (index === 0) {
			setActiveClass('first__line')
		}
		if (index === 1) {
			setActiveClass('second__line')
		}
		if (index === 2) {
			setActiveClass('third__line')
		}
		if (index === 3) {
			setActiveClass('fourth__line')
		}
		if (index === 4) {
			setActiveClass('fifth__line')
		}
		if (index === 5) {
			setActiveClass('sixth__line')
		}
		if (index === 6) {
			setActiveClass('seventh__line')
		}
		if (index === 7) {
			setActiveClass('eighth__line')
		}
		setTimeout(() => {
			setActiveClass('')
		}, 1000);
	}

	useEffect(() => {
		winLine(winIndex)
	}, [winIndex])

	useEffect(() => {
		whoWin(winner,draw)
	}, [winner,draw])


	return (
		<AppContext.Provider
			value={{
				name,
				setName,
				first,
				setFirst,
				second,
				setSecond,
				board,
				handleClick,
				countX,
				countO,
				isDraw,
				activeClass
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }