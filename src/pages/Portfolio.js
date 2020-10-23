import React from 'react';
import {Link} from 'react-router-dom';

function PortfolioLink(props){
    return (
        <div>
            <Link to="/" type="button" className="btn btn-primary">Back</Link>
            <a href={props.href} target="_black">
                <img src={props.src} alt={props.alt} />
            </a>
        </div>
    )
}

export default PortfolioLink;