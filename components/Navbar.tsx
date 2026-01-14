
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    'Promotional Catalogue',
    'Detail Promotion',
    'System Detection',
    'Bank Account',
    'About'
  ];

  return (
    <nav className="flex items-center justify-between border-b border-gray-300 bg-white sticky top-0 z-40 h-16 shrink-0">
      <div className="px-12 h-full flex items-center">
        <h1 className="text-xl font-playfair font-bold tracking-[0.2em] uppercase">
          GIORGIO ARMANI
        </h1>
      </div>

      <div className="flex-1 flex justify-center space-x-12 px-4 h-full">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`text-[13px] font-normal transition-colors whitespace-nowrap h-full flex items-center px-2 border-b-2 ${
              activeTab === item ? 'border-[#8a1515] text-[#8a1515] font-bold' : 'border-transparent text-black hover:text-gray-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="bg-[#8a1515] w-16 h-16 flex items-center justify-center shrink-0">
        <div className="w-10 h-10 border-[3px] border-white rounded-full flex items-center justify-center">
          <span className="text-white font-black text-xl leading-none tracking-tighter">GA</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
