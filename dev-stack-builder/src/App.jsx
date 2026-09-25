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

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">BUILD YOUR PERFECT STACK</span>
        <h1>
          Choose the right <span>technologies</span> for your next project.
        </h1>
        <p>
          Explore modern tools, frameworks, databases, and platforms. Build a
          stack that matches your project and your skill level.
        </p>
        <div className="hero-buttons">
          <a className="primary-btn" href="#technologies">
            Explore Technologies <ArrowRight size={18} />
          </a>
          <a className="outline-btn" href="#about">Learn More</a>
        </div>
      </div>

      <div className="" aria-hidden="true">
        <img src={logoss} alt="" />
      </div>
    </section>
  );
}

function TechCard({ tech, selected, onAdd }) {
  return (
    <article className={`tech-card ${selected ? "selected-card" : ""}`}>
      <div className="card-top">
        <div className="icon-holder">
          <img src={tech.icon} alt={tech.name} onError={(e) => (e.currentTarget.style.display = "none")} />
        </div>
        <span className="badge">{tech.badge}</span>
      </div>

      <h3>{tech.name}</h3>
      <p className="description">{tech.description}</p>

      <div className="meta-row">
        <span className="chip">{tech.category}</span>
        <span className="chip">{tech.difficulty}</span>
        <span className="rating"><Star size={14} fill="currentColor" /> {tech.rating}</span>
      </div>

      <button
        className={`stack-btn ${selected ? "added" : ""}`}
        disabled={selected}
        onClick={() => onAdd(tech)}
      >
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div>
        <h2>Your Stack</h2>
        <p>{stack.length} Technology{stack.length !== 1 ? "ies" : "y"} Selected</p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon"><Layers3 size={28} /></div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the cards to build your stack.</p>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt="" />
              <div>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>
              <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="remove-all" onClick={onRemoveAll} disabled={stack.length === 0}>
        <Trash2 size={16} /> Remove All
      </button>
    </aside>
  );
}