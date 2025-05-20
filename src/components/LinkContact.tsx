import LinkContactImage from '@/assets/images/link-contact-image.png'

const LinkContact = () => {
  return (
    <div className="absolute right-5 bottom-5 cursor-pointer">
      <img
        src={LinkContactImage}
        alt="link-contact image"
        className="size-[200px] object-cover hover:scale-105 transition-all duration-150 rounded-xl"
      />
    </div>
  )
}

export default LinkContact
