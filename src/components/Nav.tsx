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
            <div className='block lg:hidden'>
                <Image src={hamburger} alt='Hamburger' height={30} width={30}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav
