
'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CreativePlayTheme() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
const handleMouseMove = (e) => {
setMousePosition({ x: e.clientX, y: e.clientY });
};

const handleScroll = () => {
setScrollY(window.scrollY);
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('scroll', handleScroll);

return () => {
window.removeEventListener('mousemove', handleMouseMove);
window.removeEventListener('scroll', handleScroll);
};
}, []);

return (
<>
<Head>
<title>SSS Lab - 성신여자대학교 과학 기술 연구실</title>
<meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
<link rel="icon" href="/favicon.ico" />
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Comfortaa:wght@400;500;600;700&display=swap" rel="stylesheet" />
</Head>

{/* Cursor Follower */}
<motion.div
className="fixed w-8 h-8 rounded-full bg-[#FF6B6B]/30 mix-blend-multiply pointer-events-none z-50"
style={{
  left: mousePosition.x - 16,
  top: mousePosition.y - 16,
}}
animate={{
  scale: [1, 1.2, 1],
}}
transition={{
  duration: 1,
  repeat: Infinity,
}}
/>

{/* Background Shapes */}
<div className="fixed inset-0 overflow-hidden -z-10">
<div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#4ECDC4]/20 translate-x-1/3 -translate-y-1/3 animate-pulse" style={{ animationDuration: '8s' }} />
<div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#FF6B6B]/20 -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '10s' }} />
<div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#FFD166]/20 animate-pulse" style={{ animationDuration: '7s' }} />
</div>

{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-24">
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center">
        <motion.span 
          className="font-bold text-3xl text-[#FF6B6B] font-display"
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SSS
        </motion.span>
        <span className="font-display text-3xl text-[#4ECDC4]">Lab</span>
      </Link>
    </motion.div>
    
    <div className="hidden md:flex items-center space-x-1">
      {['About', 'News', 'Members', 'Publications', 'Projects', 'Gallery'].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Link 
            href={`#${item.toLowerCase()}`} 
            className="relative font-medium text-gray-700 hover:text-[#FF6B6B] transition-colors px-4 py-2 rounded-full overflow-hidden group"
          >
            <span className="relative z-10">{item}</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-[#4ECDC4] rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link 
          href="#contact" 
          className="ml-4 px-6 py-3 bg-[#FF6B6B] text-white rounded-full font-medium hover:bg-[#ff5252] transition-colors shadow-lg hover:shadow-xl"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
    
    <div className="md:hidden flex items-center">
      <button 
        className="text-gray-700 hover:text-[#FF6B6B] focus:outline-none transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {mobileMenuOpen ? (
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </button>
    </div>
  </div>
</div>

{/* Mobile Menu */}
<motion.div 
  className={`md:hidden bg-white/90 backdrop-blur-md ${mobileMenuOpen ? 'block' : 'hidden'}`}
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
  transition={{ duration: 0.3 }}
>
  <div className="px-4 py-4 space-y-2">
    {['About', 'News', 'Members', 'Publications', 'Projects', 'Gallery'].map((item) => (
      <motion.div
        key={item}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link 
          href={`#${item.toLowerCase()}`} 
          className="block px-4 py-2 text-gray-700 hover:text-[#FF6B6B] hover:bg-[#FFE5D9] rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          {item}
        </Link>
      </motion.div>
    ))}
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Link 
        href="#contact" 
        className="block mt-4 px-4 py-2 bg-[#FF6B6B] text-white rounded-md font-medium hover:bg-[#ff5252] transition-colors"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact Us
      </Link>
    </motion.div>
  </div>
</motion.div>
</nav>

{/* Hero Section */}
<section className="min-h-screen pt-24 flex items-center justify-center bg-[#FFE5D9] overflow-hidden relative">
<div className="absolute w-full h-full">
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <pattern id="polka-dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle fill="#FF6B6B" cx="2" cy="2" r="1" opacity="0.2"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
  </svg>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 md:order-1"
    >
      <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight text-gray-800">
        Discover the <span className="text-[#FF6B6B]">future</span> of technology with us
      </h1>
      <p className="mt-6 text-xl text-gray-600 leading-relaxed">
        Exploring the frontiers of science and technology through innovative research and creative solutions.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="#about" className="px-8 py-4 bg-[#FF6B6B] text-white rounded-full font-medium hover:bg-[#ff5252] transition-colors shadow-lg hover:shadow-xl">
          Learn More
        </Link>
        <Link href="#projects" className="px-8 py-4 bg-[#4ECDC4] text-white rounded-full font-medium hover:bg-[#3dbdb5] transition-colors shadow-lg hover:shadow-xl">
          Our Projects
        </Link>
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 md:order-2"
    >
      <div className="relative h-80 md:h-96 w-full">
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B6B] rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 bg-[#4ECDC4] rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#FFD166] rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-[#FF6B6B] rounded-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center"
        >
          <span className="font-display text-4xl font-bold text-[#FF6B6B]">SSS</span>
        </motion.div>
      </div>
    </motion.div>
  </div>
</div>

<motion.div 
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="#FF6B6B" strokeWidth="2"/>
    <path d="M20 10L20 30M20 30L10 20M20 30L30 20" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</motion.div>
</section>

{/* About Section */}
<section id="about" className="py-24 bg-white relative overflow-hidden">
<div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FFE5D9] rounded-full opacity-50"></div>
<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#FFE5D9] rounded-full opacity-50"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="text-center mb-16">
    <motion.h2 
      className="font-display text-4xl font-bold text-gray-800 inline-block relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      About Our Lab
      <motion.div 
        className="h-2 bg-[#4ECDC4] w-full absolute -bottom-2 left-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
    <motion.div 
      className="md:col-span-7"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <p className="text-lg text-gray-600 leading-relaxed">
          SSS Laboratory at Sungshin Women's University is a vibrant hub for cutting-edge research in computer science and technology. 
          Our team of dedicated researchers explores innovative solutions to complex technological challenges.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are committed to pushing the boundaries of what's possible, fostering an environment where creativity meets technical excellence, 
          and developing technologies that make a real impact on society.
        </p>
        <div className="pt-6">
          <Link href="#members" className="text-[#FF6B6B] hover:text-[#ff5252] transition-colors font-medium group flex items-center">
            Meet our team of researchers
            <motion.svg 
              className="ml-2 w-5 h-5" 
              whileHover={{ x: 5 }}
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </Link>
        </div>
      </div>
    </motion.div>
    
    <motion.div 
      className="md:col-span-5"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#FFE5D9] p-8 rounded-3xl space-y-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF6B6B] opacity-10 rounded-full"></div>
        <h3 className="font-display text-2xl font-bold text-gray-800 relative z-10">Research Areas</h3>
        <div className="space-y-6 relative z-10">
          <motion.div 
            className="flex items-start gap-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-[#FF6B6B] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H7M17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V7M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-800">Artificial Intelligence</h4>
              <p className="text-gray-600 mt-1">Developing advanced AI systems for real-world applications.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-[#4ECDC4] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V10C3 8.89543 3.89543 8 5 8H6M15 8L12 5M12 5L9 8M12 5V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-800">Machine Learning</h4>
              <p className="text-gray-600 mt-1">Creating algorithms that learn and adapt to complex datasets.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-[#FFD166] rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.5L12 21.5L17 16.5M7 7.5L12 2.5L17 7.5M12 2.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-gray-800">Data Science</h4>
              <p className="text-gray-600 mt-1">Extracting meaningful insights from complex datasets.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</div>
</section>

{/* Publications Section */}
<section id="publications" className="py-24 bg-[#FFE5D9] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="text-center mb-16">
    <motion.h2 
      className="font-display text-4xl font-bold text-gray-800 inline-block relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Publications
      <motion.div 
        className="h-2 bg-[#FF6B6B] w-full absolute -bottom-2 left-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>
  
  {/* 2024 Publications */}
  <div className="mb-16">
    <motion.h3 
      className="inline-block font-display text-2xl font-semibold text-[#FF6B6B] mb-8 relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      2024
      <div className="absolute -right-8 top-0 w-6 h-6 bg-[#4ECDC4] rounded-full opacity-30"></div>
    </motion.h3>
    
    <div className="space-y-6">
      {[1, 2].map((item, index) => (
        <motion.div 
          key={item}
          className="bg-white rounded-3xl shadow-lg p-8 transform-gpu"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center">
              <span className="text-[#FF6B6B] font-display text-2xl font-bold">0{index + 1}</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#FF6B6B]">
                Novel Approach to Machine Learning in Healthcare
              </h4>
              <p className="text-[#4ECDC4] font-medium mb-3">
                Kim, J., Lee, S., Park, H.
              </p>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                This paper presents a novel approach to machine learning in healthcare, focusing on predictive analytics for early diagnosis. 
                Our method demonstrates a 23% improvement in diagnostic accuracy compared to existing techniques.
              </p>
              <p className="text-gray-500 text-sm">
                International Journal of Computer Science (Vol. 42), 2024
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* 2023 Publications */}
  <div>
    <motion.h3 
      className="inline-block font-display text-2xl font-semibold text-[#4ECDC4] mb-8 relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      2023
      <div className="absolute -right-8 top-0 w-6 h-6 bg-[#FF6B6B] rounded-full opacity-30"></div>
    </motion.h3>
    
    <div className="space-y-6">
      {[1, 2].map((item, index) => (
        <motion.div 
          key={item}
          className="bg-white rounded-3xl shadow-lg p-8 transform-gpu"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center">
              <span className="text-[#4ECDC4] font-display text-2xl font-bold">0{index + 1}</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#4ECDC4]">
                Advanced Deep Learning Techniques for Complex Data Analysis
              </h4>
              <p className="text-[#FF6B6B] font-medium mb-3">
                Park, H., Kim, J., Lee, S.
              </p>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                This research introduces advanced deep learning techniques designed for analyzing complex, multi-dimensional datasets. 
                We demonstrate superior performance on several benchmark datasets.
              </p>
              <p className="text-gray-500 text-sm">
                IEEE Transactions on AI (Vol. 16), 2023
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</section>

{/* News Section */}
<section id="news" className="py-24 bg-[#FFE5D9] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="text-center mb-16">
    <motion.h2 
      className="font-display text-4xl font-bold text-gray-800 inline-block relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Latest News
      <motion.div 
        className="h-2 bg-[#FF6B6B] w-full absolute -bottom-2 left-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((item, index) => (
      <motion.div 
        key={item}
        className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        <div className="h-4 bg-[#FF6B6B]"></div>
        <div className="p-8">
          <div className="text-sm text-[#4ECDC4] font-medium mb-4">March 15, 2024</div>
          <h3 className="font-display text-xl font-semibold text-gray-800 mb-4 group-hover:text-[#FF6B6B] transition-colors">
            Research Breakthrough in AI Technologies
          </h3>
          <p className="text-gray-600 mb-6">
            Our team has achieved a significant advancement in neural network architectures, 
            demonstrating improved efficiency in pattern recognition tasks.
          </p>
          <div className="flex justify-between items-center">
            <Link href="#" className="text-[#FF6B6B] hover:text-[#ff5252] transition-colors font-medium flex items-center">
              Read more
              <motion.svg 
                className="ml-2 w-5 h-5" 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </Link>
            <div className="w-10 h-10 bg-[#FFE5D9] rounded-full flex items-center justify-center">
              <span className="text-[#FF6B6B] font-medium">0{index + 1}</span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>
</section>

{/* Members Section */}
<section id="members" className="py-24 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-[#FFE5D9]" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4ECDC4] rounded-full opacity-10"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FF6B6B] rounded-full opacity-10"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="text-center mb-16">
    <motion.h2 
      className="font-display text-4xl font-bold text-gray-800 inline-block relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Team
      <motion.div 
        className="h-2 bg-[#4ECDC4] w-full absolute -bottom-2 left-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.h2>
  </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Professor */}
    <motion.div 
      className="bg-white rounded-3xl shadow-xl overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="h-2 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4]"></div>
      <div className="p-6 text-center">
        <div className="w-32 h-32 mx-auto mb-6 bg-[#FFE5D9] rounded-full overflow-hidden relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FF6B6B]/20 to-transparent"></div>
        </div>
        <h3 className="font-display text-xl font-semibold text-gray-800">Prof. Kim</h3>
        <p className="text-[#FF6B6B] font-medium my-1">Laboratory Director</p>
        <div className="w-10 h-1 bg-[#4ECDC4] mx-auto my-3 rounded-full"></div>
        <p className="text-gray-600 text-sm">Ph.D. in Computer Science</p>
        <div className="mt-6 flex justify-center space-x-2">
          {['email', 'twitter', 'linkedin'].map((social) => (
            <motion.a 
              key={social}
              href="#"
              className="w-8 h-8 rounded-full bg-[#FFE5D9] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Students */}
    {[1, 2, 3].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-2 bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"></div>
                <div className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#FFE5D9] rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#4ECDC4]/20 to-transparent"></div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800">Dr. Lee Minjung</h3>
                  <p className="text-[#4ECDC4] font-medium my-1">Senior Researcher</p>
                  <div className="w-10 h-1 bg-[#FF6B6B] mx-auto my-3 rounded-full"></div>
                  <p className="text-gray-600 text-sm">AI & Machine Learning Expert</p>
                  <div className="mt-6 flex justify-center space-x-2">
                    {['email', 'twitter', 'linkedin'].map((social) => (
                      <motion.a 
                        key={social}
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#FFE5D9] flex items-center justify-center text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white transition-colors"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[#FFE5D9] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-4xl font-bold text-gray-800 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Publications
              <motion.div 
                className="h-2 bg-[#FF6B6B] w-full absolute -bottom-2 left-0 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </div>
          
          {/* 2024 Publications */}
          <div className="mb-16">
            <motion.h3 
              className="inline-block font-display text-2xl font-semibold text-[#FF6B6B] mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2024
              <div className="absolute -right-8 top-0 w-6 h-6 bg-[#4ECDC4] rounded-full opacity-30"></div>
            </motion.h3>
            
            <div className="space-y-6">
              {[1, 2].map((item, index) => (
                <motion.div 
                  key={item}
                  className="bg-white rounded-3xl shadow-lg p-8 transform-gpu"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center">
                      <span className="text-[#FF6B6B] font-display text-2xl font-bold">0{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#FF6B6B]">
                        Novel Approach to Machine Learning in Healthcare
                      </h4>
                      <p className="text-[#4ECDC4] font-medium mb-3">
                        Kim, J., Lee, S., Park, H.
                      </p>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        This paper presents a novel approach to machine learning in healthcare, focusing on predictive analytics for early diagnosis. 
                        Our method demonstrates a 23% improvement in diagnostic accuracy compared to existing techniques.
                      </p>
                      <p className="text-gray-500 text-sm">
                        International Journal of Computer Science (Vol. 42), 2024
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2023 Publications */}
          <div>
            <motion.h3 
              className="inline-block font-display text-2xl font-semibold text-[#4ECDC4] mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2023
              <div className="absolute -right-8 top-0 w-6 h-6 bg-[#FF6B6B] rounded-full opacity-30"></div>
            </motion.h3>
            
            <div className="space-y-6">
              {[1, 2].map((item, index) => (
                <motion.div 
                  key={item}
                  className="bg-white rounded-3xl shadow-lg p-8 transform-gpu"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#FFE5D9] rounded-2xl flex items-center justify-center">
                      <span className="text-[#4ECDC4] font-display text-2xl font-bold">0{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#4ECDC4]">
                        Advanced Deep Learning Techniques for Complex Data Analysis
                      </h4>
                      <p className="text-[#FF6B6B] font-medium mb-3">
                        Park, H., Kim, J., Lee, S.
                      </p>
                      <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                        This research introduces advanced deep learning techniques designed for analyzing complex, multi-dimensional datasets. 
                        We demonstrate superior performance on several benchmark datasets.
                      </p>
                      <p className="text-gray-500 text-sm">
                        IEEE Transactions on AI (Vol. 16), 2023
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-[#FFE5D9]" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-4xl font-bold text-gray-800 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Projects
              <motion.div 
                className="h-2 bg-[#4ECDC4] w-full absolute -bottom-2 left-0 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div 
                key={item}
                className="bg-white rounded-3xl shadow-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-[#FFE5D9] relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/30 to-[#4ECDC4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#FF6B6B]">
                      {index % 2 === 0 ? 'Active' : 'Ongoing'}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#FF6B6B] transition-colors">
                    AI-Driven Healthcare Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Developing cutting-edge AI applications for healthcare, with a focus on early disease 
                    detection and personalized treatment recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#FFE5D9] text-[#FF6B6B] rounded-full text-sm">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 bg-[#FFE5D9] text-[#4ECDC4] rounded-full text-sm">
                      Healthcare
                    </span>
                    <span className="px-3 py-1 bg-[#FFE5D9] text-[#FF6B6B] rounded-full text-sm">
                      Machine Learning
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#FFE5D9] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-4xl font-bold text-gray-800 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Gallery
              <motion.div 
                className="h-2 bg-[#FF6B6B] w-full absolute -bottom-2 left-0 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </div>
          
          {/* 2024 Gallery */}
          <div className="mb-16">
            <motion.h3 
              className="inline-block font-display text-2xl font-semibold text-[#FF6B6B] mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2024
              <div className="absolute -right-8 top-0 w-6 h-6 bg-[#4ECDC4] rounded-full opacity-30"></div>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative aspect-square bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#FF6B6B]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#FF6B6B]">
                      Mar 2024
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-display text-lg font-semibold">Research Workshop</h4>
                    <p className="text-sm mt-1">AI Applications Team</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2023 Gallery */}
          <div>
            <motion.h3 
              className="inline-block font-display text-2xl font-semibold text-[#4ECDC4] mb-8 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2023
              <div className="absolute -right-8 top-0 w-6 h-6 bg-[#FF6B6B] rounded-full opacity-30"></div>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative aspect-square bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#4ECDC4]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#4ECDC4]">
                      Nov 2023
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-display text-lg font-semibold">Conference Presentation</h4>
                    <p className="text-sm mt-1">International AI Symposium</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-[#FFE5D9]" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#4ECDC4] rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FF6B6B] rounded-full opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2 
              className="font-display text-4xl font-bold text-gray-800 inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get In Touch
              <motion.div 
                className="h-2 bg-[#4ECDC4] w-full absolute -bottom-2 left-0 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF6B6B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 5L12 14L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@ssslab.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF6B6B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+82 2 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFE5D9] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF6B6B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Sungshin Women's University<br/>Seoul, South Korea</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex space-x-4">
                {['twitter', 'facebook', 'instagram'].map((social) => (
                  <motion.a 
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#FFE5D9] flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-[#FFE5D9] border-2 border-transparent rounded-xl focus:border-[#FF6B6B] focus:outline-none transition-colors" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-[#FFE5D9] border-2 border-transparent rounded-xl focus:border-[#FF6B6B] focus:outline-none transition-colors" 
                      placeholder="Your email"
                    />
                 </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-[#FFE5D9] border-2 border-transparent rounded-xl focus:border-[#FF6B6B] focus:outline-none transition-colors" 
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 bg-[#FFE5D9] border-2 border-transparent rounded-xl focus:border-[#FF6B6B] focus:outline-none transition-colors" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <motion.button 
                    type="submit" 
                    className="w-full py-3 bg-[#FF6B6B] text-white rounded-xl font-medium hover:bg-[#ff5252] transition-colors shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#FFE5D9] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4ECDC4] rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF6B6B] rounded-full opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <motion.span 
                  className="font-bold text-3xl text-[#FF6B6B] font-display"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SSS
                </motion.span>
                <span className="font-display text-3xl text-[#4ECDC4]">Lab</span>
              </div>
              <p className="text-gray-600 mb-6">
                Exploring the frontiers of science and technology through innovative research and creative solutions.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <motion.a 
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About', 'News', 'Members', 'Publications', 'Projects', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-600 hover:text-[#FF6B6B] transition-colors flex items-center group"
                    >
                      <svg 
                        className="w-4 h-4 mr-2 text-[#FF6B6B] transform group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-6">Subscribe to Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest research and news.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  className="flex-grow px-4 py-3 bg-white border-2 border-transparent rounded-l-xl focus:border-[#FF6B6B] focus:outline-none transition-colors" 
                  placeholder="Your email"
                />
                <motion.button 
                  type="submit" 
                  className="px-4 py-3 bg-[#FF6B6B] text-white rounded-r-xl font-medium hover:bg-[#ff5252] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-[#FFCFD2] text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} SSS Laboratory, Sungshin Women's University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
// Ensure this closing brace matches the opening brace of the function or block it belongs to
}
