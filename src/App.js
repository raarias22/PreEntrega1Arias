
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/NavBar/ItemListContainer';
import CartWidget from './components/NavBar/CartWidget';



function App() {
  

  return(
<div className="App">

<Router>
    <NavBar/>
</Router>


</div>

);
}

export default App;