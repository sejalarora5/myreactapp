import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <p>Counter function using Functional Component</p>
        <p>Number of Clicks: {count}</p>
        <div className='counterDiv'>
        <button className='counterButton' onClick={handleDecrement}> - </button>
        <h6 className='h6'> {count}</h6>
        <button className='counterButton' onClick={handleIncrement}> + </button>
        </div>
    </div>
  )
}

export default Counter;