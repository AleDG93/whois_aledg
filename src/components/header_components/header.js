import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
  

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img className="logo_image" src={require("../../assets/images/logo_dark_background.png")} /></Link>
            </div>
            <nav>
                <ul>
                    <li className="first">
                        <Link to="/"><i className="icon-home"></i>&nbsp;Home</Link>
                    </li>
                    <li className="last">
                        <Link to="/curriculum"><i className="icon-user"></i>&nbsp;Curriculum Vitae</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
