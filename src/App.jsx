import './App.css'
import { Button } from './components/Button'


function App() {
  const buttonText = " haga click";
  return (
    <>
      <h1>Alerta con numeros aleatorios</h1>
      <Button text={buttonText}/>
    </>
  )
}

export default App
