'use client'; // Next.js 13 이상에서는 클라이언트 컴포넌트임을 명시

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function TechnicalMinimalism() {
  return (
    <>
      <Head>
        <title>SSS Lab - 과학 기술 연구실</title>
        <meta name="description" content="Exploring the frontiers of science and technology through innovative research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f0f0_12%,transparent_12.5%,transparent_87%,#f0f0f0_87.5%,#f0f0f0_100%)] bg-[length:20px_20px]"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">SSS Lab</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Exploring the frontiers of science and technology through innovative research
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#about" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
            <Link href="#projects" className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Our Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Our Lab</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-600">
                  SSS Lab is at the forefront of cutting-edge research in computer science and technology. 
                  Our team of dedicated researchers works on innovative solutions to complex problems.
                </p>
                <p className="text-gray-600">
                  We focus on developing breakthrough technologies that can make a real impact on society.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Artificial Intelligence
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Data Science
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Research Breakthrough
                  </h3>
                  <p className="text-gray-600">
                    Our team has made significant progress in developing new algorithms 
                    for machine learning applications.
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lab Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Professor */}
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-900">Professor Kim</h3>
                <p className="text-gray-600">Lab Director</p>
                <p className="text-sm text-gray-500 mt-2">Ph.D. in Computer Science</p>
              </div>

              {/* Students */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">Student Name</h3>
                  <p className="text-gray-600">Ph.D. Student</p>
                  <p className="text-sm text-gray-500 mt-2">Research Focus: AI</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publications</h2>
            
            {/* 2024 Publications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">2024</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Novel Approach to Machine Learning in Healthcare
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Kim, J., Lee, S., Park, H.
                    </p>
                    <p className="text-gray-500 text-sm">
                      International Journal of Computer Science, 2024
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2023 Publications */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">2023</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Advanced Deep Learning Techniques
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Park, H., Kim, J., Lee, S.
                    </p>
                    <p className="text-gray-500 text-sm">
                      IEEE Transactions on AI, 2023
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      AI-Driven Healthcare Solutions
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Developing innovative AI solutions for healthcare applications, 
                      focusing on early disease detection and treatment optimization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        AI
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        Healthcare
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
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
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
            
            {/* 2024 Gallery */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">2024</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="text-lg font-semibold">Lab Workshop</h4>
                      <p className="text-sm">March 2024</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2023 Gallery */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">2023</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h4 className="text-lg font-semibold">Conference Presentation</h4>
                      <p className="text-sm">November 2023</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">SSS Lab</h2>
            <p className="text-gray-600 mb-4">
              Department of Computer Science<br />
              University Name
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                Email
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}