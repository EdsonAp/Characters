import React from 'react';
import '../card-styles.css'

const Card = (props) =>(
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.character.id}?set=set1&size=180x180`} />
        <h2> {props.character.name} </h2>
        <p> Street: {props.character.address.street} </p>

    </div>
)

export default Card