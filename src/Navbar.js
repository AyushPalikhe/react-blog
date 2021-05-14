import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className="navbar">
         <Link to="/"><h1>The React Blog</h1></Link> 
         <div className="links">
            <Link className= "but" to="/">HOME</Link>
            <Link className= "but" to="/create">NEW BLOG</Link>
            
        </div>
    </nav>
     );
}
 
export default Navbar;