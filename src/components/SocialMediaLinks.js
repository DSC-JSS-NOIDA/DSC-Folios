import React, { Component } from 'react'

export class SocialMediaLinks extends Component {
  constructor(props){
    super(props);

    this.state={
      copied: false,
    };
  }
    render() {
        const socialLinks = this.props.socialLinks.social_links.map((socialLink)=>{
            if(socialLink.link_name==="Behance"){
                return (
                        <a href={socialLink.link_url}><img src="assets/images/Mask Group(4).svg" style={{width:'25px',height:'25px',margin:'5px'}}/></a>
                );
            };
            if(socialLink.link_name==="LinkedIn"){
                return (
                        <a href={socialLink.link_url}><img src="assets/images/Mask Group.png" style={{width:'25px',height:'25px',margin:'5px'}}/></a>
                );
            };
            if(socialLink.link_name==="Github"){
                return (
                        <a href={socialLink.link_url}><img src="assets/images/Mask Group(3).svg" style={{width:'25px',height:'25px',margin:'5px'}}/></a>
                );
            };
            if(socialLink.link_name==="Twitter"){
                return (
                        <a href={socialLink.link_url}><img src="assets/images/Mask Group(2).svg" style={{width:'25px',height:'25px',margin:'5px'}}/></a>
                );
            };
        });
        
        return(
            <div>{socialLinks}</div>
        )
    }
}

export default SocialMediaLinks