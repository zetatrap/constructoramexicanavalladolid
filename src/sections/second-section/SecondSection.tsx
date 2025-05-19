import SecondCard from '@/components/SecondCard/SecondCard'
import style from './SecondSection.module.css'

const DATA = [
  {
    id: 1,
    text: 'Contamos con un equipo profesional que trabaja para llevar tus ideas a la realidad, combinando estética y funcionalidad.',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    text: 'Más de 100 obras entregadas con éxito, cumpliendo plazos y garantizando satisfacción a nuestros clientes.',
    image: 'https://picsum.photos/200/300',
  },
]

const SecondSection = () => {
  return (
    <section className={style.secondSection}>
      <span>
        Nuestro compromiso es brindar soluciones innovadoras, sostenibles y de
        calidad.
      </span>

      <div>
        {DATA.map((item) => (
          <SecondCard data={item} />
        ))}
      </div>
    </section>
  )
}

export default SecondSection
