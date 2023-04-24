import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Example({productes}) {
  const [show, setShow] = useState(false);
  const [img, setimg] = useState("");
  const [price, setPrice] = useState(productes.price);
  const [quantity, setQuantity] = useState(productes.quantity);
  const [title, settTitle] = useState(productes.title);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateddnewproduct = ()=>{
var id=productes.id
console.log(id)

if(id){
  productes.price=price
  productes.quantity=quantity
  productes.title=title
}
localStorage.setItem("productes",JSON.stringify(productes))
    handleClose()
  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        update product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control type="text" placeholder="Enter your img" onChange={(event)=>setimg(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" onChange={(event)=>setPrice(event.target.value)}value={price} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter your quantity"  onChange={(event)=>setQuantity(event.target.value)}value={quantity}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter your quantity"  onChange={(event)=>settTitle(event.target.value)}value={title}/>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateddnewproduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example