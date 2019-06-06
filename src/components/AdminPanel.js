import React from 'react';

const AdminPanel = () => {
    return (
        <div className='adminPanel col-xs-4'>
            <form>
                <div className='form-group'>
                    <input type='text' placeholder='Book name' id='name' className='form-control' />
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Book author' id='author' className='form-control' />
                </div>
                <div className='form group'>
                    <textarea placeholder='Book description' id='description' className='form-control'></textarea>
                </div>
                <div className='form-group'>
                    <input type='checkbox' id='onStock' className='form-check-input' name='onStock' />
                    <label htmlFor='onStock' className='form-check-label'>On stock</label>
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Book image' id='image' name='image' className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default AdminPanel;