import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div id="about">
            <div className="container" style={{marginTop:'80px'}}>
                <center>
                    <div>
                    <h5><b>Idea Behind The Project</b></h5>
                    <br/>
                    <p>Keep all your important links on your fingure tips and such easy sharing is never possible before. An ideal place to keep and<br/> share your presence.</p>
                    </div>
                </center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src="assets/images/Group 155.png" width="170px" height="auto" style={{margin:'40px'}}/>
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/Group 178.png" width="170px" height="auto" style={{margin:'40px'}}/>
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/Group 179.png" width="170px" height="auto" style={{margin:'40px'}}/>
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/Group 180.png" width="170px" height="auto" style={{margin:'40px'}}/>    
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/Group 181.png" width="170px" height="auto" style={{margin:'40px'}}/>
                    </div>
                    <div className="col-lg-4">
                        <img src="assets/images/Group 182.png" width="170px" height="auto" style={{margin:'40px'}}/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default About
