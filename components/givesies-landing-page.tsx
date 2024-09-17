"'use client'"

import { useState } from "'react'"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function GivesiesLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#4cc9f0] text-gray-900">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white border-b border-[#4361ee]">
        <Link className="flex items-center justify-center" href="#">
          <HeartIcon className="h-8 w-8 text-[#7209b7]" />
          <span className="ml-2 text-2xl font-bold text-[#7209b7]">Givesies</span>
        </Link>
        <button
          className="lg:hidden text-gray-500 hover:text-[#7209b7]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
        <nav className={`${isMenuOpen ? "'block'" : "'hidden'"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li><Link className="text-sm font-medium hover:text-[#7209b7]" href="#">About</Link></li>
            <li><Link className="text-sm font-medium hover:text-[#7209b7]" href="#">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 flex flex-col">
        <section className="w-full py-24 md:py-48 lg:py-64 xl:py-96 bg-[#4cc9f0]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#7209b7]">
                  Givesies
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl">
                  Give to charity on your terms
                </p>
              </div>
              <div className="pt-8">
                <Button size="lg" className="text-lg bg-gradient-to-r from-[#f72585] to-[#7209b7] hover:from-[#7209b7] hover:to-[#f72585] text-white transition-all duration-300">
                  Explore Charities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-1 flex items-center justify-center bg-[#4cc9f0] px-4">
          <div className="max-w-2xl text-center">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#4361ee]">
              © 2023 Givesies. All rights reserved.
            </p>
            <nav className="flex space-x-4">
              <Link className="text-sm text-[#4361ee] hover:text-[#7209b7]" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-[#4361ee] hover:text-[#7209b7]" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 18" />
      <path d="m6 6 12" />
    </svg>
  )
}