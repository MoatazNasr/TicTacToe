import {React} from 'react'
import Square from './Square'

export default function Board({squares , onClick}) {

    return (

        <div className=' grid grid-cols-3 gap-4' >

            {squares.map( (square,i) =>

                <Square key={i} value={square} onClick={()=> onClick(i)} />
            )}

        </div>
    )
}
