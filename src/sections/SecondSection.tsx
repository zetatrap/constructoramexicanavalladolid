import SeconCard from '@/components/SecondCard'

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
    <section className="max-w-[1200px] mx-auto font-inter mt-10">
      <h2 className="text-center text-white font-semibold text-4xl text-pretty">
        Nuestro compromiso es brindar soluciones innovadoras, sostenibles y de
        calidad.
      </h2>

      <div className='mt-10 flex flex-col gap-12'>
        {DATA.map((data, index) => (
          <SeconCard
            key={data.id}
            data={data}
            type={index % 2 === 0 ? '1' : '2'}
          />
        ))}
      </div>
    </section>
  )
}

export default SecondSection
