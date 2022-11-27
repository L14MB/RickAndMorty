import React,{useContext} from 'react'
import '../styles/header.css'
import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

function Header() {
 const {userName, setUserName} = useContext(UserContext)
 const {darkMode, setDarkMode} = useContext(ThemeContext)

    return (
        <div className={darkMode ? "header-container header-dark" : "header-container" }>
            <div>
             <Link style={{marginRight:"10px"}} to="/">Home</Link>
             <Link to="/about">About</Link>
            </div>
            <div style={{display:"flex"}}>
             <p style={{marginRight:"10px"}}>Welcome {userName}</p>
             <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </div>
    )
}

export default Header