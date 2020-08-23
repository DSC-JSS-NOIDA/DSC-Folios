import React, { useState } from 'react'
import { Button,Form,FormGroup, Input, Col, Label } from 'reactstrap';
import ImageUpload from './ImageUpload';
import axios from 'axios';

function Build() {
    const [ownerState, setOwnerState] = useState({
       displayname: '',
       description: '',
       setname1:'',
       setname2:'',
       Imagevalue: '',
       Resumevalue: '',
       Resumelink: ''

    });
    const handleOwnerChange = (e) => setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });
    
    const [LinkSet1, setLinkSet1] = useState([{ linkHeading1: "", link1: "" }]);
    const [LinkSet2, setLinkSet2] = useState([{ linkHeading2: "", link2: "" }]);
    const [SocailLinks, setSocailLinks] = useState([{ Selected: "", link: "" },{ Selected: "", link: "" }]);

    const handleSubmit=(event)=> {
        event.preventDefault();
        const data = new FormData(event.target);
        axios({
            method: "POST", 
            url:"http://localhost:3000/build", 
            data: data
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


        return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="custom-div" style={{margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <h6><b>About</b></h6>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label htmlFor="displayname" md={3}>Display Name</Label>
                        <Col md={9}>
                            <Input type="text" name="displayname" 
                                placeholder="John Doe"
                                className="form-control" value={ownerState.displayname}
                                onChange={handleOwnerChange}
                                 />
                        </Col>
                    </FormGroup>
                    <FormGroup className="form-group row">
                        <Label htmlFor="description" md={3}>Description</Label>
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
                    <h6><b>Link Set 1</b></h6>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label htmlFor="setname1" md={3}>Set Name</Label>
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
                                <Label htmlFor={linkHeading1} md={3}>Link Heading</Label>
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
                                <Label htmlFor={link1} md={3}>Link</Label>
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
                                {LinkSet1.length - 1 === i && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick1}/> <b>Add another Link</b></span>}
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
                    <ImageUpload/>
                </div>
                <div className="col-lg-6" style={{height:'auto'}}>
                    <div className="custom-div" style={{margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <h6><b>Link Set 2</b></h6>
                    <hr/>
                    <FormGroup className="form-group row">
                        <Label htmlFor="setname2" md={3}>Set Name</Label>
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
                                <Label htmlFor={linkHeading2} md={3}>Link Heading</Label>
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
                                <Label htmlFor={link2} md={3}>Link</Label>
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
                                {LinkSet2.length - 1 === i && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick2}/> <b>Add another Link</b></span>}
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
                <div className="custom-div upload" style={{height:'300px',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <h6><b>Resume Upload</b></h6>
                    <hr/>
                    <div style={{height:'100px',borderStyle:'dashed',borderWidth:'1px',borderRadius:'5px',borderColor:'grey',padding:'30px'}}>
                    <center><input type="file" name="Resumevalue" value={ownerState.Resumevalue} onChange={handleOwnerChange}/></center>
                    </div>
                    <center><div style={{marginTop:'20px'}}>
                        <p><b>Or upload the link of resume</b></p>
                        <Input type="text" name="Resumelink" value={ownerState.Resumelink} onChange={handleOwnerChange}/>
                    </div></center>
                </div>
            </div>
            <div className="col-lg-6" style={{}}>
                <div className="custom-div upload" style={{height:'auto',margin:'30px',backgroundColor:'#f5f5f5',padding:'15px',borderRadius:'6px'}}>
                    <h6><b>Social Media Links</b></h6>
                    <hr/>

                    {SocailLinks.map((x,i) => {
                        const Selected = `Selected-${i}`;
                        const link = `link-${i}`;
                        return (
                            <div key={`SocailLinks-${i}`}>
                            <Label style={{float:'left'}} md={4}>
                                <select className="form-control" name={Selected} className="form-control" data-idx={i} data-txt="Selected" id={Selected} value={SocailLinks[i].Selected} onChange={handleInputChange3}>
                                    <option value="Behance">Behance</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Github">Github</option>
                                    <option value="Twitter">Twitter</option>
                                </select>
                            </Label>
                            <Col md={8}><Input className="form-control" name={link} data-idx={i} id={link} data-txt="link" value={SocailLinks[i].link} onChange={handleInputChange3} type="text"/></Col>

                            <hr/>
                            <div className="btn-box">
                                {SocailLinks.length - 1 === i && <span><img src="assets/images/Group 102.png" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick3}/> <b>Add another Link</b></span>}
                                {i!==0 && SocailLinks.length - 1 === i && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick3(i)}>Remove</button>}
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



export default Build

