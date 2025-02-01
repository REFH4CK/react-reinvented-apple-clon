import { useState } from "react";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-center w-full p-4 fixed top-0 z-50">
      <nav
        className={`
        flex items-center justify-between
      bg-header p-4 px-8 sm:px-8 gap-2 sm:gap-8 w-[90%]
        lg:w-auto mx-auto rounded-full overflow-hidden
        shadow-headerShadow [&>ion-icon] text-[#999999]
        `}
      >
        <ion-icon name="logo-apple"></ion-icon>
        {/* flex */}
        
        <p className="text-center lg:hidden">apple.com</p>
        <ul className="hidden lg:flex items-inherit gap-5 text-white text-sm ">
          <li>
            <a href="#" className="hover:text-slate-300">Store</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">Mac</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">iPad</a>
          </li>
          <li>
            <a href="#wi" className="hover:text-slate-300">iPhone</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">Watch</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">Vision</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">AirPods</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">TV & Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-300">Accessories</a>
          </li>
        </ul>
        <div className="flex gap-2">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="bag-outline"></ion-icon>
          <button className="lg:hidden flex items-center" onClick={() => setShowModal(!showModal)}>
            <ion-icon name="menu"></ion-icon>
          </button>

        </div>
      </nav>
      {
        showModal && (
          <ul id="modal-menu" className={`
            absolute -bottom-[25.5rem] rounded-[1rem]
            flex flex-col bg-header w-[70%] p-4 gap-5
            text-white text-md`}>
              <li>
                <a href="#" className="hover:text-slate-300">Store</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">Mac</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">iPad</a>
              </li>
              <li>
                <a href="#wi" className="hover:text-slate-300">iPhone</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">Watch</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">Vision</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">AirPods</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">TV & Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">Accessories</a>
              </li>
          </ul>
        )
      }
    </header>
    
  );
}
