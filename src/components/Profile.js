import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{padding:'50px'}}>
                        <img src="assets/images/Avatar2.svg" style={{marginTop:'30px',maxWidth:'100%', maxHeight:'100%'}} />
                    </div>
                    <div className="col-lg-6">
                        rightdiv
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
