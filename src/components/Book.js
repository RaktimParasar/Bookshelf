import React from 'react';
import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, category, bookChanger }) => {
    return ( 
        <li>
        <div className="book">
            <div className="book-top">
            <div className="book-cover" 
                style={{ width: 128, height: 193, 
                backgroundImage: `url(${book.imageLinks ?
                book.imageLinks.thumbnail : 'icons/blank-cover.png'})` }}></div>
              {/* BookShelfChanger goes here */}
            <BookShelfChanger book={book} 
            category={category}
            bookChanger={bookChanger}
            />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : "Unknown Author"}</div>
        </div>
        </li>
    );
    }

export default Book