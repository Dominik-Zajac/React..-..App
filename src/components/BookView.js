import React from 'react';

const BookView = props => {
    return (
        <div className='book-view row'>
            <div className='col-xs-3'>
                <h5>Name:</h5>
                <p>{props.book.name}</p>
            </div>
            <div className='col-xs-3'>
                <h5>Author:</h5>
                <p>{props.book.author}</p>
            </div>
            <div className='col-xs-3'>
                <button onClick={() => props.addToOrder(props.book)} className='btn btn-primary'>Add to order</button>
            </div>
        </div>
    )
}

export default BookView;