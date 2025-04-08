'use client'; // Next.js 13 이상에서는 클라이언트 컴포넌트임을 명시

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function DarkModernTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>SSS Lab - 과학 기술 연구실</title>
        <meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="font-mono text-2xl font-bold text-white">SSS</span>
                <span className="font-mono text-2xl text-[#00F5FF]">_LAB</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                ABOUT
              </Link>
              <Link href="#news" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                NEWS
              </Link>
              <Link href="#members" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                MEMBERS
              </Link>
              <Link href="#publications" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                PUBLICATIONS
              </Link>
              <Link href="#projects" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                PROJECTS
              </Link>
              <Link href="#gallery" className="font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                GALLERY
              </Link>
              <Link href="#" className="ml-4 px-6 py-2 bg-transparent border border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10 transition-colors text-sm tracking-wider">
                CONTACT
              </Link>
            </div>
            
            <div className="md:hidden flex items-center">
              <button 
                className="text-white hover:text-[#00F5FF] focus:outline-none transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#0F0F0F] border-b border-[#333333]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="#about" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="#news" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                NEWS
              </Link>
              <Link 
                href="#members" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                MEMBERS
              </Link>
              <Link 
                href="#publications" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                PUBLICATIONS
              </Link>
              <Link 
                href="#projects" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link 
                href="#gallery" 
                className="block font-sans text-white/80 hover:text-[#00F5FF] transition-colors text-sm tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                GALLERY
              </Link>
              <Link 
                href="#" 
                className="block px-6 py-2 border border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF]/10 transition-colors text-sm tracking-wider w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_25%)] opacity-70"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF00FF]/5 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F5FF]/5 blur-[120px]"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-sans text-6xl font-bold text-white mb-6">
            SSS <span className="text-[#00F5FF]">Laboratory</span>
          </h1>
          <p className="font-sans text-white/70 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Exploring the frontiers of technology through innovative research and cutting-edge solutions
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#about" className="px-8 py-3 bg-[#00F5FF] text-[#1A1A1A] font-sans font-medium tracking-wider hover:bg-[#00F5FF]/90 transition-colors">
              DISCOVER
            </Link>
            <Link href="#projects" className="px-8 py-3 border border-[#00F5FF] text-[#00F5FF] font-sans font-medium tracking-wider hover:bg-[#00F5FF]/10 transition-colors">
              RESEARCH
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" stroke="#333333"/>
              <path d="M20 12V28M20 28L13 21M20 28L27 21" stroke="#00F5FF" strokeWidth="2"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] border-t border-[#333333] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-sans text-2xl font-bold text-white mb-4">
              SSS <span className="text-[#00F5FF]">Laboratory</span>
            </h2>
            <p className="font-sans text-white/60 mb-6">
              Department of Computer Science<br />
              Sungshin Women's University
            </p>
            <div className="w-16 h-px bg-[#00F5FF] mx-auto mb-6"></div>
            <div className="flex justify-center space-x-8">
              <Link href="#" className="font-sans text-white/60 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                EMAIL
              </Link>
              <Link href="#" className="font-sans text-white/60 hover:text-[#00F5FF] transition-colors text-sm tracking-wide">
                TWITTER
              </Link>
              <Link href="#" className="font-sans text-white/60 hover:text-[#FF00FF] transition-colors text-sm tracking-wide">
                LINKEDIN
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#333333] text-center text-white/40 text-xs">
            © 2024 SSS Laboratory. All rights reserved.
          </div>
        </div>
      </footer>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">ABOUT OUR LAB</h2>
              <div className="w-24 h-0.5 bg-[#00F5FF] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="font-sans text-white/70 leading-relaxed">
                  SSS Laboratory focuses on developing next-generation technologies that push the boundaries of what's possible. 
                  Our team of dedicated researchers works at the intersection of computer science, artificial intelligence, and data science.
                </p>
                <p className="font-sans text-white/70 leading-relaxed">
                  We believe in the transformative power of technology to solve the most challenging problems facing humanity today, 
                  from healthcare to climate change, and are committed to pioneering breakthrough solutions.
                </p>
                <div className="pt-6">
                  <Link href="#members" className="font-sans text-[#00F5FF] hover:text-[#00F5FF]/80 transition-colors inline-flex items-center">
                    MEET OUR TEAM
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="bg-[#232323] p-8 border border-[#333333]">
                <h3 className="font-sans text-2xl font-semibold text-white mb-6">Research Focus</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#00F5FF]/10 flex items-center justify-center mr-4 border border-[#00F5FF]">
                      <div className="text-[#00F5FF]">01</div>
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-medium text-white mb-2">Artificial Intelligence</h4>
                      <p className="font-sans text-white/60">
                        Developing advanced neural networks and machine learning systems for complex problem-solving.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#FF00FF]/10 flex items-center justify-center mr-4 border border-[#FF00FF]">
                      <div className="text-[#FF00FF]">02</div>
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-medium text-white mb-2">Machine Learning</h4>
                      <p className="font-sans text-white/60">
                        Creating algorithms that can learn from and make predictions on complex datasets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#00F5FF]/10 flex items-center justify-center mr-4 border border-[#00F5FF]">
                      <div className="text-[#00F5FF]">03</div>
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-medium text-white mb-2">Data Science</h4>
                      <p className="font-sans text-white/60">
                        Extracting meaningful insights from vast and complex datasets to drive innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">LATEST NEWS</h2>
              <div className="w-24 h-0.5 bg-[#FF00FF] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  className="bg-[#232323] border border-[#333333] group"
                  whileHover={{ translateY: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-1 bg-[#00F5FF] w-0 group-hover:w-full transition-all duration-300"></div>
                  <div className="p-8">
                    <div className="text-sm text-[#00F5FF] font-mono mb-4">2024.03.15</div>
                    <h3 className="font-sans text-xl font-semibold text-white mb-4">
                      Breakthrough in Neural Networks
                    </h3>
                    <p className="font-sans text-white/60 mb-6">
                      Our research team has made significant advancements in neural network architecture, 
                      allowing for more efficient and accurate pattern recognition.
                    </p>
                    <Link href="#" className="font-sans text-[#00F5FF] hover:text-[#00F5FF]/80 transition-colors inline-flex items-center text-sm">
                      READ MORE
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">RESEARCH TEAM</h2>
              <div className="w-24 h-0.5 bg-[#00F5FF] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Professor */}
              <motion.div 
                className="bg-[#232323] border border-[#333333] p-6 group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-square bg-[#2A2A2A] mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-sans text-xl font-semibold text-white">Prof. Kim</h3>
                <p className="font-sans text-[#00F5FF] mt-1 mb-3">Laboratory Director</p>
                <div className="w-12 h-px bg-[#333333] mb-3"></div>
                <p className="font-sans text-white/60 text-sm">Ph.D. in Computer Science</p>
              </motion.div>

              {/* Students */}
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  className="bg-[#232323] border border-[#333333] p-6 group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full aspect-square bg-[#2A2A2A] mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF00FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-white">Dr. Lee</h3>
                  <p className="font-sans text-[#FF00FF] mt-1 mb-3">Senior Researcher</p>
                  <div className="w-12 h-px bg-[#333333] mb-3"></div>
                  <p className="font-sans text-white/60 text-sm">AI Specialization</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">PUBLICATIONS</h2>
              <div className="w-24 h-0.5 bg-[#FF00FF] mx-auto"></div>
            </div>
            
            {/* 2024 Publications */}
            <div className="mb-16">
              <h3 className="font-sans text-2xl font-semibold text-[#FF00FF] mb-8 inline-block">2024</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#232323] border border-[#333333] p-6 hover:border-[#FF00FF] transition-colors"
                  >
                    <h4 className="font-sans text-xl font-semibold text-white mb-3">
                      Novel Approach to Machine Learning in Healthcare
                    </h4>
                    <p className="font-sans text-[#FF00FF] mb-4">
                      Kim, J., Lee, S., Park, H.
                    </p>
                    <p className="font-sans text-white/60 mb-4 text-sm leading-relaxed">
                      This paper presents a novel approach to machine learning in healthcare, focusing on predictive analytics for early diagnosis. 
                      Our method demonstrates a 23% improvement in diagnostic accuracy compared to existing techniques.
                    </p>
                    <p className="font-sans text-white/40 text-sm">
                      International Journal of Computer Science (Vol. 42), 2024
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Publications */}
            <div>
              <h3 className="font-sans text-2xl font-semibold text-[#00F5FF] mb-8 inline-block">2023</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-[#232323] border border-[#333333] p-6 hover:border-[#00F5FF] transition-colors"
                  >
                    <h4 className="font-sans text-xl font-semibold text-white mb-3">
                      Advanced Deep Learning Techniques for Complex Data Analysis
                    </h4>
                    <p className="font-sans text-[#00F5FF] mb-4">
                      Park, H., Kim, J., Lee, S.
                    </p>
                    <p className="font-sans text-white/60 mb-4 text-sm leading-relaxed">
                      This research introduces advanced deep learning techniques designed for analyzing complex, multi-dimensional datasets. 
                      We demonstrate superior performance on several benchmark datasets.
                    </p>
                    <p className="font-sans text-white/40 text-sm">
                      IEEE Transactions on AI (Vol. 16), 2023
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">RESEARCH PROJECTS</h2>
              <div className="w-24 h-0.5 bg-[#00F5FF] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#232323] border border-[#333333] group"
                >
                  <div className="aspect-video bg-[#2A2A2A] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4">
                      {index % 2 === 0 ? (
                        <div className="text-[#00F5FF] font-mono text-sm border border-[#00F5FF] px-2 py-1">ACTIVE</div>
                      ) : (
                        <div className="text-[#FF00FF] font-mono text-sm border border-[#FF00FF] px-2 py-1">ONGOING</div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-sans text-xl font-semibold text-white mb-3">
                      AI-Driven Healthcare Solutions
                    </h3>
                    <p className="font-sans text-white/60 mb-6">
                      Developing cutting-edge AI solutions for healthcare applications, with a focus on early disease 
                      detection and treatment optimization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#2A2A2A] text-[#00F5FF] text-xs border border-[#333333]">
                        ARTIFICIAL INTELLIGENCE
                      </span>
                      <span className="px-3 py-1 bg-[#2A2A2A] text-[#FF00FF] text-xs border border-[#333333]">
                        HEALTHCARE
                      </span>
                      <span className="px-3 py-1 bg-[#2A2A2A] text-[#00F5FF] text-xs border border-[#333333]">
                        MACHINE LEARNING
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#151515]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl font-bold text-white mb-3">GALLERY</h2>
              <div className="w-24 h-0.5 bg-[#FF00FF] mx-auto"></div>
            </div>
            
            {/* 2024 Gallery */}
            <div className="mb-16">
              <h3 className="font-sans text-2xl font-semibold text-[#FF00FF] mb-8 inline-block">2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-[#232323] border border-[#333333] overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF00FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 font-mono text-xs text-[#FF00FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      2024.03
                    </div>
                    <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-sans text-lg font-semibold">Lab Workshop</h4>
                      <p className="font-sans text-white/70 text-xs mt-1">Artificial Intelligence Research Group</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Gallery */}
            <div>
              <h3 className="font-sans text-2xl font-semibold text-[#00F5FF] mb-8 inline-block">2023</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-[#232323] border border-[#333333] overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 font-mono text-xs text-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      2023.11
                    </div>
                    <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-sans text-lg font-semibold">Conference Presentation</h4>
                      <p className="font-sans text-white/70 text-xs mt-1">International AI Symposium</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            </motion.div>
        </div>
        </section>
    </>
    );
}
