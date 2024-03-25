const { NavLink } = ReactRouterDOM



export function AppHeader() {
  return (
    <header>
      {/* <UserMsg /> */}
      <nav>
        <NavLink to="/">Home</NavLink> |<NavLink to="/contacts">contacts</NavLink>
        {/* <NavLink to="/about">About</NavLink>| */}

      </nav>
      <h1>i love my contacts</h1>
    </header>
  )
}
