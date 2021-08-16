import React, { useEffect, useState } from 'react'
import axios from '../api'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const [recipe, setRecipe] = useState({})
    const history = useHistory();

    function getRandomMeal(){
        axios.get(`/random.php`)
        .then(res => {
            if (res.data && res.data.meals[0] && res.data.meals[0]['strInstructions'].includes('beef')){ 
                getRandomMeal()
            }else{
                setRecipe(res.data.meals[0])
            }
        })
    }

    function openMeal(id){
        history.push(`/recipe/${id}`);
    }

    useEffect(() => {
        getRandomMeal();
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={6} className="recipe-day">
                <img className="recipe-day-image" src={recipe.strMealThumb} 
                    alt="Special Recipe" 
                    onClick={() => openMeal(recipe.idMeal)}></img>
                <br />
                <strong className="recipe-day-name" onClick={() => openMeal(recipe.idMeal)}>{recipe.strMeal}</strong>
            </Grid>
            <Grid item xs={6}>
                <div className="text">
                    <span>T</span>
                    <span>O</span>
                    <span>D</span>
                    <span>A</span>
                    <span>Y</span>
                    <span>`</span>
                    <span>S</span>
                </div>
                <div className="text">
                    <span>S</span>
                    <span>P</span>
                    <span>E</span>
                    <span>C</span>
                    <span>I</span>
                    <span>A</span>
                    <span>L</span>
                </div>
            </Grid>
        </Grid>
    )
}
