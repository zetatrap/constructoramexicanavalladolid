import FirstSection from '@/sections/FirstSection'
import { TECH_GALLERY } from '@/data'

const TechGallery = () => {
  return (
    <>
      <FirstSection image="https://picsum.photos/1920/1080" />

      <h2 className="text-center text-amber-800 bg-amber-200 text-3xl font-poppins w-full py-2 mt-10">
        Galería Técnica
      </h2>

      <div className="px-10 mb-20">
        {TECH_GALLERY.map(({ images, label }) => (
          <div key={label} className="mt-5 flex flex-col gap-10">
            <h3 className="text-center text-amber-50 font-medium text-3xl font-poppins">
              {label}
            </h3>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {images.map((img: string, idx: number) => {
                let className =
                  'rounded-lg shadow-lg w-full h-[590px] transition duration-500'
                if (images.length === 2) {
                  className += ' col-span-2 row-span-2 h-[400px]'
                } else if (idx === 0) {
                  className += ' col-span-2 row-span-0 h-[590px]'
                } else if (idx % 5 === 0) {
                  className += ' row-span-2 h-72'
                }
                return (
                  <div
                    key={idx}
                    className={`transition duration-500 ease-in-out overflow-clip rounded-lg ${className}`}
                  >
                    <img
                      src={img}
                      alt={`${label} ${idx + 1}`}
                      className="h-full w-full object-cover rounded-lg hover:scale-110 transition duration-700"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TechGallery
