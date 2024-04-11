import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai"
import { MdReadMore } from "react-icons/md"


const NavBar = () => {
    
    return (
        <nav className="nav-container">
            <div className='nav-items'>
                <Link to="/" className='nav-link'><h1 className="note-heading">My Notebook</h1></Link>
                <ul className="list-container">
                    <li className='list-item'><Link to="/" className='nav-link'>Home</Link></li>
                    <li className='list-item-md'><Link to="/" className='nav-link'><AiOutlineHome size={30}/></Link></li>
                    <li className='list-item'><Link to="/about" className='nav-link'>About</Link></li>
                    <li className='list-item-md'><Link to="/about" className='nav-link'><MdReadMore size={30}/></Link></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default NavBar
