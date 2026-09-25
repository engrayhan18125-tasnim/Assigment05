import React from "react";
import logoss from "./assects/banner-stack.png"
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Star,
  ArrowRight,
  Code2,
  Layers3,
  Rocket,
  Trash2
} from "lucide-react";
import { toast } from "react-toastify";

const GRADIENT = "linear-gradient(90deg, #ff9b55 0%, #f03c8c 52%, #8b5cf6 100%)";

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Dev Stack home">
      <span className="brand-mark">DS</span>
      <span>Dev <b>Stack</b></span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="mobile-menu-wrap">
          <button className="icon-btn mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <Logo />

        <nav className={`nav-links ${open ? "show-mobile" : ""}`}>
          {["Home", "Technologies", "Projects", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

