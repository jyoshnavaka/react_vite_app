import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Spinner } from './spinn.jsx';
import Toast from './toast';

function Cards() {   
  return (
    <Card style={{ width: '18rem',border:'2px solid' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/background/20230429/original/pngtree-rose-3d-flowers-rendering-generative-ai-art-picture-image_2499533.jpg" width={100} height={100} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Spinner/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Toast/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;