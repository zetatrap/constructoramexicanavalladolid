import Header from './components/Header'
import LinkContact from './components/LinkContact'
import FirstSection from './sections/FirstSection'
import SecondSection from './sections/SecondSection'

function App() {
  return (
    <div className="min-h-screen pb-20 relative bg-[#3b3b3b] bg-[radial-gradient(circle,rgba(59,59,59,1)_0%,rgba(39,39,39,1)_50%,rgba(28,28,28,1)_100%)]">
      <Header />
      <FirstSection />
      <SecondSection />
      <LinkContact />
    </div>
  )
}

export default App
