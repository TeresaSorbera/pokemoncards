import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {

    return (
      <>  
        <div className='card'>
          <div className="img-name-wrapper">
            <div className='image-container'><img src={pokemon.sprites.other.dream_world.front_default} /></div>
            <span className='name api-color api-label'>{pokemon.name}</span>
          </div>
          <div className="details-wrapper">
            <div className='details api-color'><span className='api-label'>Weight:</span> <span className='api-data'>{pokemon.weight}</span></div>
            <div className='details api-color'><span className='api-label'>Height:</span> <span className='api-data api-color'>{pokemon.height}</span></div>
            <div className='details api-color'><span className='api-label'>Abilities:</span> <span className='api-data api-color'>{pokemon.abilities[0].ability.name}</span></div>
            <div className='details api-color'><span className='api-data api-color'>{pokemon.abilities[1].ability.name}</span></div>
          </div>
          <div className='see-details-wrapper'>
            <hr className='border-details'/>
            <Link to={`/pokemon/${pokemon.id}`}>
              <span className='see-details'>See Details</span>
            </Link>
          </div>
        </div>
      </>
    )
}

export default Pokemon; 

