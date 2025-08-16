import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Award, Users, Target, Pen, Globe, Heart } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: BookOpen, number: '15+', label: 'Obras Publicadas' },
    { icon: Users, number: '10k+', label: 'Leitores Alcançados' },
    { icon: Award, number: '5', label: 'Prêmios Literários' },
    { icon: Globe, number: '3', label: 'Países Publicado' }
  ]

  const values = [
    {
      icon: Pen,
      title: 'Autenticidade',
      description: 'Cada história carrega a essência genuína da experiência humana, explorando emoções e situações reais.'
    },
    {
      icon: Heart,
      title: 'Conexão Emocional',
      description: 'Criamos narrativas que tocam profundamente o coração dos leitores, estabelecendo vínculos duradouros.'
    },
    {
      icon: Target,
      title: 'Impacto Social',
      description: 'A literatura como ferramenta de transformação, provocando reflexões e mudanças positivas na sociedade.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6">
            Uma Jornada Através das
            <span className="text-gradient block mt-2">Palavras e Emoções</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Descobra a trajetória de um escritor apaixonado por contar histórias 
            que transformam vidas e despertam a consciência humana
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-semibold text-secondary-900 mb-6">
              A Arte de Contar Histórias
            </h3>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              Desde criança, sempre acreditei no poder transformador das palavras. 
              Cada livro que escrevo é uma janela para mundos inexplorados, onde 
              personagens ganham vida e leitores encontram pedaços de si mesmos.
            </p>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              Minha literatura explora as complexidades da condição humana, 
              mesclando realismo contemporâneo com elementos que tocam o 
              subconsciente coletivo. Cada narrativa é cuidadosamente construída 
              para provocar reflexões profundas sobre amor, perda, esperança e redenção.
            </p>
            
            <p className="text-lg text-secondary-700 leading-relaxed">
              Através de mais de uma década dedicada à escrita, desenvolvi um 
              estilo único que combina lirismo poético com narrativas envolventes, 
              criando experiências literárias que permanecem na memória muito 
              depois da última página.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-lg mt-6"
            >
              <Feather className="w-5 h-5" />
              <span className="font-semibold">Missão: Inspirar através da Literatura</span>
            </motion.div>
          </motion.div>

          {/* Image & Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center"
                >
                  <BookOpen className="w-12 h-12 text-white" />
                </motion.div>
                
                <blockquote className="text-2xl font-serif text-secondary-800 italic leading-relaxed">
                  "As melhores histórias não são aquelas que inventamos, 
                  mas aquelas que descobrimos nos cantos mais profundos 
                  da alma humana."
                </blockquote>
                
                <cite className="block text-lg font-semibold text-primary-600">
                  — Ajax Escritor
                </cite>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</h4>
                <p className="text-secondary-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-serif font-semibold text-secondary-900 mb-4">
            Valores que Guiam Minha Escrita
          </h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Cada obra é criada com base em princípios fundamentais que definem 
            minha abordagem literária e meu compromisso com os leitores
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-serif font-semibold text-secondary-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}