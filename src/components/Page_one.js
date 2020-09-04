import React, { Component } from 'react'


export class PageOne extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:'40px'}}>
                <div className="row">
                    <div className="col-lg-5" style={{marginTop:'60px',paddingRight:'30px'}}>
                        <h2 style={{color:'#4285F4',fontWeight:'bold'}}>Bring all of your links<br/> in one place</h2><br/>
                        <p>Keep all your important links on your finger tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                        <br/>
                        <a href="#"><img src="assets/images/img3.svg" width="200px" height="auto"/></a>
                        <br/><br/>
                        <img src="assets/images/img2.svg" width="170px" height="20px"/>
                    </div>
                    <div className="col-lg-7">
                        <img src="assets/images/img1.png" style={{textAlign:'center', maxWidth:'100%', maxHeight:'100%'}} alt="img"/>
                    </div> 
                </div>
            </div>
        )
    }
}

export default PageOne;
