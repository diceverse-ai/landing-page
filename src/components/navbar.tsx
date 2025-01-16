"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import questoria from '../../public/newblanco3.png'
import { WaitlistModal } from './WaitlistModal';

type NavbarMenuType = {
  name: string;
  action?: () => void;
};

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const menus: NavbarMenuType[] = [
    {
      name: 'Newsletter',
      action: () => setIsModalOpen(true),
    },
  ];

  return (
    <div className="fixed top-[18px] left-0 right-0 z-40 mx-auto px-4 w-full flex justify-center">
      <header className="relative w-full max-w-[500px] py-3 px-6 
                        shadow-[0_-1px_0_1px_#33333350] bg-black/30 
                        backdrop-blur-[10px] rounded-2xl 
                        flex items-center justify-between">
        {/* Logo container */}
        <div className="relative w-[210px] h-[90px]">
          <Link href="/" className="block w-full h-full">
            <Image
              src={questoria}
              alt="diceverse logo"
              fill
              priority
              quality={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center">
            {menus.map((menu) => (
              <li key={menu.name}>
                <button
                  onClick={menu.action}
                  className="px-4 py-2 text-base font-bold text-marfin
                            hover:text-white hover:underline focus:text-white 
                            focus:underline underline-offset-2 
                            transition-all duration-200 whitespace-nowrap"
                >
                  {menu.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}