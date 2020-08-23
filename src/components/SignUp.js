import React, { Component } from 'react'
import {Button, Form, FormGroup, Input, Label,Col } from 'reactstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post('/formSubmit', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })

        .then(function (response) {
            console.log(response.data);
        })

        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={3}>Name</Label>
                    <Col md={9}>
                        <Input type="text" id="name" name="name"
                            placeholder="Name" value={this.state.name}
                            onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md={3}>Email</Label>
                    <Col md={9}>
                        <Input type="text" id="email" name="email"
                            placeholder="Email" value={this.state.email}
                            onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="password" md={3}>Password</Label>
                    <Col md={9}>
                        <Input type="password" id="password" name="password"
                            placeholder="Password" value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </Col>
                </FormGroup><br/>
                <Button className="col-lg-12 buttons" type="submit" value="submit" color="primary">Sign Up</Button>
            </Form>
        )
    }
}

export default SignUp
