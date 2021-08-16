import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Ingredients from './pages/Ingredients';

import CountryNav from './components/common/CountryNav';
import AtoZNav from './components/common/AtoZNav';

import SearchResults from './components/SearchResults';
import Recipe from './components/Recipe';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main className="main-container">
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/ingredients">
              <Ingredients />
            </Route>
            <Route path="/recipe/:recipeId/">
              <Recipe/>
            </Route>
            <Route path="/search/:sectionId/:searchText">
              <SearchResults/>
            </Route>
            <Route path="/">
            <HomePage/>
            </Route>
          </Switch>

          <hr />
          <CountryNav/>
          <hr />
          <AtoZNav/>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
