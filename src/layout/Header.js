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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BLOG</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
             <NavItem>
                <Link to="/home" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/about" className="nav-link">About</Link>
            </NavItem>
            <NavItem>
                <Link to="/article" className="nav-link">Article</Link>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/LiyinAlpaca/blog">GitHub</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
