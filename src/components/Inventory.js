import React from 'react';
import BookView from './BookView';
import { fbase } from '../firebase';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }


    render() {
        const books = this.state.books.map((book, index) => (
            <BookView
                key={index}
                book={book}
                addToOrder={this.props.addToOrder}
            />
        ))
        return (
            <div className='inventory col-md-6'>
                {books}
            </div>
        )
    }
}

export default Inventory;