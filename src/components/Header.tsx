import { useState, useEffect, useRef } from 'react'
import { Hamburger } from '@/icons'

const NAV_LINK = [
  { id: 1, label: 'Inicio' },
  { id: 2, label: 'Obras' },
  { id: 3, label: 'Contacto' },
]

const WORKS = [
  {
    id: 1,
    label: 'Casas / Apartamentos',
    subworks: [
      { id: 1, label: 'Terminado Básico' },
      { id: 2, label: 'Terminado Medio Residencial' },
      { id: 3, label: 'Terminado Residencial' },
      { id: 4, label: 'Terminado de Lujo' },
    ],
  },
  {
    id: 2,
    label: 'Obras Comerciales',
    subworks: [
      { id: 1, label: 'Hoteles' },
      { id: 2, label: 'Tiendas Oficinas' },
      { id: 3, label: 'Restaurantes' },
      { id: 4, label: 'Mobiliarios' },
    ],
  },
  {
    id: 3,
    label: 'Inmuebles Industriales',
    subworks: [
      { id: 1, label: 'Fábricas' },
      { id: 2, label: 'Almacenes' },
      { id: 3, label: 'Bodegas' },
    ],
  },
  {
    id: 4,
    label: 'Construcción Institucional',
    subworks: [
      { id: 1, label: 'Escuelas' },
      { id: 2, label: 'Hospitales' },
    ],
  },
  {
    id: 5,
    label: 'Vías Públicas e Infraestructura',
    subworks: [
      { id: 1, label: 'Carreteras' },
      { id: 2, label: 'Puentes' },
    ],
  },
]

const Header = () => {
  const [isWorksOpen, setIsWorksOpen] = useState<boolean>(false)
  const [openWorkId, setOpenWorkId] = useState<number | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const obrasRef = useRef<HTMLLIElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const menuMobileRef = useRef<HTMLUListElement>(null)

  const toggleWorksMenu = () => {
    setIsWorksOpen(!isWorksOpen)
  }

  const toggleSubWordsMenu = (workId: number) => {
    setOpenWorkId(workId === openWorkId ? null : workId)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      obrasRef.current &&
      dropdownRef.current &&
      !obrasRef.current.contains(event.target as Node) &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsWorksOpen(false)
      setOpenWorkId(null)
      setShowMobileMenu(false)
    }

    if (
      showMobileMenu &&
      menuMobileRef.current &&
      !menuMobileRef.current.contains(event.target as Node)
    ) {
      setShowMobileMenu(false)
      setIsWorksOpen(false)
      setOpenWorkId(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMobileMenu])

  return (
    <header className="bg-[#272727] w-full font-inter text-white py-6 px-3 relative">
      <div className="max-w-[1200px] w-full flex items-center justify-between mx-auto">
        <h1 className="font-bold text-xl">LOGO</h1>

        <nav>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Abrir menú"
            className="flex sm:hidden"
          >
            <Hamburger className="size-8 cursor-pointer" />
          </button>
          <ul className="items-center gap-7 hidden sm:flex">
            {NAV_LINK.map(({ id, label }) => (
              <li
                key={id}
                ref={label === 'Obras' ? obrasRef : null}
                className="py-2 px-3 hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out rounded-md text-lg font-semibold relative"
              >
                <span
                  onClick={label === 'Obras' ? toggleWorksMenu : undefined}
                  className="flex items-center"
                >
                  {label}
                  {label === 'Obras' && (
                    <span className="text-sm ml-0.5">▼</span>
                  )}
                </span>
                {label === 'Obras' && isWorksOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50 flex flex-col min-w-[270px] shadow-md bg-[#272727]"
                  >
                    {WORKS.map(({ id, label, subworks }) => (
                      <li
                        key={id}
                        onClick={() => toggleSubWordsMenu(id)}
                        className="text-base p-2 hover:bg-[#333] w-full relative"
                      >
                        {label}
                        <span className="text-xs ml-0.5">▼</span>
                        {openWorkId === id && (
                          <ul className="absolute left-0 top-full z-[60] flex flex-col min-w-[270px] shadow-md bg-[#333]">
                            {subworks.map(({ id, label }) => (
                              <li
                                key={id}
                                className="hover:bg-[#444] cursor-pointer w-full p-2"
                              >
                                {label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {showMobileMenu && (
          <nav
            ref={menuMobileRef}
            className="absolute top-full left-0 right-0 w-full bg-[#272727] sm:hidden"
          >
            <ul className="flex flex-col items-center justify-center">
              {NAV_LINK.map(({ id, label }) => (
                <li
                  key={id}
                  ref={label === 'Obras' ? obrasRef : null}
                  className="hover:bg-[#333] cursor-pointer transition-all duration-300 ease-in-out font-semibold text-lg w-full py-2 flex flex-col items-center justify-center"
                >
                  <span
                    onClick={label === 'Obras' ? toggleWorksMenu : undefined}
                  >
                    {label}
                    {label === 'Obras' && (
                      <span className="text-sm ml-0.5">▼</span>
                    )}
                  </span>
                  {label === 'Obras' && isWorksOpen && (
                    <ul ref={dropdownRef} className="w-full bg-[#333]">
                      {WORKS.map(({ id, label, subworks }) => (
                        <li
                          key={id}
                          onClick={() => toggleSubWordsMenu(id)}
                          className="w-full hover:bg-[#444] flex flex-col items-center justify-center py-1 text-base font-medium"
                        >
                          <div className="flex items-center">
                            {label}
                            <span className="text-xs ml-0.5">▼</span>
                          </div>
                          {openWorkId === id && (
                            <ul className="w-full">
                              {subworks.map(({ id, label }) => (
                                <li
                                  key={id}
                                  className="hover:bg-[#555] w-full flex items-center justify-center py-1"
                                >
                                  {label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
