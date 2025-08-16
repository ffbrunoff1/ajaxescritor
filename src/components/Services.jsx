import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, Download, ShoppingCart, Heart, Award } from 'lucide-react'

export default function Services() {
  const books = [
    {
      title: 'Reflexos da Alma',
      genre: 'Romance Contemporâneo',
      description: 'Uma jornada emocional através dos labirintos do coração humano, explorando as complexidades do amor moderno e os dilemas de uma geração em busca de significado.',
      rating: 4.9,
      reviews: 127,
      price: 'R$ 29,90',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&crop=center',
      bestseller: true
    },
    {
      title: 'Caminhos Perdidos',
      genre: 'Drama Psicológico',
      description: 'Um thriller psicológico que mergulha nas profundezas da mente humana, revelando segredos obscuros e verdades perturbadoras sobre a natureza da realidade.',
      rating: 4.7,
      reviews: 89,
      price: 'R$ 32,90',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center',
      bestseller: false
    },
    {
      title: 'Sussurros do Tempo',
      genre: 'Ficção Histórica',
      description: 'Uma narrativa envolvente que entrelaça passado e presente, revelando como as escolhas de uma época ecoam através das gerações seguintes.',
      rating: 4.8,
      reviews: 156,
      price: 'R$ 35,90',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center',
      bestseller: false
    },
    {
      title: 'Além das Palavras',
      genre: 'Poesia Contemporânea',
      description: 'Uma coletânea de poemas que capturam a essência da experiência humana moderna, transformando sentimentos em versos que tocam a alma.',
      rating: 4.6,
      reviews: 94,
      price: 'R$ 24,90',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=center',
      bestseller: false
    },
    {
      title: 'O Último Capítulo',
      genre: 'Mistério',
      description: 'Um mistério envolvente que mantém o leitor em suspense até a última página, combinando elementos de noir clássico com sensibilidades contemporâneas.',
      rating: 4.9,
      reviews: 203,
      price: 'R$ 33,90',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop&crop=center',
      bestseller: true
    },
    {
      title: 'Horizontes Infinitos',
      genre: 'Ficção Científica',
      description: 'Uma exploração fascinante de futuros possíveis, questionando os limites da tecnologia e da condição humana em um mundo em constante transformação.',
      rating: 4.5,
      reviews: 67,
      price: 'R$ 31,90',
      image: 'https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop&crop=center',
      bestseller: false
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
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
            Obras que Tocam
            <span className="text-gradient block mt-2">Corações e Mentes</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Explore uma coleção cuidadosamente criada de narrativas envolventes, 
            cada uma oferecendo uma jornada única através das emoções humanas
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-full"
          >
            <Award className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">Obras Premiadas e Aclamadas</span>
          </motion.div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Book Cover */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                
                {book.bestseller && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <span className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Bestseller</span>
                    </span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Book Info */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {book.genre}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-secondary-700">{book.rating}</span>
                      <span className="text-sm text-secondary-500">({book.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold text-secondary-900 mb-3">
                    {book.title}
                  </h3>
                  
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                {/* Price and Actions */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary-600">{book.price}</span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors duration-200"
                        title="Adicionar aos favoritos"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-accent-100 text-accent-600 rounded-lg hover:bg-accent-200 transition-colors duration-200"
                        title="Preview"
                      >
                        <BookOpen className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-secondary-100 text-secondary-700 py-2 px-3 rounded-lg hover:bg-secondary-200 transition-colors duration-200 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Amostra</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-semibold"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Comprar</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-serif font-semibold text-secondary-900 mb-4">
            Interessado em uma Obra Personalizada?
          </h3>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Ofereço serviços de escrita personalizada para projetos especiais, 
            biografias, narrativas corporativas e muito mais
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Solicitar Orçamento
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}