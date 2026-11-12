
import React from 'react'
import Child from './21.Design Pattern/1.Custom Hook/Child'
import useCounter from './21.Design Pattern/1.Custom Hook/useCounter.js'

const App = () => {
    const { count, handleAdd } = useCounter()

    return (
        <div>
            <h1>{count} Parents</h1>
            <button onClick={handleAdd}>add</button>
            <Child />
        </div>
    )
}

export default App
