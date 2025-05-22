import { useState, useEffect, useRef } from 'react'
import { Hamburger } from '@/icons'
import { useNavigate } from 'react-router-dom'
import { WORKS } from '@/data'
import LogoImage from '@/assets/images/logo.png'

const NAV_LINK = [
  { id: 1, label: 'Inicio', link: '/' },
  { id: 2, label: 'Obras' },
  { id: 3, label: 'Contacto', link: '/contacto' },
  { id: 4, label: 'Galería Técnica', link: '/galeria-tecnica' },
]

const Header = () => {
  const [isWorksOpen, setIsWorksOpen] = useState<boolean>(false)
  const [openWorkId, setOpenWorkId] = useState<number | null>(null)
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const obrasRef = useRef<HTMLLIElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const menuMobileRef = useRef<HTMLUListElement>(null)

  const navigate = useNavigate()

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

  const navigateWithTransition = (to: string) => {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => navigate(to))
    } else {
      navigate(to)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMobileMenu])

  return (
    <header className="bg-[#272727] w-full font-poppins text-white py-5 px-3 relative">
      <div className="max-w-[1200px] w-full flex items-center justify-between mx-auto">
        <img
          onClick={() => navigateWithTransition('/')}
          src={LogoImage}
          alt="logo-constructora-mexicana-valladolid"
          className="h-12 w-14 cursor-pointer"
        />

        <nav>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Abrir menú"
            className="flex sm:hidden"
          >
            <Hamburger className="size-8 cursor-pointer" />
          </button>
          <ul className="items-center gap-5 hidden sm:flex">
            {NAV_LINK.map(({ id, label, link }) => (
              <li
                key={id}
                ref={label === 'Obras' ? obrasRef : null}
                onClick={
                  link && label !== 'Obras'
                    ? () => navigateWithTransition(link)
                    : undefined
                }
                className="cursor-pointer text-base md:text-lg font-semibold relative"
              >
                <span
                  onClick={label === 'Obras' ? toggleWorksMenu : undefined}
                  className="flex items-center gap-0.5 text-white hover:bg-amber-100 hover:text-amber-950 py-1 px-3 transition-all duration-300 ease-in-out rounded-sm"
                >
                  {label}
                  {label === 'Obras' && <span className="text-sm">▼</span>}
                </span>
                {label === 'Obras' && isWorksOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute left-1/2 -translate-x-1/2 top-full z-50 flex flex-col min-w-[280px] shadow-md bg-[#272727]"
                  >
                    {WORKS.map(({ id, label, subworks, link }) => (
                      <li
                        key={id}
                        onClick={() => toggleSubWordsMenu(id)}
                        className="text-base w-full relative"
                      >
                        <span className="flex items-center gap-0.5 p-2 hover:text-amber-950 hover:bg-amber-100 transition-all duration-300 ease-in-out">
                          {label}
                          <strong className="text-xs">▼</strong>
                        </span>
                        {openWorkId === id && (
                          <ul className="absolute left-0 top-full z-[60] flex flex-col min-w-[280px] shadow-md bg-[#333]">
                            {subworks.map(({ id, label, sublink }) => (
                              <li
                                key={id}
                                onClick={() => {
                                  navigateWithTransition(`/${link}/${sublink}`)
                                  setIsWorksOpen(false)
                                  setOpenWorkId(null)
                                }}
                                className="hover:bg-amber-100 hover:text-amber-950 transition-all duration-300 ease-in-out cursor-pointer w-full p-2"
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
              {NAV_LINK.map(({ id, label, link }) => (
                <li
                  key={id}
                  ref={label === 'Obras' ? obrasRef : null}
                  onClick={
                    link && label !== 'Obras'
                      ? () => navigateWithTransition(link)
                      : undefined
                  }
                  className="cursor-pointer font-semibold text-lg flex flex-col items-center justify-center w-full"
                >
                  <span
                    className="hover:bg-amber-100 hover:text-amber-950 text-white flex items-center justify-center gap-0.5 transition-all duration-300 ease-in-out w-full py-2"
                    onClick={label === 'Obras' ? toggleWorksMenu : undefined}
                  >
                    {label}
                    {label === 'Obras' && <span className="text-sm">▼</span>}
                  </span>
                  {label === 'Obras' && isWorksOpen && (
                    <ul ref={dropdownRef} className="w-full bg-[#333]">
                      {WORKS.map(({ id, label, subworks, link }) => (
                        <li
                          key={id}
                          onClick={() => toggleSubWordsMenu(id)}
                          className="w-full flex flex-col items-center justify-center text-sm font-medium"
                        >
                          <span className="flex items-center justify-center gap-0.5 hover:bg-amber-100 hover:text-amber-950 text-white w-full py-2">
                            {label}
                            <span className="text-xs">▼</span>
                          </span>
                          {openWorkId === id && (
                            <ul className="w-full bg-[#444]">
                              {subworks.map(({ id, label, sublink }) => (
                                <li
                                  key={id}
                                  onClick={() => {
                                    navigateWithTransition(
                                      `/${link}/${sublink}`
                                    )
                                    setIsWorksOpen(false)
                                    setOpenWorkId(null)
                                    setShowMobileMenu(false)
                                  }}
                                  className="hover:bg-amber-100 hover:text-amber-950 text-white w-full flex items-center justify-center py-2"
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
