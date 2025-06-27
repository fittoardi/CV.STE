import { Wrench, Cog, Factory, Settings, Shield, Zap, CheckCircle, Hammer, Cpu, Truck } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: 'Jasa Perbengkelan & Fabrikasi Mesin',
      description: 'Layanan lengkap perbengkelan, pengelasan, pemotongan logam, perakitan, dan reparasi alat-alat berat dan ringan.',
      features: ['Pengelasan Profesional', 'Pemotongan Logam Presisi', 'Perakitan Mesin', 'Reparasi Alat Industri'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Factory,
      title: 'Produksi Mesin Industri Makanan Ringan',
      description: 'Spesialisasi pembuatan mesin untuk industri kerupuk, snack, makaroni dan makanan ringan lainnya.',
      features: ['Mesin Custom Design', 'Kualitas Tinggi', 'Harga Kompetitif', 'Garansi Resmi'],
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Settings,
      title: 'Konsultasi & Rancang Bangun Pabrik',
      description: 'Layanan konsultasi menyeluruh dari perencanaan desain layout pabrik hingga instalasi dan pelatihan.',
      features: ['Desain Layout Pabrik', 'Pemilihan Mesin Optimal', 'Instalasi Profesional', 'Pelatihan Operasional'],
      image: 'https://images.pexels.com/photos/3785933/pexels-photo-3785933.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const machines = [
    {
      name: 'Forming Machine (Mesin Pencetak Kerupuk)',
      description: 'Digunakan untuk mencetak adonan kerupuk secara otomatis dan presisi.',
      icon: Cog
    },
    {
      name: 'Mixer/Molen Adonan',
      description: 'Mesin pengaduk adonan yang kuat dan merata.',
      icon: Settings
    },
    {
      name: 'Slicer (Mesin Pemotong)',
      description: 'Mesin pemotong kerupuk atau makanan ringan lainnya dalam bentuk seragam.',
      icon: Hammer
    },
    {
      name: 'Boiler (Ketel Uap)',
      description: 'Sumber uap utama untuk proses produksi yang memerlukan pemanasan.',
      icon: Zap
    },
    {
      name: 'Dryer (Mesin Pengering)',
      description: 'Untuk mengurangi kadar air dari produk agar lebih tahan lama.',
      icon: Shield
    },
    {
      name: 'Extruder (Mesin Snack)',
      description: 'Mesin pembentuk snack dengan berbagai varian bentuk dan ukuran.',
      icon: Cpu
    },
    {
      name: 'Mesin Makaroni',
      description: 'Produksi makaroni dengan kualitas baik untuk industri rumahan dan pabrik.',
      icon: Factory
    },
    {
      name: 'Mesin Screw dan Conveyor',
      description: 'Untuk mendistribusikan bahan antar proses.',
      icon: Truck
    },
    {
      name: 'Mesin Pengaduk Bumbu',
      description: 'Menjamin distribusi bumbu yang merata pada produk.',
      icon: Settings
    },
    {
      name: 'Mesin Peniris Minyak (Spinner)',
      description: 'Mengurangi kadar minyak secara efisien pasca penggorengan.',
      icon: Cog
    },
    {
      name: 'Mesin Penggoreng Kerupuk Pasir',
      description: 'Sistem penggorengan dengan pasir panas yang merata dan hemat energi.',
      icon: Zap
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analisis Kebutuhan',
      description: 'Diskusi mendalam tentang kebutuhan produksi dan spesifikasi mesin yang diinginkan.'
    },
    {
      step: '02',
      title: 'Desain Mesin',
      description: 'Pembuatan desain mesin sesuai spesifikasi dengan teknologi CAD terkini.'
    },
    {
      step: '03',
      title: 'Proses Fabrikasi',
      description: 'Pembuatan mesin dengan material berkualitas dan teknisi berpengalaman.'
    },
    {
      step: '04',
      title: 'Uji Coba & Testing',
      description: 'Pengujian menyeluruh untuk memastikan performa optimal sebelum pengiriman.'
    },
    {
      step: '05',
      title: 'Instalasi & Pelatihan',
      description: 'Instalasi di lokasi dan pelatihan operasional untuk tim Anda.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Layanan & Produk <span className="text-blue-600">Unggulan</span> Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              CV Sentosa Teknik Engineering menghadirkan berbagai jenis layanan dan produk mesin industri 
              yang dirancang untuk meningkatkan efisiensi, kecepatan, dan kualitas dalam proses produksi makanan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Utama Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga pilar utama layanan yang menjadi keunggulan CV Sentosa Teknik Engineering.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Konsultasi Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Katalog Mesin Industri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis mesin industri makanan ringan yang telah terbukti 
              meningkatkan produktivitas dan kualitas produksi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <machine.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{machine.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{machine.description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  Detail Spesifikasi →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proses Kerja Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap proyek kami awali dengan analisis kebutuhan hingga instalasi dan pelatihan operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Spesialisasi Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fokus utama kami adalah pada pembuatan mesin untuk industri kerupuk dan snack, 
              namun kami juga terbuka untuk proyek khusus sesuai kebutuhan pelanggan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Industri Kerupuk</h3>
              <p className="text-blue-100">Mesin lengkap untuk produksi kerupuk dari adonan hingga packaging</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Cog className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Makanan Ringan</h3>
              <p className="text-blue-100">Solusi mesin untuk berbagai jenis snack dan makanan ringan</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Project</h3>
              <p className="text-blue-100">Proyek khusus sesuai kebutuhan spesifik industri Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Siap Meningkatkan Produksi Anda?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hubungi tim ahli kami untuk konsultasi gratis dan dapatkan solusi mesin 
            yang tepat untuk kebutuhan industri makanan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Konsultasi Gratis
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Download Katalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;