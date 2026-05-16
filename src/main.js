import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Carla</h1>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img
          src="https://i.pravatar.cc/200"
          alt="profile"
        />

        <h2>
          Hi, I'm <span>Carla</span>
        </h2>

        <p>
          Frontend Developer building modern and responsive websites.
        </p>

        <button>Hire Me</button>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I love creating clean and responsive websites using React and Vite.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <img src="https://picsum.photos/400/200?1" alt="" />

            <h3>Portfolio Website</h3>

            <p>Modern portfolio using React.</p>
          </div>

          <div className="card">
            <img src="https://picsum.photos/400/200?2" alt="" />

            <h3>Todo App</h3>

            <p>Task management application.</p>
          </div>

          <div className="card">
            <img src="https://picsum.photos/400/200?3" alt="" />

            <h3>Weather App</h3>

            <p>Weather dashboard with API integration.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>Email: carla@example.com</p>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);