import React from 'react';

const AdminBookView = props => {
    return (
        <div className='admin-book_view row'>
            <div className='col-md-8'>
                <span>{props.book.name}</span>
            </div>
            <div className='col-md-4'>
                <button className='btn btn-danger' onClick={() => props.removeFromInventory(props.book.name)}>Remove</button>
            </div>
        </div>
    )
}

export default AdminBookView;