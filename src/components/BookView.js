import React from 'react';

const BookView = props => {
    return (
        <div>
            <ul>
                <li>{props.book.name}</li>
                <li>{props.book.author}</li>
            </ul>
            <hr />
        </div>
    )
}

export default BookView;