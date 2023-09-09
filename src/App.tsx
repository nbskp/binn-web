import { useBottles } from './usecase/useBottles';
import { BottleList } from './component/BottleList';
import './App.css';


function App() {
  const [bottles, changeMessage, sendBottle] = useBottles();
  return (
    <div className="app">
      <BottleList bottles={ bottles } changeMessage={ changeMessage } sendBottle={sendBottle} />
    </div>
  )
}

export default App
