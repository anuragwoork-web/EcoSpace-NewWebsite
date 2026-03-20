import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import logo from "./assets/logo/eco.jpg";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import { NavLink } from "react-router-dom";
import { useBlogData } from './context/Context';

const Header = () => {
  // Service categories data
  const serviceCategories = [
    {
      title: "Mobile Development",
      icon: "ri-smartphone-fill",
      items: [
        { name: "iOS", icon: "ri-apple-fill" },
        { name: "Android", icon: "ri-android-fill" },
        { name: "Cross-Platform", icon: "ri-device-line" }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-computer-line",
      items: [
        { name: "Fullstack JS", icon: "ri-javascript-fill" },
        { name: "Ecommerce&CMS", icon: "ri-shopping-cart-2-line" },
        { name: "Magneto", icon: "ri-magnet-line" },
        { name: "Wordpress", icon: "ri-wordpress-fill" },
        { name: "Progressive Web App", icon: "ri-global-line" }
      ]
    },
    {
      title: "Animation Services",
      icon: "ri-movie-2-line",
      items: [
        { name: "Animation Services", icon: "ri-film-line" },
        { name: "Explainer Video", icon: "ri-video-line" }
      ]
    },
    {
      title: "BlockChain",
      icon: "ri-links-line",
      items: [
        { name: "Smart Contract", icon: "ri-file-list-3-line" },
        { name: "dApps", icon: "ri-apps-2-line" },
        { name: "Crypto Currency", icon: "ri-coin-line" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "ri-megaphone-line",
      items: [
        { name: "App Store Optimization", icon: "ri-store-2-line" },
        { name: "Social Media Optimization", icon: "ri-share-line" },
        { name: "Search Engine Optimization", icon: "ri-search-2-line" }
      ]
    }
  ];

  // Ref for mobile menu animation
  let slideMenu = useRef();
  let [menuToggle, setMenuToggle] = useState(false);

  let menuClick = () => {
    let dupli3Toggle = !menuToggle;
    setMenuToggle(dupli3Toggle);
    if (dupli3Toggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
    }
  };

  // Desktop Dropdown States
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  const handleAboutToggle = () => {
    setIsAboutOpen(prev => !prev);
    setIsServiceOpen(false);
    setIsSectorsOpen(false);
  };

  const handleServiceToggle = () => {
    setIsServiceOpen(prev => !prev);
    setIsAboutOpen(false);
    setIsSectorsOpen(false);
  };

  const handleSectorsToggle = () => {
    setIsSectorsOpen(prev => !prev);
    setIsAboutOpen(false);
    setIsServiceOpen(false);
  };

  // Mobile Dropdown States
  const [mobAboutToggle, setMobAboutToggle] = useState(false);
  const [mobServiceToggle, setMobServiceToggle] = useState(false);
  const [mobSectorsToggle, setMobSectorsToggle] = useState(false);

  const blogs = useBlogData();

  return (
    <div className="sticky z-[999] top-0 bg-white w-full border-b border-zinc-100">
      <div className="flex w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-1 items-center justify-between">
        <NavLink to='/'>
          <div className="flex items-center gap-2">
            <img src={logo} alt="EcoSpace Logo" className="h-10 sm:h-12 lg:h-16 w-auto" />
          </div>
        </NavLink>

        {/* Mobile Menu Icon */}
        <i
          className={`menu text-[6vw] cursor-pointer sm:text-[1.8rem] lg:hidden transition-all duration-300 ${menuToggle ? 'ri-close-line' : 'ri-menu-line'}`}
          onClick={menuClick}
        ></i>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-4 xl:gap-8 font-bold text-zinc-800 text-[0.9rem] xl:text-[0.95rem]">
            <li className="cursor-pointer hover:text-[#1F5555] transition-all">
              <NavLink to="/">Home</NavLink>
            </li>

            <li onClick={handleAboutToggle} className="relative cursor-pointer hover:text-[#1F5555] transition-all flex items-center">
              About Us <i className={`ri-arrow-down-s-line ml-0.5 transition-all ${isAboutOpen ? 'rotate-180' : ''}`}></i>
              {isAboutOpen && (
                <div className="absolute top-[150%] left-0 bg-white border border-zinc-200 shadow-xl rounded-md py-2 min-w-[180px] z-[999]">
                  <ul className="flex flex-col font-medium">
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Company Overview</li>
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Our Mission</li>
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Our Vision</li>
                  </ul>
                </div>
              )}
            </li>

            <li onClick={handleServiceToggle} className="relative cursor-pointer hover:text-[#1F5555] transition-all flex items-center">
              Services <i className={`ri-arrow-down-s-line ml-0.5 transition-all ${isServiceOpen ? 'rotate-180' : ''}`}></i>
              {isServiceOpen && (
                <div className="bg-white border border-zinc-200 shadow-2xl absolute top-[150%] right-[-100px] grid grid-cols-3 px-6 py-6 gap-8 rounded-lg min-w-[800px] z-[999]">
                  {serviceCategories.map((category, index) => (
                    <ul key={index}>
                      <h3 className="text-[1rem] mb-3 font-bold text-[#1F5555] flex items-center">
                        <i className={`${category.icon} mr-2`}></i>{category.title}
                      </h3>
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-[0.85rem] ml-1 mb-2 hover:text-[#1F5555] cursor-pointer transition-colors font-medium">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>

            <li onClick={handleSectorsToggle} className="relative cursor-pointer hover:text-[#1F5555] transition-all flex items-center">
              Sectors <i className={`ri-arrow-down-s-line ml-0.5 transition-all ${isSectorsOpen ? 'rotate-180' : ''}`}></i>
              {isSectorsOpen && (
                <div className="absolute top-[150%] left-0 bg-white border border-zinc-200 shadow-xl rounded-md py-2 min-w-[180px] z-[999]">
                  <ul className="flex flex-col font-medium">
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Infrastructure</li>
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Energy</li>
                    <li className="px-4 py-2 hover:bg-[#FFF9E6] hover:text-[#1F5555]">Highways</li>
                  </ul>
                </div>
              )}
            </li>

            <li className="cursor-pointer hover:text-[#1F5555] transition-all">Our Leadership</li>
            <li className="cursor-pointer hover:text-[#1F5555] transition-all">Clientele</li>
            <li className="cursor-pointer hover:text-[#1F5555] transition-all">Careers</li>
            <li className="cursor-pointer hover:text-[#1F5555] transition-all whitespace-nowrap">Contact Us</li>
          </ul>


        </div>
      </div>

      {/* Mobile Menu */}
      <div className="bg-white h-0 overflow-hidden overflow-y-auto max-h-[85vh] transition-all duration-300" ref={slideMenu}>
        <ul className="mobileMenu px-4 flex flex-col gap-2 pb-6 pt-4 font-bold text-zinc-800">
          <li className="p-2 border-b border-zinc-50 hover:bg-zinc-50 transition-all">
            <NavLink to="/" onClick={menuClick}>Home</NavLink>
          </li>

          <li className="flex flex-col p-2 border-b border-zinc-50">
            <div className="flex justify-between items-center" onClick={() => setMobAboutToggle(!mobAboutToggle)}>
              About Us <i className={`ri-arrow-down-s-line transition-all ${mobAboutToggle ? 'rotate-180' : ''}`}></i>
            </div>
            {mobAboutToggle && (
              <ul className="pl-4 pt-2 flex flex-col gap-2 font-medium text-zinc-600 text-[0.95rem]">
                <li onClick={menuClick}>Company Overview</li>
                <li onClick={menuClick}>Our Mission</li>
                <li onClick={menuClick}>Our Vision</li>
              </ul>
            )}
          </li>

          <li className="flex flex-col p-2 border-b border-zinc-50 text-[1rem]">
            <div className="flex justify-between items-center" onClick={() => setMobServiceToggle(!mobServiceToggle)}>
              Services <i className={`ri-arrow-down-s-line transition-all ${mobServiceToggle ? 'rotate-180' : ''}`}></i>
            </div>
            {mobServiceToggle && (
              <div className="pl-2 pt-2 flex flex-col gap-4">
                {serviceCategories.map((cat, i) => (
                  <div key={i}>
                    <h4 className="text-[0.95rem] text-[#1F5555] font-bold mb-1">{cat.title}</h4>
                    <ul className="flex flex-col gap-1 pl-2 font-medium text-zinc-600 text-[0.9rem]">
                      {cat.items.map((it, j) => (
                        <li key={j} onClick={menuClick}>{it.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li className="flex flex-col p-2 border-b border-zinc-50">
            <div className="flex justify-between items-center" onClick={() => setMobSectorsToggle(!mobSectorsToggle)}>
              Sectors <i className={`ri-arrow-down-s-line transition-all ${mobSectorsToggle ? 'rotate-180' : ''}`}></i>
            </div>
            {mobSectorsToggle && (
              <ul className="pl-4 pt-2 flex flex-col gap-2 font-medium text-zinc-600 text-[0.95rem]">
                <li onClick={menuClick}>Infrastructure</li>
                <li onClick={menuClick}>Energy</li>
                <li onClick={menuClick}>Highways</li>
              </ul>
            )}
          </li>

          <li className="p-2 border-b border-zinc-50 hover:bg-zinc-50" onClick={menuClick}>Our Leadership</li>
          <li className="p-2 border-b border-zinc-50 hover:bg-zinc-50" onClick={menuClick}>Clientele</li>
          <li className="p-2 border-b border-zinc-50 hover:bg-zinc-50" onClick={menuClick}>Careers</li>
          <li className="p-2 border-b border-zinc-50 hover:bg-zinc-50" onClick={menuClick}>Contact Us</li>


        </ul>
      </div>
    </div>
  );
};

export default Header;