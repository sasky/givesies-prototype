'use client'
import { useState } from 'react'
import Link from "next/link"
import { HeartIcon, MenuIcon, XIcon } from '@/components/Icons'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white border-b border-accent">
      <Link className="flex items-center justify-center" href="#">
        <HeartIcon className="h-8 w-8 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">Givesies</span>
      </Link>
      <button
        className="lg:hidden text-gray-500 hover:text-primary"
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li><Link className="text-sm font-medium hover:text-primary" href="#">About</Link></li>
          <li><Link className="text-sm font-medium hover:text-primary" href="#">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}