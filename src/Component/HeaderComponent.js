import React from 'react';
import {
  Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink,
  DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler, UncontrolledDropdown, Container
} from 'reactstrap';
import { FaHome, FaEdit, FaInfo, FaAddressCard } from 'react-icons/fa';
import { GrServices, GrLogin, GrUserAdmin } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';

class Header extends React.Component {
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

  render() {
    return (
      <div className='row'>
        <Navbar color="info" expand="md" light>
            <NavbarBrand href="/">
              <img src='../../public/logo.jpeg' alt="Logo" />
              {/* Resource Solar Solutions */}
            </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="/home">
                      <h5><FaHome /> Home</h5>
                    </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="/services">
                      <h5><GrServices /> Services</h5>
                    </NavLink>
           </NavItem>
              <NavItem>
                <NavLink href="/aboutus">
                  <h5><FaInfo /> About Us</h5>
                </NavLink>
              </NavItem>
             
              <NavItem>
                <NavLink href="/contactus">
                  <h5><FaAddressCard /> Contact Us</h5>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav  navbar>
              <NavItem >
                <NavLink href="/register">
                  <h5><FaEdit /> Registration</h5>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar direction='down' nav>
                <h5>
                  <DropdownToggle caret nav>
                    <GrLogin /> Login
                  </DropdownToggle>
                </h5>
                <DropdownMenu end>
                  <DropdownItem>
                    <h5><BiUser /> User</h5>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <h5><GrUserAdmin /> Admin</h5>
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