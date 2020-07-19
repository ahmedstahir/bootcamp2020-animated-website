import React from 'react';
import './App.css';
import technologies from './images/technologies.png'
import handsOn from './images/handson.png'
import output from './images/output.png'
import logo from './images/logo.png'
import facebookLogo from './images/facebook.png'
import twitterLogo from './images/twitter.png'
import youtubeLogo from './images/youtube.png'
import linkedinLogo from './images/linkedin.png'
import instagramLogo from './images/instagram.png'
import mailLogo from './images/mail.png'
import phoneLogo from './images/phone.png'
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import MenuIcon from '@material-ui/icons/Menu';

function App() {
    const logoAnimation = useWebAnimations({
        keyframes: {
            transform: [
                'rotateZ(0deg)',
                'rotateZ(360deg)',
            ],
        },
        timing: {
            duration: 20000,
            iterations: Infinity,
        },
        playbackRate: 1,
    });

    const { keyframes, timing } = pulse;
    const technologiesAnimation = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 1000, // Delay 1s
            duration: timing.duration * 3, // Speed up the animation
            iterations: Infinity
        },
    });

    const imgHandsOn = useWebAnimations({
        keyframes: {
            transform: [
                'none',
                'translate(-20px, 0px)',
                'translate(-20px, 10px)',
                'translate(0px, 10px)',
                'translate(20px, 10px)',
                'translate(20px, 0px)',
                'none'

            ],
        },
        timing: {
            duration: 10000,
            iterations: Infinity,
        },
        playbackRate: 1,
    });

    const outputAnimation = useWebAnimations({
        keyframes: {
            transform: [
                'rotateY(0deg)',
                'rotateY(360deg)',
            ],
        },
        timing: {
            duration: 1000,
            iterations: Infinity,
            easing: 'ease-out'
        },
        playbackRate: 0.05,
    });

  return (
      <div className="container">
          <div className="header">
              <table width="100%" height="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tr height="18%">
                      <td width="70%" valign="top">
                          <table width="100%" style={{ paddingTop: '5vh', paddingLeft: '5vh' }}>
                              <tr style={{ color: 'white' }}>
                                  <td width="10%">
                                      <MenuIcon style={{ fontSize: 30}} />
                                  </td>
                                  <td width="15%">
                                      <p class="menu"><b>home</b></p>
                                  </td>
                                  <td width="15%">
                                      <p class="menu">about us</p>
                                  </td>
                                  <td width="15%">
                                      <p class="menu">vision</p>
                                  </td>
                                  <td width="15%">
                                      <p class="menu">contact us</p>
                                  </td>
                                  <td width="30%">
                                  </td>
                              </tr>
                          </table>                          
                      </td>
                      <td width="30%" align="center" valign="top" rowSpan="3">
                          <div style={{ paddingTop: '5vh' }}>
                              <img ref={logoAnimation.ref} src={logo} width="150px" alt="Bootcamp 2020" />
                              <p className="bootcamp">Bootcamp 2020</p>
                          </div>
                      </td>
                  </tr>
                  <tr height="10%">
                      <td style={{ paddingLeft: '5vh', paddingTop: '5vh' }}>
                          <p className="title">get ready for</p>
                          <p className="title"><b>4th industrial revolution</b></p>
                      </td>
                  </tr>
                  <tr height="72%">
                      <td valign="top" style={{ paddingLeft: '5vh', paddingTop: '2vh', paddingRight: '45vh' }}>
                          <p className="description">
                              Build Full Stack Mobile Web Apps using React, Gatsby.js, Redux, QraphQL, Node.js/Express, MongoDB, Git, GitHub, GitHub Actions, Terraform, Google Cloud Run, AWS EC2, Contentful, Stripe, SnipCart, Shopify, etc.
                          </p>
                      </td>
                  </tr>
              </table>
          </div>
          <div>
              <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tr>
                      <td width="50%" align="left">
                          <div style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                              <table width="100%" border="0" cellPadding="10px">
                                  <tr>
                                      <td align="center">
                                          <p className="sectionTitle"><b>Our Technology Set</b></p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left">
                                          <p className="sectionDescription">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="right">
                                          <button className="roundedButton">get details</button>
                                      </td>
                                  </tr>
                              </table>

                          </div>
                      </td>
                      <td width="50%" align="center">
                          <div style={{ backgroundColor: 'black', }}>
                              <img ref={technologiesAnimation.ref} src={technologies} width="500px" alt="Our Technology Set" />
                          </div>
                      </td>
                  </tr>
              </table>
          </div>
          <div style={{ paddingTop: '10vh' }}>
              <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tr>
                      <td width="50%" align="center">
                          <div>
                              <img ref={imgHandsOn.ref} src={handsOn} width="300px" alt="Hands-on Projects" />
                          </div>
                      </td>
                      <td width="50%" align="left">
                          <div style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                              <table width="100%" border="0" cellPadding="10px">
                                  <tr>
                                      <td align="center">
                                          <p className="sectionTitle"><b>Hands-on Projects</b></p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left">
                                          <p className="sectionDescription">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="right">
                                          <button className="roundedButton">get details</button>
                                      </td>
                                  </tr>
                              </table>
                              
                          </div>
                      </td>
                  </tr>
              </table>
          </div>
          <div style={{ paddingTop: '10vh' }}>
              <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tr>
                      <td width="50%" align="left">
                          <div style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                              <table width="100%" border="0" cellPadding="10px">
                                  <tr>
                                      <td align="center">
                                          <p className="sectionTitle"><b>High Quality Output</b></p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left">
                                          <p className="sectionDescription">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                          </p>
                                      </td>
                                  </tr>
                              </table>
                          </div>
                      </td>
                      <td width="50%" align="center">
                          <div style={{ backgroundColor: 'black', }}>
                              <img ref={outputAnimation.ref} src={output} width="500px" alt="High Quality Output" />
                          </div>
                      </td>
                  </tr>
              </table>
          </div>
          <div className="siteFooter">
              <table width="100%" height="100%" border="0" cellPadding="0" cellSpacing="0">
                  <tr>
                      <td width="40%" valign="bottom" style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                              <tr>
                                  <td style={{ color: 'black' }} align="center">
                                      <h2>Connect with us</h2>
                                  </td>
                              </tr>
                              <tr>
                                  <td style={{ paddingBottom: '40px' }} align="center">
                                      <img src={youtubeLogo} className="footerSocial" alt="YouTube" />
                                      <img src={linkedinLogo} className="footerSocial" alt="LinkedIn" />
                                      <img src={facebookLogo} className="footerSocial" alt="Facebook" />
                                      <img src={twitterLogo} className="footerSocial" alt="Twitter" />
                                      <img src={instagramLogo} className="footerSocial" alt="Instagram" />
                                  </td>
                              </tr>
                          </table>
                      </td>
                      <td width="20%" valign="bottom">
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                              <tr>
                                  <td style={{ color: 'black' }} align="center">
                                      <h2>Quick Links</h2>
                                  </td>
                              </tr>
                              <tr>
                                  <td style={{ paddingBottom: '40px' }} align="center">
                                      <p className="footerLinks">Home</p>
                                      <p className="footerLinks">About Us</p>
                                      <p className="footerLinks">Our Vision</p>
                                      <p className="footerLinks">Our Mission</p>
                                      <p className="footerLinks">Contact Us</p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                      <td width="40%" valign="bottom" style={{ paddingLeft: '5vw' }}>
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
                              <tr>
                                  <td style={{ color: 'black', padding: '0px' }}>
                                      <h2 style={{ color: 'black', padding: '0px' }}>Contact Details</h2>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <label className="contactDetails">123, Lorem ipsum dolor, consectetur adipiscing, Pakistan</label>
                                  </td>
                              </tr>
                              <tr>
                                  <td style={{ paddingBottom: '40px' }}>
                                      <table border="0">
                                          <tr>
                                              <td>
                                                  <img src={phoneLogo} className="footerContact" alt="Phone" />
                                              </td>
                                              <td>
                                                  <label className="contactDetails">
                                                      (123) 456-7890
                                                  </label>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <img src={mailLogo} className="footerContact" alt="Email" />
                                              </td>
                                              <td>
                                                  <label className="contactDetails">
                                                      info@example.com
                                                  </label>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </div>
      </div>
  );
}

export default App;
