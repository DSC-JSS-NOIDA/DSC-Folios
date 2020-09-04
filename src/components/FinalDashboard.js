import React, { Component } from 'react';
import LinkSet1 from './LinkSet1.js';
import SocialMediaLinks from './SocialMediaLinks.js';
import LinkSet2 from './LinkSet2.js';
import {DATA} from '../data.js';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Share from './Share';

export class FinalDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      person: {},
      isShareModalOpen: false
    };
    this.toggleModalShare = this.toggleModalShare.bind(this)
  }

  toggleModalShare(){
    this.setState({
        isShareModalOpen: !this.state.isShareModalOpen
    });
}

 async componentDidMount() {
   //const url = "https://api.randomuser.me/";
   //const response = await fetch(url);
   const data = DATA;
   this.setState({ person: data, loading: false });
 }
  
    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
        return (
            <div className="container" style={{backgroudColor:'#f5f5f5'}}>
                <div className="row">
                  <div className="col-lg-5" style={{marginTop:'30px'}}>
                    <center>
                        <img src='https://i.imgur.com/cNPpPY0.png' style={{textAlign:'center',height:'240px',width:'auto',paddingBottom:'30px'}} alt="img"/>
                        <p style={{fontSize:'22px',fontFamily: 'Airbnb Cereal App'}}>Hi, My name is {this.state.person.display_name}</p>
                        <p style={{fontSize:'16px',fontFamily: 'Airbnb Cereal App',color: '#989898'}}>{this.state.person.description}</p>
                          <div className="row">
                              <div className="mx-auto">
                                  <SocialMediaLinks socialLinks={this.state.person}/>
                              </div>
                          </div>
                    </center>
                  </div>
                  <div className="col-lg-7">
                    <div className="pr-1 pl-3">
                      <div className="w-100">
                        <div><span style={{fontSize:'22px',fontFamily: 'Airbnb Cereal App'}}>{this.state.person.link_set1_name}</span>
                        
                          <a href="#" style={{margin:'10px',float:'right'}}><img src="assets/images/Group 115.jpeg" style={{width:'auto',height:'40px'}}/></a>
                          <a href="#" style={{margin:'10px',float:'right'}}><img src="assets/images/Group 116.jpeg" style={{width:'auto',height:'40px'}}/></a>               
                        </div>
                      </div>
                      <LinkSet1 projectLinks={this.state.person}/>
                      <br/>
                      <span style={{fontSize:'22px',fontFamily: 'Airbnb Cereal App'}}>{this.state.person.link_set2_name}</span>
                      <LinkSet2 blogLinks={this.state.person}/>
                      <a href="#" class="float" onClick={this.toggleModalShare}><i class="fa fa-share my-float"></i></a>
                    </div>
                  </div>
                </div>

                <Modal isOpen={this.state.isShareModalOpen} toggle={this.toggleModalShare}>
                    <ModalHeader toggle={this.toggleModalShare}>Share your Portfolio</ModalHeader>
                    <ModalBody>
                        <Share/>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

export default FinalDashboard
