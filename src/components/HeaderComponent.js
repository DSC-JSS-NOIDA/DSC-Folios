import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          isNavOpen: false,
          isSignInModalOpen: false,
          isSignUpModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModalSignIn = this.toggleModalSignIn.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        
      }

    toggleNav() {
       this.setState({
          isNavOpen: !this.state.isNavOpen
       });
    }

    toggleModalSignUp(){
        this.setState({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        });
    }

    toggleModalSignIn(){
      this.setState({
        isSignInModalOpen: !this.state.isSignInModalOpen
      });
    }
    
    render() {
        return (
            <div>
                <Navbar className="fixed-top" color="white" light expand="lg">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img  src="assets/images/logoSmall.svg"  height="29px"  width="153px" alt="Ristorante Con Fusion"
                        />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" style={{float:'right',color:'#000000'}}>
                            <NavItem className="nav-items">
                                <NavLink color="dark" className="nav-link" to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <a href="#about" className="nav-link" to='/aboutus'> About</a>
                            </NavItem>
                            <NavItem className="nav-items"> 
                                <a href="#howtouse" className="nav-link"  to='/menu'> How to Use</a>
                            </NavItem>
                            <NavItem className="nav-items">
                                <Button type="button" className="btn buttons" onClick={this.toggleModalSignIn} style={{width:'120px', height:'auto',color:'#ffffff',fontSize:'15px'}} >Sign In</Button>
                            </NavItem>
                            <NavItem className="nav-items">
                                <Button type="button" className="btn buttons" onClick={this.toggleModalSignUp} style={{width:'120px', height:'auto',color:'#ffffff',fontSize:'15px'}} >Sign Up</Button>
                            </NavItem>
                            </Nav>                           
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleModalSignUp}>
                    <ModalHeader toggle={this.toggleModalSignUp}>Sign Up</ModalHeader>
                    <ModalBody>
                        <br/>
                        <SignUp/>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isSignInModalOpen} toggle={this.toggleModalSignIn}>
                    <ModalHeader toggle={this.toggleModalSignIn}>Sign In</ModalHeader>
                    <ModalBody>
                        <br/>
                        <SignIn/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HeaderComponent





















