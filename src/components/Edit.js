import React, { useState,useEffect } from 'react'
import { Button,Form,FormGroup, Input, Col, Label } from 'reactstrap';
import {DATA} from '../data.js';
import { useHistory } from 'react-router'
import axios from 'axios';

function Edit() {
    const [ownerState, setOwnerState] = useState({
        displayname: '',
        description: '',
        setname1:'',
        setname2:'',
        Imagevalue: 'img',
        Resumelink: ''
    });
    const handleOwnerChange = (e) => setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });
    
    const [LinkSet1, setLinkSet1] = useState([{ linkHeading1: "", link1: "" }]);
    const [LinkSet2, setLinkSet2] = useState([{ linkHeading2: "", link2: "" }]);
    const [SocailLinks, setSocailLinks] = useState([{ Selected: "", link: "" },{ Selected: "", link: "" }]);


    // useEffect(() =>
    // fetch("/")
    //   .then(res => res.json())
    //   .then(res => this.setOwnerState({ displayname: res.display_name, description:res.description, setname1:res.link_set1_name, setname2:res.link_set2_name, Imagevalue:res.profile_picture, Resumelink:res.resume}))
    //   .then(res => this.setLinkSet1({LinkSet1:res.set1_links}))
    //   .then(res => this.setLinkSet2({LinkSet2:res.set2_links}))
    //   .catch(() => this.setState({ hasErrors: true }))
    // );
 
    //const history = useHistory()
    
    useEffect(() => {
        fetch("/")
            .then(res => res.json())
            .then(res => {
                        
                if(res.set1_links.length==1){
                    setLinkSet1([{ linkHeading1: res.set1_links[0].link_heading, link1: res.set1_links[0].link_url }])
                }
                else if(res.set1_links.length==2){
                    setLinkSet1([{ linkHeading1: res.set1_links[0].link_heading, link1: res.set1_links[0].link_url },{ linkHeading1: res.set1_links[1].link_heading, link1: res.set1_links[1].link_url }])
                }
                else if(res.set1_links.length==3){
                    setLinkSet1([{ linkHeading1: res.set1_links[0].link_heading, link1: res.set1_links[0].link_url },{ linkHeading1: res.set1_links[1].link_heading, link1: res.set1_links[1].link_url },{ linkHeading1: res.set1_links[2].link_heading, link1: res.set1_links[2].link_url }])
                }
                else if(res.set1_links.length==4){
                    setLinkSet1([{ linkHeading1: res.set1_links[0].link_heading, link1: res.set1_links[0].link_url },{ linkHeading1: res.set1_links[1].link_heading, link1: res.set1_links[1].link_url },{ linkHeading1: res.set1_links[2].link_heading, link1: res.set1_links[2].link_url }])
                };
                //setLinkSet1([{ linkHeading1: res.set1_links[0].link_heading, link1: res.set1_links[0].link_url },{ linkHeading1: res.set1_links[1].link_heading, link1: res.set1_links[1].link_url }])
                setOwnerState({ displayname: res.display_name, description:res.description, setname1:res.link_set1_name, setname2:res.link_set2_name, Imagevalue:res.profile_picture, Resumelink:res.resume})
        
                if(res.set2_links.length==1){
                    setLinkSet2([{ linkHeading2: res.set2_links[0].link_heading, link2: res.set2_links[0].link_url }])
                }
                else if(res.set2_links.length==2){
                    setLinkSet2([{ linkHeading2: res.set2_links[0].link_heading, link2: res.set2_links[0].link_url },{ linkHeading2: res.set2_links[1].link_heading, link2: res.set2_links[1].link_url }])
                }
                else if(res.set2_links.length==3){
                    setLinkSet2([{ linkHeading2: res.set2_links[0].link_heading, link2: res.set2_links[0].link_url },{ linkHeading2: res.set2_links[1].link_heading, link2: res.set2_links[1].link_url },{ linkHeading2: res.set2_links[2].link_heading, link2: res.set2_links[2].link_url }])
                }
                else if(res.set2_links.length==4){
                    setLinkSet2([{ linkHeading2: res.set2_links[0].link_heading, link2: res.set2_links[0].link_url },{ linkHeading2: res.set2_links[1].link_heading, link2: res.set2_links[1].link_url },{ linkHeading2: res.set2_links[2].link_heading, link2: res.set2_links[2].link_url },{ linkHeading2: res.set2_links[3].link_heading, link2: res.set2_links[3].link_url }])
                };
                /////////
        
                if(res.social_links.length==1){
                    setSocailLinks([{ Selected: res.social_links[0].link_name, link: res.social_links[0].link_url }])
                }
                else if(res.social_links.length==2){
                    setSocailLinks([{ Selected: res.social_links[0].link_name, link: res.social_links[0].link_url },{ Selected: res.social_links[1].link_name, link: res.social_links[1].link_url }])
                }
                else if(res.social_links.length==3){
                    setSocailLinks([{ Selected: res.social_links[0].link_name, link: res.social_links[0].link_url },{ Selected: res.social_links[1].link_name, link: res.social_links[1].link_url },{ Selected: res.social_links[2].link_name, link: res.social_links[2].link_url }])
                }
                else if(res.social_links.length==4){
                    setSocailLinks([{ Selected: res.social_links[0].link_name, link: res.social_links[0].link_url },{ Selected: res.social_links[1].link_name, link: res.social_links[1].link_url },{ Selected: res.social_links[2].link_name, link: res.social_links[2].link_url },{ Selected: res.social_links[3].link_name, link: res.social_links[3].link_url }])
                };

            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    const handleSubmit=(event)=> {
        event.preventDefault();
        var formData = new FormData(event.target);
        formData.append('Imagevalue', `${ownerState.Imagevalue}`);
        
        for (var value of formData.values()) {
            console.log(value); 
         }
        
        axios({
          method: "POST", 
          url:"http://localhost:3000/build", 
          data: formData
        })
        .then((response)=>{
          if (response.data.status === 'success'){
            console.log("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            console.log("Message failed to send.");
          }
        })
    }
    
    const uploadImage=()=> {
        const r = new XMLHttpRequest()
        const d = new FormData()
        const e = document.getElementsByClassName('input-image')[0].files[0]
        const client = '56ecb6f5d09d40e'
        var u
        var response = null
        d.append('image', e)
    
        r.open('POST', 'https://api.imgur.com/3/image/')
        r.setRequestHeader('Authorization', `Client-ID ${client}`)
        r.onreadystatechange = function () {
          
          if(r.status === 200 && r.readyState === 4) {
            let res = JSON.parse(r.responseText)
            console.log(res)
            response = res;
            u = `https://i.imgur.com/${res.data.id}.png`           
            if(response){
                setOwnerState({
                    ...ownerState,
                    Imagevalue: response.data.link,
                });
            }
          }
        }
        r.send(d)   
      }
      

      // handle input change
    const handleInputChange1 = event => {
        const list = [...LinkSet1];
        list[event.target.dataset.idx][event.target.dataset.txt] = event.target.value;
    
        setLinkSet1(list);
    };
    // handle click event of the Add button
    const handleAddClick1 = () => {
        setLinkSet1([...LinkSet1, { linkHeading1: "", link1: "" }]);
    };

    // handle click event of the Remove button
    const handleRemoveClick1 = index => {
    const list = [...LinkSet1];
    list.splice(index, 1);
    setLinkSet1(list);
  };

    // handle input change
    const handleInputChange2 = event => {
        const list = [...LinkSet2];
        list[event.target.dataset.idx][event.target.dataset.txt] = event.target.value;
    
        setLinkSet2(list);
      };

    // handle click event of the Add button
    const handleAddClick2 = () => {
        setLinkSet2([...LinkSet2, { linkHeading2: "", link2: "" }]);
    };

       // handle click event of the Remove button
    const handleRemoveClick2 = index => {
        const list = [...LinkSet2];
        list.splice(index, 1);
        setLinkSet2(list);
      };

      // handle input change
    const handleInputChange3 = event => {
        const list = [...SocailLinks];
        list[event.target.dataset.idx][event.target.dataset.txt] = event.target.value;
    
        setSocailLinks(list);
    };
    
    // handle click event of the Add button
    const handleAddClick3 = () => {
        setSocailLinks([...SocailLinks, { Selected: "", link: "" }]);
    };
    
       // handle click event of the Remove button
    const handleRemoveClick3 = index => {
        const list = [...SocailLinks];
        list.splice(index, 1);
        setSocailLinks(list);
      };

    const avatarOne = () => {
        setOwnerState({
            ...ownerState,
            Imagevalue: 'https://i.imgur.com/5jaFtm4.png',
        });
    }
    const avatarTwo = () => {
        setOwnerState({
            ...ownerState,
            Imagevalue: 'https://i.imgur.com/cNPpPY0.png',
        });
    }
    const avatarThree = () => {
        setOwnerState({
            ...ownerState,
            Imagevalue: 'https://i.imgur.com/Hi362Ql.png',
        });
    }
    const avatarFour = () => {
        setOwnerState({
            ...ownerState,
            Imagevalue: 'https://i.imgur.com/UaH2t9J.png',
        });
    }
    

        return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="custom-div" style={{margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>About</b></p>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label style={{fontSize:'16px',color:'#404040'}} htmlFor="displayname" md={3}>Display Name</Label>
                        <Col md={9}>
                            <Input type="text" name="displayname" 
                                placeholder="John Doe"
                                className="form-control" value={ownerState.displayname}
                                onChange={handleOwnerChange}
                                 />
                        </Col>
                    </FormGroup>
                    <FormGroup className="form-group row">
                        <Label style={{fontSize:'16px',color:'#404040'}} htmlFor="description" md={3}>Description</Label>
                        <Col md={9}>
                            <Input type="textarea" name="description" value={ownerState.description}
                                onChange={handleOwnerChange}
                                placeholder="I am a product designer"
                                rows="4"
                                className="form-control" 
                                 />
                        </Col>
                    </FormGroup>
                    </div>
                </div>
                <div className="col-lg-6" style={{height:'auto'}}>
                    <div className="custom-div" style={{margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>Link Set 1</b></p>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label  style={{fontSize:'16px',color:'#404040'}} htmlFor="setname1" md={3}>Set Name</Label>
                        <Col md={9}>
                            <Input type="text" name="setname1" value={ownerState.setname1}
                                onChange={handleOwnerChange}
                                placeholder="Projects"
                                className="form-control"
                                 />
                        </Col>
                    </FormGroup>
                    <hr/>
                    {LinkSet1.map((x,i) => {
                        const linkHeading1 = `linkHeading1-${i}`;
                        const link1 = `link1-${i}`;
                        return (
                            <div key={`LinkSet1-${i}`}>
                            <FormGroup className="form-group row">
                                <Label style={{fontSize:'16px',color:'#404040'}} htmlFor={linkHeading1} md={3}>Link Heading</Label>
                                <Col md={9}>
                                    <Input type="text" name={linkHeading1} className="form-control" value={LinkSet1[i].linkHeading1}
                                        onChange={handleInputChange1}
                                        data-idx={i}
                                        data-txt="linkHeading1"
                                        id={linkHeading1}
                                        placeholder="Swiggy"
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Label  style={{fontSize:'16px',color:'#404040'}} htmlFor={link1} md={3}>Link</Label>
                                <Col md={9}>
                                    <Input type="text" name={link1} className="form-control" value={LinkSet1[i].link1}
                                        onChange={handleInputChange1}
                                        data-idx={i}
                                        data-txt="link1"
                                        id={link1}
                                        placeholder="Swiggy"
                                         />
                                </Col>
                            </FormGroup>
                            <hr/>
                            <div className="btn-box">
                                {LinkSet1.length - 1 === i&&LinkSet1.length <4 && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick1}/> <b>Add another Link</b></span>}
                                {i!==0 && LinkSet1.length - 1 === i && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick1(i)}>Remove</button>}
                            </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
                <div className="custom-div upload" style={{height:'auto',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>Profile Picture</b></p>
                    <hr/>
                    <div style={{height:'auto',borderStyle:'dashed',borderWidth:'1px',borderRadius:'5px',borderColor:'grey',padding:'15px'}}>
                        <center>        
                            {ownerState.Imagevalue && (
                              <img src={ownerState.Imagevalue} alt=" " className="displayed-image" style={{height:'80px',width:'auto',margin:'3px'}}/>
                            )}
                        <center><input type="file" name="profileImg" className="input-image" onChange={uploadImage}/></center>
                        </center>
                    </div>
                    <center><div style={{marginTop:'20px'}}>
                        <p style={{fontSize:'18px',color:'#363636'}}><b>Or Select an Avatar</b></p>
                        <img src="assets/images/Avatar1.png" onClick={avatarOne} style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}} />
                        <img src="assets/images/Avatar2.png" onClick={avatarTwo} style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                        <img src="assets/images/Avatar3.png" onClick={avatarThree} style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                        <img src="assets/images/Avatar4.png" onClick={avatarFour} style={{height:'80px',width:'auto',margin:'16px',cursor: 'pointer'}}/>
                    </div></center>
                </div>
                </div>
                <div className="col-lg-6" style={{height:'auto'}}>
                    <div className="custom-div" style={{margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>Link Set 2</b></p>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label style={{fontSize:'16px',color:'#404040'}} htmlFor="setname2" md={3}>Set Name</Label>
                        <Col md={9}>
                            <Input type="text" name="setname2" value={ownerState.setname2}
                                onChange={handleOwnerChange}
                                placeholder="Projects"
                                className="form-control" 
                                 />
                        </Col>
                    </FormGroup>
                    <hr/>
                    {LinkSet2.map((x,i) => {
                        const linkHeading2 = `linkHeading2-${i}`;
                        const link2 = `link2-${i}`;
                        return (
                            <div key={`LinkSet2-${i}`}>
                            <FormGroup className="form-group row">
                                <Label style={{fontSize:'16px',color:'#404040'}} htmlFor={linkHeading2} md={3}>Link Heading</Label>
                                <Col md={9}>
                                    <Input type="text" name={linkHeading2} className="form-control" value={LinkSet2[i].linkHeading2}
                                        data-idx={i}
                                        data-txt="linkHeading2"
                                        id={linkHeading2}
                                        onChange={handleInputChange2}
                                        placeholder="Swiggy"
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Label style={{fontSize:'16px',color:'#404040'}} htmlFor={link2} md={3}>Link</Label>
                                <Col md={9}>
                                    <Input type="text" name={link2} className="form-control" value={LinkSet2[i].link2}
                                        data-idx={i}
                                        data-txt="link2"
                                        id={link2}
                                        onChange={handleInputChange2}
                                        placeholder="Swiggy"
                                         />
                                </Col>
                            </FormGroup>
                            <hr/>
                            <div className="btn-box">
                                {LinkSet2.length - 1 === i&&LinkSet2.length <4 && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick2}/> <b>Add another Link</b></span>}
                                {i!==0 && LinkSet2.length - 1 === i && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick2(i)}>Remove</button>}
                            </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6" style={{}}>
                <div className="custom-div upload" style={{height:'230px',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>Resume Upload</b></p>
                    <hr/>
                    <center><div style={{marginTop:'20px'}}>
                        <p><b>Upload the link of resume</b></p>
                        <Input type="text" name="Resumelink" value={ownerState.Resumelink} onChange={handleOwnerChange}/>
                    </div></center>
                </div>
            </div>
            <div className="col-lg-6" style={{}}>
                <div className="custom-div upload" style={{height:'auto',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <p style={{fontSize:'18px',color:'#363636'}}><b>Social Media Links</b></p>
                    <hr/>

                    {SocailLinks.map((x,i) => {
                        const Selected = `Selected-${i}`;
                        const link = `link-${i}`;
                        return (
                            <div key={`SocailLinks-${i}`}>
                            <Label style={{fontSize:'16px',color:'#404040'}} style={{float:'left'}} md={4}>
                                <select className="form-control" name={Selected} className="form-control" data-idx={i} data-txt="Selected" id={Selected} value={SocailLinks[i].Selected} onChange={handleInputChange3}>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Github">Github</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Behance">Behance</option>
                                    <option value="Dribble">Dribble</option>
                                    <option value="Instagram">Instagram</option>
                                </select>
                            </Label>
                            <Col md={8}><Input className="form-control" name={link} data-idx={i} id={link} data-txt="link" value={SocailLinks[i].link} onChange={handleInputChange3} type="text"/></Col>

                            <hr/>
                            <div className="btn-box">
                                {SocailLinks.length - 1 === i&&SocailLinks.length <6 && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick3}/> <b>Add another Link</b></span>}
                                {i!==0 && SocailLinks.length - 1 === i && <a style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick3(i)}><i className="fa fa-minus-circle my-float"></i></a>}
                            </div>
                            </div>
                        );
                        })}


                    
                </div>
            </div>
            </div>
            <div className="row">
            <Button className="col-lg-12 buttons" type="submit" value="submit" style={{margin:'10px'}}>Submit and Continue</Button>
            </div>
            </Form>
        </div>
        )
    }

export default Edit

