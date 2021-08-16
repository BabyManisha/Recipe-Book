import React, {useEffect, useState} from 'react'
import axios from '../api'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [categories, setCategories] = useState([])

    function getCategoriesList(){
        axios.get(`list.php?c=list`)
        .then(res => {
            if (res.data && res.data.meals.length > 0){ 
                let countries = res.data.meals.filter(c => c.strCategory !== 'Beef')
                setCategories(countries);
            }
        })
    }

    useEffect(() => {
        getCategoriesList();
    }, [])

    return (
        <div className="categories-nav-div">
            <h4>Browse By Category ({categories.length})</h4>
            {categories.length ?
            <Grid container spacing={3}>
                {categories.map((c, i) => (
                    <Grid key={i} xs={2} item className="category-item">
                        <Link to={`/search/c/${c.strCategory}`}>
                            <b>{c.strCategory}</b>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            : <h4>Loading.....</h4>
            }
        </div>
    )
}
