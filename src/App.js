import { useState } from "react";


export default function App() {
  const[numero,setNumero] = useState(0)
  const incrementar = () =>{
    setNumero(numero+1);
  }
  const decrementar = () =>{
    setNumero(numero-1);
  }
  return(
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>INCREMENTAR</button>
      <button onClick={decrementar}>DECREMENTAR</button>
    </div>
  )
}
