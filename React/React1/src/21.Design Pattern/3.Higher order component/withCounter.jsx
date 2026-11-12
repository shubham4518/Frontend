import { useState } from 'react'

const withCounter = (OriginalComponent) => {
    return function NewComponent() {

        const [count, setCount] = useState(0)

        function handleclick() {
        setCount((currentCount) => currentCount + 1)
        }
        
        return (
          <div>
            <OriginalComponent count={count} handleclick={handleclick} />
          </div>
        ) 
    }
}
export default withCounter