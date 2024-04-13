import './App.css'
import { Buttonre } from './components/RandonComponent';


function App() {
  
  const buttonText = "Count :";
  const resetText = "reset";
  return (
    <>
      <h1>Resetear los numeros</h1>
      <Buttonre text={buttonText} text1={resetText}/>
      
    </>
  )
}

export default App