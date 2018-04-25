import React, { Component } from 'react';
import {
  Link } from 'react-router-dom';
import cv_pdf from '../../assets/images/CV_Alessandro_Dal_Gobbo.pdf';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container div-box-shadow">
          <div className="container one-r">
            <div className="s-c-third container-fixed">
              <div className="one-r subtitle">
              About Me
              </div>
              <div className="three-r">
                <a><Link to="/curriculum">Curriculum page</Link>
                </a>
              </div>
              <div className="four-r">
              <a href={cv_pdf}>CV_Alessandro_Dal_Gobbo.pdf</a>
              </div>
            </div>
            <div className="t-c-third container-fixed">
              <div className="one-r subtitle">
              Contacts
              </div>
              <div className="three-r">
              <a target="_blank" href="www.linkedin.com/in/alessandro-dal-gobbo">LinkedIn</a>
              </div>
              <div className="four-r">
              <a target="_blank" href="www.github.com/AleDG93">GitHub</a>
              </div>
            </div>
          </div>
          <div className="two-r full-c-third center-h">
            @copyright
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
