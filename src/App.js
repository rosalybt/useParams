import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Empires from './components/Empires';
import Detalles from './components/Detalles';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">
            <p>CIVILIZATIONS</p>
          </Link>
        </nav>

        <Route exact path="/" component={Empires} />
        <Route exact path="/civilization/:id" component={Detalles} />
      </BrowserRouter>
    </>

  );

}

export default App;
