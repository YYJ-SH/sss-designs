import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function TechnicalMinimalismLayout({ children }) {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-600">SSS Lab</a>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600">News</a>
              <a href="#members" className="text-gray-600 hover:text-blue-600">Members</a>
              <a href="#publications" className="text-gray-600 hover:text-blue-600">Publications</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
} 