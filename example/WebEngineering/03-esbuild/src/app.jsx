import React, { useState } from 'react'
import { render } from 'react-dom'

const App = () => {
    const [count, setCount] = useState(0)
    return <div>
        <div>
            <span>count: {count} </span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <h1>React + JSX + ESBuild~</h1>
    </div>
}

render(<App />, document.getElementById('app'))