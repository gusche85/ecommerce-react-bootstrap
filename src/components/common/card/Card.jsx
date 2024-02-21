import {Card, CardGroup, Badge, Button} from 'react-bootstrap';

function Product() {
  return (
    <CardGroup>
      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="mademoiselle.png" height="210px" />
        <Card.Body >
          <Card.Title>CHANEL</Card.Title>
          <Card.Text>
            COCO MADEMOISELLE Eau De Parfum 35ml
          </Card.Text>
          <Card.Text>
            £71.00
          </Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="cloud.png" height="210px" />
        <Card.Body>
          <Card.Title>Ariana Grande</Card.Title>
          <Card.Text>
            Cloud Eau De Parfum 30ml
          </Card.Text>
          <Card.Text>
          £23.00
          </Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Badge bg="danger" style={{ position: 'absolute', top: '0', right: '0'}}>
          Sale
        </Badge>
        <Card.Img variant="top" className="object-fit-contain" src="paradoxe.png" height="210px" />
        
        <Card.Body>
          <Card.Title>Prada</Card.Title>
          <Card.Text>
          Paradoxe Eau De Parfum 90ml
          </Card.Text>
          <Card.Text>
            <span className="text-decoration-line-through">£135.00</span>
            <span className="text-danger"> £108.00</span>
          </Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="goodgirl.png" height="210px" />
        <Card.Body>
          <Card.Title>Carolina Herrera</Card.Title>
          <Card.Text>
            Good Girl Eau De Parfum 30ml
          </Card.Text>
          <Card.Text>
          £65.00
          </Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

    </CardGroup>
  );
}

function Product1 () {
  return (
    <CardGroup>
      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Badge bg="danger" style={{ position: 'absolute', top: '0', right: '0'}}>
          Sale
        </Badge>
        <Card.Img variant="top" className="object-fit-contain" src="blackopium.png" height="210px" />
        <Card.Body >
          <Card.Title>Yves Saint Laurent</Card.Title>
          <Card.Text>
            Black Opium Over Red Eau De Parfum 90ml
          </Card.Text>
          <Card.Text>
            <span className="text-decoration-line-through">£131.00</span><span className="text-danger"> £104.80</span>
          </Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="dolce.png" height="210px" />
        <Badge bg="danger" style={{ position: 'absolute', top: '0', right: '0'}}>
          Sale
        </Badge>
        <Card.Body>
          <Card.Title>Dolce & Gabbana</Card.Title>
          <Card.Text>
            The Only One Eau De Parfum 50ml
          </Card.Text>
          <Card.Text><span className="text-decoration-line-through">£78.00</span> <span className="text-danger">£55.00</span>
</Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="robertocavalli.png" height="210px" />
        <Card.Body>
          <Card.Title>Roberto Cavalli</Card.Title>
          <Card.Text>
            Roberto Cavalli Eau De Parfum 75ml
          </Card.Text>
          <Card.Text>£35.00</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <Card className='align-items-center border text-center m-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" className="object-fit-contain" src="flash.png" height="210px" />
        <Card.Body>
          <Card.Title>Jimmy Choo</Card.Title>
          <Card.Text>
            Flash Eau De Parfum 60ml
          </Card.Text>
          <Card.Text>£35.00</Card.Text>
          <Card.Footer className="bg-transparent border-0">
          <Button variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card.Body>
      </Card>

    </CardGroup>
  );
}




export {Product, Product1};