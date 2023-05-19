import React from 'react'
import  Card from 'react-bootstrap/Card'

function UserCard(props) {
  return (
    <div>
        <Card style={{ textAlign:'center', backgroundColor:'pink' }}>
          <div>
          <Card.Img style={{width:'10rem',}}variant="top" src="https://api-private.atlassian.com/users/3b7bcfe9a49c10c518e688d6b7e17651/avatar" />
          </div>
        <Card.Body>
        <Card.Title>{props.userData.name}</Card.Title>
        <Card.Text>
          {props.userData.email}
        </Card.Text>
        <Card.Text>
          {props.userData.contact}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard