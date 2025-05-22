import { useState } from 'react'
import { motion } from 'framer-motion'
import FirstSection from '@/sections/FirstSection'
import HeaderHomeImage from '@/assets/images/headers/home.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Datos enviados:', formData)
    // Podés agregar lógica para enviar por correo o API
  }

  return (
    <>
      <FirstSection image={HeaderHomeImage} />

      <motion.div
        className="max-w-xl mx-3 sm:mx-auto p-4 md:p-8 bg-[#3a3a3a] rounded-2xl shadow-2xl mt-10 mb-20 font-poppins"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-amber-100 mb-6 text-center">
          Contacto
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-amber-50">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-amber-50">
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border border-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-amber-50">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 px-4 py-2 border border-amber-50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-100"
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-amber-300 text-amber-950 font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-amber-200 cursor-pointer"
          >
            Enviar mensaje
          </motion.button>
        </form>
      </motion.div>
    </>
  )
}

export default Contact
