import React, { Component } from 'react';

class AdminPanel extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            author: '',
            description: '',
            onStock: true,
        }
    }

    //Pobieranie wartości z inputów
    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    //Dodawanie nowej książki do tablicy
    addNewBook = e => {
        e.preventDefault();

        const { name, author, description, onStock } = this.state;
        let newBook = {
            name,
            author,
            description,
            onStock,
        };

        // this.props.addBook(newBook)

        this.resetForm();
    }

    //Resetowanie formularza po zatwierdzeniu danych
    resetForm() {
        this.setState({
            name: '',
            author: '',
            description: '',
            onStock: false
        })
    }

    render() {
        return (
            <div className='adminPanel col-md-4'>
                <form onSubmit={this.addNewBook}>
                    <div className='form-group'>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder='Book name'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            id='author'
                            name='author'
                            type='text'
                            value={this.state.author}
                            onChange={this.handleChange}
                            placeholder='Book author'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            id='description'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder='Book description'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            id='onStock'
                            name='onStock'
                            type='checkbox'
                            checked={this.state.onStock}
                            onChange={this.handleChange}
                            className='form-check-input'
                        />
                        <label
                            htmlFor='onStock'
                            className='form-check-label'>
                            On stock
                        </label>
                    </div>

                    <button type='submit' className='btn btn-primary'>Add</button>
                </form>
            </div>
        )
    }
}

export default AdminPanel;