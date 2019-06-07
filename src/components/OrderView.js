import React from 'react';

const OrderView = props => {
    return (
        <div>
            <ul>
                <li>{props.book.name}</li>
                <li>{props.book.author}</li>
                <button className='btn btn-danger' onClick={() => props.removeFromOrder(props.book.name)}>Remove</button>
            </ul>
            <hr />
        </div>
    )
}

export default OrderView;