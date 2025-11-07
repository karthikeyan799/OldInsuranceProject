import React, { Component } from 'react'
import { Button, Card, CardGroup, Col, Container, InputGroup, Row } from 'react-bootstrap';

export default class Log2in extends Component {
  constructor(){
    super();
    this.state={
        Email:'',
        Password:''
    }
    this.Password=this.Password.bind(this);
    this.Email=this.Email.bind(this);
    this.login=this.login.bind(this);
  }
  Email(event){
    this.setState({Email:event.target.value})
  }
  Password(event){
    this.setState({Password:event.target.value})
  }
  login(event){
    debugger;
    
    fetch('http:localhost//8080/',{
        method:'POST',
        headers:{
            'Accept':'aplication/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({Email:this.state.Email,
        Password:this.state.Password})
    }).then((Response)=>Response.json())
    .then((result)=>{
        console.log(result);
        if(result.Status=='Invalid')
        alert('invalid');
    else
    this.props.history.push("/dash");
    })
}
  
    render() {
    return (
      <div className='flex-row align-items-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='9' lg='7' xl='6'>
              <CardGroup>
                <Card className="p-2">
                  <Card Body>
                    <form>
                      <div class='row' className='mb-2 pageheading'>
                        <div class='col-sm-12 btn btn-primary'>Login</div>
                      </div>
                      <InputGroup className='mb-3'>
                        <input type='text' onChange={this.Email}placeholder='Enter Email'/>
                      </InputGroup>
                      <InputGroup className='mb-4'>
                        <input type='password' onChange={this.Password}placeholder='Enter Password'/>
                      </InputGroup>
                      <Button onClick={this.login} color='success'block>Login</Button>
                    </form>
                  </Card>
                </Card>
              </CardGroup>
            </Col>
            </Row></Container>logsin</div>
    )
  }
}
