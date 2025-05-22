import { useParams } from 'react-router-dom'
import { WORKS } from '@/data'
import FirstSection from '@/sections/FirstSection'

const WorkDetail = () => {
  const { work, subwork } = useParams()

  const selectedWork = WORKS.find((w) => w.link === work)
  const selectedSubwork = selectedWork?.subworks.find(
    (s) => s.sublink === subwork
  )

  return (
    <>
      <FirstSection image={selectedWork?.image as string} />

      <div className="my-10 flex flex-col items-center gap-5">
        <h2 className="text-center text-amber-800 bg-amber-200 text-xl md:text-3xl font-poppins w-full py-2 px-1 sm:px-0">
          {selectedWork?.label}
        </h2>

        <h3 className="text-center text-amber-50 font-medium text-xl md:text-3xl font-poppins">
          {selectedSubwork?.label}
        </h3>
      </div>

      <div className="px-3 md:px-10">
        {selectedSubwork?.images &&
          (Array.isArray(selectedSubwork.images) ? (
            <div
              className={`grid gap-4 ${
                (selectedSubwork.images as string[]).length === 4
                  ? 'grid-cols-2'
                  : 'grid-cols-2 md:grid-cols-4'
              }`}
            >
              {(selectedSubwork.images as string[]).map((img, idx) => {
                const imagesArr = selectedSubwork.images as string[]
                let className =
                  'rounded-lg shadow-lg w-full h-[300px] md:h-[500px] transition duration-500'
                if (imagesArr.length !== 4) {
                  if (imagesArr.length === 2) {
                    className += ' col-span-2 row-span-2 h-72'
                  } else if (idx === 0) {
                    className += ' col-span-2 row-span-2 h-72'
                  } else if (idx % 5 === 0) {
                    className += ' row-span-2 h-72'
                  }
                }
                return (
                  <div
                    className={`transition duration-500 ease-in-out overflow-clip rounded-lg ${className}`}
                  >
                    <img
                      key={idx}
                      src={img}
                      alt={`Imagen ${idx + 1}`}
                      className="h-full w-full object-cover rounded-lg hover:scale-110 transition duration-700"
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            Object.entries(selectedSubwork.images).map(([tipo, imgs]) => (
              <div key={tipo} className="mt-10">
                <h4 className="text-amber-100 font-semibold text-xl md:text-3xl mb-2 capitalize font-poppins">
                  {tipo}
                </h4>
                <div
                  className={`grid gap-4 ${
                    (imgs as string[]).length === 4
                      ? 'grid-cols-2'
                      : 'grid-cols-2 md:grid-cols-4'
                  }`}
                >
                  {(imgs as string[]).map((img, idx) => {
                    let className =
                      'rounded-lg shadow-lg w-full h-72 transition duration-500'
                    if ((imgs as string[]).length !== 4) {
                      if ((imgs as string[]).length === 2) {
                        className += ' col-span-2 row-span-2 h-[200px] md:h-[400px]'
                      } else if (idx === 0) {
                        className += ' col-span-2 row-span-2 h-[300px] md:h-[590px]'
                      } else if (idx % 5 === 0) {
                        className += ' row-span-2 h-72'
                      }
                    }
                    return (
                      <div
                        className={`transition duration-500 ease-in-out overflow-clip rounded-lg ${className}`}
                      >
                        <img
                          key={idx}
                          src={img}
                          alt={`${tipo} ${idx + 1}`}
                          className="h-full w-full object-cover rounded-lg hover:scale-110 transition duration-700"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          ))}
      </div>

      <div className="flex justify-center mt-10 mb-20">
        <button className="bg-amber-200 text-amber-950 shadow-md shadow-amber-400 hover:bg-amber-100 transition duration-200 font-poppins px-10 py-3 rounded-md font-bold text-xl cursor-pointer">
          Contactar
        </button>
      </div>
    </>
  )
}

export default WorkDetail
