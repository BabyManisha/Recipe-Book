import React, { useState, useEffect } from 'react'
import logo from '../../logo.png';
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';
import { stripURL } from '../../Utils'

import {
    HashRouter as Router,
    Link,
    NavLink
} from "react-router-dom";

export default function Header() {
    const [searchText, setSearchText] = useState();

    const history = useHistory();

    function doSomethingWith(val){
        history.push(`/search/s/${val}`);
    }

    return (
        <div className="fixed-header">
            <Router>
                <nav>
                    <Link to="/" className="logo-nav">
                        <img className="app-logo" src={logo} alt="App Logo" />
                    </Link>
                    <Link to="/" className="app-name">Recipe Book</Link>

                    <SearchBar className="search-bar" style={{width: '50%'}}
                        value={searchText}
                        placeholder="Search by Recipe Name"
                        onChange={(newValue) => setSearchText(newValue)}
                        onRequestSearch={() => doSomethingWith(searchText)}
                    />

                    <NavLink to="/categories" className="nav-item" activeClassName="activate-nav">Categories</NavLink>
                    <NavLink to="/ingredients" className="nav-item" activeClassName="activate-nav">Ingredients</NavLink>
                    <a target="new" href={stripURL} className="nav-item">Support Us</a>
                </nav>
            </Router>
        </div>
    )
}
