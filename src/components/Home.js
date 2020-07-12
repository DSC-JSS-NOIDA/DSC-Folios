import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class PageOne extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-lg-5" classname="homecontent" style={{marginTop:'70px',paddingRight:'30px'}}>
                        <h2 className="heading_one">Bring all of your links<br/> in one place</h2><br/>
                        <p>Keep all your important links on your fingure tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                        <br/>
                        <Link to='/signup'><button type="button" className="btn btn-primary" style={{width:'200px', height:'auto'}} >Sign Up for FREE</button></Link>
                        <br/><br/>
                        <img src="assets/images/img2.svg" width="170px" height="35px" alt="img"/>
                    </div>
                    <div className="col-lg-7">
                        <center><img className="homepage-img" src="assets/images/img1.svg" width="auto" alt="img"/></center>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageOne;
