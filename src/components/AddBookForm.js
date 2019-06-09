import React from 'react';

const AddBookForm = props => {
    return (
        <div className='admin-panel col-md-4'>
            <h2>Admin Panel</h2>
            <form onSubmit={props.addNewBook}>
                <div className='form-group'>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        value={props.book.name}
                        onChange={props.handleChange}
                        placeholder='Book name'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <input
                        id='author'
                        name='author'
                        type='text'
                        value={props.book.author}
                        onChange={props.handleChange}
                        placeholder='Book author'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        id='description'
                        name='description'
                        value={props.book.description}
                        onChange={props.handleChange}
                        placeholder='Book description'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <input
                        id='onStock'
                        name='onStock'
                        type='checkbox'
                        checked={props.book.onStock}
                        onChange={props.handleChange}
                        className='form-check-input'
                    />
                    <label
                        htmlFor='onStock'
                        className='form-check-label'>
                        On stock
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>Add</button>
                <button onClick={props.handleLogout} className='btn btn-primary'>Logout</button>

            </form>
        </div>
    )
}

export default AddBookForm;