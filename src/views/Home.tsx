import FirstSection from '@/sections/FirstSection'
import SecondSection from '@/sections/SecondSection'
import HeaderHomeImage from '@/assets/images/headers/home.png'

const Home = () => {
  return (
    <>
      <FirstSection image={HeaderHomeImage} />
      <SecondSection />
    </>
  )
}

export default Home
