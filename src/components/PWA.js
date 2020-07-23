import React, { Component } from 'react'

export class PWA extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:'40px'}}>
            <div className="row">
                <div className="col-lg-5" style={{marginTop:'60px',paddingRight:'30px'}}>
                    <h2 style={{color:'#4285F4',fontWeight:'bold'}}>Introducing the<br/>power of PWA.</h2><br/>
                    <p>You can easily add your whole profile on the home screen of your mobile devices and access your links <span>offline</span> too.</p>
                    <br/>
                </div>
                <div className="col-lg-7">
                    <img src="assets/images/Group 152.svg"  style={{textAlign:'center', maxWidth:'100%', maxHeight:'100%'}} alt="img"/>
                </div>
            </div>
        </div>
        )
    }
}

export default PWA
