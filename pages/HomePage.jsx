import { utilService } from "../services/util.service.js";

export function HomePage() {
  return <section className="home-page">
    <h1>Home page</h1>
    <p>{utilService.makeLorem(50)}</p>
  </section>
}
