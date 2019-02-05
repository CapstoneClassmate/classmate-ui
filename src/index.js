import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"



function NavbarC(props) {
    return  <Navbar bg="light" expand="lg">
            <Navbar.Brand href="index.js">Classmate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="login.js">Login</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>;
}

const element = <NavbarC />;
ReactDOM.render(element, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
