
import useCounter from './useCounter'

const Child = () => {
    const { count, handleAdd } = useCounter()

    
    return (
        <div>
            <h1>{count} Child</h1>
            <button onClick={handleAdd}>add</button>
        </div>
    )
}

export default Child
