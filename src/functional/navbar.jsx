import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div>
    <Link to="/home">Home </Link>
    <Link to="Categories">Categories </Link>
   </div>

  );
}

export default Home;