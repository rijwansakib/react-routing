
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import Blog from './component/Blog/Blog';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route  path="/home">
              <Home></Home>
            </Route>

            <Route  path="/service">
              <Services></Services>
            </Route>

            <Route  path="/blog">
              <Blog></Blog>
            </Route>

            <Route  path="/about">
              <About></About>
            </Route>

            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
