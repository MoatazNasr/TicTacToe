import React from 'react'

export default function Square({value , onClick}) {
  
    
    return (
        <button className={`relative text-7xl rounded-xl w-32 h-32 bg-gray-50 ${ value === 'O' ? 'valueO':
         value === 'X' ? 'valueX' : null }`}
         onClick={onClick}>
            {value}
            <span className=' w-full h-5 absolute bottom-0 left-0  rounded-b-lg'></span>
        </button>
    )
}
