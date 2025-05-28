import LinkContactImage from '@/assets/images/cotiza_ahora.png'

const LinkContact = () => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer">
      <a
        href="https://wa.me/524341144355"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={LinkContactImage}
          alt="link-contact image"
          className="size-[80px] md:size-[150px] object-cover hover:scale-105 transition-all duration-150 rounded-lg"
        />
      </a>
    </div>
  )
}

export default LinkContact
