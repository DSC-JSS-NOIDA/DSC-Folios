import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label,Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

export class HeaderComponent extends Component {

    constructor(props) {
        super(props);
     
        // this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isSignInModalOpen: false,
          isSignUpModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModalSignIn = this.toggleModalSignIn.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        // this.handleSignUp = this.handleSignUp.bind(this);
        
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

    // handleSignUp(event){
    //   this.toggleModal();
    //   alert("Username: " + this.username.value + " Password: " + this.password.value);
    //   event.preventDefault();
    // }

    // handleSignIn(event){
    //     this.toggleModal();
    //     alert("Username: " + this.username.value + " Password: " + this.password.value);
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <Navbar color="white" light expand="lg" className="nav-bar">
                    <div className="container">
                        
                        <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logoSmall.svg"
                height="29px"
                width="153px"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto" style={{float:'right',color:'#000000'}}>
                            <NavItem className="nav-items">
                                <NavLink color="dark" className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <NavLink className="nav-link" to='/aboutus'> About</NavLink>
                            </NavItem>
                            <NavItem className="nav-items"> 
                                <NavLink className="nav-link"  to='/menu'> How to Use</NavLink>
                            </NavItem>
                            <NavItem className="nav-items">
                                <Button type="button" className="btn buttons" onClick={this.toggleModalSignIn} style={{width:'120px', height:'auto',color:'#ffffff',fontSize:'15px'}} >Sign In</Button>
                            </NavItem>
                            <NavItem>
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
                        {/* <Form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form> */}
                        <SignUp/>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isSignInModalOpen} toggle={this.toggleModalSignIn}>
                    <ModalHeader toggle={this.toggleModalSignIn}>Sign In</ModalHeader>
                    <ModalBody>
                        <br/>
                        {/* <Form onSubmit={this.handleSignIn}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign In</Button>
                        </Form> */}
                        <SignIn/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default HeaderComponent





















