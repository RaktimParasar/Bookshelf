import React from 'react';
import Book from './Book';

const BookShelf = props => {
    const {category, books, bookChanger} = props;
    const divideBooks = books.filter(book => book.shelf === category.key)
    return ( 
    <div className="bookshelf">
        <h2 className="bookshelf-title">{category.name} <span className="badge">{divideBooks.length}</span></h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
              {/* Book component goes here */}
            {
                divideBooks.map(book => (
                <Book key={book.id} 
                book={book} 
                category={category.key}
                bookChanger={bookChanger}
                />
                ))
            }
        </ol>
        </div>
    </div>
    );
}

export default BookShelf