const Footer = () => {
  return (
    <footer className="font-poppins text-amber-50 flex flex-col items-center text-xs sm:text-sm">
      <span className="font-semibold text-center">
        constructoramexicanavalladolid ©
      </span>

      <span className="text-xs text-center">
        Todos los derechos reservados sobre esta marca.
      </span>

      <span className="text-xs">2020</span>

      <a
        href="mailto:constructoramexicanavalladolid@gmail.com"
        className="font-semibold flex items-center gap-1 hover:text-amber-200 hover:underline transition duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
          <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
        </svg>
        constructoramexicanavalladolid@gmail.com
      </a>
    </footer>
  )
}

export default Footer
