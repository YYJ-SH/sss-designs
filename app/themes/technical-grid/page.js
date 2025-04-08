'use client'; // Next.js 13 이상에서는 클라이언트 컴포넌트임을 명시

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function TechnicalGridTheme() {
  return (
    <>
      <Head>
        <title>SSS Lab - 과학 기술 연구실</title>
        <meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#DEE2E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="font-mono text-xl font-bold text-[#212529]">SSS_</span>
                <span className="font-mono text-xl text-[#6C757D]">LAB</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                ABOUT
              </Link>
              <Link href="#news" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                NEWS
              </Link>
              <Link href="#members" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                MEMBERS
              </Link>
              <Link href="#publications" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                PUBLICATIONS
              </Link>
              <Link href="#projects" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                PROJECTS
              </Link>
              <Link href="#gallery" className="font-mono text-[#212529] hover:text-[#6C757D] transition-colors text-sm">
                GALLERY
              </Link>
              <Link href="#" className="ml-4 px-4 py-2 bg-[#212529] text-white font-mono text-sm tracking-wider hover:bg-[#343A40] transition-colors">
                CONTACT_
              </Link>
            </div>
            
            <div className="md:hidden flex items-center">
              <button className="text-[#212529] hover:text-[#6C757D] focus:outline-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(108,117,125,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(108,117,125,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="absolute right-10 top-10 w-40 h-40 border border-[#6C757D]"></div>
        <div className="absolute left-10 bottom-10 w-40 h-40 border border-[#6C757D]"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <div className="border-t-2 border-l-2 border-[#212529] p-2">
              <h1 className="font-mono text-5xl font-bold text-[#212529]">
                SSS<span className="text-[#6C757D]">_</span>LAB
              </h1>
            </div>
          </div>
          <p className="font-sans text-lg text-[#6C757D] mb-10 tracking-wide">
            EXPLORING THE SYSTEMATIC FRONTIERS OF COMPUTATIONAL SCIENCE
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#about" className="px-8 py-3 bg-[#212529] text-white font-mono tracking-wider hover:bg-[#343A40] transition-colors border border-[#212529]">
              DISCOVER_
            </Link>
            <Link href="#projects" className="px-8 py-3 border border-[#6C757D] text-[#212529] font-mono tracking-wider hover:bg-[#E9ECEF] transition-colors">
              RESEARCH_
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute bottom-16 left-0 right-0 flex justify-center">
          <motion.svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[#212529]"
          >
            <path d="M15 5L15 25M15 25L5 15M15 25L25 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </motion.svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">ABOUT_LAB</h2>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="font-sans text-[#343A40] leading-relaxed border-l-2 border-[#6C757D] pl-4">
                  SSS Lab operates at the intersection of computational theory and practical application. 
                  Our research team specializes in developing algorithmic solutions to complex technological challenges.
                </p>
                <p className="font-sans text-[#343A40] leading-relaxed mt-6">
                  Founded on principles of technical precision and systematic inquiry, we are committed to 
                  advancing the field through rigorous methodology and innovative approaches.
                </p>
              </motion.div>
            </div>
            
            <div className="col-span-12 md:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#F8F9FA] p-8 border border-[#DEE2E6]"
              >
                <h3 className="font-mono text-xl font-semibold text-[#212529] mb-6">RESEARCH_DOMAINS</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 border border-[#212529] flex items-center justify-center mr-4">
                      <div className="w-3 h-3 bg-[#212529]"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-medium text-[#212529] mb-2">Artificial Intelligence</h4>
                      <p className="font-sans text-[#6C757D]">
                        Developing optimized learning systems for complex computational tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 border border-[#212529] flex items-center justify-center mr-4">
                      <div className="w-3 h-3 bg-[#212529]"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-medium text-[#212529] mb-2">Machine Learning</h4>
                      <p className="font-sans text-[#6C757D]">
                        Engineering efficient algorithms with enhanced predictive capabilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 border border-[#212529] flex items-center justify-center mr-4">
                      <div className="w-3 h-3 bg-[#212529]"></div>
                    </div>
                    <div>
                      <h4 className="font-mono text-lg font-medium text-[#212529] mb-2">Data Science</h4>
                      <p className="font-sans text-[#6C757D]">
                        Structured analysis of complex datasets to extract actionable insights.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">LAB_UPDATES</h2>
              </div>
            </div>

            {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={item}
                className="col-span-12 md:col-span-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-[#DEE2E6] h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-mono text-sm text-[#6C757D]">2024.03.15</div>
                      <div className="w-6 h-6 border border-[#212529]"></div>
                    </div>
                    <h3 className="font-mono text-xl font-semibold text-[#212529] mb-3">
                      Algorithm Optimization
                    </h3>
                    <p className="font-sans text-[#495057] mb-6">
                      Research team achieves 42% efficiency improvement in computational processing 
                      through novel architecture design.
                    </p>
                    <div className="flex items-center">
                      <span className="font-mono text-[#212529] text-sm mr-2">READ_MORE</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#212529]">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">RESEARCH_TEAM</h2>
              </div>
            </div>

            {/* Professor */}
            <motion.div 
              className="col-span-12 sm:col-span-6 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="border border-[#DEE2E6] p-6 h-full">
                <div className="w-full aspect-square bg-[#F8F9FA] mb-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#212529]"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#212529]"></div>
                </div>
                <h3 className="font-mono text-xl font-semibold text-[#212529]">Prof. Kim</h3>
                <p className="font-sans text-[#6C757D] mt-1 mb-3">Director</p>
                <div className="w-12 h-px bg-[#6C757D] mb-3"></div>
                <p className="font-sans text-[#495057] text-sm">Ph.D, Computer Science</p>
              </div>
            </motion.div>

            {/* Students */}
            {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={item}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="border border-[#DEE2E6] p-6 h-full">
                  <div className="w-full aspect-square bg-[#F8F9FA] mb-6 relative">
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#212529]"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#212529]"></div>
                  </div>
                  <h3 className="font-mono text-xl font-semibold text-[#212529]">Dr. Lee</h3>
                  <p className="font-sans text-[#6C757D] mt-1 mb-3">Researcher</p>
                  <div className="w-12 h-px bg-[#6C757D] mb-3"></div>
                  <p className="font-sans text-[#495057] text-sm">AI Specialization</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">PUBLICATIONS</h2>
              </div>
            </div>
            
            {/* 2024 Publications */}
            <div className="col-span-12 mb-16">
              <div className="flex items-center mb-8">
                <h3 className="font-mono text-xl font-bold text-[#212529] inline-block border-b-2 border-[#6C757D] pb-1">2024_</h3>
              </div>
              <div className="space-y-6">
                {[1, 2].map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white border border-[#DEE2E6] p-6"
                  >
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-9">
                        <h4 className="font-mono text-lg font-semibold text-[#212529] mb-3">
                          Novel Approach to Machine Learning in Healthcare
                        </h4>
                        <p className="font-sans text-[#6C757D] mb-3">
                          Kim, J., Lee, S., Park, H.
                        </p>
                        <p className="font-sans text-[#495057] text-sm">
                          International Journal of Computer Science, 2024
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-3 flex justify-end items-start">
                        <div className="border border-[#DEE2E6] p-2">
                          <div className="font-mono text-sm text-[#6C757D]">DOI: 10.1234/ijcs.2024</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Publications */}
            <div className="col-span-12">
              <div className="flex items-center mb-8">
                <h3 className="font-mono text-xl font-bold text-[#212529] inline-block border-b-2 border-[#6C757D] pb-1">2023_</h3>
              </div>
              <div className="space-y-6">
                {[1, 2].map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white border border-[#DEE2E6] p-6"
                  >
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-9">
                        <h4 className="font-mono text-lg font-semibold text-[#212529] mb-3">
                          Advanced Deep Learning Techniques
                        </h4>
                        <p className="font-sans text-[#6C757D] mb-3">
                          Park, H., Kim, J., Lee, S.
                        </p>
                        <p className="font-sans text-[#495057] text-sm">
                          IEEE Transactions on AI, 2023
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-3 flex justify-end items-start">
                        <div className="border border-[#DEE2E6] p-2">
                          <div className="font-mono text-sm text-[#6C757D]">DOI: 10.1109/tai.2023</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">ACTIVE_PROJECTS</h2>
              </div>
            </div>
            
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div 
                key={item}
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="border border-[#DEE2E6] h-full">
                  <div className="aspect-video bg-[#F8F9FA] relative">
                    <div className="absolute top-4 right-4 w-12 h-12 border border-[#212529]"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-mono text-lg font-semibold text-[#212529] mb-3">
                      AI-Driven Healthcare Solutions
                    </h3>
                    <p className="font-sans text-[#495057] mb-6">
                      Systematic development of algorithmic frameworks for medical diagnostics 
                      and treatment optimization using machine learning.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#F8F9FA] font-mono text-[#212529] text-xs border border-[#DEE2E6]">
                        ARTIFICIAL_INTELLIGENCE
                      </span>
                      <span className="px-3 py-1 bg-[#F8F9FA] font-mono text-[#212529] text-xs border border-[#DEE2E6]">
                        HEALTHCARE
                      </span>
                      <span className="px-3 py-1 bg-[#F8F9FA] font-mono text-[#212529] text-xs border border-[#DEE2E6]">
                        MACHINE_LEARNING
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 mb-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-px bg-[#212529] mr-4"></div>
                <h2 className="font-mono text-2xl font-bold text-[#212529]">VISUAL_ARCHIVE</h2>
              </div>
            </div>
            
            {/* 2024 Gallery */}
            <div className="col-span-12 mb-16">
              <div className="flex items-center mb-8">
                <h3 className="font-mono text-xl font-bold text-[#212529] inline-block border-b-2 border-[#6C757D] pb-1">2024_</h3>
              </div>
              <div className="grid grid-cols-12 gap-6">
                {[1, 2, 3].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-square bg-[#E9ECEF] relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 w-8 h-8 border border-[#6C757D]"></div>
                      <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-mono text-lg font-semibold">Research Symposium</h4>
                        <p className="font-sans text-xs mt-1">March 2024</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Gallery */}
            <div className="col-span-12">
              <div className="flex items-center mb-8">
                <h3 className="font-mono text-xl font-bold text-[#212529] inline-block border-b-2 border-[#6C757D] pb-1">2023_</h3>
              </div>
              <div className="grid grid-cols-12 gap-6">
                {[1, 2, 3].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="col-span-12 sm:col-span-6 lg:col-span-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-square bg-[#E9ECEF] relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#212529]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 w-8 h-8 border border-[#6C757D]"></div>
                      <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-mono text-lg font-semibold">Conference Presentation</h4>
                        <p className="font-sans text-xs mt-1">November 2023</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#DEE2E6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 text-center">
              <h2 className="font-mono text-xl font-bold text-[#212529] mb-4">SSS_LAB</h2>
              <p className="font-sans text-[#6C757D] mb-6">
                Department of Computer Science<br />
                Seoul National University
              </p>
              <div className="w-16 h-px bg-[#6C757D] mx-auto mb-6"></div>
              <div className="flex justify-center space-x-8">
                <Link href="#" className="font-mono text-[#495057] hover:text-[#212529] transition-colors text-sm">
                  EMAIL
                </Link>
                <Link href="#" className="font-mono text-[#495057] hover:text-[#212529] transition-colors text-sm">
                  TWITTER
                </Link>
                <Link href="#" className="font-mono text-[#495057] hover:text-[#212529] transition-colors text-sm">
                  LINKEDIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}