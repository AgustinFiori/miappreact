import React, {useState} from "react";


const Contador = () =>

<button onClick={() => {
    if (count === 10) {
      setCount(10);
      return
    }
    setCount(count+1)}}

  >+</button><p>{count}</p>
  
  <button onClick={() => {
    if (count === 0) {
      setCount(0);
      return
    }
    setCount(count-1)}}

  >-</button>