import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
