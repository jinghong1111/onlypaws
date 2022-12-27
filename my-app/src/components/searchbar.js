// create a search bar component in the form of a form with an input field and a button
import React from 'react';
const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </form>
    );
}

export default SearchBar;

