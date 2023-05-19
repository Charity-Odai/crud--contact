import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap'
import AddUser from './components/AddUser';
import Users from './components/Users';

//email, name , gen[faisal,charity]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users : [
        {name:'Charity',email:'csa@gmail.com',contact:'0245527421'},
        {name:'Abena',email:'benna@gmail.com',contact:'0255247892'}
      ]
    }
  }

  addUser=(newuser)=>{
    this.setState({
      users:[...this.state.users,newuser]
    })
    console.log(this.state.users)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><AddUser newUser={this.addUser}/></Col>
          <Col xs={8}><Users allUsers={this.state.users}/></Col>
        </Row>
      </Container>
    )
  }
}

export default App
