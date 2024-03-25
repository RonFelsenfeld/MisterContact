const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { HomePage } from "./pages/HomePage.jsx"
import { ContactDetails } from './pages/ContactDetails.jsx'


export function RootCmp() {
  return (
    // <Provider store={store}>
    <Router>
      <section className="app">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact/:contactId" element={<ContactDetails />} />
          </Routes>
        </main>
      </section>
    </Router>
    // </Provider>
  )
}

