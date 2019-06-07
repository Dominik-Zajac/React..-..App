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
      order: []
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

  //Order
  addToOrder = book => {
    this.setState({
      order: [...this.state.order, book]
    })
  }

  removeFromOrder = title => {
    const order = this.state.order.filter(book => title !== book.name);

    this.setState({
      order
    })
  }

  render() {

    return (
      <div className="app container">
        <Header />
        <div className='row'>
          <Order
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            books={this.state.books}
            addToOrder={this.addToOrder}
          />
          <AdminPanel
            books={this.state.books}
            addBook={this.addNewBook} />
        </div>
      </div>
    );
  }
}


export default App;
