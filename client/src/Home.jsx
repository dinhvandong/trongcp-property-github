/* eslint-disable jsx-a11y/anchor-is-valid */
import { IonIcon } from "@ionic/react";
import {
  closeOutline,
  logoTwitter,
  logoPinterest,
  searchOutline,
  personOutline,
  cartOutline,
  menuOutline,
  homeOutline,
} from "ionicons/icons";
import { logoFacebook } from "ionicons/icons";
import { logoInstagram } from "ionicons/icons";
import { mailOutline } from "ionicons/icons";
import {
  locationOutline,
  leafOutline,
  wineOutline,
  shieldCheckmarkOutline,
  arrowForwardOutline,
  bedOutline,
  manOutline,
  squareOutline,
  resizeOutline,
  heartOutline,
  addCircleOutline,
  cameraOutline,
  filmOutline,
  carSportOutline,
  waterOutline,
  fitnessOutline,
  libraryOutline,
  cardOutline,
  footballOutline,
  pricetagOutline,
  calendarOutline,
} from "ionicons/icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Property from "./components/Property";
import Feature from "./components/Feature";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <article>
          <Hero />
          <About />
          <Service />
          <Property />
          <Feature />
          <Blog />
          <Cta />
        </article>
      </main>
      <Footer />
    </div>
  );
}
