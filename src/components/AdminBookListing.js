import React from 'react';

const AdminBookListing = props => {
    let list = props.books.map((book, index) => <li key={index}>{book.name}</li>)
    return (
        <>
            <h2>Books list</h2>
            <ul className='book-list'>
                {list}
            </ul>
        </>
    )
}

export default AdminBookListing;