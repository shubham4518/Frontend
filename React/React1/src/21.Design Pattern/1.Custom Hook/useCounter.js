
import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0)

    function handleAdd() {
        setCount(count + 1)
    }

    return { count, handleAdd }
}

export default useCounter
