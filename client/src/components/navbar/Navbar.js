import React, { Component } from 'react';
import { MenuItems } from "./Menuitems"
import { Button } from "./Button"
import './Navbar.css'

import logo from '../../img/Porikkha_logo.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src={logo} style={{width:'16%',marginLeft:'-40%'}}/>
                </h1>
                {/* <Button>Add New</Button> */}
            </nav>
        )
    }
}

export default Navbar