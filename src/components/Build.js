import React, { useState } from 'react'
import { Button,Form,FormGroup,FormFeedback, Input, Col, Label } from 'reactstrap';
import ImageUpload from './ImageUpload';

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
    
    const [LinkSet1, setLinkSet1] = useState([{ linkHeading: "", link: "" }]);
    const [LinkSet2, setLinkSet2] = useState([{ linkHeading: "", link: "" }]);
    const [SocailLinks, setSocailLinks] = useState([{ Selected: "", link: "" },{ Selected: "", link: "" }]);

    const handleSubmit=(event)=> {
        console.log('Current State is: ' + JSON.stringify(event.target));
        alert('Current State is: ' + JSON.stringify(event.target));
        const data = new FormData(event.target);
        
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
        event.preventDefault();
    }

      // handle input change
    const handleInputChange1 = (e, index) => {
      const { name, value } = e.target;
      const list = [...LinkSet1];
      list[index][name] = value;
      setLinkSet1(list);
    };

    // handle click event of the Add button
    const handleAddClick1 = () => {
        setLinkSet1([...LinkSet1, { linkHeading: "", link: "" }]);
    };

    // handle click event of the Remove button
const handleRemoveClick1 = index => {
    const list = [...LinkSet1];
    list.splice(index, 1);
    setLinkSet1(list);
  };

    // handle input change
    const handleInputChange2 = (e, index) => {
      const { name, value } = e.target;
      const list = [...LinkSet2];
      list[index][name] = value;
      setLinkSet2(list);
    };

    // handle click event of the Add button
    const handleAddClick2 = () => {
        setLinkSet2([...LinkSet2, { linkHeading: "", link: "" }]);
    };

       // handle click event of the Remove button
    const handleRemoveClick2 = index => {
        const list = [...LinkSet2];
        list.splice(index, 1);
        setLinkSet2(list);
      };

      // handle input change
    const handleInputChange3 = (e, index) => {
        const { name, value } = e.target;
        const list = [...SocailLinks];
        list[index][name] = value;
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
                        <Label htmlFor="setname" md={3}>Set Name</Label>
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
                        return (
                            <>
                            <FormGroup className="form-group row">
                                <Label htmlFor="linkHeading" md={3}>Link Heading</Label>
                                <Col md={9}>
                                    <Input type="text" name="linkHeading" value={x.linkHeading}
                                        onChange={e => handleInputChange1(e, i)}
                                        placeholder="Swiggy"
                                        className="form-control" 
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Label htmlFor="link" md={3}>Link</Label>
                                <Col md={9}>
                                    <Input type="text" name="link" value={x.link}
                                        onChange={e => handleInputChange1(e, i)}
                                        placeholder="Swiggy"
                                        className="form-control" 
                                         />
                                </Col>
                            </FormGroup>
                            <hr/>
                            <div className="btn-box">
                                {LinkSet1.length - 1 === i && <span><img src="assets/images/Group 102.svg" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick1}/> <b>Add another Link</b></span>}
                                {i!=0 && LinkSet1.length - 1 === i && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick1(i)}>Remove</button>}
                            </div>
                            </>
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
                        <Label htmlFor="setname" md={3}>Set Name</Label>
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
                        return (
                            <>
                            <FormGroup className="form-group row">
                                <Label htmlFor="linkHeading" md={3}>Link Heading</Label>
                                <Col md={9}>
                                    <Input type="text" name="linkHeading" value={x.linkHeading}
                                        onChange={e => handleInputChange2(e, i)}
                                        placeholder="Swiggy"
                                        className="form-control" 
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup className="form-group row">
                                <Label htmlFor="link" md={3}>Link</Label>
                                <Col md={9}>
                                    <Input type="text" name="link" value={x.link}
                                        onChange={e => handleInputChange2(e, i)}
                                        placeholder="Swiggy"
                                        className="form-control" 
                                         />
                                </Col>
                            </FormGroup>
                            <hr/>
                            <div className="btn-box">
                                {LinkSet2.length - 1 === i && <span><img src="assets/images/Group 102.svg" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick2}/> <b>Add another Link</b></span>}
                                {i!=0 && LinkSet2.length - 1 === i && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick2(i)}>Remove</button>}
                            </div>
                            </>
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
                        return (
                            <>
                            <Label style={{float:'left'}} md={4}>
                                <select name="Selected" value={x.Selected} onChange={e => handleInputChange3(e, i)}>
                                    <option value="Behance">Behance</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Github">Github</option>
                                    <option value="Twitter">Twitter</option>
                                </select>
                            </Label>
                            <Col md={8}><Input name="link" value={x.link} onChange={e => handleInputChange3(e, i)} type="text"/></Col>

                            <hr/>
                            <div className="btn-box">
                                {SocailLinks.length - 1 === i && <span><img src="assets/images/Group 102.svg" style={{height:'40px',width:'auto',cursor: 'pointer',margin:'5px'}} onClick={handleAddClick3}/> <b>Add another Link</b></span>}
                                {i!=0 && SocailLinks.length !== 1 && <button style={{float:'right'}} className="mr10" onClick={() => handleRemoveClick3(i)}>Remove</button>}
                            </div>
                            </>
                        )
                        })};


                    
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
