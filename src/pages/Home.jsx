import { Link } from "react-router-dom"

function Home() {
  return (
    <section>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>

      <h1>Home</h1>
    </section>
  )
}

export default Home