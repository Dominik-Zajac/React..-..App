import React from 'react';

const LoginPanel = props => {
    return (
        <div className='login-panel'>
            <h2>Admin Panel</h2>
            <form onSubmit={props.authenticate}>
                <input
                    id='email'
                    type='text'
                    name='email'
                    placeholder='email'
                    value={props.email}
                    className='form-control'
                    onChange={props.handleLoginChange}
                />
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={props.password}
                    className='form-control'
                    onChange={props.handleLoginChange}
                />
                <button
                    type='submit'
                    className='btn btn-primary'>
                    Log in
                </button>
            </form>
        </div>
    )
}

export default LoginPanel;