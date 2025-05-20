interface Props {
  image: string
}

const FirstSection: React.FC<Props> = ({ image }) => {
  return (
    <section>
      <img
        src={image}
        alt="first-section-image"
        className="w-full h-[600px] object-cover"
      />
    </section>
  )
}

export default FirstSection
