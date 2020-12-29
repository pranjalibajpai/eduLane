import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

function AppNavbar(props){
    const [isOpen, setIsOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }

    return (
    <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">eduLane</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/pranjalibajpai/eduLane">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>);
}

export default AppNavbar;