import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Other from './components/Other/Other';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/detail">
            <Detail></Detail>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/other">
            <Other></Other>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
