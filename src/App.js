import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Empires from './components/Empires';
import Detalles from './components/Detalles';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home">
            <p>HOME</p>
          </Link>
          <Link to="/civilization">
            <p>CIVILIZATIONS</p>
          </Link>
          <Link to="contact">
            <p>CONTACT</p>
          </Link>
        </nav>

        <Route exact path="/" />
        <Route exact path="/home" component={Inicio} />
        <Route exact path="/civilization" component={Empires} />
        <Route exact path="/civilization/:id" component={Detalles} />
        <Route exact path="/contact" component={Contacto} />
      </BrowserRouter>
    </>

  );

}

export default App;
