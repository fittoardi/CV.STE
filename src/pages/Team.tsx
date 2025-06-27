import { Linkedin, Mail, Award, GraduationCap, Briefcase, Users, Wrench, Settings, Calculator } from 'lucide-react';

const Team = () => {
  const teamStructure = [
    {
      position: 'Kepala Produksi',
      name: 'Ir. Nursio Puji Santoso',
      responsibility: 'Bertanggung jawab atas keseluruhan proses produksi & quality control.',
      image: 'https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Settings,
      experience: '15+ tahun',
      specialization: 'Production Management & Quality Control'
    },
    {
      position: 'Desainer Teknik & CAD Engineer',
      name: 'Sari Wijayanti, S.T.',
      responsibility: 'Membuat rancangan mesin sesuai permintaan dengan teknologi CAD terkini.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Calculator,
      experience: '10+ tahun',
      specialization: 'CAD Design & Technical Drawing'
    },
    {
      position: 'Teknisi Las & Fabrikasi',
      name: 'Agus Prasetyo',
      responsibility: 'Mengerjakan perakitan dan pembangunan mesin dengan keahlian las profesional.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Wrench,
      experience: '12+ tahun',
      specialization: 'Welding & Machine Fabrication'
    },
    {
      position: 'Staf Administrasi & Keuangan',
      name: 'Maya Sari, S.E.',
      responsibility: 'Mengatur kebutuhan administrasi & dokumentasi proyek.',
      image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Briefcase,
      experience: '8+ tahun',
      specialization: 'Administration & Financial Management'
    },
    {
      position: 'Tim Customer Service & Pemasaran',
      name: 'Dedi Kurniawan',
      responsibility: 'Siap membantu Anda untuk konsultasi dan pembelian produk.',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      experience: '6+ tahun',
      specialization: 'Customer Relations & Marketing'
    }
  ];

  const companyValues = [
    {
      title: 'Tim Profesional',
      description: 'Tim yang solid, berpengalaman, dan terus berkembang dalam bidang teknik mesin.',
      stat: '5+'
    },
    {
      title: 'Pengalaman Gabungan',
      description: 'Lebih dari 50 tahun pengalaman gabungan dalam industri manufaktur mesin.',
      stat: '50+'
    },
    {
      title: 'Proyek Sukses',
      description: 'Tingkat keberhasilan proyek 100% dengan kepuasan klien yang terjamin.',
      stat: '100%'
    }
  ];

  const collaborations = [
    {
      title: 'Mahasiswa Magang',
      description: 'Membuka kesempatan magang untuk mahasiswa teknik mesin dan industri.',
      icon: GraduationCap
    },
    {
      title: 'Praktisi Teknik',
      description: 'Kolaborasi dengan praktisi teknik berpengalaman untuk proyek khusus.',
      icon: Award
    },
    {
      title: 'Mitra Bisnis',
      description: 'Kemitraan strategis untuk mendorong inovasi industri lokal.',
      icon: Users
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tim <span className="text-blue-600">Profesional</span> & Ahli Teknik
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kami percaya bahwa keberhasilan perusahaan sangat ditentukan oleh kualitas sumber daya manusianya. 
              CV Sentosa Teknik Engineering dibangun oleh tim yang solid, berpengalaman, dan terus berkembang.
            </p>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Struktur Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap anggota tim memiliki keahlian khusus dan pengalaman yang mendalam 
              di bidangnya masing-masing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamStructure.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                        <Linkedin className="h-4 w-4 text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg hover:bg-white/30 transition-colors">
                        <Mail className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <member.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium text-sm">{member.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.responsibility}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      {member.experience}
                    </div>
                    <div className="flex items-start space-x-2">
                      <Briefcase className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Spesialisasi</p>
                        <p className="text-sm text-gray-700">{member.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kekuatan Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kombinasi keahlian, pengalaman, dan dedikasi yang menjadikan kami 
              partner terpercaya untuk proyek industri makanan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4">{value.stat}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kolaborasi & Kemitraan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami terbuka terhadap kolaborasi dengan berbagai pihak untuk bersama-sama 
              mendorong inovasi industri lokal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <collab.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{collab.title}</h3>
                <p className="text-gray-600">{collab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Komitmen Kepemimpinan</h2>
                <blockquote className="text-lg text-blue-100 italic mb-6">
                  "Tim kami adalah kekuatan utama perusahaan. Dengan kombinasi keahlian teknis, 
                  pengalaman industri, dan komitmen terhadap kualitas, kami siap menghadapi 
                  tantangan industri makanan dan memberikan solusi mesin terbaik untuk klien."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Kepala Produksi"
                    className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="font-semibold text-white">Ir. Nursio Puji Santoso</p>
                    <p className="text-blue-200">Kepala Produksi</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tim Workshop"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Siap Bekerja dengan Tim Ahli Kami?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hubungi kami untuk konsultasi dengan para ahli dan dapatkan solusi 
            mesin industri makanan terbaik untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Konsultasi dengan Tim
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

export default Team;