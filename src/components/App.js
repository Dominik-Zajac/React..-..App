import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      order: []
    }
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
      <div className='app container'>
        <Header />
        <div className='row'>
          <Order order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory books={this.state.books}
            addToOrder={this.addToOrder}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;