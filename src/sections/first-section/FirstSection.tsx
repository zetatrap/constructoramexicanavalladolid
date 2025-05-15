import FirstSectionImage from '@/assets/images/first-section.jpg'
import style from './FirstSection.module.css'

const FirstSection = () => {
  return (
    <section className={style.firstSection}>
      <img src={FirstSectionImage} alt="first-section-image" />
    </section>
  )
}
export default FirstSection
