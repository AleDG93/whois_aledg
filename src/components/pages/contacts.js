import React, { Component } from 'react';


class Contacts extends Component {
  render() {
    return (
      <div className="container-fixed">
        <div className="container one-r full-c-third">
          <div className="one-r container">
            <h3>Personal info</h3>
            </div>
        </div>    
      <div className="container two-r full-c-third">
        <div className="one-r full-c-third container">
          <div className="f-c-third">
              Name
          </div>
          <div className="st-c-third">
            Alessandro Dal Gobbo
          </div>
        </div>
        <div className="two-r full-c-third container">
          <div className="f-c-third">
              Address
          </div>
          <div className="st-c-third">
            Via Manci 19, Bolzano (BZ)
          </div>
        </div>
        <div className="three-r full-c-third container">
          <div className="f-c-third">
            Phone
          </div>
          <div className="st-c-third">
            3333321008  
          </div>
        </div>
        <div className="four-r full-c-third container">
          <div className="f-c-third">
            Email
          </div>
          <div className="st-c-third">
            alessandrodalgobbo@gmail.com
          </div>
        </div>
        <div className="five-r full-c-third container">
          <div className="f-c-third">
            Nationality
          </div>
          <div className="st-c-third">
           Italy
          </div>
        </div>
        <div className="six-r full-c-third container">
          <div className="f-c-third">
            Date of birth
          </div>
          <div className="st-c-third">
            10/06/1993
          </div>
        </div>
      </div>
      <div className="container-fixed three-r full-c-third">
        <div className="one-r">
          <h3>Work experience</h3>
        </div>
        <div className="two-r container-fixed m-b-m">
          <div className="one-r">
            08/2015 - 03/2016
          </div>
          <div className="two-r">
            Pizzeria al Chiosco
          </div>
          <div className="three-r">
            Delivery to home of delicious just made pizzas
          </div>
        </div>
        <div className="three-r container-fixed m-b-m">
          <div className="one-r">
            07/2017 - 09/2017
          </div>
          <div className="two-r">
            Studio Creating
          </div>
          <div className="three-r">
            Development and testing of management software, on place assistance to client, assistance in modifying PLC for industrial machines
          </div>
        </div>
        <div className="four-r container-fixed m-b-m">
          <div className="one-r">
            11/2017 - 03/2018
          </div>
          <div className="two-r">
            Dubi S.r.l
          </div>
          <div className="three-r">
            Design, implementation and depoyment of a website for the StartUp Dubi, consisting of a platform for research and development
          </div>
        </div>
      </div> 
    </div>
    );
  }
}

export default Contacts;
