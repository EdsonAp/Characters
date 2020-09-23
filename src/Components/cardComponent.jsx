import React from 'react';
import '../card-styles.css'

const Card = (props) =>(
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.character.id}?set=set1&size=180x180`} />
        <h1> {props.character.name} </h1>
    </div>
)

export default Card