import React from 'react';

const Inventory = props => {
    const name = this.props.books.map(book => (
        <div>{book.name}</div>
    ))
    return (
        <div className='inventory col-md-4'>
            {name}
        </div>
    )
}

export default Inventory;