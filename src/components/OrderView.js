import React from 'react';

const OrderView = props => {
    return (
        <div className='order-view row'>
            <div className='col-md-8'>
                <h4>{props.book.name}</h4>
            </div>
            <div className='col-md-4'>
                <button className='btn btn-danger' onClick={() => props.removeFromOrder(props.book.name)}>Remove</button>
            </div>
        </div>
    )
}

export default OrderView;