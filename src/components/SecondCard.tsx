interface SeconCardProps {
  type: '1' | '2'
  data: {
    id: number
    text: string
    image: string
  }
}

const SeconCard: React.FC<SeconCardProps> = ({ type, data }) => {
  return (
    <article
      className={`flex items-center gap-10 ${
        type === '1' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <p
        className={`text-pretty font-inter text-white w-2/5 text-2xl ${
          type === '1' ? 'text-right' : ''
        }`}
      >
        {data.text}
      </p>

      <img
        src={data.image}
        alt={`${data.id} image`}
        className="h-[400px] w-3/5 rounded-xl object-cover shadow-2xl shadow-[#353535] hover:scale-105 transition-all duration-200"
      />
    </article>
  )
}

export default SeconCard
