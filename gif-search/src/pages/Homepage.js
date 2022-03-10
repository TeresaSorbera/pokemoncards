import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';

const Homepage = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/${id}");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 10; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, [])

    return (
        <>
        {loading ? (
            <Loader/>
        ) : (
            <div className='grid'>
                {pokemon.map( p =>(
                    <div className='wrapper' key={p.data.name}>
                        <Pokemon pokemon={p.data}/>
                    </div>
                ))}
            </div>
        )}
        </>
    )
}

export default Homepage