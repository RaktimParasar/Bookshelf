import React, { Component } from 'react';

class BookShelfChanger extends Component {
    state = { 
    value: this.props.category
};

handleChange = (e) => {
    const {bookChanger, book} = this.props;
    const {value} = e.target
    this.setState({
    value
    });
    bookChanger(book, value)
}

render() { 
    return ( 
    <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
    </div>
    );
}
}
export default BookShelfChanger