import React, { Component } from 'react'

export class ImageUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profileImg:'assets/images/Group 87.png',
            // imgList: ['https://s3.amazonaws.com/codechef_shared/sites/default/files/uploads/pictures/c6dc329579138a7dcf2d8daec9ecbd81.jpg','https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg','https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png','https://propulsionsoftware.com/wp-content/uploads/2016/10/Quality-Avatar.jpg','https://cdn4.vectorstock.com/i/thumb-large/26/38/professional-programmer-charatcter-smiling-man-vector-21172638.jpg'],
        }
    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

      

    render() {
        return (
            <div className="custom-div upload" style={{height:'auto',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                <h6><b>Profile Picture</b></h6>
                <hr/>
                <div style={{height:'auto',borderStyle:'dashed',borderWidth:'1px',borderRadius:'5px',borderColor:'grey',padding:'15px'}}>
                    <center>
                    <img src={this.state.profileImg} alt="akan" style={{width:'40px',height:'40px',margin:'5px'}}/><br/>
                    <center><input type="file" name="profileImg" onChange={this.imageHandler} /></center>
                    </center>
                </div>
                <center><div style={{marginTop:'20px'}}>
                    <p><b>Or Select an Avatar</b></p>
                    <img src="assets/images/Avatar1.png" style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}} />
                    <img src="assets/images/Avatar2.png" style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                    <img src="assets/images/Avatar3.png" style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                    <img src="assets/images/Avatar4.png" style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                </div></center>
            </div>
        )
    }
}

export default ImageUpload







//<img src={this.state.imgList[this.state.index]}  alt="" style={{marginTop:'30px',maxWidth:'100%', maxHeight:'100%'}}/>
