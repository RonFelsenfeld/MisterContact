import { UserMsg } from "./UserMsg.jsx"

const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header>
      <h1>I love my contacts</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">contacts</NavLink>
      </nav>
    </header>
  )
}
