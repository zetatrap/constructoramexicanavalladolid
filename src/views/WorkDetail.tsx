import { useParams } from 'react-router-dom'
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

  return (
    <>
      <FirstSection />

      <div className="my-10 flex flex-col items-center gap-5">
        <h2 className="text-center text-amber-200 text-shadow-amber-700 text-shadow-md font-bold text-4xl">
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

        <h3 className="text-center text-amber-50 text-shadow-md text-shadow-amber-800 font-semibold text-3xl">
          {formatSubwork(subwork)}
        </h3>
      </div>
    </>
  )
}

export default WorkDetail
