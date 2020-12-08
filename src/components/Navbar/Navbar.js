import React, { Component } from 'react';
import "./Navbar.css";
import { MenuItems} from "./MenuItems";
import "@ui5/webcomponents/dist/Button";


class Navbar  extends Component{
    state={clicked:false}
handleClick =()=>{
    this.setState({clicked:!this.state.clicked})
}

    render() {
        return (
          <>
            <nav className="NavbarItems">
              <h1 className="navbar-logo">Cockpit</h1>
              <div className="menu-icon" onClick={this.handleClick}>
                <i
                  className={
                    this.state.clicked ? "fas fa-times" : "fas fa-bars"
                  }
                ></i>
              </div>
              <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ui5-button>Logout</ui5-button>
            </nav>
            <hr className="hr"></hr>
          </>
        );
    }
}
export default Navbar;