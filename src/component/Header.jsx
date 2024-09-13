import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li><Link to='/home' style={{
                margin: 0,                 
                fontSize: '16px',      
                fontWeight: 'bold',   
                textDecoration: 'none', 
                lineHeight: '1.5',   
            }}><p>Home</p></Link></li>
                <li><Link to='/aboutUs' style={{
                margin: 0,     
                fontSize: '16px',      
                fontWeight: 'bold',    
                textDecoration: 'none', 
                lineHeight: '1.5',    
            }}><p>About Us</p></Link></li>
                <li ><Link to='/login' style={{
                margin: 0,         
                fontSize: '16px',    
                fontWeight: 'bold',   
                textDecoration: 'none',
                lineHeight: '1.5',   
            }}><p >Login</p></Link></li>
                <li><Link to='/signUp' style={{
                margin: 0,             
                fontSize: '16px',      
                fontWeight: 'bold',    
                textDecoration: 'none', 
                lineHeight: '1.5',     
            }}><p>Sign Up</p></Link></li>
                <li><Link to='/popular' style={{
                margin: 0,            
                fontSize: '16px',   
                fontWeight: 'bold',   
                textDecoration: 'none', 
                lineHeight: '1.5',    
            }}><p>Popular</p></Link></li>
            </ul>
        </div>
    )
}

export default Header;