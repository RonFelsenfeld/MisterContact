const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux


export function RootCmp() {
  return (
    // <Provider store={store}>
    <Router>
      <section className="app">
        <main>
          <Routes>

          </Routes>
        </main>
      </section>
    </Router>
    // </Provider>
  )
}

