import React, {useEffect, useState} from 'react'
import axios from '../api'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { ingrBase } from '../Utils' 

export default function Ingredients() {
    const [ingredients, setIngredients] = useState([])

    function getIngredientsList(){
        axios.get(`list.php?i=list`)
        .then(res => {
            if (res.data && res.data.meals.length > 0){ 
                let countries = res.data.meals.filter(c => c.strIngredient !== 'Beef')
                setIngredients(countries);
            }
        })
    }

    useEffect(() => {
        getIngredientsList();
    }, [])

    return (
        <div className="ingredients-nav-div">
            <h4>Browse By Ingredients ({ingredients.length})</h4>
            {ingredients.length ?
            <Grid container spacing={3} className="ingredients-grid">
                {ingredients.map(i => (
                    <Link key={i.idIngredient} to={`/search/i/${i.strIngredient}`} className="div-link">
                        <div className="ingredients-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <img src={`${ingrBase}${i.strIngredient}.png`} alt={i.strIngredient}/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <h3>{i.strIngredient}</h3>
                                <div className="ingredient-description">{i.strDescription}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Grid>
            : <h4>Loading.....</h4>
            }
        </div>
    )
}
