import React from 'react';

const BookView = props => {
    return (
        <div>
            <ul>
                <li>{props.book.name}</li>
                <li>{props.book.author}</li>
                <button className='btn btn-primary' onClick={() => props.addToOrder(props.book)}>Add to order</button>
            </ul>
            <hr />
        </div>
    )
}

export default BookView;