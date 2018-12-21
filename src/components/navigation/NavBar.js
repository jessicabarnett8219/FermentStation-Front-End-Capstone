import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {

  render() {
    return (
      <nav className="nav-inline no-margin-top no-margin-bottom padding-vertical-s background-warning-300 color-white">
        <ul className="flex align-items-center justify-content-space-between">
          <li>
           <Link to="/" className="link font-weight-semibold">FermentStation</Link>
          </li>
          <div className="flex align-items-center">
          <li>
            <Link to="/"><i className="fas fa-home fa-2x"></i></Link>
          </li>
          <li className="no-margin-left">
            <button className="button white-outline-btn button-s" onClick={
              () => {
                sessionStorage.clear() || localStorage.clear()
                this.props.history.push("/welcome")
            }}>Logout</button>
          </li>
          </div>
        </ul>
      </nav>
    )
  }
}

export default NavBar