import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LinkContact from './components/LinkContact'
import Home from './views/Home'
import WorkDetail from './views/WorkDetail'

function App() {
  return (
    <div className="min-h-screen pb-20 relative bg-[#3b3b3b] bg-[radial-gradient(circle,rgba(59,59,59,1)_0%,rgba(39,39,39,1)_50%,rgba(28,28,28,1)_100%)]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:work/:subwork" element={<WorkDetail />} />
      </Routes>
      <LinkContact />
    </div>
  )
}

export default App
