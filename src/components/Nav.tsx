import React from 'react';
import * as Assets from '@/constants/assets';
import { headerLogo } from '../../public/images';
import Image from 'next/image';
import Link from 'next/link';
import { hamburger } from '../../public/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex items-center justify-between max-container'>
            {/* logo */}
            <a href="/">
                <Image src={headerLogo} height={29} width={130} alt='Logo'/>
            </a>
            {/* desktop menu */}
            <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
                    {
                        Assets.navLinks.map(link=>(
                            <li key={link.href}>
                                <Link href={link.href} className='font-montserrat leading-normal text-slate-gray text-lg'>{link.label}</Link>
                            </li>
                        ))
                    }
            </ul>
            {/* mobile menu */}
            <div className='block lg:hidden group relative'>
                <Image src={hamburger} alt='Hamburger' height={30} width={30}/>
                <div className="flex flex-col px-8 py-4 w-80 h-80 bg-gray-100 absolute right-0 rounded top-full opacity-0 group-hover:opacity-100 -z-10">
                    <a className='font-bold  font-montserrat py-4 hover:bg-gradient-to-br from-cyan-200 to-violet-200 px-4 rounded' href="#">Home</a>
                    <a className='font-bold  font-montserrat py-4 hover:bg-gradient-to-br from-cyan-200 to-violet-200 px-4 rounded' href="#">Services</a>
                    <a className='font-bold  font-montserrat py-4 hover:bg-gradient-to-br from-cyan-200 to-violet-200 px-4 rounded' href="#">Gallery</a>
                    <a className='font-bold  font-montserrat py-4 hover:bg-gradient-to-br from-cyan-200 to-violet-200 px-4 rounded' href="#">Shop</a>
                    <a className='font-bold  font-montserrat py-4 hover:bg-gradient-to-br from-cyan-200 to-violet-200 px-4 rounded' href="#">Contact</a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav
