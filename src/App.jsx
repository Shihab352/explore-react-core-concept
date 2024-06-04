import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button Clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>

      <h1>React Core Concepts </h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2} >Click me 2</button>
      <button onClick={() => { alert('3rd button Clicked') }} >Click me 3</button>
      <button onClick={() => { addToFive(5) }}>Click me 4</button>
    </>
  )
}

export default App
