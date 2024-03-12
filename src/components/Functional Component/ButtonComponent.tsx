import React from 'react'

export default function ButtonComponent() {
    const handleClick = ()=> {
        console.log('Hi I am logging a message..')
    }
    return (
        <div>
            <button onClick={handleClick}>Click me to log a message</button>
        </div>
    )
}
