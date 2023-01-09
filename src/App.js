import logo from './logo.svg';
import { useState } from 'react';
import Feedback from './components/Feedback';
import LeftRIght from './components/LeftRIght';
import './App.css';

function App({name}) {
  const [good, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000)
  // console.log(`Rendering ${counter} ...`)

  const handleGood = () => {
    setCounter(good + 1)
  }

  return (
    <>
    <h2>Hello { name  }! </h2>
    {/* <h3>{ counter }</h3> */}
    
    <Feedback/>
    <LeftRIght/>
    </>
  );
}

export default App;
