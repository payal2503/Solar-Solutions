import React from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink,
DropdownToggle,DropdownMenu,DropdownItem,NavbarToggler,UncontrolledDropdown } from 'reactstrap';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  
  render(){
        return (
          <div>
          <Navbar
            color="info"
            expand="md"
            light
          >
            <NavbarBrand href="/">
              <img src='../../public/logo.jpeg' alt = "Logo"/>
              Resource Solar Solutions
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen = {this.state.isNavOpen} navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="/components/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">
                    Registration
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown
                  inNavbar
                  direction='down'
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Login
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      User
                    </DropdownItem>
                    <DropdownItem>
                      Admin
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            
          </Navbar>
        </div>
        )
  }
    
}

export default Header;