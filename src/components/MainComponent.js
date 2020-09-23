import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Build from "./Build";
import HeaderComponent from "./HeaderComponent";
import FinalDashboard from "./FinalDashboard";

export class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: ""
        };
    }
    async componentWillMount() {
        const url = "/get-slug";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ slug: data.key });
    }
    render() {
        return (
            <div>
                <Switch>
                    {/* <HeaderComponent /> */}
                    <Route path="/" component={Home} />
                    <Route exact path="/build" component={Build} />
                    <Route
                        path={`/portfolio/${this.state.slug}`}
                        component={() => (
                            <FinalDashboard slug={this.state.slug} />
                        )}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default MainComponent;