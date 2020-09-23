import React, { Component } from 'react'
import {Button, Form, FormGroup, Input, Label, Col} from 'reactstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
	        error:''
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

        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response.data.token.original.access_token);
            // localStorage.setItem('token',response.data.token.original.access_token);
            // login();
            if(response.data.status=='build')
            window.location.href="/build";
            else if(response.data.status=='final')
            window.location.href="/final";
        })
        .catch((error)=> {
            console.log(error);
            console.log(error.response.data.error);
            this.setState({error: error.response.data.error})
        });
        
    }

    render() {
        return (
	    <div>
            {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : null}
            <Form onSubmit={this.handleSubmit}>
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
                <Button className="col-lg-12 buttons" type="submit" value="submit" color="primary">Sign In</Button>
            </Form>
	    </div>
        )
    }
}

export default SignIn