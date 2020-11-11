import React, { useState } from 'react';


const TestHook = (props) => {
  const [state, setState] = useState("Initial State")

  const changeState = () => {
    setState("Initial State Changed")
  }

  const changeNameToSteve = () => {
    props.changeName()
  }

  return (
  <div>
    <button data-test='state_button' onClick={changeState}>
      State Change Button
    </button>
    <p data-test='test_state'>{state}</p>
    <button onClick={changeNameToSteve}>
       Change Name
    </button>
    <p>{props.name}</p>
  </div>
  )
}


export default TestHook;
