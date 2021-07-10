import React from 'react';
import './Pokedex.css';
import PokeSearchResult from './../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import PokeList from '../PokeList/PokeList';
import { PokemonSchema } from '../../types/PokemonSchema';

interface pokedexProps {
    searchedPokemons:PokemonSchema[];
    selectedPokemon:PokemonSchema | undefined;
    onInputChange:(inputValue:string) => void;
    onPokemonClick:(pokemonName:string) => void;
}

const Pokedex = ({searchedPokemons,onInputChange,onPokemonClick,selectedPokemon}:pokedexProps ) => {

    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox onInputChange = {onInputChange}/>
                <PokeList 
                    searchedPokemons = {searchedPokemons}
                    onPokemonClick = {onPokemonClick}
                />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon = {selectedPokemon} />
            </div>
        </div>
    );

}

export default Pokedex;