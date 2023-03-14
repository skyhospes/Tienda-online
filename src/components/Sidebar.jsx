import { useState } from "react";
import { MdAttachMoney, MdFacebook } from "react-icons/md";
import { RiYoutubeFill, RiTwitterFill, RiInstagramFill, RiFilter3Line, RiCloseLine } from "react-icons/ri";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return <>
    <div 
      className={`w-[85%] md:w-[40%] fixed lg:static top-0 ${showSidebar ? "left-0" : "-left-full"} lg:w-80 h-full overflow-y-scroll text-gray-400 transition-all p-4 lg:p-0 bg-[#181A20] shadow-2xl lg:shadow-none`}
    >
      {/* Search */}
      <div className="bg-[#362c29]/50 rounded-2xl px-6 py-3">
        <h4 className="mb-4 text-xl text-white">Categorias</h4>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Indy" className="accent-[#E58D27]" />
            <label htmlFor="Indy">Indy</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Adventure" className="accent-[#E58D27]" />
            <label htmlFor="Adventure">Adventure</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="MMO" className="accent-[#E58D27]" />
            <label htmlFor="MMO">MMO</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Casual Games" className="accent-[#E58D27]" />
            <label htmlFor="Casual Games">Casual Games</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Simulator" className="accent-[#E58D27]" />
            <label htmlFor="Simulator">Simulator</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Sport Games" className="accent-[#E58D27]" />
            <label htmlFor="Sport Games">Sport Games</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Action Games" className="accent-[#E58D27]" />
            <label htmlFor="Action Games">Action Games</label>
          </div>
        </div>
        <h4 className="my-4 text-xl text-white">Plataformas</h4>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Pc" className="accent-[#E58D27]" />
            <label htmlFor="Pc">Pc</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="PlayStation 5" className="accent-[#E58D27]" />
            <label htmlFor="PlayStation 5">PlayStation 5</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="PlayStation 4" className="accent-[#E58D27]" />
            <label htmlFor="PlayStation 4">PlayStation 4</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Xbox series" className="accent-[#E58D27]" />
            <label htmlFor="Xbox series">Xbox series</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="Nintendo Switch" className="accent-[#E58D27]" />
            <label htmlFor="Nintendo Switch">Nintendo Switch</label>
          </div>
        </div>
        <h4 className="my-4 text-xl text-white">Precio</h4>
        <form className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <div className="relative">
              <MdAttachMoney className="absolute left-2 top-1/2 -translate-y-1/2" />
              <input 
                type="number"
                className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
              />
            </div>
            <span>-</span>
            <div className="relative">
              <MdAttachMoney className="absolute left-2 top-1/2 -translate-y-1/2" />
              <input 
                type="number"
                className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
              />
            </div>
          </div>
          <button 
          type="submit"
          className="bg-[#E58D27] p-2 rounded-full text-black font-bold hover:-translate-y-1 transition-all">
            Aplicar filtros
          </button>
        </form>
      </div>
      {/* Social */}
      <ul className="flex items-center justify-evenly py-3">
        <li>
          <a href="#" className="text-2xl hover:text-[#E58D27]"><MdFacebook /></a>
        </li>
        <li>
          <a href="#" className="text-2xl hover:text-[#E58D27]"><RiYoutubeFill /></a>
        </li>
        <li>
          <a href="#" className="text-2xl hover:text-[#E58D27]"><RiTwitterFill /></a>
        </li>
        <li>
          <a href="#" className="text-2xl hover:text-[#E58D27]"><RiInstagramFill /></a>
        </li>
      </ul>
    </div>
    {/** Button Mobile */}
    <button 
      onClick={() => setShowSidebar(!showSidebar)} 
      className="fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-2xl z-40 lg:hidden"
    >{showSidebar ? <RiCloseLine /> : <RiFilter3Line /> }
    </button>
  </>
}