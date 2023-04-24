import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Example() {
  const [show, setShow] = useState(false);
  const [id, setid] = useState(0);
  const [img, setimg] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [title, settTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addnewproduct = ()=>{
    var data={}
    data={
      id:id,
      img:img,
      price:price,
      quantity:quantity,
      title:title
    }
    localStorage.setItem("poste",JSON.stringify(data))
    handleClose()
  }
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        new product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>id</Form.Label>
        <Form.Control type="number" placeholder="Enter id" onChange={(event)=>setid(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>img</Form.Label>
        <Form.Control type="text" placeholder="Enter your img" onChange={(event)=>setimg(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="Enter your price" onChange={(event)=>setPrice(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter your quantity"  onChange={(event)=>setQuantity(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter your quantity"  onChange={(event)=>settTitle(event.target.value)}/>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addnewproduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example