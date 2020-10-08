import React from 'react';
import Book from './Book';

const SearchResult = ({ books, searchedBooks, bookChanger }) => {

    //maps over books array to check if the book is present
    //if present is assign the previous book shelf category
    const updatedBooks = searchedBooks.map(book => {
    books.map(newBook => {
        if(newBook.id === book.id) {
        book.shelf = newBook.shelf
        }
        return newBook
    })
    return updatedBooks
    })
    return ( 
    <div className="search-books-results">
        <ol className="books-grid">
          {/* Book goes here */}
        {
            searchedBooks.map(book => (
            <Book 
                key={book.id} 
                book={book} 
                category={book.shelf ? book.shelf : "none"}
                bookChanger={bookChanger}
                />
            ))
        }
        </ol>
    </div>
    );
}
export default SearchResult