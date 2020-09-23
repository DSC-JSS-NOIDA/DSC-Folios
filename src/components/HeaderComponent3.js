import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav,NavItem,Button } from 'reactstrap';
import ReactDOM from 'react-dom';
export class HeaderComponent3 extends Component {

    render() {
        return (
            <div>
                <Navbar className="fixed-top navbar" color="white" light expand="lg">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img  src="https://i.ibb.co/5TcCmgN/logo.png"  height="29px" width="153px" alt=""
                        />
                        </NavbarBrand>
                        <Nav navbar className="ml-auto" style={{float:'right',color:'#000000'}}>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent3


















