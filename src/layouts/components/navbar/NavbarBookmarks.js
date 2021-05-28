import React from "react"
import { Link } from "react-router-dom"
import logo from './../../../views/components/assets/logo.png'
import './index.css';


class NavbarBookmarks extends React.PureComponent {
  state = {
    
  }
  render() {
     
          return (
            <div className="dropdown mr-1 ">
              <div style={{display: 'flex'}}>
                <Link to='/'>
                <img src={logo} alt='logo' className='logo' />
                </Link>
                <h2 className='logo-heading'> Top Parent Dashboard</h2>
              </div>
            </div>
          );
        }
}

export default NavbarBookmarks;



