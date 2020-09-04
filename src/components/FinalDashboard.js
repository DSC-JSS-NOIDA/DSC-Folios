import React, { Component } from 'react';
import LinkSet1 from './LinkSet1.js';
import SocialMediaLinks from './SocialMediaLinks.js';
import LinkSet2 from './LinkSet2.js';
import {DATA} from '../data.js';
import {Button} from 'reactstrap';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  FacebookShareCount,
  WhatsappShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

export class FinalDashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      shareUrl:'https://caspg.com/react-sharingbuttons/',
      title : 'Portfolio',
      loading: true,
      person: {},
    };
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
                      <a href="#" class="float"><i class="fa fa-share my-float"></i></a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <FacebookShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <FacebookShareCount url={this.state.shareUrl}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                  </FacebookShareCount>

                  <WhatsappShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>

                  <TelegramShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>

                  <TwitterShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>


                  <LinkedinShareButton url={this.state.shareUrl}
                    title={this.state.title} className="Demo__some-network__share-button">
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>


                  <PinterestShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>


                  <VKShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <VKIcon size={32} round />
                  </VKShareButton>


                  <OKShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <OKIcon size={32} round />
                  </OKShareButton>
                
                
                  <RedditShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    windowWidth={660}
                    windowHeight={460}
                    className="Demo__some-network__share-button"
                  >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                
                
                  <TumblrShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"    >
                    <TumblrIcon size={32} round />
                  </TumblrShareButton>
                
                
                  <LivejournalShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <LivejournalIcon size={32} round />
                  </LivejournalShareButton>
                
                
                  <MailruShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <MailruIcon size={32} round />
                  </MailruShareButton>
                
                
                  <EmailShareButton
                    url={this.state.shareUrl}
                    subject={this.state.title}
                    body="body"
                    className="Demo__some-network__share-button"
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                
                
                  <ViberShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <ViberIcon size={32} round />
                  </ViberShareButton>
                
                
                  <WorkplaceShareButton
                    url={this.state.shareUrl}
                    quote={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <WorkplaceIcon size={32} round />
                  </WorkplaceShareButton>
                
                
                  <LineShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <LineIcon size={32} round />
                  </LineShareButton>
                
                
                  <PocketShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <PocketIcon size={32} round />
                  </PocketShareButton>
                
                
                  <InstapaperShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <InstapaperIcon size={32} round />
                  </InstapaperShareButton>

                </div>
            </div>
        )
    }
}

export default FinalDashboard
