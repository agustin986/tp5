import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="fondo">
      <center>
        <h1 className="header">Contador: {count}</h1>
        <button className="boton fondoboton" onClick={increment}>
          Aumentar
        </button>
        <button className="boton fondoboton" onClick={decrement}>
          Disminuir
        </button>
      </center>
    </div>
  );
}

export default Counter;
