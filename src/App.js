import React, {Component} from 'react';
import './App.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="App-header">
                <Navbar inverse collapseOnSelect>
                   <Navbar.Header>
                     <Navbar.Brand>
                        <a href="#">Oh My Code</a>
                     </Navbar.Brand>
                     <Navbar.Toggle />
                   </Navbar.Header>
                   <Navbar.Collapse>
                     <Nav>
                       <NavItem eventKey={1} href="#">Link</NavItem>
                       <NavItem eventKey={2} href="#">Link</NavItem>
                       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                         <MenuItem eventKey={3.1}>Action</MenuItem>
                         <MenuItem eventKey={3.2}>Another action</MenuItem>
                         <MenuItem eventKey={3.3}>Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey={3.3}>Separated link</MenuItem>
                       </NavDropdown>
                     </Nav>
                     <Nav pullRight>
                       <NavItem eventKey={1} href="#">Link Right</NavItem>
                       <NavItem eventKey={2} href="#">Link Right</NavItem>
                     </Nav>
                   </Navbar.Collapse>
                 </Navbar>
            </div>
            <p className="App-intro">
              This page helps you increase your productivity and write source code better.
            </p>
          </div>
        );
    }
}

export default App;
