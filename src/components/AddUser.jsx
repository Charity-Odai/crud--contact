import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class AddUser extends Component {
        constructor(props){
            super(props)
            this.state={name:'',email:'',contact:0}
        }

        handleInput=(c)=>{
            this.setState({[c.target.name]:c.target.value})
        }
        onSubmit=(s)=>{
            s.preventDefault()
            this.props.newUser(this.state)
            console.log(this.state)
        }



  render() {
    return (
        <Form onSubmit={this.onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" name='name' value={this.state.name} onChange={this.handleInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleInput}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGen">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="number" placeholder="Contact" name='contact' value={this.state.contact} onChange={this.handleInput}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
  }
}
