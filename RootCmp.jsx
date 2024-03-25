const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { ContactIndex } from "./pages/ContactIndex.jsx"
import { HomePage } from "./pages/HomePage.jsx"
import { ContactDetails } from './pages/ContactDetails.jsx'
import { ContactEdit } from "./pages/ContactEdit.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"

import { store } from "./store/store.js"

export function RootCmp() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactIndex />} />
              <Route path="/contact/:contactId" element={<ContactDetails />} />
              <Route path="/contact/edit" element={<ContactEdit />} />
              <Route path="/contact/edit/:contactId" element={<ContactEdit />} />
            </Routes>
          </main>
        </section>
        <AppFooter />
      </Router>
    </Provider>
  )
}

