import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export class LinkSet2 extends Component {
    constructor(props){
    super(props);

    this.state={
      copied: false,
    };
  }
  render() {
    const linkset2 = this.props.blogLinks.set2_links.map((linkset)=> {
      return (
        <div class="card" key={linkset.id}>
        <div class="card-body">
            <h6>{linkset.link_heading}</h6>
            <p>{linkset.link_url}</p>
            <CopyToClipboard className="mr-auto" text={linkset.link_url} onCopy={() => this.setState({copied: true})}>
              <button>Copy</button>
            </CopyToClipboard>
            <a href={linkset.link_url} target="_blank"> Go</a>
            {this.state.copied ? <span style={{color: 'green'}}>Copied.</span> : null}
        </div>
      </div>
      );
    });

    return(
    <div>{linkset2}</div>
    );
  }
}

export default LinkSet2
