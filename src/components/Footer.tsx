import { Wrench, MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Layanan & Produk', href: '/services' },
    { name: 'Proyek', href: '/projects' },
    { name: 'Tim', href: '/team' },
    { name: 'Kontak', href: '/contact' }
  ];

  const products = [
    'Forming Machine (Pencetak Kerupuk)',
    'Mixer/Molen Adonan',
    'Slicer (Pemotong)',
    'Boiler (Ketel Uap)',
    'Dryer (Pengering)',
    'Extruder (Snack)',
    'Mesin Makaroni',
    'Konsultasi Pabrik'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CV Sentosa Teknik</h1>
                <p className="text-sm text-gray-400">Engineering Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Perusahaan jasa perbengkelan dan manufaktur mesin industri makanan ringan 
              yang berkomitmen menyediakan solusi terbaik dengan produk lokal berkualitas tinggi.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Produk Kami</h3>
            <ul className="space-y-3">
              {products.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>JL. Raya Tlasih, No. 124, Tulungan, Tlasih Satu, Tlasih,</p>
                  <p>Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61273</p>
                  <p>Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div className="text-gray-300 text-sm">
                  <p>WhatsApp: +62856-8543-495</p>
                  <p>Telp: (031)8850646</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div className="text-gray-300 text-sm">
                  <p>sentosateknik@gmail.com</p>
                </div>
              </div>

              <div className="bg-blue-600/20 p-3 rounded-lg">
                <p className="text-blue-200 text-xs">
                  <strong>Jam Operasional:</strong><br />
                  Senin - Sabtu: 08.00 - 17.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CV Sentosa Teknik Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Katalog Produk</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;