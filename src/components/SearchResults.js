import React, {useEffect, useState} from 'react'
import axios from '../api'
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ListBy() {
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(false)

    let { sectionId, searchText } = useParams();

    function getData(id, val){
        axios.get(`${["f", "s"].indexOf(id) > -1 ? 'search' : 'filter'}.php?${id}=${val}`)
        .then(res => {
            if (res.data && res.data.meals?.length > 0){ 
                let data = res.data.meals.filter(m => !m.strMeal.includes("Beef") && (m.strInstructions ? !m.strInstructions.includes("Beef") : true));
                setItems(data);
            }
            setLoading(false);
        })
    }

    useEffect(() => {
        setLoading(true);
        getData(sectionId, searchText)
    }, [sectionId, searchText])

    return (
        <div className="ingredients-nav-div">
            <h4>Total Results Found ({items.length})</h4>
            {items.length ?
            <Grid container spacing={3} className="ingredients-grid">
                {items.map(i => (
                    <Link key={i.idMeal} to={`/recipe/${i.idMeal}`} className="div-link">
                        <div className="ingredients-box">
                            <div className="img-container">
                                <div className="img-inner">
                                    <div className="inner-skew">
                                        <img src={`${i.strMealThumb}`} alt={i.strIngredient}/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-container">
                                <h3>{i.strMeal}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </Grid>
            : isLoading ? <h4>Loading.....</h4> : <h4>No Results Found!</h4>
            }
        </div>
    )
}
