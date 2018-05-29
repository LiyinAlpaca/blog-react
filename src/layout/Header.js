import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">BLOG</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
             <NavItem>
                <NavLink tag={Link} to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/article">Article</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/LiyinAlpaca/blog">GitHub</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
