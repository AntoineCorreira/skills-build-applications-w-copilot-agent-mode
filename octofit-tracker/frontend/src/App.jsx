import { Route, Routes } from 'react-router-dom'
import octofitLogo from '../../../docs/octofitapp-small.png'

function Home() {
  return (
    <main className="container py-5">
      <header className="d-flex align-items-center gap-3 mb-5">
        <img src={octofitLogo} alt="OctoFit Tracker" width="64" height="64" />
        <span className="fs-4 fw-semibold">OctoFit Tracker</span>
      </header>
      <section className="p-5 bg-body-tertiary rounded-4">
        <h1 className="display-5 fw-bold">Make every move count.</h1>
        <p className="col-md-8 fs-5 mb-0">
          Track activities, reach your goals, and compete with your team.
        </p>
      </section>
    </main>
  )
}

function NotFound() {
  return (
    <main className="container py-5">
      <h1>Page not found</h1>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
