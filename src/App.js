import {useState} from 'react'
import Average from './Average';
import Counter from './Counter';
import Info from './Info';
import Reducer from './Reducer';
import useReducer from './Reducer'
import ReducerInfo from './ReducerInfo';
function App() {
  
  return (
    <div className="App">
    <Counter />
    <Info />
    <Reducer />
    <ReducerInfo />
    <Average />
    </div>
  );
}

export default App;
