import React from 'react';
import './SearchBox.css';

interface SearchBoxProps {
    onInputChange:(inputValue:string) => void;
}

const SearchBox = ({onInputChange}: SearchBoxProps) => {


    return (
        <div>
            <input
                onChange={(e) => {
                    console.log(e.target.value);
                    onInputChange(e.target.value);
                }}
                className="search"
                type="search"
                placeholder="Search Pokemons"
            ></input>
        </div>
    )

}

export default SearchBox;