const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with React and Tailwind.",
  },
  {
    title: "Todo App",
    description: "Task manager with local storage support.",
  },
  {
    title: "Weather App",
    description: "Weather dashboard using API integration.",
  },
]

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            MyPortfolio
          </h1>

          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">Carla Mae Cabales</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Frontend Developer creating modern and responsive web applications.
          </p>

          <a
            href="#projects"
            className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            About Me
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            I am a passionate developer who enjoys building clean,
            modern, and user-friendly websites using React and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Vite",
              "Git",
              "Responsive Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-700 p-6 rounded-2xl text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300">
                  {project.description}
                </p>

                <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Contact
          </h2>

          <p className="text-slate-300 mb-8">
            Let's work together on your next project.
          </p>

          <a
            href="mailto:your@email.com"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl inline-block"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400">
        © 2026 Your Name. All rights reserved.
      </footer>
    </div>
  )
}

export default App