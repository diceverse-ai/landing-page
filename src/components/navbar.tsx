"use client";
import Link from 'next/link';
import Image from 'next/image';
import questoria from '../../public/newblanco3.png';

export function Navbar() {
return (
<div className="w-full px-4 fixed z-40 top-0 flex justify-center h-screen">
<div className="flex flex-col justify-center max-w-[500px] w-full">
<header className="w-full py-3 px-4 shadow-[0_-1px_0_1px_#33333350] bg-black/30 backdrop-blur-[10px] rounded-2xl flex items-center justify-center">
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
</header>
<div className="flex-1"></div>
</div>
</div>
 );
}