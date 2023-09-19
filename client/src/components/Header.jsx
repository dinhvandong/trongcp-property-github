import React from 'react'
import { closeOutline, logoTwitter, locationOutline,
    logoPinterest, searchOutline, personOutline, 
    cartOutline, menuOutline, homeOutline } from 'ionicons/icons';
  import { logoFacebook } from 'ionicons/icons';
  import { logoInstagram } from 'ionicons/icons';
  import { mailOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
const Header = () => {
  return (
    <div> <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TnaHousing - Find your dream house</title>
    {/* 
- favicon
*/}
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
    {/* 
- custom css link
*/}
    <link rel="stylesheet" href="./assets/css/style.css" />
    {/* 
- google font link
*/}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    {/* 
- #HEADER
*/}
    <header className="header" data-header>
      <div className="overlay" data-overlay />
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@tnahousing.com" className="header-top-link">
                <IonIcon icon={mailOutline} />
                <span>info@tnahousing.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <IonIcon icon={locationOutline} />
                <address>15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>
          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <IonIcon icon={logoPinterest} />
                </a>
              </li>
            </ul>
            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img src="./assets/images/logo.png" alt="TnaHousing logo" />
          </a>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src="./assets/images/logo.png" alt="TnaHousing logo" />
              </a>
              <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
                <IonIcon icon={closeOutline}/>
              </button>
            </div>
            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>About</a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>Service</a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" data-nav-link>Property</a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <IonIcon icon={searchOutline} />
              <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <IonIcon icon={personOutline} />
              <span>Profile</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
              <IonIcon icon={cartOutline} />
              <span>Cart</span>
            </button>
            <button className="header-bottom-actions-btn" data-nav-open-btn aria-label="Open Menu">
              <IonIcon icon={menuOutline} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header></div>
  )
}

export default Header