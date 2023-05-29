import React from 'react';
import './About.scss';
import JoiImg from "../../assets/images/joi.jpg";
import LindaImg from "../../assets/images/linda.png";
import JovanImg from "../../assets/images/jovan.jpg";

const AboutUs = () => {
  return (
    <div classNameName="about-us">
      <section id="about">
      <div className="row">
          <h1 className='fs-50 text-white text-center'> Our Team </h1>
      </div>
      <div className="row">
          <div className="column">
              <div className="card">
                  <div className="img-container">
                  <img src={LindaImg} alt="linda" />
                  </div>
                  <h3>Linda Sundoko</h3>
                  <h3>NIM : 00000068320</h3>
                  <p>linda.sundoko@student.umn.ac.id</p>
                  <div className="icons">
                      <a href="https://www.instagram.com/sunfulien/" target="_blank">
                          <i className="fab fa-instagram" aria-hidden="true" title="Instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/linda.sundoko" target="_blank">
                          <i className="fab fa-facebook-square" aria-hidden="true" title="Facebook"></i>
                      </a>
                      <a href="https://github.com/lindasun31" target="_blank">
                          <i className="fab fa-github" aria-hidden="true" title="Github"></i>
                      </a>
                      <a href="mailto:linda.sundoko@student.umn.ac." target="_blank">
                          <i className="fa fa-envelope" aria-hidden="true" title="Email"></i>
                      </a>
                  </div>
              </div>
          </div>

          <div className="column">
              <div className="card">
                  <div className="img-container">
                      <img src={JovanImg} alt="jovan"/>
                  </div>
                  <h3>Jovan Fidello</h3>
                  <h3>NIM : 00000067827</h3>
                  <p>jovan.fidello@student.umn.ac.id</p>
                  <div className="icons">
                      <a href="https://www.instagram.com/jovanfdllo/" target="_blank">
                          <i className="fab fa-instagram" aria-hidden="true" title="Instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/jovan.fidello.967/" target="_blank">
                          <i className="fab fa-facebook-square" aria-hidden="true" title="Facebook"></i>
                      </a>
                      <a href="https://github.com/jovanfidello" target="_blank">
                          <i className="fab fa-github" aria-hidden="true" title="Github"></i>
                      </a>
                      <a href="mailto:jovan.fidello@student.umn.ac.id" target="_blank">
                          <i className="fa fa-envelope" aria-hidden="true" title="Email"></i>
                      </a>
                  </div>
              </div>
          </div>

          <div className="column">
              <div className="card">
                  <div className="img-container">
                      <img src={JoiImg} alt="joi"/>
                  </div>
                  <h3>Joicelyn Naradiska</h3>
                  <h3>NIM : 00000068868</h3>
                      <p>joicelyn.naradiska@student.umn.ac.id</p>
                      <div className="icons">
                          <a href="https://www.instagram.com/joicelynee_/" target="_blank">
                              <i className="fab fa-instagram" aria-hidden="true" title="Instagram"></i>
                          </a>
                          <a href="https://www.facebook.com/joicelyne.n" target="_blank">
                              <i className="fab fa-facebook-square" aria-hidden="true" title="Facebook"></i>
                          </a>
                          <a href="https://github.com/joicelyne" target="_blank">
                              <i className="fab fa-github" aria-hidden="true" title="Github"></i>
                          </a>
                          <a href="mailto:joicelyn.naradiska@student.umn.ac.id" target="_blank">
                              <i className="fa fa-envelope" aria-hidden="true" title="Email"></i>
                          </a>
                      </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
