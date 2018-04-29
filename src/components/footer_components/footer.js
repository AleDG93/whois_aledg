import React, { Component } from 'react';
import {
  Link } from 'react-router-dom';
import cv_pdf from '../../assets/images/CV_Alessandro_Dal_Gobbo.pdf';


class Footer extends Component {
  render() {
    return (
      <footer>  
        <div className="container-fixed">
          <div className="container">
            <div className="container one-r full-c-third border-tb">
              <div className="one-r f-c-third container">
                <div className="one-r subtitle m-b-m">
                  About Me
                </div>
                <div className="two-r">
                  <Link to="/curriculum">Curriculum page</Link>
                </div>
                <div className="three-r">
                <i className="icon-file-pdf"></i>
                  <a href={cv_pdf}> CV_adalgobbo.pdf</a>
                </div>
              </div>
              <div className="one-r s-c-third container">
                <div className="one-r subtitle m-b-m">
                  Contacts
                </div>
                <div className="two-r">
                <i className="icon-linkedin-squared"></i>
                  <a target="_blank" href="www.linkedin.com/in/alessandro-dal-gobbo"> LinkedIn</a>
                </div>
                <div className="three-r">
                <i className="icon-github-circled"></i>
                  <a target="_blank" href="www.github.com/AleDG93"> GitHub</a>
                </div>
                <div className="two-r">
                <i className="icon-mail-alt"></i>
                  &nbsp; alessandrodalgobbo@gmail.com
                </div>
                <div className="three-r">
                <i className="icon-phone"></i>
                  &nbsp; 333 3321008
                </div>
              </div>
            </div>
          </div>
          <div className="two-r container" id="copyright">
            <div className="full-c-third center-h">
              © Copyright 2018 Alessandro Dal Gobbo
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
