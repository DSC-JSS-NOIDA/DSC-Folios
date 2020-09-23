import React, { Component } from 'react';
import SocialMediaLinks from './SocialMediaLinks.js';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
export class Portfolio extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      person: {},
      copied: false,
    };
    
  }
  copy=()=>{ 
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

  async componentWillMount() {
    console.log(window.location.pathname);
  const url = `/details${window.location.pathname}`;
  const response = await fetch(url);
  const data = await response.json();
  this.setState({ person: data, loading: false });
}
  
    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
        const linkset1 = this.state.person.set1_links.map((linkset)=> {
          return (
            <div className="card no-gutters shadow-sm mb-2 bg-white rounded" key={linkset.id}>
            <div className="card-body w-100">
                <span style={{fontSize:'16px',fontFamily: 'Airbnb Cereal App',color:'#8D54C2'}}><strong>{linkset.link_heading}</strong></span><br/>
                <span style={{fontSize:'14px',fontFamily: 'Airbnb Cereal App',color: '#989898'}}>{linkset.link_url}</span>
                
                <a className="mr-auto" style={{float:'right'}} href={linkset.link_url} target="_blank"><img src="https://i.ibb.co/n0K077p/Group-103.png" style={{width:'30px',height:'30px',margin:'5px'}}/></a>
                <CopyToClipboard text={linkset.link_url} onCopy={this.copy}>
                  <img className="mr-auto" src="https://i.ibb.co/3vmC9GS/Group-104.png" style={{width:'30px',height:'30px',margin:'5px',float:'right',cursor:'pointer'}}/>
                </CopyToClipboard>
            </div>
          </div>
          );
        });
        const linkset2 = this.state.person.set2_links.map((linkset)=> {
          return (
            <div className="card shadow-sm mb-2 bg-white rounded" key={linkset.id}>
            <div className="card-body w-100">
                  <span style={{fontSize:'16px',fontFamily: 'Airbnb Cereal App',color:'#8D54C2'}}><strong>{linkset.link_heading}</strong></span><br/>
                  <span style={{fontSize:'14px',fontFamily: 'Airbnb Cereal App',color: '#989898'}}>{linkset.link_url}</span>
                  
                  <a className="mr-auto" style={{float:'right'}} href={linkset.link_url} target="_blank"><img src="https://i.ibb.co/n0K077p/Group-103.png" style={{width:'30px',height:'30px',margin:'5px'}}/></a>
                  <CopyToClipboard text={linkset.link_url} onCopy={this.copy}>
                    <img className="mr-auto" src="https://i.ibb.co/3vmC9GS/Group-104.png" style={{width:'30px',height:'30px',margin:'5px',float:'right',cursor:'pointer'}}/>
                  </CopyToClipboard>
              </div>
          </div>
          );
        });
        return (
            <div className="container" style={{backgroudColor:'#f5f5f5'}}>
              <div className="row">
              {this.state.copied ? <div className="alert alert-success" role="alert">Link Copied to Clipboard</div> : null}
              </div>
                <div className="row">
                  <div className="col-lg-5" style={{marginTop:'30px'}}>
                    <center>
                        <img src={this.state.person.profile_picture} style={{textAlign:'center',height:'240px',width:'auto',paddingBottom:'30px'}} alt="img"/>
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
                        
                          
                        {this.state.person.resume?<a href={this.state.person.resume} style={{margin:'10px',float:'right'}}><img src="/assets/images/Group 116.jpeg" style={{width:'auto',height:'40px'}}/></a> :null}      
                        </div>
                      </div>
                      <div>{linkset1}</div>
                      <br/>
                      <span style={{fontSize:'22px',fontFamily: 'Airbnb Cereal App'}}>{this.state.person.link_set2_name}</span>
                      <div>{linkset2}</div>
                      
                    </div>
                  </div>
                </div>

            </div>
        )
    }
}

export default Portfolio