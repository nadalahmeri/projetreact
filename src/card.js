import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState
} from 'react'
import  Modal1 from'./Modal1';


function BasicExample({product,producte}) {
  
  // const [prix,setPrix]=useState(3000)
  const [quantité,setQuantité]=useState(1)

  const handlequantityplus=()=>{
  
    setQuantité(quantité<product.quantity?quantité+1:quantité)
   

  }
const handlequantitysub=()=>{
  setQuantité(quantité>1?quantité-1:quantité)
  // totalprice()
}

  return (
    <Card className='ca' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {console.log(product)}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h4>price:<span id="prix">{product.price*quantité}</span>$</h4>
        <h4>quantité:<span id="quanty">{quantité}</span></h4>
        <button onClick={()=>handlequantityplus()}>+</button>

        <Button variant="primary">schoppe</Button>
        <button onClick={()=>  handlequantitysub()}>-</button>

      </Card.Body>
      <Modal1 productes={product} />
      

    </Card>
  );
}

export default BasicExample;