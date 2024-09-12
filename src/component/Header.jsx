import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li><Link to='/home'><p>home</p></Link></li>
                <li><Link to='/aboutUs'><p>About us</p></Link></li>
                <li><Link to='/login'><p>login</p></Link></li>
                <li><Link to='/signUp'><p>Sign up</p></Link></li>
                <li><Link to='/popular'><p>Popular</p></Link></li>
            </ul>
        </div>
    )
}

export default Header;