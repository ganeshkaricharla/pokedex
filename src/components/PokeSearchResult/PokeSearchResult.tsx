import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import './PokeSearchResult.css';

interface PokeSearchResultProps {
    selectedPokemon:PokemonSchema | undefined;
}
const PokeSearchResult = ({selectedPokemon}:PokeSearchResultProps) => {
    const { name, id, height, weight, base_experience, sprites} = selectedPokemon || {};
    return(
        <div className="poke-result-card">
            {
                selectedPokemon?
                (
                    <div>    
                        <img src={sprites?.animated || sprites?.normal} alt="Pokemon" className="pokemon-animated-sprite" />
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>BaseExp: {base_experience}</p>
                        
                    </div>
                )
                :
                (
                    <div>
                        <h2>Welcome to Pokedex</h2>
                    </div>
                )
            }
        </div>

    );
}

export default PokeSearchResult;