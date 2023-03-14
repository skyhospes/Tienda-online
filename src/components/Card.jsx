export default function Card(props) {
  const {img, title, category, price} = props
  return <>
    <div className="bg-[#362c29]/50 p-6 rounded-2xl flex flex-col gap-2">
      <img src={img} alt="" className="w-52 h-52 object-cover rounded-2xl" />
      <h1 className="text-lg text-white">{title}</h1>
      <span className="text-gray-400">{category}</span>
      <div className="flex items-center gap-4">
        <h5 className="text-3xl text-[#E58D27]">${price}</h5>
        <button 
        className="bg-[#E58D27] p-2 w-full rounded-full text-black font-bold hover:-translate-y-1 transition-all">
           Comprar
        </button>
      </div>
    </div>
  </>
}