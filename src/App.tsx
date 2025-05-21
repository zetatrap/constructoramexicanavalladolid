import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LinkContact from './components/LinkContact'
import Home from './views/Home'
import WorkDetail from './views/WorkDetail'
import Contact from './views/Contact'
import ContactCard from './components/ContactCard'
import Footer from './components/Footer'
import TechGallery from './views/TechGallery'

function App() {
  return (
    <div className="min-h-screen pb-10 relative bg-[#3b3b3b] bg-[radial-gradient(circle,rgba(59,59,59,1)_0%,rgba(39,39,39,1)_50%,rgba(28,28,28,1)_100%)]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:work/:subwork" element={<WorkDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/galeria-tecnica" element={<TechGallery />} />
      </Routes>
      <Footer />
      <LinkContact />
      <ContactCard />
    </div>
  )
}

export default App
