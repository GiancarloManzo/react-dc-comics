import "./App.css";

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
    </>
  );
}
