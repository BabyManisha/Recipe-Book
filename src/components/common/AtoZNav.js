import React from 'react'
import { Link } from 'react-router-dom';
import {range} from '../../Utils'

export default function AtoZNav() {
    return (
        <div className="az-nav-div">
            <h4>Browse By Name</h4>
            <br />
            {range(65,90).map(e => (
                <Link key={e} to={`/search/f/${String.fromCharCode(e)}`} className="az-nav-item">{String.fromCharCode(e)}</Link> 
            ))}
        </div>
    )
}
