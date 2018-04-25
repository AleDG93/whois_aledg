import React, { Component } from 'react';
import cv_pdf from '../../assets/images/CV_Alessandro_Dal_Gobbo.pdf';

class Curriculum extends Component {
  render() {
    return (
      <div className="container-fixed">
        <div className="container-fixed div-box-shadow m-b-l">
        <div className="container one-r full-c-third">
          <div className="one-r container">
            <h3>Personal info</h3> 
            </div>
        </div>    
        <div className="container two-r full-c-third">
          <div className="one-r full-c-third container border-t">
            <div className="f-c-third subtitle">
                Name
            </div>
            <div className="st-c-third">
              Alessandro Dal Gobbo
            </div>
          </div>
          <div className="two-r full-c-third container border-t">
            <div className="f-c-third subtitle">
                Address
            </div>
            <div className="st-c-third">
              Via Manci 19, Bolzano (BZ)
            </div>
          </div>
          <div className="three-r full-c-third container border-t">
            <div className="f-c-third subtitle">
              Phone
            </div>
            <div className="st-c-third">
              333 3321008  
            </div>
          </div>
          <div className="four-r full-c-third container border-t">
            <div className="f-c-third subtitle">
              Email
            </div>
            <div className="st-c-third">
              alessandrodalgobbo@gmail.com
            </div>
          </div>
          <div className="five-r full-c-third container border-t">
            <div className="f-c-third subtitle">
              Nationality
            </div>
            <div className="st-c-third">
            Italy
            </div>
          </div>
          <div className="six-r full-c-third container border-t">
            <div className="f-c-third subtitle">
              Date of birth
            </div>
            <div className="st-c-third">
              10/06/1993
            </div>
          </div>
        </div>
      </div>
      <div className="container-fixed three-r full-c-third div-box-shadow m-b-l">
        <div className="one-r container">
          <h3>Work experience</h3>
        </div>
        <div className="four-r container-fixed m-b-m border-t">
          <div className="one-r">
            11/2017 - 03/2018
          </div>
          <div className="two-r subtitle m-t-s m-b-s">
            Dubi S.r.l
          </div>
          <div className="three-r">
            Design, implementation and depoyment of a website for the StartUp Dubi
          </div>
        </div>
        <div className="three-r container-fixed m-b-m border-t">
          <div className="one-r">
            07/2017 - 09/2017
          </div>
          <div className="two-r subtitle m-t-s m-b-s">
            Studio Creating
          </div>
          <div className="three-r">
            Internship in development and testing of management software, on place assistance to client, assistance in modifying PLC for industrial machines
          </div>
        </div>
        <div className="two-r container-fixed m-b-m border-t">
          <div className="one-r">
            08/2015 - 03/2016
          </div>
          <div className="two-r subtitle m-t-s m-b-s">
            Pizzeria al Chiosco
          </div>
          <div className="three-r">
            Home delivery of delicious pizza
          </div>
        </div>
      </div>
      <div className="container-fixed four-r full-c-third div-box-shadow m-b-l">
        <div className="one-r container">
          <h3>Education</h3>
        </div>
        <div className="container-fixed border-t">
        <div className="full-c-third m">
          10/2015 - today: Bachelor in Computer Science and Enginnering at Free University of Bolzano
          </div>
      </div>
      <div className="container-fixed border-t">
        <div className="full-c-third">
          09/2017 - 07/2012: Scientific high school "E.Torricelli" at Bolzano 
          </div>
      </div>
      <div className="container-fixed border-t">
        <div className="full-c-third">
          11/07/2011 - 29/07/2011: German course with certification of level C1 at "inlingua Sprachcenter Berlin - The inlingua School of Languages"
          </div>
       </div>
       <div className="container-fixed border-t">
         <div className="full-c-third">
          03/07/2010 - 16/07/2010: English course with oral, written and listening exam of level "Upper Intermediate" at "Atlantic Language Galway" 
          </div>
        </div>
      </div>
      <div className="container-fixed five-r full-c-third m-b-l div-box-shadow">
        <div className="one-r container-fixed">
          <h3>Skills & competences</h3>
        </div>
        <div className="container-fixed">
          <div className="full-c-third container one-r border-t">
            <div className="f-c-third one-r subtitle">
              Languages
            </div>
          </div>
          <div className="st-c-third container-table two-r">
          <div className="f-c-third one-r subtitle">
              Native
            </div>
            <div className="st-c-third one-r">
              Italian
            </div>
            <div className="st-c-third two-r container-small m-b-m m-t-m border-tb">
              <div className="f-c-third border-r subtitle">
                Reading
              </div>
              <div className="s-c-third border-r subtitle">
                Writing
              </div>
              <div className="t-c-third subtitle">
                Speaking              
                </div>
              </div> 
              <div className="f-c-third three-r container-small subtitle">
                English
              </div>
              <div className="st-c-third three-r container-small border-b">
                <div className="f-c-third border-r">
                  Excellent
                </div>
                <div className="s-c-third border-r">
                  Excellent
                </div>
                <div className="t-c-third">
                  Excellent
                </div> 
              </div>
              <div className="f-c-third four-r container-small subtitle">
                German
              </div>
              <div className="st-c-third four-r container-small border-b">
                <div className="f-c-third border-r">
                  Good
                </div>
                <div className="s-c-third border-r">
                  Good
                </div>
                <div className="t-c-third">
                  Good
                </div> 
              </div>
          </div>
        </div>
        <div className="container-fixed m-t-l">
          <div className="full-c-third container one-r border-t">
            <div className="f-c-third one-r subtitle">
              Technical competences
            </div>
          </div>
          <div className="row justify-text">
            Good knowledge of programming languages Java, JavaScript, nodejs and of web development technologies CSS, HTML and SASS <br />
            Basic knowledge in C, Ruby, Prolog and Haskell <br />
            Experience with Amazon Web Services (Elastic beanstalk, S3, RDS, ACM), Expressjs (Backend framework for nodejs), TypeScript and ORM <br />
            Good knowledge in designing and implementing relational databases and of SQL <br />
            Basic knowledge in Arduino, obtained during a one week Workshop at the Free University of Bolzano <br />
            Basic knowledge of eletronics, of the Linux OS and of the Android development environment "Android Studio"
          </div>
        </div>
        <div className="container-fixed m-t-l">
          <div className="full-c-third container one-r border-t">
            <div className="f-c-third one-r subtitle">
              Hobbies
            </div>
          </div>
          <div className="row justify-text">
            Other then Computer Science stuff I enjoy doing sports, as italian I obviously love football, but on my freetime I like go climbing and trecking
          </div>
        </div>
      </div>
      <div className="full-c-third container">
        <div className="fs-c-third one-r">
          If you liked my hystory you can download here my complete Curriculum Vitae in PDF
        </div>
        <div className="one-r">
        <a href={cv_pdf}>CV_Alessandro_Dal_Gobbo.pdf</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Curriculum;
