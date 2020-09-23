import React from 'react';
import Card from './cardComponent'
import '../card-list.css'

export const CardList = (props) =>{
    console.log(props)
    return(
        <div className='card-list'> 
            {props.characters.map(character=> (
            <Card key={character.id} character={character}/>
            ))} 
            </div>
    )
}

export default CardList