import { useState, useEffect, useRef } from 'react'
import { Hamburger } from '@/icons'
import style from './Header.module.css'

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
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className={style.navbar}>
        <h1>LOGO</h1>

        <nav>
          <button
            className={style.hamburger}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Abrir menú"
          >
            <Hamburger />
          </button>
          <ul className={style.menu}>
            {NAV_LINK.map(({ id, label }) => (
              <li key={id} ref={label === 'Obras' ? obrasRef : null}>
                <span onClick={label === 'Obras' ? toggleWorksMenu : undefined}>
                  {label}
                  {label === 'Obras' && <span className={style.arrow}>▼</span>}
                </span>
                {label === 'Obras' && isWorksOpen && (
                  <ul className={style.dropdown} ref={dropdownRef}>
                    {WORKS.map(({ id, label, subworks }) => (
                      <li key={id} onClick={() => toggleSubWordsMenu(id)}>
                        {label}
                        <span className={style.subArrow}>▼</span>
                        {openWorkId === id && (
                          <ul className={style.subdropdown}>
                            {subworks.map(({ id, label }) => (
                              <li key={id}>{label}</li>
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
      </header>

      {showMobileMenu && (
        <ul className={style.mobileMenu}>
          {NAV_LINK.map(({ id, label }) => (
            <li key={id} ref={label === 'Obras' ? obrasRef : null}>
              <span onClick={label === 'Obras' ? toggleWorksMenu : undefined}>
                {label}
                {label === 'Obras' && <span className={style.arrow}>▼</span>}
              </span>
              {label === 'Obras' && isWorksOpen && (
                <ul className={style.dropdown} ref={dropdownRef}>
                  {WORKS.map(({ id, label, subworks }) => (
                    <li key={id} onClick={() => toggleSubWordsMenu(id)}>
                      <div>
                        {label}
                        <span className={style.subArrow}>▼</span>
                      </div>
                      {openWorkId === id && (
                        <ul className={style.subdropdown}>
                          {subworks.map(({ id, label }) => (
                            <li key={id}>{label}</li>
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
      )}
    </>
  )
}

export default Header
