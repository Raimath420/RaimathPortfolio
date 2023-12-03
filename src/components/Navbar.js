
import React ,{useState} from 'react'
import { NavLink ,Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuopen,setmenuopen] = useState(false)
  return (
    <nav className='navbar'>
        <Link className="logo" to={"/"}>Tech420</Link>
        <div className='menu' onClick={()=>{
          setmenuopen(!menuopen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <ul className={menuopen ? "open flext":"flex"}>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
     
      </ul>
    </nav>
  )
}

export default Navbar;
