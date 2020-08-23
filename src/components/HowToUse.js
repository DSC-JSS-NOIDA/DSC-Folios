import React, { Component } from 'react'


export class HowToUse extends Component {

    constructor(props) {
        super(props);

        this.onClickUse = this.onClickUse.bind(this);
        this.onClickBuilt = this.onClickBuilt.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickShare = this.onClickShare.bind(this);

        const img0 = require("../images/Group135.png");
        const img1 = require("../images/Group134.png");
        const img2 = require("../images/Group139.png");
        const img3 = require("../images/Group135.png");

        this.state = {
            index: 0,
            imgList: [img0,img1,img2,img3],
        }
    }

    onClickUse(){
        this.setState({
            index: 0
        })
    }
    onClickBuilt(){
        this.setState({
            index:1
        });
    }
    onClickEdit(){
        this.setState({
            index: 2
        })
    }
    onClickShare(){
        this.setState({
            index:3
        })
    }

    render() {
        return (
            <div id="howtouse" className="container" style={{marginTop:'70px'}}>
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-xs-12 col-xl-4">
                        <ul>
                            <li>
                                <h6 onClick={this.onClickUse} className="howtouse"><b>How To USE</b></h6>
                                <p className="para">Keep all your important links on your finger tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                                <hr/>
                            </li>
                            <li>
                                <h6 onClick={this.onClickBuilt} className="howtouse"><b>How to Built</b></h6>
                                <p className="para">Keep all your important links on your finger tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                                <hr/>
                            </li>
                            <li>
                                <h6 onClick={this.onClickEdit} className="howtouse"><b>How to Edit</b></h6>
                                <p className="para">Keep all your important links on your finger tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                                <hr/>
                            </li>
                            <li>
                                <h6 onClick={this.onClickShare} className="howtouse"><b>How To Share</b></h6>
                                <p className="para">Keep all your important links on your finger tips and such easy sharing is never possible before. An ideal place to keep and share your presence.</p>
                                <hr/>
                            </li>
                        </ul>
                    </div>
                        <div className="col-lg-8 col-sm-12 col-xs-12 col-xl-8">
                            <center>
                            <img src={this.state.imgList[this.state.index]}  alt="" style={{marginTop:'30px',maxWidth:'100%', maxHeight:'100%'}}/>
                            </center>
                        </div>
                </div>
            </div>
        )
    }
}

export default HowToUse
