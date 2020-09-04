import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export class LinkSet1 extends Component {
  constructor(props){
    super(props);

    this.state={
      copied: false,
    };
  }
    render() {
      const linkset1 = this.props.projectLinks.set1_links.map((linkset)=> {
        return (
          <div className="card no-gutters shadow-sm mb-2 bg-white rounded" key={linkset.id}>
          <div className="card-body w-100">
              <span style={{fontSize:'16px',fontFamily: 'Airbnb Cereal App',color:'#8D54C2'}}><strong>{linkset.link_heading}</strong></span><br/>
              <span style={{fontSize:'14px',fontFamily: 'Airbnb Cereal App',color: '#989898'}}>{linkset.link_url}</span>
              <CopyToClipboard text={linkset.link_url} onCopy={() => this.setState({copied: true})}>
                <a onClick="return false" href="#"><img className="mr-auto" src="assets/images/Group 104.svg" style={{width:'30px',height:'30px',margin:'5px',float:'right'}}/></a>
              </CopyToClipboard>
              <a className="mr-auto" style={{float:'right'}} href={linkset.link_url} target="_blank"><img src="assets/images/Group 103.svg" style={{width:'30px',height:'30px',margin:'5px'}}/></a>
              {this.state.copied ? <span style={{color: 'green'}}>Copied.</span> : null}
          </div>
        </div>
        );
      });
      return(
        <div>{linkset1}</div>
        );
    }
}

export default LinkSet1
