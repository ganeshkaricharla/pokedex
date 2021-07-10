import React from 'react';
import './PokeCard.css';

interface pokecardProps {
    spriteUrl?: string;
    name:string;
    onPokemonClick:(pokemonName:string) => void;

}

const PokeCard = ({name,spriteUrl,onPokemonClick}: pokecardProps) => {
    return (
        <div onClick={() => onPokemonClick(name)} className="pokecard">
            <img className="pokemon-sprite" alt ="pokemon" src = {spriteUrl} />
            <p>{name}</p>
        </div>
    )
}

export default PokeCard;