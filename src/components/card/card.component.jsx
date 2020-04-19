import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className={'card-container ' + props.pokemon.type[0].toLowerCase()+'-type'}>
        <img alt={props.pokemon.name + " image"} src={props.pokemon.img} />
        <h1> {props.pokemon.name} </h1>
    </div>
);