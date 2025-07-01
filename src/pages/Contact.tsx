import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    phone: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Workshop',
      details: ['JL. Raya Tlasih, No. 124, Tulungan, Tlasih Satu, Tlasih', 'Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61273', 'Indonesia']
    },
    {
      icon: Phone,
      title: 'Kontak Telepon',
      details: ['WhatsApp: +62856-8543-495', 'Telp: (031)8850646', 'Untuk konsultasi dan pemesanan']
    },
    {
      icon: Mail,
      title: 'Email & Media Sosial',
      details: ['sentosateknik@gmail.com', 'Informasi produk dan layanan']
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Sabtu: 08.00 - 17.00 WIB', 'Minggu: Tutup', 'Kunjungan harap buat janji terlebih dahulu']
    }
  ];

  const services = [
    'Jasa Perbengkelan & Fabrikasi',
    'Forming Machine (Pencetak Kerupuk)',
    'Mixer/Molen Adonan',
    'Slicer (Pemotong)',
    'Boiler (Ketel Uap)',
    'Dryer (Pengering)',
    'Extruder (Snack)',
    'Mesin Makaroni',
    'Konsultasi Pabrik Kerupuk',
    'Custom Engineering'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda dalam 24 jam.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hubungi <span className="text-blue-600">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tertarik dengan produk dan layanan kami? Ingin berkunjung ke workshop atau 
              konsultasi langsung? Kami siap membantu Anda mewujudkan pabrik impian!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Konsultasi Gratis</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dapatkan konsultasi gratis untuk kebutuhan mesin industri makanan Anda. 
                  Tim ahli kami siap membantu menemukan solusi terbaik.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Kunjungan Workshop</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kami dengan senang hati menerima kunjungan Anda langsung ke workshop. 
                  Silakan hubungi kami terlebih dahulu untuk membuat janji kunjungan.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Instagram className="h-6 w-6 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">Follow Media Sosial</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ikuti Instagram @sentosateknik.id untuk update terbaru produk, 
                  proyek, dan tips industri makanan.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan alamat email Anda"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan nomor WhatsApp Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Perusahaan/Usaha
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan nama perusahaan/usaha Anda"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesin/Layanan yang Diminati
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Pilih mesin/layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Detail Kebutuhan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Jelaskan kebutuhan mesin Anda, kapasitas produksi yang diinginkan, budget, timeline, dan detail spesifik lainnya..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                  >
                    Kirim Pesan
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Visit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kunjungi Workshop Kami</h2>
            <p className="text-xl text-gray-600">
              Lihat langsung proses pembuatan mesin dan diskusikan kebutuhan Anda dengan tim ahli.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Fasilitas Workshop</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Area fabrikasi dan pengelasan modern</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Ruang desain dengan teknologi CAD</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Area testing dan quality control</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Showroom mesin-mesin unggulan</span>
                </li>
              </ul>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Informasi Kunjungan</h4>
                <p className="text-gray-600 text-sm">
                  Untuk kunjungan workshop, mohon hubungi kami terlebih dahulu untuk membuat janji. 
                  Kami akan menyediakan tour lengkap dan konsultasi dengan tim ahli kami.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Workshop CV Sentosa Teknik"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lokasi Workshop</h2>
            <p className="text-xl text-gray-600">
              CV Sentosa Teknik Engineering berlokasi di Sidoarjo, Jawa Timur.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.927485510727!2d112.62044429999999!3d-7.4732601999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780a84192abc07%3A0x16edda9279bd2842!2sSentosa%20Teknik%20Engineering.%20CV!5e0!3m2!1sen!2sid!4v1751023981251!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV Sentosa Teknik Engineering"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;