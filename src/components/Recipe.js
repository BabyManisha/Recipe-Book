import React, {useEffect, useState} from 'react'
import axios from '../api'
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { range, ingrBase } from '../Utils'
import { Fragment } from 'react';

export default function Recipe() {
    const [recipe, setRecipe] = useState([])
    let { recipeId } = useParams();

    function getData(){
        axios.get(`lookup.php?i=${recipeId}`)
        .then(res => {
            if (res.data && res.data.meals?.length > 0){ 
                console.log(res.data.meals);
                setRecipe(res.data.meals[0]);
            }
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6} className="recipe-day">
                    <img className="recipe-day-image" src={recipe.strMealThumb} 
                        alt="Special Recipe"></img>
                    <br />
                    <strong className="recipe-day-name">{recipe.strMeal}</strong>
                </Grid>
                <Grid item xs={6}>
                    <p className="instructions-title">
                        Instructions:
                        <a title="Watch Video" className="youtube-icon" rel="noreferrer" target="_blank" href={recipe.strYoutube}><YouTubeIcon className="large-icon"/></a>
                    </p>
                    
                    <ol className="instructions-list">
                        {recipe.strInstructions?.split(".").map((i, index) => (
                            (i.length > 0 && <li key={index}>{i}.</li>)
                        ))}
                    </ol>

                    <div className="recipe-info">
                        <strong>Category: </strong>
                        <Link to={`/search/c/${recipe.strCategory}`}>{recipe.strCategory}</Link>
                        <br />
                        <br />
                        <strong>Country: </strong>
                        <Link to={`/search/a/${recipe.strArea}`}>{recipe.strArea}</Link>
                        <br />
                        <br />
                        <strong>Source: </strong>
                        <a title="Source" rel="noreferrer" target="_blank" href={recipe.strSource}>{recipe.strSource}</a>
                        <br />
                        <br />
                        {recipe.strTags?.split(",").map((t, i) => (
                            <div key={i} className="chip">{t}</div>
                        ))}
                    </div>
                </Grid>
            </Grid>
            <hr className="ingredient-line" />
            <h2>Ingredients</h2>
            <Grid container spacing={3} className="ingredients-grid">
                {range(1,20).map(i => (
                    <Fragment key={i}>
                        {recipe[`strMeasure${i}`]?.trim() &&
                            <Link to={`/search/i/${recipe[`strIngredient${i}`]}`} className="div-link">
                                <div className="ingredients-box">
                                    <div className="img-container">
                                        <div className="img-inner">
                                            <div className="inner-skew">
                                                <img src={`${ingrBase}${recipe[`strIngredient${i}`]}.png`} alt={recipe[`strIngredient${i}`]}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-container">
                                        <h3>{recipe[`strIngredient${i}`]}</h3>
                                        <strong className="ingredient-description">{recipe[`strMeasure${i}`]}</strong>
                                    </div>
                                </div>
                            </Link>
                        }
                    </Fragment>
                ))}
            </Grid>
        </div>
    )
}
