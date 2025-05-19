import FirstSectionImage from '@/assets/images/first-section.jpg'

const FirstSection = () => {
  return (
    <section>
      <img
        src={FirstSectionImage}
        alt="first-section-image"
        className="w-full h-[400px] object-cover"
      />
    </section>
  )
}

export default FirstSection
