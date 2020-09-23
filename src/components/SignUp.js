import React, { Component } from "react";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col,
    FormFeedback
} from "reactstrap";
import axios from "axios";

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            touched: {
                name: false,
                email: false,
                password: false
            },
		error:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = field => evt => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };

    validate(name, email, password) {
        const errors = {
            name: "",
            email: "",
            password: ""
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = "Name should be greater than 3 characters";
        else if (this.state.touched.name && name.length > 18)
            errors.name = "Name should be less than 20 characters";
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        if (this.state.touched.password && !reg.test(password))
            errors.password =
                "Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long";
        if (
            this.state.touched.email &&
            email.split("").filter(x => x === "@").length !== 1
        )
            errors.email = "Enter a valid Email";

        return errors;
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

        axios
            .post("/api/register", {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })

            .then(function(response) {
                if (response.status == 200)
                window.location.href = "/build";
                console.log(response.data);
            })

            .catch((err)=> {
                console.log(err.response.data.error.email[0]);
                this.setState({error: err.response.data.error.email[0]})
            });
    }

    render() {
        const errors = this.validate(
            this.state.name,
            this.state.email,
            this.state.password
        );
        return (
	<div>
            {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : null}
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Label htmlFor="name" md={3}>
                        
                        Name
                    </Label>
                    <Col md={9}>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            invalid={errors.name !== ""}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback> {errors.name} </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md={3}>
                        
                        Email
                    </Label>
                    <Col md={9}>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            invalid={errors.email !== ""}
                            onBlur={this.handleBlur("email")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback> {errors.email} </FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="password" md={3}>
                        
                        Password
                    </Label>
                    <Col md={9}>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            invalid={errors.password !== ""}
                            onBlur={this.handleBlur("password")}
                            onChange={this.handleInputChange}
                        />
                        <FormFeedback> {errors.password} </FormFeedback>
                    </Col>
                </FormGroup>
                <br />
                <Button
                    className="col-lg-12 buttons"
                    type="submit"
                    value="submit"
                    color="primary"
                >
                    
                    Sign Up
                </Button>
            </Form>
	</div>
        );
    }
}

export default SignUp;