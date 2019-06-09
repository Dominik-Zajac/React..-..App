import React from 'react';
import AdminBookView from './AdminBookView';

const AdminBookListing = props => {
    let list = props.books.map((book, index) => <AdminBookView key={index} book={book} removeFromInventory={props.removeFromInventory} />)
    return (
        <>
            <h2>Books list</h2>
            <div className='book-list'>
                {list}
            </div>
        </>
    )
}

export default AdminBookListing;