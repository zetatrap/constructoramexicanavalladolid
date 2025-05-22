import LinkContactImage from '@/assets/images/cotiza_ahora.png'

const LinkContact = () => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer">
      <img
        src={LinkContactImage}
        alt="link-contact image"
        className="size-[80px] md:size-[150px] object-cover hover:scale-105 transition-all duration-150 rounded-lg"
      />
    </div>
  )
}

export default LinkContact
