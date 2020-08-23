import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class PageOne extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-lg-5 homecontent" style={{marginTop:'70px',paddingRight:'30px'}}>
                        <h2 className="heading_one">Bring all of your links<br/> in one place</h2><br/>
                        <p>Keep all your important links on your fingure tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                        <br/>
                        <button type="button" className="btn buttons" style={{width:'200px', height:'auto',color:'#ffffff',fontSize:'15px'}} >Sign Up for FREE</button>
                        <br/><br/>
                        <img src="assets/images/img2.png" width="170px" height="35px" alt="img"/>
                    </div>
                    <div className="col-lg-7">
                        <center><img className="homepage-img" src="assets/images/img1.svg" style={{textAlign:'center', maxWidth:'100%', maxHeight:'100%'}} width="auto" alt="img"/></center>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageOne;
