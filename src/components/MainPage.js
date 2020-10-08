import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

const MainPage = ({ booksCategory, books, bookChanger }) => {
    return ( 
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
        <div>
          {/* BookShelf goes here */}
        {
            booksCategory.map(category => (
            <BookShelf key={category.key} 
            category={category} 
            books={books}
            bookChanger={bookChanger}
            />
            ))
        }
        </div>
        </div>
        <div className="open-search">
            <Link to='search'>Add a book</Link>
        </div>
        </div>
    );
}

export default MainPage