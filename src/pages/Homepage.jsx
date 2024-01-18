// import React from 'react'

import Client from "../components/Client";
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
    </div>
  );
}
