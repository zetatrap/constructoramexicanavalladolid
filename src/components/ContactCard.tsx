import ContactCardImage from '@/assets/images/terreno_vender.png'
import { useState, useEffect } from 'react'

const ContactCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setShow(true), 50)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-1/2 right-5 -translate-y-1/2 z-50 transition duration-700 hover:scale-105 ${
            show ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span
            onClick={() => setIsOpen(false)}
            className="font-poppins text-black text-2xl font-semibold cursor-pointer absolute top-0 right-1"
          >
            X
          </span>

          <img
            src={ContactCardImage}
            alt="contact-card"
            className="h-[150px] md:h-[200px] lg:h-[300px] cursor-pointer rounded-lg"
          />
        </div>
      )}
    </>
  )
}

export default ContactCard
