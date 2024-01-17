// import React from 'react'

import Client from "../components/Client";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import Service from "../components/Service";

export default function Homepage() {
  return (
    <div className="">
      <Navbar />
      <HeroPage />
      <Client />
      <Service />
    </div>
  );
}
