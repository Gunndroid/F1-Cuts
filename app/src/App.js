import "./index.css";
// import { Link, Route, Routes } from "react-router-dom";
// import Landing from "./components/pages/landing";
// import About from "./components/pages/about";
// import Services from "./components/pages/services";
// import NotFound from "./components/pages/notfound";
// import logo from "./img/f1cutsBlack.png";
// import Cuts from "./components/pages/cut";
import Racecar from "./components/racecar";
import Footer from "./components/footer";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <Racecar />
      <Footer />
    </>
  );
}
