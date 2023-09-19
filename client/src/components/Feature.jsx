import React from 'react'
import { IonIcon } from '@ionic/react';
import { closeOutline, logoTwitter, 
  logoPinterest, searchOutline, personOutline, 
  cartOutline, menuOutline, homeOutline } from 'ionicons/icons';
import { logoFacebook } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import { mailOutline } from 'ionicons/icons';
import { locationOutline, leafOutline, wineOutline, 
  shieldCheckmarkOutline, arrowForwardOutline, 
  bedOutline, manOutline,  squareOutline,
   resizeOutline, heartOutline, addCircleOutline,
  cameraOutline, filmOutline, carSportOutline, waterOutline,
   fitnessOutline, libraryOutline, cardOutline, footballOutline, pricetagOutline, calendarOutline
  
  } from 'ionicons/icons';
const Feature = () => {
  return (
    <div> <section className="features">
    <div className="container">
      <p className="section-subtitle">Our Aminities</p>
      <h2 className="h2 section-title">Building Aminities</h2>
      <ul className="features-list">
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={carSportOutline} />
            </div>
            <h3 className="card-title">Parking Space</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={"water-outline"} />
            </div>
            <h3 className="card-title">Swimming Pool</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={shieldCheckmarkOutline} />
            </div>
            <h3 className="card-title">Private Security</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={fitnessOutline} />
            </div>
            <h3 className="card-title">Medical Center</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={libraryOutline} />
            </div>
            <h3 className="card-title">Library Area</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={bedOutline} />
            </div>
            <h3 className="card-title">King Size Beds</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={homeOutline} />
            </div>
            <h3 className="card-title">Smart Homes</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
        <li>
          <a href="#" className="features-card">
            <div className="card-icon">
              <IonIcon icon={footballOutline} />
            </div>
            <h3 className="card-title">Kid’s Playland</h3>
            <div className="card-btn">
              <IonIcon icon={arrowForwardOutline} />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section></div>
  )
}

export default Feature