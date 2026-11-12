import Child from './21.Design Pattern/3.Higher order component/child'
import withCounter from './21.Design Pattern/3.Higher order component/withCounter'

const App = ({count,handleclick}) => {

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handleclick}>Add</button>
     <Child/>
    </div>
  )
}

export default withCounter(App)