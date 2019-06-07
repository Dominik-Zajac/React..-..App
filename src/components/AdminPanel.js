import React, { Component } from 'react';
import { fbase } from '../firebase';

class AdminPanel extends Component {
    constructor() {
        super();

        this.state = {
            books: [],
            book: {
                name: '',
                author: '',
                description: '',
                onStock: true,
            }
        }
    }

    //Pobieranie wartości z inputów
    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let newBook = { ...this.state.book, [name]: value }

        this.setState({
            book: newBook
        })
    }

    //Dodawanie nowej książki do tablicy
    addNewBook = e => {
        e.preventDefault();

        let newBook = { ...this.state.book };

        if (Array.isArray(this.state.books)) {
            this.setState({
                books: [...this.state.books, newBook]
            })
        } else {
            this.setState({ books: [newBook] })
        }

        this.resetForm();
    }

    //Resetowanie formularza po zatwierdzeniu danych
    resetForm() {
        this.setState({
            book: {

                name: '',
                author: '',
                description: '',
                onStock: false
            }
        })
    }

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
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
                            value={this.state.book.name}
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
                            value={this.state.book.author}
                            onChange={this.handleChange}
                            placeholder='Book author'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            id='description'
                            name='description'
                            value={this.state.book.description}
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
                            checked={this.state.book.onStock}
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