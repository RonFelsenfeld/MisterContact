const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { ContactIndex } from "./pages/ContactIndex.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { ContactDetails } from './pages/ContactDetails.jsx'
import { store } from "./store/store.js"
import { AppHeader } from "./cmp/AppHeader.jsx"


export function RootCmp() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader/>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactIndex />} />
              <Route path="/contact/:contactId" element={<ContactDetails />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}

