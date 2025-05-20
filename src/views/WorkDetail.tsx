import { useParams } from 'react-router-dom'
import { WORKS } from '@/data'
import FirstSection from '@/sections/FirstSection'

const WorkDetail = () => {
  const { work, subwork } = useParams()

  const formatSubwork = (text?: string) => {
    if (!text) return ''
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const selectedWork = WORKS.find((w) => w.link === work)
  const selectedSubwork = selectedWork?.subworks.find(
    (s) => s.sublink === subwork
  )

  return (
    <>
      <FirstSection />

      <div className="my-10 flex flex-col items-center gap-5">
        <h2 className="text-center text-amber-200 text-shadow-amber-700 text-shadow-md font-bold text-4xl font-inter">
          {work === 'casas-apartamentos'
            ? 'Casas y apartamentos'
            : work === 'obras-comerciales'
            ? 'Obras comerciales'
            : work === 'inmuebles-industriales'
            ? 'Inmuebles industriales'
            : work === 'construcción-institucional'
            ? 'Construcción institucional'
            : 'Vías Públicas e Infraestructura'}
        </h2>

        <h3 className="text-center text-amber-50 text-shadow-md text-shadow-amber-800 font-semibold text-3xl font-inter">
          {formatSubwork(subwork)}
        </h3>
      </div>

      <div className="px-10">
        {selectedSubwork?.images &&
          (Array.isArray(selectedSubwork.images) ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(selectedSubwork.images as string[]).map((img, idx) => {
                const imagesArr = selectedSubwork.images as string[]
                let className =
                  'object-cover rounded-lg shadow-lg w-full h-72 transition-all duration-300'
                if (imagesArr.length === 2) {
                  className += ' col-span-2 row-span-2 h-72'
                } else if (idx === 0) {
                  className += ' col-span-2 row-span-2 h-72'
                } else if (idx % 5 === 0) {
                  className += ' row-span-2 h-72'
                }
                return (
                  <img
                    key={idx}
                    src={img}
                    alt={`Imagen ${idx + 1}`}
                    className={className}
                  />
                )
              })}
            </div>
          ) : (
            Object.entries(selectedSubwork.images).map(([tipo, imgs]) => (
              <div key={tipo} className="mb-10">
                <h4 className="text-amber-100 font-semibold text-2xl mb-4 capitalize font-inter">
                  {tipo}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(imgs as string[]).map((img, idx) => {
                    let className =
                      'object-cover rounded-lg shadow-lg w-full h-48 transition-all duration-300'
                    if ((imgs as string[]).length === 2) {
                      className += ' col-span-2 row-span-2 h-72'
                    } else if (idx === 0) {
                      className += ' col-span-2 row-span-2 h-[400px]'
                    } else if (idx % 5 === 0) {
                      className += ' row-span-2 h-72'
                    }
                    return (
                      <img
                        key={idx}
                        src={img}
                        alt={`${tipo} ${idx + 1}`}
                        className={className}
                      />
                    )
                  })}
                </div>
              </div>
            ))
          ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-amber-300 text-neutral-800 shadow-md shadow-amber-400 font-inter px-10 py-3 rounded-md font-bold text-xl cursor-pointer">
          Contactar
        </button>
      </div>
    </>
  )
}

export default WorkDetail
