import React from 'react';

const AddBookForm = props => {
    const { handleChange, handleLogout, addNewBook } = props;
    const { name, author, description } = props.book;

    return (
        <div className='admin-panel col-md-4'>
            <h2>Admin Panel</h2>
            <form onSubmit={addNewBook}>
                <div className='form-group'>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={handleChange}
                        placeholder='Book name'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <input
                        id='author'
                        name='author'
                        type='text'
                        value={author}
                        onChange={handleChange}
                        placeholder='Book author'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        id='description'
                        name='description'
                        value={description}
                        onChange={handleChange}
                        placeholder='Book description'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Add</button>
                <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
            </form>
        </div>
    )
}

export default AddBookForm;