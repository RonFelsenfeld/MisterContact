import { UserMsg } from "./UserMsg.jsx"

const { NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header>
      <UserMsg />
      <nav>
        <NavLink to="/">Home</NavLink> |<NavLink to="/contact">contacts</NavLink>
      </nav>
      <h1>i love my contacts</h1>
    </header>
  )
}
