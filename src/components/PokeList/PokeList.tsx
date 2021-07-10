import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

interface pokeListProps {
    searchedPokemons:PokemonSchema[];
    onPokemonClick:(pokemonName:string) => void;
}

const PokeList = ({searchedPokemons,onPokemonClick}: pokeListProps) => {
    return(
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) => {
                    return (
                        pokemon.name && (
                            <PokeCard 
                                key = {pokemon.id}
                                name = {pokemon.name}
                                spriteUrl = {pokemon.sprites?pokemon.sprites.normal:""}
                                onPokemonClick = {onPokemonClick}
                            />
                        )

                    )
                })
            }
        </div>
    )
}

export default PokeList;