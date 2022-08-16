import "./App.css";
import { Imagee } from "./Components/Image";
import { Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });
  console.log(countValue);






  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button onClick={() => incCount()}>Increment</button>
      <button onClick={() => incCount(3)}>Increment 3</button>
      <button onClick={() => decCount(2)}>Decrement 2</button>
      <button onClick={() => decCount(4)}>Decrement 4</button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      {/* src, alt, borderRadius, width, height, fit */}
      <Imagee src={"https://bit.ly/dan-abramov"} alt="bravo" borderRadius={"100px"} width={"200px"} height={"500px"} fit={"cover"} />
      <br />
      {/* type, size, variant, value and onChange */}
      <Input type={"text"} size='xs' variant='outline' onChange={(e)=>e.target.value}  border={"1px solid black"} color="black"/>
    </div>
  );
}

export default App;
