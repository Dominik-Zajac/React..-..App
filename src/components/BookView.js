import React from 'react';

const BookView = props => {
    return (
        <div className='book-view row'>
            <div className='col-xs-3 row'>
                <div className='col-xs-6'>
                    <h5>Name:</h5>
                    <p>{props.book.name}</p>
                </div>
                <div className='col-xs-6'>
                    <h5>Author:</h5>
                    <p>{props.book.author}</p>
                </div>
            </div>
            <div className='col-xs-6'>
                <h5>Description:</h5>
                <p>{props.book.description}</p>
            </div>
            <div className='col-xs-3'>
                <button onClick={() => props.addToOrder(props.book)} className='btn btn-primary'>Add to order</button>
            </div>
        </div>
    )
}

export default BookView;