import React, { Component } from 'react'

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
  

export class Share extends Component {

  constructor(props){
    super(props);

    this.state = {
      shareUrl: '',
      title : 'Portfolio',
    };
  }


  async componentWillMount() {
      const url = "/get-slug";
      const response = await fetch(url);
      const data = await response.json();
      
      this.setState({shareUrl: `${window.location.hostname}/portfolio/${data.key}`});
      
    }

    render() {
      console.log(this.props.slug);
        return (
                <div className="row" style={{padding:'20px'}}>
                  <FacebookShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={32} round style={{margin:'10px'}} />
                  </FacebookShareButton>
                  <FacebookShareCount url={this.state.shareUrl}>
                    {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                  </FacebookShareCount>

                  <WhatsappShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <WhatsappIcon size={32} round style={{margin:'10px'}}/>
                  </WhatsappShareButton>

                  <TelegramShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <TelegramIcon size={32} round style={{margin:'10px'}} />
                  </TelegramShareButton>

                  <TwitterShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <TwitterIcon size={32} round style={{margin:'10px'}} />
                  </TwitterShareButton>


                  <LinkedinShareButton url={this.state.shareUrl}
                    title={this.state.title} className="Demo__some-network__share-button">
                    <LinkedinIcon size={32} round style={{margin:'10px'}} />
                  </LinkedinShareButton>


                  <PinterestShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <PinterestIcon size={32} round style={{margin:'10px'}} />
                  </PinterestShareButton>


                  <VKShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <VKIcon size={32} round style={{margin:'10px'}} />
                  </VKShareButton>


                  <OKShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <OKIcon size={32} round style={{margin:'10px'}} />
                  </OKShareButton>
                
                
                  <RedditShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <RedditIcon size={32} round style={{margin:'10px'}} />
                  </RedditShareButton>
                
                
                  <TumblrShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"    >
                    <TumblrIcon size={32} round style={{margin:'10px'}} />
                  </TumblrShareButton>
                
                
                  <LivejournalShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <LivejournalIcon size={32} round style={{margin:'10px'}} />
                  </LivejournalShareButton>
                
                
                  <MailruShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <MailruIcon size={32} round style={{margin:'10px'}} />
                  </MailruShareButton>
                
                
                  <EmailShareButton
                    url={this.state.shareUrl}
                    subject={this.state.title}
                    body="body"
                    className="Demo__some-network__share-button"
                  >
                    <EmailIcon size={32} round style={{margin:'10px'}} />
                  </EmailShareButton>
                
                
                  <ViberShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <ViberIcon size={32} round style={{margin:'10px'}} />
                  </ViberShareButton>
                
                
                  <WorkplaceShareButton
                    url={this.state.shareUrl}
                    quote={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <WorkplaceIcon size={32} round style={{margin:'10px'}} />
                  </WorkplaceShareButton>
                
                
                  <LineShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <LineIcon size={32} round style={{margin:'10px'}} />
                  </LineShareButton>
                
                
                  <PocketShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <PocketIcon size={32} round style={{margin:'10px'}} />
                  </PocketShareButton>
                
                
                  <InstapaperShareButton
                    url={this.state.shareUrl}
                    title={this.state.title}
                    className="Demo__some-network__share-button"
                  >
                    <InstapaperIcon size={32} round style={{margin:'10px'}} />
                  </InstapaperShareButton>
                  
                </div>
           
        )
    }
}

export default Share
