import Link from "next/link"

export default function Footer(){

      return (<footer className="w-full py-6 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent">
              © 2023 Givesies. All rights reserved.
            </p>
            <nav className="flex space-x-4">
              <Link className="text-sm text-accent hover:text-primary" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-accent hover:text-primary" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>)
}