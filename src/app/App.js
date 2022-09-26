// https://www.freecodecamp.org/news/build-portfolio-website-react/
// https://medium.com/@vergil333/google-analytics-4-in-react-a250005c2455
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
import ReactGA from "react-ga4";

ReactGA.initialize("G-4M48YP4P5L");
ReactGA.send("pageview");

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