"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import questoria from '../../public/newblanco3.png';
import { WaitlistModal } from './WaitlistModal';

type NavbarMenuType = {
  name: string;
  action?: () => void;
};

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menus: NavbarMenuType[] = [
    {
      name: 'Follow us on Patreon',
      action: () => window.open('https://patreon.com/diceverse', '_blank'),
    },
  ];

  return (
    <div className=" px-4 fixed z-40 top-[18px] flex justify-center">
      <header className="w-full max-w-[500px] py-3 px-4 shadow-[0_-1px_0_1px_#33333350] bg-black/30 backdrop-blur-[10px] rounded-2xl flex items-center justify-between">
        <div className="w-[210px] h-[90px] relative shrink-0">
          <Link href="/" className="w-full h-full block">
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
        <nav className="flex items-center justify-end w-full">
          <ul className="flex items-center justify-end gap-6">
            {menus.map((menu) => (
              <li key={menu.name}>
                <button
                  onClick={menu.action}
                  className="text-marfin text-m font-nunito-sans font-bold hover:text-white hover:underline focus:text-white focus:underline underline-offset-2 transition-all duration-200 whitespace-nowrap"
                >
                  {menu.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Modal de la lista de espera */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}