import './App.css';
import Nav from './shared/Nav'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
      </BrowserRouter>
    </>
  );
}

export default App;
