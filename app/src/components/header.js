import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import logo from "../img/f1cutsBlack.png";
import About from "./pages/about";
import Landing from "./pages/landing";
import Services from "./pages/services";
import Cuts from "./pages/cut";
import NotFound from "./pages/notfound";
import ContactUs from "./pages/contact";

const Header = () => (
  <>
    <nav className="h-30 text-white">
      <div className="text-center grid grid-cols-2 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="ml-10 w-28" />
        </Link>
        <ul>
          <li className="grid grid-cols-4 mr-8">
            <Link to="/">Home</Link>
            <Link to="/legacy">Legacy</Link>
            <Link to="/services">Services</Link>
            <Link to="/makeacut">Make a Cut</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/legacy" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/makeacut" element={<Cuts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  </>
);

export default Header;
