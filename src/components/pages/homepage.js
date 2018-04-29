import React, { Component } from 'react';


class Homepage extends Component {
  render() {
    return (
      <div className="container row">
          <div className="f-c-third center-h">
            <img alt="profile_photo" className="profile_image mx-auto div-box-shadow" src={require("../../assets/images/dalgob_serio.jpg")} />
          </div>
          <div className="st-c-third container-fixed">
            <h3 className="subtitle">Welcome to my personal website!</h3>
            <p className="justify-text">
              Hi, my name is Alessandro and I'm a computer science student that had some extra time and the willingness to learn the basics of Reactjs, 
              so I decided to create my own webpage.
            </p>  
        </div> 
        <div className="three-r fs-c-third">
            <h3 className="subtitle">CS fields of interest</h3>
            <p className="justify-text">
                I am a backer of the <b>open source</b> community, even if as young developer I haven't been capable of contributing much in open source projects, but 
                still... I try my best in helping who's more unexperienced than me on Stackoverflow (:
            </p>
            <p className="justify-text">
                Lately I have been looking into the world of blockchain and the technologies that have born around the concept of blockchain.
                My bachelor thesis will deal with decentralization, trust, immutability and security, how to achive this features and create
                 a fully decentralized web application using the <b>Ethereum blockchain</b> and <b>IPFS</b> (Inter-Planetary File Systems)
            </p>
            <h3 className="subtitle">Other fields of interest</h3>
            <p className="justify-text">
                  Other than spending time on my laptop I like to climb, bouldering is the form of climbing I like the most. As a good italian I also love football 
                  and motorsports, both two and four wheels, even if I prefer two wheels on F1 weekends is a duty to root for Ferrari.
            </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
