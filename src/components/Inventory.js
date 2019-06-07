import React from 'react';
import BookView from './BookView';

class Inventory extends React.Component {
    render() {

        const name = this.props.books.map((book, index) => (
            <BookView
                key={index}
                book={book}
                addToOrder={this.props.addToOrder}
            />
        ))
        return (
            <div className='inventory col-md-4'>
                {name}
            </div>
        )
    }
}

export default Inventory;