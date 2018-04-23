import React, { Component } from 'react';


class Homepage extends Component {
  render() {
    return (
      <div className="container row">
          <div className="f-c-third center-h">
            <img className="profile_image mx-auto" src={require("../../assets/images/dalgob_serio.jpg")} />
          </div>
          <div className="st-c-third">
            <h2>Welcome to my personal website</h2>
            <p className="justify-text">
            Lorem Ipsum è 
            un testo segnaposto utilizzat
            o nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, 
            quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, 
            ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, 
            </p>  
        </div> 
      </div>
    );
  }
}

export default Homepage;
