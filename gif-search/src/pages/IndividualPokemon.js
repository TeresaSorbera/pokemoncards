import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { matchPath } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom"

import Loader from '../components/Loader';

const IndividualPokemon = ({}) => {

  const { pokeId } = useParams();

  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);
  
  const getPokemon = async (id) => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    setLoading(false);
  }

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    return res;
  }

  useEffect(() => {
    getPokemon(pokeId);
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) :
        <div className='individual-wrapper'>
          <Link to={`/`}>
              <button className='button-text'>Back</button>
            </Link>
          <div className='individual-image-wrapper'>
            <img src={pokemonDetails.sprites.other.dream_world.front_default} />
          </div>  
        </div>
          
    }
    </>
  )
}

export default IndividualPokemon;