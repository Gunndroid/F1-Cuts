import { Link, Route, Routes } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="text-center h-28 grid grid-cols-3 items-center font-bold text-white text-xs md:text-lg">
      <Link to="/contact">Contact Us 🕊️</Link>
      <i>"Speed Up Your Social Media Success"</i>
      <p className="cursor-default">©F1Cuts2023</p>
    </footer>
  </>
);

export default Footer;
