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
const Property = () => {
  return (
    <div> <section className="property" id="property">
    <div className="container">
      <p className="section-subtitle">Properties</p>
      <h2 className="h2 section-title">Featured Listings</h2>
      <ul className="property-list has-scrollbar">
        <li>
          <div className="property-card">
            <figure className="card-banner">
              <a href="#">
                <img src="./assets/images/property-1.jpg" alt="New Apartment Nice View" className="w-100" />
              </a>
              <div className="card-badge green">For Rent</div>
              <div className="banner-actions">
                <button className="banner-actions-btn">
                  <IonIcon icon={locationOutline} />
                  <address>Belmont Gardens, Chicago</address>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon="camera" />
                  <span>4</span>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={filmOutline} />
                  <span>2</span>
                </button>
              </div>
            </figure>
            <div className="card-content">
              <div className="card-price">
                <strong>$34,900</strong>/Month
              </div>
              <h3 className="h3 card-title">
                <a href="#">New Apartment Nice View</a>
              </h3>
              <p className="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>
              <ul className="card-list">
                <li className="card-item">
                  <strong>3</strong>
                  <IonIcon icon={bedOutline} />
                  <span>Bedrooms</span>
                </li>
                <li className="card-item">
                  <strong>2</strong>
                  <IonIcon icon= {manOutline} />
                  <span>Bathrooms</span>
                </li>
                <li className="card-item">
                  <strong>3450</strong>
                  <IonIcon icon={squareOutline} />
                  <span>Square Ft</span>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="card-author">
                <figure className="author-avatar">
                  <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100" />
                </figure>
                <div>
                  <p className="author-name">
                    <a href="#">William Seklo</a>
                  </p>
                  <p className="author-title">Estate Agents</p>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-footer-actions-btn">
                  <IonIcon icon={resizeOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={addCircleOutline} />
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="property-card">
            <figure className="card-banner">
              <a href="#">
                <img src="./assets/images/property-2.jpg" alt="Modern Apartments" className="w-100" />
              </a>
              <div className="card-badge orange">For Sales</div>
              <div className="banner-actions">
                <button className="banner-actions-btn">
                  <IonIcon icon={locationOutline} />
                  <address>Belmont Gardens, Chicago</address>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={cameraOutline} />
                  <span>4</span>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={filmOutline} />
                  <span>2</span>
                </button>
              </div>
            </figure>
            <div className="card-content">
              <div className="card-price">
                <strong>$34,900</strong>/Month
              </div>
              <h3 className="h3 card-title">
                <a href="#">Modern Apartments</a>
              </h3>
              <p className="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>
              <ul className="card-list">
                <li className="card-item">
                  <strong>3</strong>
                  <IonIcon icon={bedOutline} />
                  <span>Bedrooms</span>
                </li>
                <li className="card-item">
                  <strong>2</strong>
                  <IonIcon icon={manOutline} />
                  <span>Bathrooms</span>
                </li>
                <li className="card-item">
                  <strong>3450</strong>
                  <IonIcon icon={squareOutline} />
                  <span>Square Ft</span>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="card-author">
                <figure className="author-avatar">
                  <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100" />
                </figure>
                <div>
                  <p className="author-name">
                    <a href="#">William Seklo</a>
                  </p>
                  <p className="author-title">Estate Agents</p>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-footer-actions-btn">
                  <IonIcon icon={resizeOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={addCircleOutline} />
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="property-card">
            <figure className="card-banner">
              <a href="#">
                <img src="./assets/images/property-3.jpg" alt="Comfortable Apartment" className="w-100" />
              </a>
              <div className="card-badge green">For Rent</div>
              <div className="banner-actions">
                <button className="banner-actions-btn">
                  <IonIcon icon={locationOutline} />
                  <address>Belmont Gardens, Chicago</address>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={cameraOutline} />
                  <span>4</span>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={filmOutline} />
                  <span>2</span>
                </button>
              </div>
            </figure>
            <div className="card-content">
              <div className="card-price">
                <strong>$34,900</strong>/Month
              </div>
              <h3 className="h3 card-title">
                <a href="#">Comfortable Apartment</a>
              </h3>
              <p className="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>
              <ul className="card-list">
                <li className="card-item">
                  <strong>3</strong>
                  <IonIcon icon={bedOutline} />
                  <span>Bedrooms</span>
                </li>
                <li className="card-item">
                  <strong>2</strong>
                  <IonIcon icon={manOutline} />
                  <span>Bathrooms</span>
                </li>
                <li className="card-item">
                  <strong>3450</strong>
                  <IonIcon icon={squareOutline} />
                  <span>Square Ft</span>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="card-author">
                <figure className="author-avatar">
                  <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100" />
                </figure>
                <div>
                  <p className="author-name">
                    <a href="#">William Seklo</a>
                  </p>
                  <p className="author-title">Estate Agents</p>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-footer-actions-btn">
                  <IonIcon icon={resizeOutline}/>
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={addCircleOutline} />
                </button>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="property-card">
            <figure className="card-banner">
              <a href="#">
                <img src="./assets/images/property-4.png" alt="Luxury villa in Rego Park" className="w-100" />
              </a>
              <div className="card-badge green">For Rent</div>
              <div className="banner-actions">
                <button className="banner-actions-btn">
                  <IonIcon icon={locationOutline} />
                  <address>Belmont Gardens, Chicago</address>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={cameraOutline} />
                  <span>4</span>
                </button>
                <button className="banner-actions-btn">
                  <IonIcon icon={filmOutline} />
                  <span>2</span>
                </button>
              </div>
            </figure>
            <div className="card-content">
              <div className="card-price">
                <strong>$34,900</strong>/Month
              </div>
              <h3 className="h3 card-title">
                <a href="#">Luxury villa in Rego Park</a>
              </h3>
              <p className="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
              </p>
              <ul className="card-list">
                <li className="card-item">
                  <strong>3</strong>
                  <IonIcon icon={bedOutline} />
                  <span>Bedrooms</span>
                </li>
                <li className="card-item">
                  <strong>2</strong>
                  <IonIcon icon={manOutline} />
                  <span>Bathrooms</span>
                </li>
                <li className="card-item">
                  <strong>3450</strong>
                  <IonIcon icon={squareOutline} />
                  <span>Square Ft</span>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="card-author">
                <figure className="author-avatar">
                  <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100" />
                </figure>
                <div>
                  <p className="author-name">
                    <a href="#">William Seklo</a>
                  </p>
                  <p className="author-title">Estate Agents</p>
                </div>
              </div>
              <div className="card-footer-actions">
                <button className="card-footer-actions-btn">
                  <IonIcon icon={resizeOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="card-footer-actions-btn">
                  <IonIcon icon={addCircleOutline} />
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section></div>
  )
}

export default Property