import React from "react";
import Nav from "../Home/Nav";
import Homepage from "./Homepage";
import Reviews from "../Home/Reviews";
import Footer from "../Home/Footer";

function Home() {
  return (
    <div class="flex flex-col h-screen justify-between">
      {/* pages */}
      <div>
      <Nav />
      <Homepage />
      <Reviews />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
