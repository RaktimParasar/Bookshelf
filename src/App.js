import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Search from './components/Search';
import './App.css'

const booksCategory = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];



class BooksApp extends Component {

  state = {
    books: [],
    searchedBooks: [],
    error: false
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
    .catch(err => {
      this.setState({
        error: true
      })
    })
  }




 //move books to diff category
  bookChanger = (book, category) => {
    BooksAPI.update(book, category)
    .then(() => category !== 'none' ? alert(`${book.title} is added successfully to your shelf !`) : null)
    .catch(err => {
      console.log(err);
      this.setState({ error: true });
    });

    //if category is none filter the book
    if(category === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(newBook => newBook.id !== book.id)
      }))
    
    //assign category add to the books state
    } else {
      book.shelf = category
      this.setState(prevState => ({
        books: prevState.books.filter(newBook => newBook.id !== book.id).concat(book)
      }))
    }
  }

  //search books according to search query
  bookfinder = (query) => {
    //checks if the query length is greater the zero for validation
    (query.length > 0) ? 
      (BooksAPI.search(query).then(books => {
        //when search result gives error it sets the state to empty
        (books.error) ? (this.setState({
            searchedBooks : []
          })) : (this.setState({
            searchedBooks : books
          }))
    })) : (this.setState({
      searchedBooks: []
    }))
  }

  //resets the searchedbooks to empty on closebutton
  resetQuery = () => {
    this.setState({
      searchedBooks: []
    })
  }

  render() {
    const { books, searchedBooks, error } = this.state
    if(error) {
      return <div>Something went wrong, Please try again later.</div>
    }
    return (
      <div className="app">
        <Route exact path='/' 
          render={() => (
            <MainPage books={books} 
              booksCategory={booksCategory} 
              bookChanger={this.bookChanger}
              />
          )}
          />
        <Route path='/search' 
          render={() => (
            <Search 
              books={books}
              searchedBooks={searchedBooks} 
              bookChanger={this.bookChanger}
              bookfinder={this.bookfinder}
              resetQuery={this.resetQuery}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
