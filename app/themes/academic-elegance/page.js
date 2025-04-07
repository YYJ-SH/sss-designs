'use client'; // Next.js 13 이상에서는 클라이언트 컴포넌트임을 명시

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function AcademicElegance() {
  return (
    <>
      <Head>
        <title>SSS Lab - 과학 기술 연구실</title>
        <meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#f8f5f1]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,215,201,0.2)_1px,transparent_1px),linear-gradient(0deg,rgba(220,215,201,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-6xl font-bold text-gray-800 mb-6">
            <span className="text-[#8c7569]">SSS</span> Laboratory
          </h1>
          <p className="font-sans text-xl text-gray-600 mb-10 italic">
            Pursuing excellence at the intersection of science and innovation
          </p>
          <div className="flex justify-center gap-6">
            <Link href="#about" className="px-8 py-3 bg-[#8c7569] text-white rounded-none hover:bg-[#725f55] transition-colors border border-[#8c7569] font-sans tracking-wider">
              DISCOVER
            </Link>
            <Link href="#projects" className="px-8 py-3 border border-[#8c7569] text-[#8c7569] rounded-none hover:bg-[#f0ebe5] transition-colors font-sans tracking-wider">
              RESEARCH
            </Link>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div 
            className="w-6 h-10 border-2 border-[#8c7569] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-[#8c7569] rounded-full mt-2"></motion.div>
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
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">About Our Laboratory</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <p className="font-sans text-gray-700 leading-relaxed">
                  SSS Laboratory stands at the forefront of cutting-edge research in computer science and technology. 
                  Our dedicated team of researchers pursues solutions to the most challenging problems of our time.
                </p>
                <p className="font-sans text-gray-700 leading-relaxed">
                  Founded on principles of scientific rigor and intellectual curiosity, we strive to develop transformative 
                  technologies that contribute meaningfully to academic knowledge and societal progress.
                </p>
                <div className="pt-6">
                  <Link href="#members" className="font-sans text-[#8c7569] border-b border-[#8c7569] pb-1 hover:text-[#725f55] transition-colors">
                    Meet our distinguished faculty and researchers →
                  </Link>
                </div>
              </div>
              <div className="bg-[#f8f5f1] p-8 space-y-8">
                <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-6">Research Domains</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="w-1 h-6 bg-[#8c7569] mt-1 mr-4"></span>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-gray-800 mb-2">Artificial Intelligence</h4>
                      <p className="font-sans text-gray-600 text-sm">
                        Developing advanced learning systems with applications in healthcare, education, and sustainable development.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1 h-6 bg-[#8c7569] mt-1 mr-4"></span>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-gray-800 mb-2">Machine Learning</h4>
                      <p className="font-sans text-gray-600 text-sm">
                        Pioneering novel algorithms that enhance prediction accuracy and computational efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-1 h-6 bg-[#8c7569] mt-1 mr-4"></span>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-gray-800 mb-2">Data Science</h4>
                      <p className="font-sans text-gray-600 text-sm">
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
      <section id="news" className="py-24 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Latest Announcements</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white border-b-2 border-[#8c7569] p-8 shadow-sm">
                  <div className="text-sm text-[#8c7569] font-medium mb-4 font-sans">March 15, 2024</div>
                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                    Significant Research Breakthrough
                  </h3>
                  <p className="font-sans text-gray-600 mb-6">
                    Our laboratory has achieved a notable advancement in algorithm optimization, 
                    significantly improving efficiency in machine learning applications.
                  </p>
                  <Link href="#" className="font-sans text-[#8c7569] text-sm hover:text-[#725f55] transition-colors">
                    READ MORE
                  </Link>
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
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Distinguished Faculty</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Professor */}
              <div className="bg-[#f8f5f1] p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full"></div>
                <h3 className="font-serif text-xl font-semibold text-gray-800">Professor Kim</h3>
                <p className="font-sans text-[#8c7569] font-medium my-1">Laboratory Director</p>
                <div className="w-10 h-px bg-[#8c7569] mx-auto my-4"></div>
                <p className="font-sans text-sm text-gray-600">Ph.D. in Computer Science, Harvard University</p>
              </div>

              {/* Students */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#f8f5f1] p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full"></div>
                  <h3 className="font-serif text-xl font-semibold text-gray-800">Dr. Lee Minho</h3>
                  <p className="font-sans text-[#8c7569] font-medium my-1">Research Associate</p>
                  <div className="w-10 h-px bg-[#8c7569] mx-auto my-4"></div>
                  <p className="font-sans text-sm text-gray-600">Specialization: Artificial Intelligence</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Academic Publications</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            {/* 2024 Publications */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-[#8c7569] mb-8 border-l-4 border-[#8c7569] pl-4">2024</h3>
              <div className="space-y-8">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white p-8 shadow-sm">
                    <h4 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                      Novel Approach to Machine Learning in Healthcare: Predictive Analytics for Early Diagnosis
                    </h4>
                    <p className="font-sans text-[#8c7569] mb-4">
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
              <h3 className="font-serif text-2xl font-semibold text-[#8c7569] mb-8 border-l-4 border-[#8c7569] pl-4">2023</h3>
              <div className="space-y-8">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white p-8 shadow-sm">
                    <h4 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                      Advanced Deep Learning Techniques for Complex Data Analysis
                    </h4>
                    <p className="font-sans text-[#8c7569] mb-4">
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
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Research Initiatives</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-[#f8f5f1] overflow-hidden">
                  <div className="h-56 bg-gray-300"></div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                      AI-Driven Healthcare Innovation
                    </h3>
                    <p className="font-sans text-gray-600 mb-6 text-sm leading-relaxed">
                      Developing sophisticated artificial intelligence solutions for healthcare applications, 
                      with a focus on early disease detection and optimized treatment protocols.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1 bg-white text-[#8c7569] text-sm font-sans">
                        Artificial Intelligence
                      </span>
                      <span className="px-4 py-1 bg-white text-[#8c7569] text-sm font-sans">
                        Healthcare
                      </span>
                      <span className="px-4 py-1 bg-white text-[#8c7569] text-sm font-sans">
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
      <section id="gallery" className="py-24 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-gray-800 mb-2 text-center">Laboratory Archives</h2>
            <div className="w-24 h-1 bg-[#8c7569] mx-auto mb-16"></div>
            
            {/* 2024 Gallery */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl font-semibold text-[#8c7569] mb-8 border-l-4 border-[#8c7569] pl-4">2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-gray-300 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h4 className="font-serif text-lg font-semibold">Advanced Research Symposium</h4>
                      <p className="font-sans text-sm mt-1">March 2024</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Gallery */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#8c7569] mb-8 border-l-4 border-[#8c7569] pl-4">2023</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-gray-300 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
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
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-[#8c7569] mb-4">SSS Laboratory</h2>
            <p className="font-sans text-gray-600 mb-6">
              Department of Computer Science<br />
              Seoul National University
            </p>
            <div className="w-16 h-px bg-[#8c7569] mx-auto mb-6"></div>
            <div className="flex justify-center space-x-8">
              <Link href="#" className="font-sans text-gray-500 hover:text-[#8c7569] transition-colors text-sm tracking-wider">
                EMAIL
              </Link>
              <Link href="#" className="font-sans text-gray-500 hover:text-[#8c7569] transition-colors text-sm tracking-wider">
                TWITTER
              </Link>
              <Link href="#" className="font-sans text-gray-500 hover:text-[#8c7569] transition-colors text-sm tracking-wider">
                LINKEDIN
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}