// https://www.freecodecamp.org/news/build-portfolio-website-react/
// npm install (being in the 3r3 catalog)
// npm run-script start
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Cooperation from "../components/Cooperation";
import Collection from "../components/Collection";
import Investors from "../components/Investors";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Products />
      <Collection />
      <Investors />
      <Cooperation />
      <Contact />
    </main>
  );
}