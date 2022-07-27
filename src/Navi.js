import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
} from "reactstrap";
// import CartSummary from "./CartSummary";
// import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>{/* <Link to="form1">Form Demo 1</Link> */}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>{/* <Link to="form2">Form Demo 2</Link> */}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  options - {this.props.cart.length}
                </DropdownToggle>
              </UncontrolledDropdown>
              {/* <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              /> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
