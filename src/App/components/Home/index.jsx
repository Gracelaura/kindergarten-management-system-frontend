import React from "react";
import Nav from "../Home/Nav";
import Homepage from "./Homepage";
import Reviews from "../Home/Reviews";
import Footer from "../Home/Footer";

function Home() {
  return (
    <div class="">
      {/* pages */}
      <Nav />
      <Homepage />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
