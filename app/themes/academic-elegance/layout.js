import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function AcademicEleganceLayout({ children }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-cream-50`}>
      <header className="fixed w-full bg-cream-50/90 backdrop-blur-sm z-50 border-b border-cream-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="text-3xl font-playfair text-slate-800">SSS Lab</a>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-inter">About</a>
              <a href="#news" className="text-slate-600 hover:text-slate-900 font-inter">News</a>
              <a href="#members" className="text-slate-600 hover:text-slate-900 font-inter">Members</a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 font-inter">Publications</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 font-inter">Projects</a>
              <a href="#gallery" className="text-slate-600 hover:text-slate-900 font-inter">Gallery</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
} 