import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'about' },
    { label: 'Obras', href: 'services' },
    { label: 'Contato', href: 'contact' }
  ]

  const legalLinks = [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Direitos Autorais', href: '#' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'contato@ajaxescritor.com' },
    { icon: Phone, text: '+55 (11) 99999-9999' },
    { icon: MapPin, text: 'São Paulo, SP' }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary-600" />
                <div className="font-serif font-bold text-2xl">
                  Ajax <span className="text-primary-600">Escritor</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Criando narrativas que tocam a alma e despertam a imaginação. 
                Cada história é uma jornada única através das profundezas da 
                experiência humana.
              </p>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 rounded-lg"
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold text-sm">Literatura Contemporânea</span>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6">
                Navegação Rápida
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6">
                Contato
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-sm">{info.text}</span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-8"
        ></motion.div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p>
              © {new Date().getFullYear()} Ajax Escritor. Todos os direitos reservados.
            </p>
            <p className="mt-1">
              Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Papum</a></em>
            </p>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 md:justify-end"
          >
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-700"
        >
          <blockquote className="text-lg font-serif italic text-gray-300 max-w-2xl mx-auto">
            "A literatura é a arte de descobrir algo extraordinário sobre pessoas comuns, 
            e dizer algo comum sobre pessoas extraordinárias."
          </blockquote>
          <cite className="block mt-4 text-primary-400 font-medium">
            — Boris Pasternak
          </cite>
        </motion.div>
      </div>
    </footer>
  )
}