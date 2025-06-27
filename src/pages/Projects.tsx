import { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Filter, } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Pabrik Kerupuk', 'Mesin Custom', 'Instalasi', 'Konsultasi'];

  const projects = [
    {
      title: 'Pembuatan dan Instalasi Lengkap Pabrik Kerupuk Skala UMKM',
      client: 'UMKM Kerupuk Gresik',
      location: 'Gresik, Jawa Timur',
      year: '2024',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Proyek lengkap pembangunan pabrik kerupuk dari desain layout hingga instalasi semua mesin produksi.',
      category: 'Pabrik Kerupuk',
      status: 'Selesai',
      duration: '3 bulan',
      machines: ['Forming Machine', 'Mixer Adonan', 'Dryer', 'Boiler']
    },
    {
      title: 'Produksi Mesin Snack Extruder Custom',
      client: 'PT Snack Nusantara',
      location: 'Malang, Jawa Timur',
      year: '2024',
      image: 'https://images.pexels.com/photos/3785933/pexels-photo-3785933.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Pembuatan mesin extruder khusus untuk produksi snack dengan bentuk dan ukuran custom sesuai permintaan.',
      category: 'Mesin Custom',
      status: 'Berlangsung',
      duration: '2 bulan',
      machines: ['Extruder Custom', 'Conveyor System', 'Packaging Unit']
    },
    {
      title: 'Pengadaan Boiler & Dryer untuk Pabrik Kerupuk',
      client: 'CV Kerupuk Semarang',
      location: 'Semarang, Jawa Tengah',
      year: '2023',
      image: 'https://images.pexels.com/photos/9799825/pexels-photo-9799825.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Pengadaan dan instalasi boiler serta dryer untuk meningkatkan kapasitas produksi kerupuk.',
      category: 'Instalasi',
      status: 'Selesai',
      duration: '1.5 bulan',
      machines: ['Boiler Industrial', 'Dryer System', 'Steam Distribution']
    },
    {
      title: 'Pabrikasi Mesin Penggoreng Kerupuk Pasir & Peniris Minyak',
      client: 'UD Kerupuk Sidoarjo',
      location: 'Sidoarjo, Jawa Timur',
      year: '2023',
      image: 'https://images.pexels.com/photos/3862362/pexels-photo-3862362.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Pembuatan mesin penggoreng dengan sistem pasir panas dan peniris minyak otomatis.',
      category: 'Mesin Custom',
      status: 'Selesai',
      duration: '2 bulan',
      machines: ['Penggoreng Pasir', 'Spinner Peniris', 'Control System']
    },
    {
      title: 'Instalasi Mesin Mixer dan Slicer untuk Makaroni',
      client: 'PT Makaroni Palembang',
      location: 'Palembang, Sumatera Selatan',
      year: '2023',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Instalasi sistem produksi makaroni lengkap dengan mixer adonan dan slicer presisi.',
      category: 'Instalasi',
      status: 'Selesai',
      duration: '1 bulan',
      machines: ['Mixer Makaroni', 'Slicer Precision', 'Drying Rack']
    },
    {
      title: 'Konsultasi dan Desain Layout Pabrik Kerupuk',
      client: 'Investor Pabrik Baru',
      location: 'Surabaya, Jawa Timur',
      year: '2024',
      image: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Layanan konsultasi lengkap untuk pembangunan pabrik kerupuk baru dari nol.',
      category: 'Konsultasi',
      status: 'Berlangsung',
      duration: '4 bulan',
      machines: ['Layout Design', 'Machine Selection', 'Process Flow']
    }
  ];

  const filteredProjects = selectedCategory === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Proyek & <span className="text-blue-600">Portofolio</span> Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CV Sentosa Teknik Engineering telah menyelesaikan berbagai proyek dalam bidang 
              manufaktur mesin industri dan pabrik kerupuk di berbagai kota di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter Kategori:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Selesai' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.year} • {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Mesin yang Dipasang:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.machines.map((machine, machineIndex) => (
                        <span key={machineIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {machine}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Klien</p>
                      <p className="font-semibold text-gray-900 text-sm">{project.client}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center group-hover:translate-x-1 transform">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Pengerjaan Proyek</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap proyek kami awali dengan analisis kebutuhan, lalu desain mesin sesuai spesifikasi, 
              proses fabrikasi, uji coba, hingga instalasi dan pelatihan operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analisis Kebutuhan</h3>
              <p className="text-gray-600 text-sm">Memahami kebutuhan spesifik dan kapasitas produksi yang diinginkan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Desain Mesin</h3>
              <p className="text-gray-600 text-sm">Pembuatan desain teknis sesuai spesifikasi dan kebutuhan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proses Fabrikasi</h3>
              <p className="text-gray-600 text-sm">Pembuatan mesin dengan material berkualitas tinggi</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uji Coba</h3>
              <p className="text-gray-600 text-sm">Testing menyeluruh untuk memastikan performa optimal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                05
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instalasi & Pelatihan</h3>
              <p className="text-gray-600 text-sm">Instalasi di lokasi dan pelatihan operasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pencapaian Proyek Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Kami bangga dapat menjadi bagian dari perjalanan bisnis para klien kami 
              di berbagai daerah di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <p className="text-blue-100">Proyek Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-blue-100">Klien Puas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <p className="text-blue-100">Kota di Indonesia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-blue-100">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tertarik dengan Proyek Kami?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Diskusikan kebutuhan proyek Anda dengan tim ahli kami. 
            Kami siap membantu mewujudkan pabrik impian Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Konsultasi Proyek
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Kunjungi Workshop
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;