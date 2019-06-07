import React from 'react';
import BookView from './BookView';

class Inventory extends React.Component {
    render() {

        const name = this.props.books.map((book, index) => (
            <BookView book={book} key={index} />
        ))
        return (
            <div className='inventory col-md-4'>
                {name}
            </div>
        )
    }
}

export default Inventory;