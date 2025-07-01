import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Cpu, Truck, Hammer, Award, Users, Wrench, Factory, Settings, Cog } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Shield, label: 'Tahun Pengalaman', value: '10+' },
    { icon: Award, label: 'Proyek Selesai', value: '100+' },
    { icon: Users, label: 'Klien Puas', value: '50+' },
  ];

  const featuredServices = [
    {
      icon: Wrench,
      title: 'Jasa Perbengkelan',
      description: 'Layanan perbengkelan, pengelasan, pemotongan logam, dan reparasi alat industri.'
    },
    {
      icon: Factory,
      title: 'Mesin Industri Makanan',
      description: 'Produksi mesin untuk kerupuk, snack, makaroni dan makanan ringan lainnya.'
    },
    {
      icon: Settings,
      title: 'Konsultasi Pabrik',
      description: 'Konsultasi lengkap dari perencanaan hingga instalasi pabrik kerupuk.'
    }
  ];

  const machines = [
    {
      name: 'Forming Machine',
      description: 'Digunakan untuk mencetak adonan kerupuk secara otomatis dan presisi.',
      icon: Cog
    },
    {
      name: 'Mixer',
      description: 'Mesin pengaduk adonan yang kuat dan merata.',
      icon: Settings
    },
    {
      name: 'Slicer',
      description: 'Mesin pemotong kerupuk atau makanan ringan lainnya dalam bentuk seragam.',
      icon: Hammer
    },
    {
      name: 'Boiler',
      description: 'Sumber uap utama untuk proses produksi yang memerlukan pemanasan.',
      icon: Zap
    },
    {
      name: 'Dryer',
      description: 'Untuk mengurangi kadar air dari produk agar lebih tahan lama.',
      icon: Shield
    },
    {
      name: 'Extruder',
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
      name: 'Mesin Peniris Minyak',
      description: 'Mengurangi kadar minyak secara efisien pasca penggorengan.',
      icon: Cog
    },
    {
      name: 'Mesin Penggoreng Kerupuk Pasir',
      description: 'Sistem penggorengan dengan pasir panas yang merata dan hemat energi.',
      icon: Zap
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Selamat Datang di
                  <span className="text-blue-600 block">CV Sentosa Teknik</span>
                  <span className="text-gray-700">Engineering</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Perusahaan jasa perbengkelan dan manufaktur mesin yang berkomitmen 
                  menyediakan solusi terbaik untuk kebutuhan industri makanan ringan 
                  seperti kerupuk, snack, makaroni, dan lainnya.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  Lihat Produk Kami
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm inline-block mb-2">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Workshop CV Sentosa Teknik"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">Lokal</div>
                  <div className="text-sm">Berkualitas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wujud Nyata Dedikasi & Inovasi</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dalam era industri modern, kami hadir untuk membantu para pelaku usaha dalam 
              meningkatkan kapasitas produksi, efisiensi kerja, dan kualitas hasil produk 
              dengan menghadirkan mesin-mesin buatan lokal berkualitas tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1 transform">
                  Pelajari Lebih Lanjut →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mesin Unggulan Kami</h2>
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
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami terhadap keunggulan dan inovasi menjadikan kami 
              mitra strategis dalam pengembangan usaha Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Produk Lokal</h3>
              <p className="text-gray-600">Mesin buatan lokal berkualitas tinggi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Harga Kompetitif</h3>
              <p className="text-gray-600">Kualitas tinggi dengan harga terjangkau</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Layanan Lengkap</h3>
              <p className="text-gray-600">Dari konsultasi hingga instalasi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h3>
              <p className="text-gray-600">Mesin sesuai kebutuhan spesifik Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kunjungi Workshop Kami
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Temukan bagaimana CV Sentosa Teknik Engineering dapat menjadi mitra strategis 
            dalam pengembangan usaha Anda. Konsultasi gratis tersedia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;