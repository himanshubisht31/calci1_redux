import { addCount, subCount } from './functions/action'
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'


function App() {

  const [num,setNum]=useState(0)

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleNum = (e) => {
    setNum(+e.target.value)
  }
  return (
    <div style={{textAlign:'center'}}>

      <input type="number" onChange={handleNum} />

      <h3>Counter :{counter} </h3>

      <button onClick={() => {
        dispatch(addCount(num))
      }
      } >Increment</button>


      <button onClick={() => { dispatch(subCount(num))}}>Decrement</button>


    </div>
  );
}

export default App;
