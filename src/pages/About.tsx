import { Target, Eye, Award, Users, Cog, Lightbulb, Factory } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Integritas',
      description: 'Komitmen terhadap kejujuran dan transparansi dalam setiap aspek bisnis.'
    },
    {
      icon: Lightbulb,
      title: 'Inovasi',
      description: 'Terus mengembangkan teknologi dan solusi terdepan untuk industri.'
    },
    {
      icon: Users,
      title: 'Kepercayaan Pelanggan',
      description: 'Membangun hubungan jangka panjang berdasarkan kepercayaan dan kualitas.'
    },
    {
      icon: Award,
      title: 'Kualitas Tinggi',
      description: 'Mengutamakan standar kualitas tinggi dalam setiap produk dan layanan.'
    },
  ];

  const missions = [
    'Mengembangkan mesin-mesin industri berkualitas tinggi dengan harga kompetitif',
    'Memberikan layanan konsultasi dan solusi teknis sesuai kebutuhan industri',
    'Membantu para pelaku UMKM hingga industri besar dalam proses otomasi produksi',
    'Membangun relasi jangka panjang dengan mitra melalui layanan yang profesional dan responsif'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-blue-600">CV Sentosa Teknik</span> Engineering
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Perusahaan lokal yang bergerak di bidang Jasa Perbengkelan dan Pembuatan Mesin Industri, 
              khususnya mesin-mesin yang digunakan dalam produksi kerupuk, snack, dan makanan ringan lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Semangat Kemandirian Anak Bangsa</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Didirikan dengan semangat kemandirian dan kreativitas anak bangsa, kami telah melayani 
                berbagai mitra industri dari skala kecil (UMKM) hingga menengah-besar di berbagai daerah 
                di Indonesia.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Produk dan layanan kami diciptakan berdasarkan kebutuhan riil di lapangan serta disesuaikan 
                dengan kapasitas produksi yang dibutuhkan. Setiap proyek yang kami tangani selalu diawali 
                dengan komunikasi yang baik dan pendekatan berbasis kebutuhan.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fokus Industri Makanan</h3>
                  <p className="text-gray-600">Spesialisasi mesin kerupuk, snack, dan makanan ringan</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/13.jpg"
                alt="Workshop CV Sentosa Teknik"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Visi Kami</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Menjadi perusahaan penyedia jasa teknik dan manufaktur mesin industri terpercaya 
                    di Indonesia yang mendukung pertumbuhan industri lokal berbasis teknologi.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Misi Kami</h2>
                </div>
                <div className="space-y-4">
                  {missions.map((mission, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami percaya bahwa kunci keberhasilan adalah integritas, inovasi, dan kepercayaan pelanggan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jangkauan Layanan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Melayani berbagai mitra industri dari skala UMKM hingga industri besar 
              di seluruh Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UMKM</h3>
              <p className="text-gray-600">Mendukung usaha kecil menengah dengan solusi mesin yang terjangkau</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industri Menengah</h3>
              <p className="text-gray-600">Solusi otomasi untuk meningkatkan kapasitas produksi</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cog className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industri Besar</h3>
              <p className="text-gray-600">Sistem produksi skala besar dengan teknologi terdepan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Angka-angka yang menunjukkan dedikasi dan komitmen kami dalam 
              memberikan layanan terbaik untuk industri makanan Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-blue-100">Tahun Pengalaman</p>
            </div>
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
              <p className="text-blue-100">Jenis Mesin</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;