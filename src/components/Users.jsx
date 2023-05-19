import React from 'react'
import UserCard from './UserCard'
import { Container,Row,Col } from 'react-bootstrap'

function Users(props) {
    console.log(props.allUsers)
  return (
    <Container>
        <Row>
            <h2>Contact Details</h2>
            {
                props.allUsers.map((user,index)=>(
                    <Col>
                        <UserCard userData={user} sendDelete={props.deleteUser} id={index} sendEdit={props.editUser}/>
                    </Col>
                ))
            }
        </Row>
        

    </Container>
  )
}

export default Users