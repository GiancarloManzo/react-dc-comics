import "./App.css";

import BlueBand from "./components/BlueBand";
import blueBandLinks from "./data/blueBandLinks";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ComicList from "./components/ComicList";

import navLinks from "./data/navLinks";
import comics from "./data/comics";

export default function App() {
  return (
    <>
      <Header navLinks={navLinks} />
      <Jumbotron />
      <ComicList comics={comics} />
      <BlueBand links={blueBandLinks} />
    </>
  );
}
