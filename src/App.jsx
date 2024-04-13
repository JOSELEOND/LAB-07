import './App.css'
import { Button } from './components/Button'
import { List } from './components/List'
import { WapperList } from './components/WrapperList'

function App() {
 
  return (
    <>
      <WapperList>
        <List/>
      </WapperList>
    </>
  )
}

export default App
