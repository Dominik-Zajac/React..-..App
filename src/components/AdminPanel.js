import React, { Component } from 'react';
import { fbase, firebaseApp } from '../firebase';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';
import AdminBookListing from './AdminBookListing';

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
            },
            loggedIn: false,
            email: '',
            password: ''
        }
    }

    //Pobieranie wartości z inputów "AddBookForm"
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

    //Pobieranie wartości z inputów "Login Panel"
    handleLoginChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    //Uwierzytelnianie admina
    authenticate = e => {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({
                    loggedIn: true
                })
                localStorage.setItem('loggedIn', true);
            })

            .catch(() => {
                alert('Blędy login/hasło!')
            })
    }

    //Wylogowanie z panelu admina
    handleLogout = e => {
        e.preventDefault();

        firebaseApp.auth().signOut()
            .then(() => {
                this.setState({
                    loggedIn: false
                })
            })
            .catch(() => {
                alert('Błąd wylogowania!');
            })
    }

    //Usuwanie książki przez panel admina
    removeFromInventory = title => {
        let books = this.state.books.filter(book => title !== book.name);

        this.setState({
            books
        })
    }

    //Dane z firebase
    componentDidMount() {
        if (localStorage.getItem('loggedIn')) {
            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            })
        }
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }

    render() {
        const { email, password, book, books } = this.state;
        const {
            authenticate,
            handleLoginChange,
            removeFromInventory,
            handleChange,
            handleLogout,
            addNewBook
        } = this;

        return (
            <div className='container-panel'>
                {!this.state.loggedIn &&
                    <LoginPanel
                        email={email}
                        password={password}
                        authenticate={authenticate}
                        handleLoginChange={handleLoginChange}
                    />
                }
                {this.state.loggedIn &&
                    <>
                        <AddBookForm
                            book={book}
                            addNewBook={addNewBook}
                            handleLogout={handleLogout}
                            handleChange={handleChange}
                        />
                        <AdminBookListing
                            books={books}
                            removeFromInventory={removeFromInventory}
                        />
                    </>
                }
            </div>
        )
    }
}

export default AdminPanel;