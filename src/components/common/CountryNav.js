import React, {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { flags, iconBase } from '../../Utils'
import axios from '../../api'

export default function CountryNav() {
    const [countries, setCountries] = useState([])

    function getCountriesList(){
        axios.get(`list.php?a=list`)
        .then(res => {
            if (res.data && res.data.meals.length > 0){ 
                let countries = res.data.meals.filter(c => c.strArea !== 'Unknown')
                setCountries(countries);
            }
        })
    }

    useEffect(() => {
        getCountriesList();
    }, [])

    return (
        <div className="country-nav-div">
            <h4>Browse By Country ({countries.length})</h4>
            <Grid container>
                {countries.map(c => (
                    <Grid key={c.strArea} item className="country-item">
                        <Link to={`/search/a/${c.strArea}`}>
				            <img src={`${iconBase}${flags[c.strArea]}.png`} 
                                alt={`Country ${c.strArea}`} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
