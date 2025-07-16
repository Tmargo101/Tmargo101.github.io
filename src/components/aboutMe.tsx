export function AboutMe() {
    return (
      <section id="about" className="max-w-3xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-lg leading-relaxed">
          I’m a software developer specializing in React and modern web technologies. I graduated from RIT in 2021, and enjoy creating intuitive and scalable web applications.
        </p>
        <p className="text-lg leading-relaxed">
          My Resume:{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Link
          </a>
        </p>

      </section>
    )
}