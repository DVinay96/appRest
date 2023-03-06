import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Carrousel from './Components/Jumbotron/Carrousel';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className='App'>

      <Header />
      <Jumbotron />
      <Carrousel />
      <Footer />
      <Menu />

    </div>
  );
}

export default App;

