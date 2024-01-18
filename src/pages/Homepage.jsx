// import React from 'react'

import Client from "../components/Client";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import Professionals from "../components/Professionals";
import Service from "../components/Service";

export default function Homepage() {
  return (
    <div className="">
      <Navbar />
      <HeroPage />
      <Client />
      <Service />
      <Professionals />
      <Footer />
    </div>
  );
}
