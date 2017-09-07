import React from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './home/home';
import About from './about/about';
import Book from './book/bookpage';
import BookDetailPage from './book/bookDetailPage';

var containerStyle = {
  marginTop: 0
}

export default class App extends React.Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
        <Container style={containerStyle}>
          <Menu>
            <Menu.Item header>My Book Shop</Menu.Item>
            <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/book" name="book" active={activeItem === 'book'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/cart" name="cart" active={activeItem === 'cart'} onClick={this.handleItemClick} />
          </Menu>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/book" component={Book} />
          <Route path="/book/:id" component={BookDetailPage}/>
          {/*<Route path="/cart" component={Cart}/>*/}
        </Container>
      </Router>
    );
  }
}

