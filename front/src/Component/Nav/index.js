import React, { useEffect, useState } from 'react'
import Logo from './white.png'
import { Link } from 'react-router-dom'
import api from '../../utils/api'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  
  const navigate=useNavigate();

  const [data,setData] = useState({})
    

  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('Users'))
  // window.location.reload(false);
    setData(users)



  },[])
  const logout =async()=>{
    window.localStorage.removeItem('Users');
    const {data} = await api.get('/logout')
    navigate('/login')
    window.location.reload(false)
  
    
    
  }


  return (
    <div>
         <nav>
            <div className="nav-wrapper purple darken-4">
            <Link to='/' className='brand-logo left'>Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
             { !data ?  (
            <div><li><Link to='/form'> Sign Up</Link> </li>
            <li><Link to='/login'> Login</Link></li> </div> )
            : 
            <div>
            <li><Link to='/about'> About</Link></li>
            <li><Link to='/blog'> Blog</Link></li>
            <li><Link to='/dash'> Dashboard</Link></li>
            <li><Link to='/data'> Data</Link></li>
            <li><Link to='/' onClick={logout} value='logout'> Log Out</Link></li></div>}


            </ul>
            </div>
  </nav>
        
    </div>
  )
}

export default Navbar