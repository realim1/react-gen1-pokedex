import React from 'react';

import './logo.styles.css';


export const Logo = (props) => (
    <img 
        src={props.source}
        alt={props.alt}
        className={props.styles}/>
)