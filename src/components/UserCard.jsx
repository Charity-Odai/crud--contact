
import  {Card, Button,Modal} from 'react-bootstrap'
import { useState } from 'react'
import EditUser from './EditUser';




function UserCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <EditUser userData={props.userData} sendEditUser={props.sendEdit} closeModal={handleClose}/> </Modal.Body>

      </Modal>
      {/* end of modal */}
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
        <Button variant="primary" onClick={handleShow}>Edit</Button>{' '}
        <Button variant="danger" onClick={()=>props.sendDelete(props.id)}>Remove</Button>{' '}
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard