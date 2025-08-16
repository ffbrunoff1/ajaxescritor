import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, BookOpen } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({ message: '', isError: false })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: 'Enviando mensagem...', isError: false })
    
    try {
      // Simular envio (substitua pela sua lógica de envio real)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus({ message: 'Mensagem enviada com sucesso! Retornarei em breve.', isError: false })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@ajaxescritor.com',
      description: 'Para projetos e parcerias'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      description: 'Disponível durante horário comercial'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'São Paulo, SP',
      description: 'Atendimento presencial e online'
    }
  ]

  const workingHours = [
    { day: 'Segunda a Sexta', hours: '9h às 18h' },
    { day: 'Sábado', hours: '9h às 14h' },
    { day: 'Domingo', hours: 'Fechado' }
  ]

  const subjects = [
    'Interesse em obra específica',
    'Projeto de escrita personalizada',
    'Colaboração literária',
    'Entrevista ou mídia',
    'Evento ou palestra',
    'Outros assuntos'
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
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
            Vamos Conversar Sobre
            <span className="text-gradient block mt-2">Sua Próxima História</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Seja para discutir um projeto, compartilhar ideias ou simplesmente 
            trocar algumas palavras sobre literatura, estou sempre aberto ao diálogo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-secondary-900">
                    Envie sua Mensagem
                  </h3>
                  <p className="text-secondary-600">Respondo em até 24 horas</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Seu nome"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Selecione o assunto</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Conte-me sobre seu projeto ou dúvida..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-serif font-semibold text-secondary-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">{info.title}</h4>
                        <p className="text-primary-600 font-medium">{info.info}</p>
                        <p className="text-sm text-secondary-600">{info.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary-600" />
                <h3 className="text-xl font-serif font-semibold text-secondary-900">
                  Horário de Atendimento
                </h3>
              </div>
              
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-secondary-700">{schedule.day}</span>
                    <span className="font-semibold text-primary-600">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 text-center"
            >
              <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-serif font-semibold text-secondary-900 mb-2">
                Consultoria Literária
              </h4>
              <p className="text-sm text-secondary-600">
                Ofereço consultoria para escritores iniciantes e projetos editoriais especiais
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}