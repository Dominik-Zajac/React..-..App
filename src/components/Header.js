import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            bookName: 'Black Books',
            clicked: true,
            backgroundColor: 'black',
            textColor: 'white'
        }
    }

    handleClick = () => {
        console.log('dziala')
        if (this.state.clicked) {

            this.setState({
                bookName: 'White Books',
                clicked: !this.state.clicked,
                backgroundColor: 'white',
                textColor: 'black'
            })
        } else {
            this.setState({
                bookName: 'Black Books',
                clicked: !this.state.clicked,
                backgroundColor: 'black',
                textColor: 'white'
            })
        }
    }

    render() {
        let headerStyles = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        }
        return (
            <div className='row header' onClick={this.handleClick} style={headerStyles}>
                <center><h1>{this.state.bookName}</h1></center>
                <Link to='/admin'><button className='btn btn-info admin'>Panel admin</button></Link>
            </div>
        )

    }
}

export default Header; 