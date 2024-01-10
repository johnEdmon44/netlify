import { Link } from "react-router-dom"

function About() {
  return (
    <section>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>

      <h1>About</h1>
    </section>
  )
}

export default About