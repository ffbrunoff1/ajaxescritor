import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Feather, Heart } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-accent-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-primary-400 opacity-30"
      >
        <BookOpen className="w-16 h-16" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-accent-400 opacity-30"
      >
        <Feather className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 text-primary-300 opacity-20"
      >
        <Heart className="w-20 h-20" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Onde as
            <span className="text-gradient block mt-2">
              Palavras Ganham Vida
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Mergulhe no universo da literatura contemporânea através de obras 
            envolventes que tocam a alma e despertam a imaginação
          </motion.p>

          {/* Author Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-12"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
              <Feather className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Ajax Escritor</p>
              <p className="text-gray-300 text-sm">Autor & Criador de Histórias</p>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary text-lg px-8 py-4 min-w-[200px]"
            >
              Descobrir Mais
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 min-w-[200px]"
            >
              Entre em Contato
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}