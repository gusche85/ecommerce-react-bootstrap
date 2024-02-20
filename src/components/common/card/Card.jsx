import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <Card className='align-items-center text-center m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" className="object-fit-cover" src="slide7.png" height="210px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" className="object-fit-cover" src="slide7.png" height="210px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" className="object-fit-cover" src="slide7.png" height="210px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" className="object-fit-cover" src="slide7.png" height="210px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

      <Card.Img variant="top" className="object-fit-cover" src="slide7.png" height="210px" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;