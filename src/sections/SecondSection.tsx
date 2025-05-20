import GoogleMapsImage from '@/assets/images/google-maps.png'

const SecondSection = () => {
  return (
    <section className="font-poppins mt-5">
      <h2 className="text-center text-amber-800 text-2xl text-pretty bg-amber-200 py-4">
        Nuestro compromiso es brindar soluciones innovadoras, sostenibles y de
        calidad.
      </h2>

      <div className="my-10 mx-10 flex flex-col gap-10">
        <article className="flex items-center h-[500px]">
          <div className="transition duration-500 ease-in-out overflow-clip h-full w-1/2 rounded-tl-xl rounded-bl-xl shadow-2xl shadow-[#353535] border-2 border-white">
            <img
              src="https://picsum.photos/1920/1080"
              alt="constructora home image"
              className="object-cover transition duration-500 hover:scale-105 w-full h-full"
            />
          </div>

          <div className="border-2 border-l-0 border-white h-full w-1/2 rounded-tr-xl rounded-br-xl flex items-center justify-center px-10">
            <p className="text-pretty font-poppins text-white text-2xl text-center">
              Contamos con un equipo profesional que trabaja para llevar tus
              ideas a la realidad, combinando estética y funcionalidad.
            </p>
          </div>
        </article>

        <article className="transition duration-500 ease-in-out overflow-clip w-full h-[800px] rounded-xl shadow-2xl shadow-[#353535] cursor-pointer">
          <a
            href="https://www.google.com/maps/search/?api=1&query=19.6879273,-101.1770199"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GoogleMapsImage}
              alt="google-maps-location"
              className="w-full h-full rounded-xl object-cover transition duration-500 hover:scale-110"
            />
          </a>
        </article>
      </div>
    </section>
  )
}

export default SecondSection
