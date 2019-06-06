import React from 'react';

class Inventory extends React.Component {
    render() {

        const name = this.props.books.map(book => (
            <div>{book.name}</div>
        ))
        return (
            <div className='inventory col-md-4'>
                {name}
            </div>
        )
    }
}

export default Inventory;