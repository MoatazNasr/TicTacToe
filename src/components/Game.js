import React from 'react'
import { useState } from 'react'
import Board from './Board'

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)])
    // history represents the board states at each given turn 
    const [stepNumber, setStepNumber] = useState(0)
    // step that x or o will occupy a square in board
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const xO = xIsNext ? 'X' : 'O'

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        // get the board shape at the last turn
        const current = historyPoint[stepNumber]
        const squares = [...current]
        // current shape of board  
        if (winner || squares[i]) return;
        // if winner exists or squares(i) of index i equals a value then return
        squares[i] = xO
        setHistory([...historyPoint, squares])
        setStepNumber(historyPoint.length)
        setXisNext(!xIsNext)
    }
    const reset = () => {
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXisNext(true)
    }

    return (
        <main className='font-body my-5 text-center texts'>

            <h1 className=' text-9xl mb-5 texts'>Tic Tac Toe </h1>

            <button className='text-7xl  mb-5 texts' onClick={reset}> New Game  </button>
            
            <Board squares={history[stepNumber]} onClick={handleClick} />
           
            {(stepNumber === 9 || winner) && (!winner ? <p className='text-5xl'>Draw</p> : <p className='text-5xl'> Winner is {winner}</p>)}

            { !winner && <p className='text-6xl texts'> {xO} turn</p> } 
        </main>
    )
}
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
}