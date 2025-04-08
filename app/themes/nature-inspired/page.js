'use client'; // Next.js 13 이상에서는 클라이언트 컴포넌트임을 명시

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function ElegantPurpleTheme() {
  return (
    <>
      <Head>
        <title>SSS Lab - 성신여자대학교 과학 기술 연구실</title>
        <meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="font-serif text-2xl font-bold text-[#4a2880]">SSS</span>
                <span className="font-serif text-2xl text-[#6d4ca4]">Lab</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="#news" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                News
              </Link>
              <Link href="#members" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                Members
              </Link>
              <Link href="#publications" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                Publications
              </Link>
              <Link href="#projects" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                Projects
              </Link>
              <Link href="#gallery" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors text-sm font-medium">
                Gallery
              </Link>
              <Link href="#" className="px-4 py-2 bg-[#6d4ca4] text-white rounded-md hover:bg-[#4a2880] transition-colors font-sans text-sm font-medium">
                Contact
              </Link>
            </div>
            
            <div className="md:hidden flex items-center">
              <button className="text-[#6d4ca4] hover:text-[#4a2880] focus:outline-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#f6f2ff] to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(156,132,206,0.05)_25%,transparent_25%,transparent_50%,rgba(156,132,206,0.05)_50%,rgba(156,132,206,0.05)_75%,transparent_75%,transparent)] bg-[size:40px_40px]"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#9c84ce]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-[#9c84ce]/10 to-transparent"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-6xl font-bold text-[#4a2880] mb-6">
            SSS Laboratory
          </h1>
          <p className="font-sans text-xl text-[#6d4ca4] mb-10 max-w-2xl mx-auto">
            Pursuing excellence in scientific research and innovation at Sungshin Women's University
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#about" className="px-8 py-3 bg-[#6d4ca4] text-white rounded-md hover:bg-[#4a2880] transition-colors font-sans font-medium">
              Discover More
            </Link>
            <Link href="#projects" className="px-8 py-3 border border-[#9c84ce] text-[#6d4ca4] rounded-md hover:bg-[#f6f2ff] transition-colors font-sans font-medium">
              Our Research
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-10 h-10 rounded-full bg-[#f6f2ff] border border-[#9c84ce] flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15L3 8.5L4.5 7L10 12.5L15.5 7L17 8.5L10 15Z" fill="#6d4ca4"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">About Our Laboratory</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="font-sans text-gray-700 leading-relaxed">
                  SSS Laboratory at Sungshin Women's University stands at the frontier of cutting-edge research in computer science and technology. 
                  Our team of dedicated researchers pursues innovative solutions to complex technological challenges.
                </p>
                <p className="font-sans text-gray-700 leading-relaxed">
                  Founded on principles of academic excellence and intellectual curiosity, we strive to develop transformative 
                  technologies that contribute meaningfully to society while providing a nurturing environment for women in STEM.
                </p>
                <div className="pt-6">
                  <Link href="#members" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors inline-flex items-center">
                    Meet our faculty and researchers
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="bg-[#f6f2ff] p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-[#4a2880] mb-6">Research Domains</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9c84ce]/20 flex items-center justify-center mr-4">
                      <div className="w-5 h-5 rounded-full bg-[#6d4ca4]"></div>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#4a2880] mb-2">Artificial Intelligence</h4>
                      <p className="font-sans text-gray-600">
                        Developing advanced AI systems with applications in healthcare, education, and sustainable development.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9c84ce]/20 flex items-center justify-center mr-4">
                      <div className="w-5 h-5 rounded-full bg-[#6d4ca4]"></div>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#4a2880] mb-2">Machine Learning</h4>
                      <p className="font-sans text-gray-600">
                        Pioneering novel algorithms that enhance prediction accuracy and computational efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#9c84ce]/20 flex items-center justify-center mr-4">
                      <div className="w-5 h-5 rounded-full bg-[#6d4ca4]"></div>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#4a2880] mb-2">Data Science</h4>
                      <p className="font-sans text-gray-600">
                        Extracting meaningful insights from complex datasets to address global challenges.
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
      <section id="news" className="py-24 bg-[#f6f2ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">Latest Announcements</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="h-2 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4]"></div>
                  <div className="p-8">
                    <div className="text-sm text-[#9c84ce] font-medium mb-4 font-sans">March 15, 2024</div>
                    <h3 className="font-serif text-xl font-semibold text-[#4a2880] mb-4">
                      Research Breakthrough in AI
                    </h3>
                    <p className="font-sans text-gray-600 mb-6">
                      Our research team has achieved a significant advancement in neural network architectures, 
                      demonstrating improved efficiency in pattern recognition tasks.
                    </p>
                    <Link href="#" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors inline-flex items-center">
                      Read more
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">Distinguished Faculty</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Professor */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-[1.03]">
                <div className="w-32 h-32 mx-auto mb-6 bg-[#f6f2ff] rounded-full border-4 border-[#9c84ce]/20 overflow-hidden"></div>
                <h3 className="font-serif text-xl font-semibold text-[#4a2880]">Professor Kim</h3>
                <p className="font-sans text-[#6d4ca4] font-medium my-1">Laboratory Director</p>
                <div className="w-10 h-px bg-[#9c84ce] mx-auto my-4"></div>
                <p className="font-sans text-sm text-gray-600">Ph.D. in Computer Science, Seoul National University</p>
              </div>

              {/* Students */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-[1.03]">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#f6f2ff] rounded-full border-4 border-[#9c84ce]/20 overflow-hidden"></div>
                  <h3 className="font-serif text-xl font-semibold text-[#4a2880]">Dr. Lee Minjung</h3>
                  <p className="font-sans text-[#6d4ca4] font-medium my-1">Research Fellow</p>
                  <div className="w-10 h-px bg-[#9c84ce] mx-auto my-4"></div>
                  <p className="font-sans text-sm text-gray-600">Specialization: Machine Learning</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[#f6f2ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">Academic Publications</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            {/* 2024 Publications */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-[#4a2880] mb-8 inline-block pb-2 border-b-2 border-[#9c84ce]">2024</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:scale-[1.01]">
                    <h4 className="font-serif text-xl font-semibold text-[#4a2880] mb-3">
                      Novel Approach to Machine Learning in Healthcare: Predictive Analytics for Early Diagnosis
                    </h4>
                    <p className="font-sans text-[#6d4ca4] mb-4">
                      Kim, J., Lee, S., Park, H.
                    </p>
                    <p className="font-sans text-gray-600 mb-4 text-sm leading-relaxed">
                      This paper presents a novel approach to machine learning in healthcare, focusing on predictive analytics for early diagnosis. 
                      Our method demonstrates a 23% improvement in diagnostic accuracy compared to existing techniques.
                    </p>
                    <p className="font-sans text-gray-500 text-sm italic">
                      International Journal of Computer Science (Vol. 42), 2024
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2023 Publications */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#4a2880] mb-8 inline-block pb-2 border-b-2 border-[#9c84ce]">2023</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:scale-[1.01]">
                    <h4 className="font-serif text-xl font-semibold text-[#4a2880] mb-3">
                      Advanced Deep Learning Techniques for Complex Data Analysis
                    </h4>
                    <p className="font-sans text-[#6d4ca4] mb-4">
                      Park, H., Kim, J., Lee, S.
                    </p>
                    <p className="font-sans text-gray-600 mb-4 text-sm leading-relaxed">
                      This research introduces advanced deep learning techniques designed for analyzing complex, multi-dimensional datasets. 
                      We demonstrate superior performance on several benchmark datasets.
                    </p>
                    <p className="font-sans text-gray-500 text-sm italic">
                      IEEE Transactions on AI (Vol. 16), 2023
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">Research Initiatives</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="h-56 bg-[#f6f2ff]"></div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-[#4a2880] mb-3">
                      AI-Driven Healthcare Innovation
                    </h3>
                    <p className="font-sans text-gray-600 mb-6">
                      Developing sophisticated artificial intelligence solutions for healthcare applications, 
                      with a focus on early disease detection and optimized treatment protocols.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-1 bg-[#f6f2ff] text-[#6d4ca4] rounded-full text-sm font-sans">
                        Artificial Intelligence
                      </span>
                      <span className="px-4 py-1 bg-[#f6f2ff] text-[#6d4ca4] rounded-full text-sm font-sans">
                        Healthcare
                      </span>
                      <span className="px-4 py-1 bg-[#f6f2ff] text-[#6d4ca4] rounded-full text-sm font-sans">
                        Machine Learning
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#f6f2ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#4a2880] mb-4">Laboratory Archives</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9c84ce] to-[#6d4ca4] mx-auto"></div>
            </div>
            
            {/* 2024 Gallery */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-[#4a2880] mb-8 inline-block pb-2 border-b-2 border-[#9c84ce]">2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a2880]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-serif text-lg font-semibold">Advanced Research Symposium</h4>
                      <p className="font-sans text-sm mt-1">March 2024</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Gallery */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#4a2880] mb-8 inline-block pb-2 border-b-2 border-[#9c84ce]">2023</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a2880]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-serif text-lg font-semibold">International Conference Presentation</h4>
                      <p className="font-sans text-sm mt-1">November 2023</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-[#4a2880] mb-4">SSS Laboratory</h2>
            <p className="font-sans text-gray-600 mb-6">
              Department of Computer Science<br />
              Sungshin Women's University
            </p>
            <div className="w-16 h-px bg-[#9c84ce] mx-auto mb-6"></div>
            <div className="flex justify-center space-x-8">
              <Link href="#" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors">
                Email
              </Link>
              <Link href="#" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors">
                Twitter
              </Link>
              <Link href="#" className="font-sans text-[#6d4ca4] hover:text-[#4a2880] transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}