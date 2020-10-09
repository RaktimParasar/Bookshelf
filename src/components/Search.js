import React from 'react';
import SearchResult from './SearchResult';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const Search = ({ books, searchedBooks, bookfinder, resetQuery, bookChanger }) => {
    
    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search" onClick={resetQuery} >Close</Link>
             {/* SearchInput goes here */}
            <SearchInput bookfinder={bookfinder}/>
        </div>
              {/* SearchResult goes here */}
            <SearchResult 
            books={books}
            searchedBooks={searchedBooks}
            bookChanger={bookChanger}
            />
            </div>
    )
    }
export default Search