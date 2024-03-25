const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { ContactIndex } from "./pages/ContactIndex.jsx"
import { HomePage } from "./pages/HomePage.jsx"


export function RootCmp() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactIndex />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}

