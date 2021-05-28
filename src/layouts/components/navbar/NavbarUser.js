import React from "react"
import * as Icon from "react-feather"

class NavbarUser extends React.PureComponent {
  state = {
    
  }

  render() {
    return (
      <div className="nav navbar-nav  float-right mr-1">
          <Icon.Share2 size={20}/>
      </div>
    )
  }
}
export default NavbarUser
