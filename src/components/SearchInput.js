import React, { Component } from 'react';

class SearchInput extends Component {
    state = { 
    query: ''
    }

    handleChange = (e) => {
    const { value } = e.target
    const { bookfinder } = this.props
    this.setState({
        query: value
    }, () => {
    bookfinder(value)
    })
    }

    render() { 
    return ( 
        <div className="search-books-input-wrapper">
        <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.handleChange}
            />
        </div>
    );
    }
}

export default SearchInput