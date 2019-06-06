import React from 'react';
import AdminPanel from './AdminPanel';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      books: [],
    }
  }

  //AdminPanel
  addNewBook = book => {
    let books = [...this.state.books];
    books.push(book);

    this.setState({
      books
    })
  }

  render() {

    return (
      <div className="app container">
        <Header />
        <div className='row'>
          <Order />
          <Inventory />
          <AdminPanel
            books={this.state.books}
            addBook={this.addNewBook} />
        </div>
      </div>
    );
  }
}


export default App;
