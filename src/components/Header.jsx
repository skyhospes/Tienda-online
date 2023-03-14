import { useState } from "react";
import { GiGameConsole, GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

 return<>
  <header className="h-[5vh] lg:h-[10vh] text-gray-300 px-10 flex items-center justify-between bg-[#181A20] z-40">
    {/* Movil */}
    <button 
      onClick={() => setShowMenu(!showMenu)} 
      className="lg:hidden text-2xl"
    ><GiHamburgerMenu />
    </button>
    <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${
      showMenu ? "top-0" : "-top-full"}`}>
      <button 
        onClick={() => setShowMenu(!showMenu)} 
        className="text-3xl p-8"
      ><RiCloseLine />
      </button>
      <ul className="mt-20">
        <li>
          <a href="#" className="text-4xl block text-center p-4">
            Home</a>
        </li>
        <li>
          <a href="#" className="text-4xl block text-center p-4">
            Streams</a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27] text-4xl block text-center p-4">
            Game store</a>
        </li>
        <li>
          <a href="#" className="text-4xl block text-center p-4">
            News</a>
        </li>
      </ul>
    </div>
    {/* Menu */}
    <ul className="hidden lg:flex items-center gap-6">
      <li>
        <a href="#" className="hover:text-[#E58D27] transition-colors">
          Home</a>
      </li>
      <li>
        <a href="#" className="hover:text-[#E58D27] transition-colors">
          Streams</a>
      </li>
      <li>
        <a href="#" className="text-[#E58D27] transition-colors">
          Game store</a>
      </li>
      <li>
        <a href="#" className="hover:text-[#E58D27] transition-colors">
          News</a>
      </li>
    </ul>
    {/* Logo */}
    <div className="flex items-center">
      <h1 className="text-4xl text-[#E58D27]"><GiGameConsole /></h1>
      <h1 className="text-3xl text-[#E58D27]">Logo</h1>
    </div>
  </header>
 </>
}