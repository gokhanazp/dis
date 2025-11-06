import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Bar - Sosyal Medya ve İletişim - Elit Tasarım */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center text-sm">
            {/* Sol - İletişim Bilgileri */}
            <div className="flex items-center space-x-8 text-gray-400">
              <a href="tel:+902121234567" className="group flex items-center space-x-2 hover:text-orange-500 transition-all">
                <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} className="text-orange-500 group-hover:scale-110 transition-transform" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                <span className="font-medium">+90 (212) 123 45 67</span>
              </a>
              <a href="mailto:info@bedent.com" className="group flex items-center space-x-2 hover:text-orange-500 transition-all">
                <Image src="/icons/mail.svg" alt="Mail" width={16} height={16} className="text-orange-500 group-hover:scale-110 transition-transform" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                <span className="font-medium">info@bedent.com</span>
              </a>
            </div>
            {/* Sağ - Sosyal Medya İkonları */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 group">
                <Image src="/icons/facebook.svg" alt="Facebook" width={18} height={18} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 group">
                <Image src="/icons/instagram.svg" alt="Instagram" width={18} height={18} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 group">
                <Image src="/icons/twitter.svg" alt="Twitter" width={18} height={18} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 group">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header / Navigation - Logo Ortada, Menüler Yanlarda - Elit Tasarım */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-gray-800/50 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Sol Menü */}
            <div className="flex space-x-1">
              <a href="#anasayfa" className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all font-medium text-base overflow-hidden rounded-lg">
                <span className="relative z-10">Anasayfa</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/20 group-hover:to-yellow-500/20 transition-all"></div>
              </a>
              <a href="#hizmetler" className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all font-medium text-base overflow-hidden rounded-lg">
                <span className="relative z-10">Hizmetlerimiz</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/20 group-hover:to-yellow-500/20 transition-all"></div>
              </a>
            </div>

            {/* Logo Ortada - Büyük ve Parlak */}
            <div className="flex items-center relative group">
              {/* Hafif Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Image
                src="/logo.png"
                alt="BeDent Logo"
                width={320}
                height={240}
                priority
                className="h-28 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Sağ Menü */}
            <div className="flex space-x-1">
              <a href="#hakkimizda" className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all font-medium text-base overflow-hidden rounded-lg">
                <span className="relative z-10">Hakkımızda</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/20 group-hover:to-yellow-500/20 transition-all"></div>
              </a>
              <a href="#hekimlerimiz" className="group relative px-6 py-3 text-gray-300 hover:text-white transition-all font-medium text-base overflow-hidden rounded-lg">
                <span className="relative z-10">Hekimlerimiz</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/20 group-hover:to-yellow-500/20 transition-all"></div>
              </a>
              <a href="#iletisim" className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-base rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 transition-all">
                <span className="relative z-10">Randevu Al</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Ana Bölüm - Elit Tasarım */}
      <section id="anasayfa" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay - Arka Plan Görseli */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/be_klinik-1-1920x1357.jpg"
            alt="BeDent Klinik"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - Koyu gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90"></div>

          {/* Animated Gradient Orbs - Animasyonlu gradient toplar */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content - İçerik */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          {/* Main Heading - Ana Başlık - El Yazısı Stili */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-relaxed" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 600}}>
            <span className="block mb-3">
              iyi bir gülümseme,
            </span>
            <span className="block text-orange-400">
              iyi bir yaşamın başlangıcıdır.
            </span>
          </h1>

          {/* CTA Buttons - Aksiyon Butonları */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="#iletisim"
              className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl shadow-orange-500/50 transition-all transform hover:scale-105 hover:shadow-orange-500/70"
            >
              <span className="relative z-10">Ücretsiz Konsültasyon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#hizmetler"
              className="group px-12 py-5 bg-white/5 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/10 hover:border-orange-500/50 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Hizmetlerimizi Keşfedin</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>

          {/* Stats - İstatistikler */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Mutlu Hasta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                %98
              </div>
              <div className="text-gray-400 text-sm md:text-base">Memnuniyet</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Kaydırma İşareti */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Hizmetler Bölümü - Elit Tasarım */}
      <section id="hizmetler" className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Arka Plan Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">Tedavilerimiz</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Diş Sağlığı
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Hizmetleri
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              En son teknoloji ve uzman kadromuzla, gülüşünüzü mükemmelleştirmek için özel çözümler sunuyoruz
            </p>
          </div>

          {/* Hizmetler Grid - 2x3 (6 Hizmet) */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Dijital Gülüş Tasarımı */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/smile-design.svg" alt="Gülüş Tasarımı" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">DİJİTAL GÜLÜŞ TASARIMI</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gülüş tasarımı, diş hekimliği ile estetik prensiplerini birleştiren bir disiplindir. Bu işlem, bireyin yüz yapısı, dişlerin rengi, şekli, boyutu ve dizilimi gibi faktörleri dikkate alarak kişiye özel bir gülümseme oluşturmayı hedefler
                </p>
              </div>
            </div>

            {/* Diş İmplantları */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/implant.svg" alt="Diş İmplantları" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">DİŞ İMPLANTLARI</h3>
                <p className="text-gray-400 leading-relaxed">
                  Diş implantları, kaybedilen dişlerin yerine yerleştirilen yapay diş kökleridir. Bu implantlar, çene kemiğine veya protez dişin sabit bir şekilde takılmasını sağlar. Diş implantları, sağlam, doğal görünümlü ve işlevsel dişlerin geri kazanılmasına yardımcı olur.
                </p>
              </div>
            </div>

            {/* Kozmetik Diş Hekimliği */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/cosmetic.svg" alt="Kozmetik Diş Hekimliği" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">KOZMETİK DİŞ HEKİMLİĞİ</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gülüşünüzü Güzelleştiren Sanat ; Kozmetik diş hekimliği, dişlerin görünümünü ve estetiğini iyileştirmek için kullanılan bir alan olarak tanımlanabilir.
                </p>
              </div>
            </div>

            {/* Ortodonti */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/orthodontics.svg" alt="Ortodonti" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">ORTODONTİ</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gülüşünüzü Düzeltmek ve Sağlıklı Bir Ağız İçin Doğru Hareket<br/><br/>
                  Ortodonti, diş ve çene bozukluklarını düzeltmek ve sağlıklı bir ağız ortamı oluşturmak için kullanılan bir diş hekimliği dalıdır.
                </p>
              </div>
            </div>

            {/* Pedodonti */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/pedodontics.svg" alt="Pedodonti" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">PEDODONTİ</h3>
                <p className="text-gray-400 leading-relaxed">
                  Pedodonti, çocuk diş hekimliği olarak da bilinen bir diş hekimliği dalıdır. Bu alanda uzmanlaşmış pedodontistler, bebeklerden ergenlere kadar olan çocukların ağız ve diş sağlığı sorunlarını tanımlar, önler ve tedavi eder.
                </p>
              </div>
            </div>

            {/* Diğer Tedaviler */}
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-yellow-500/0 group-hover:from-orange-500/10 group-hover:to-yellow-500/10 rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src="/icons/other-treatments.svg" alt="Diğer Tedaviler" width={80} height={80} className="text-orange-500 group-hover:scale-110 transition-transform duration-500" style={{filter: 'invert(58%) sepia(85%) saturate(2000%) hue-rotate(0deg) brightness(100%) contrast(101%)'}} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">DİĞER TEDAVİLER</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tüm diş tedavilerimizi öğrenmek ve bilgi almak için buradan ulaşabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diş Sağlığı Neden Önemli - Why Dental Health Matters */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Arka Plan Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">Sağlık</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Diş Sağlığı
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Neden Önemli?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Diş sağlığınız, genel sağlığınızın ve yaşam kalitenizin ayrılmaz bir parçasıdır
            </p>
          </div>

          {/* İçerik Grid - Görsel + Bilgi Kartları */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Görsel */}
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-800 group-hover:border-orange-500/50 transition-all duration-500">
                <Image
                  src="http://www.dentbe.com/wp-content/uploads/2023/07/ag%CC%86rili-kadin.png"
                  alt="Diş Sağlığı"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Dekoratif Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/30 pointer-events-none"></div>
            </div>

            {/* Sağ Taraf - Bilgi Kartları */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Diş ve Diş Eti Hastalıklarının Önlenmesi',
                  description: 'Düzenli diş bakımı, çürük, diş eti hastalıkları ve diş kaybını önler. Erken teşhis ve tedavi ile ciddi problemlerin önüne geçilir.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 10H17M7 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'Beslenme ve Sindirim',
                  description: 'Sağlıklı dişler, besinleri düzgün çiğnemenizi sağlar. Bu da sindirim sisteminin daha verimli çalışmasına yardımcı olur.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12C8 12 9.5 14 12 14C14.5 14 16 12 16 12M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Konuşma Yeteneği',
                  description: 'Dişleriniz, net ve anlaşılır konuşmanız için kritik öneme sahiptir. Diş eksikliği veya problemleri konuşmayı zorlaştırabilir.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Genel Sağlık İlişkisi',
                  description: 'Ağız sağlığı, kalp hastalıkları, diyabet ve diğer sistemik hastalıklarla doğrudan bağlantılıdır. Sağlıklı dişler, sağlıklı vücut demektir.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Estetik Görünüm',
                  description: 'Güzel bir gülümseme, özgüveninizi artırır ve sosyal ilişkilerinizi olumlu etkiler. Sağlıklı dişler, yüz estetiğinin temelidir.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group/card relative p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 hover:scale-105"
                >
                  {/* İkon */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white group-hover/card:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>

                    {/* İçerik */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-orange-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 shadow-xl shadow-orange-500/20 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smile Gallery - Gülüş Galerisi - Elit Tasarım */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Arka Plan Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">Galeri</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Gülüş
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Dönüşümleri
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Mutlu hastalarımızın hayatlarını değiştiren gülüş tasarımları
            </p>
          </div>

          {/* Gallery Grid - Tedavi Görselleri */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://dentince.com/uploads/wp-content/uploads/2021/03/estetik-gulus-tasarimi-1.jpg',
                title: 'Gülüş Tasarımı',
                treatment: 'Hollywood Smile - Dijital Tasarım'
              },
              {
                image: 'https://www.dentaklinik.com.tr/wp-content/uploads/2019/05/Di%C5%9F-Beyazlatma.jpg',
                title: 'Diş Beyazlatma',
                treatment: 'Lazer Beyazlatma - 8 Ton Açılma'
              },
              {
                image: 'https://www.emident.com.tr/wp-content/uploads/2018/03/zikronyum-implant-tedavisi.jpg',
                title: 'Zirkonyum Kaplama',
                treatment: 'Full Zirkonyum - Doğal Estetik'
              },
              {
                image: 'https://www.dentakademi.com.tr/wp-content/uploads/2025/02/1-gunde-implant-1170x694.webp',
                title: 'İmplant Tedavisi',
                treatment: 'Tek Seansta İmplant - Hemen Yükleme'
              },
              {
                image: 'https://kutayortodonticom.b-cdn.net/wp-content/uploads/2024/06/porselen-lamina-ne-kadar-surer.jpg',
                title: 'Lamina Veneer',
                treatment: 'Ultra İnce Porselen - Minimal Aşındırma'
              },
              {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpokmqxa1XQ3c_g-oakGnQI9zcvW-DLe9sQ&s',
                title: 'Ortodonti',
                treatment: 'Şeffaf Plak - Görünmez Tedavi'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gray-900 hover:scale-105"
              >
                {/* Tedavi Görseli */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Bilgi Kartı */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.treatment}</p>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/50 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a
              href="#iletisim"
              className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all transform hover:scale-105"
            >
              Daha Fazla Göster
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Hakkımızda Bölümü - Yeni Tasarım */}
      <section id="hakkimizda" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Arka Plan Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-40 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">Hakkımızda</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              BeDent
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Diş Kliniği
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Modern teknoloji ve uzman kadromuzla, sağlıklı ve güzel gülüşler için yanınızdayız
            </p>
          </div>

          {/* Ana İçerik Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Sol Taraf - Klinik Görseli */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-800 group-hover:border-orange-500/50 transition-all duration-500">
                <Image
                  src="/be_klinik-1-1920x1357.jpg"
                  alt="BeDent Diş Kliniği"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Klinik Bilgi Kartı - Görsel Üzerinde */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">15+</div>
                      <div className="text-gray-300 text-sm mt-1">Yıl Deneyim</div>
                    </div>
                    <div className="text-center border-x border-gray-700">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">10K+</div>
                      <div className="text-gray-300 text-sm mt-1">Mutlu Hasta</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">%98</div>
                      <div className="text-gray-300 text-sm mt-1">Memnuniyet</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dekoratif Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/30 pointer-events-none"></div>
            </div>

            {/* Sağ Taraf - Bilgi ve Özellikler */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Misyon Metni */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">
                  Gülüşünüz, Bizim
                  <span className="text-orange-500"> Önceliğimiz</span>
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  BeDent olarak, diş sağlığı alanında yılların deneyimi ve modern teknolojinin gücünü bir araya getiriyoruz.
                  Her hastamıza özel, kaliteli ve güvenilir diş sağlığı hizmetleri sunarak, sağlıklı ve güzel gülüşlere
                  kavuşmalarını sağlamak bizim misyonumuz.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Uzman kadromuz ve son teknoloji ekipmanlarımızla, diş sağlığınız için en iyi çözümleri sunuyoruz.
                  Rahat ve konforlu klinik ortamımızda, güvenle tedavi olabilirsiniz.
                </p>
              </div>

              {/* Özellikler - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: 'Uzman Kadro',
                    description: 'Deneyimli diş hekimleri'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: 'Modern Teknoloji',
                    description: 'Son teknoloji ekipman'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: 'Sterilizasyon',
                    description: 'Hijyen standartları'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M8 12C8 12 9.5 14 12 14C14.5 14 16 12 16 12M15 9H15.01M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    title: 'Konforlu Ortam',
                    description: 'Rahat klinik atmosferi'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group/feature relative p-5 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80"
                  >
                    {/* İkon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white mb-3 group-hover/feature:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>

                    {/* İçerik */}
                    <h4 className="text-base font-bold text-white mb-1 group-hover/feature:text-orange-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>

                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 shadow-lg shadow-orange-500/20 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all transform hover:scale-105"
                >
                  <span>Randevu Al</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Alt Kısım - Değerlerimiz / Vizyonumuz */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Misyonumuz',
                description: 'Her hastamıza özel, kaliteli ve güvenilir diş sağlığı hizmetleri sunarak, sağlıklı ve güzel gülüşlere kavuşmalarını sağlamak.'
              },
              {
                icon: '👁️',
                title: 'Vizyonumuz',
                description: 'Diş sağlığı alanında öncü ve tercih edilen klinik olmak, en yüksek standartlarda hizmet sunmak.'
              },
              {
                icon: '💎',
                title: 'Değerlerimiz',
                description: 'Güven, kalite, şeffaflık ve hasta memnuniyeti odaklı çalışma prensipleri ile hareket ediyoruz.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:scale-105"
              >
                {/* İkon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                {/* İçerik */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl shadow-orange-500/20 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section - Hekimlerimiz Bölümü */}
      <section id="hekimlerimiz" className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Arka Plan Dekoratif Elementler */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Başlık */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">Ekibimiz</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Uzman
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Hekimlerimiz
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Alanında uzman, deneyimli ve güler yüzlü hekimlerimizle tanışın
            </p>
          </div>

          {/* Hekimler Grid - 3 Sütun */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Dr. Ahmet Yılmaz',
                title: 'Baş Hekim',
                specialty: 'Estetik Diş Hekimliği',
                experience: '15+ Yıl Deneyim',
                education: 'İstanbul Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder - gerçek hekim fotoğrafı eklenecek
                description: 'Gülüş tasarımı ve estetik diş hekimliği alanında uzman',
                icon: '👨‍⚕️'
              },
              {
                name: 'Dr. Ayşe Demir',
                title: 'Ortodonti Uzmanı',
                specialty: 'Ortodonti',
                experience: '12+ Yıl Deneyim',
                education: 'Hacettepe Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder
                description: 'Şeffaf plak ve tel tedavileri konusunda uzman',
                icon: '👩‍⚕️'
              },
              {
                name: 'Dr. Mehmet Kaya',
                title: 'İmplant Uzmanı',
                specialty: 'İmplantoloji',
                experience: '10+ Yıl Deneyim',
                education: 'Ankara Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder
                description: 'İmplant cerrahisi ve kemik grefti uygulamaları',
                icon: '👨‍⚕️'
              },
              {
                name: 'Dr. Zeynep Arslan',
                title: 'Pedodonti Uzmanı',
                specialty: 'Çocuk Diş Hekimliği',
                experience: '8+ Yıl Deneyim',
                education: 'Ege Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder
                description: 'Çocuk diş sağlığı ve koruyucu tedaviler',
                icon: '👩‍⚕️'
              },
              {
                name: 'Dr. Can Öztürk',
                title: 'Endodonti Uzmanı',
                specialty: 'Kanal Tedavisi',
                experience: '11+ Yıl Deneyim',
                education: 'Marmara Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder
                description: 'Mikroskop altında kanal tedavisi uzmanı',
                icon: '👨‍⚕️'
              },
              {
                name: 'Dr. Elif Şahin',
                title: 'Periodontoloji Uzmanı',
                specialty: 'Diş Eti Hastalıkları',
                experience: '9+ Yıl Deneyim',
                education: 'Gazi Üniversitesi',
                image: '/be_klinik-1-1920x1357.jpg', // Placeholder
                description: 'Diş eti tedavileri ve estetik pembe estetik',
                icon: '👩‍⚕️'
              }
            ].map((doctor, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
              >
                {/* Hekim Fotoğrafı */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* İkon Badge - Sol Üst */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {doctor.icon}
                  </div>

                  {/* Deneyim Badge - Sağ Üst */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/30">
                    <span className="text-orange-500 text-sm font-semibold">{doctor.experience}</span>
                  </div>
                </div>

                {/* Hekim Bilgileri */}
                <div className="p-6 space-y-3">
                  {/* İsim ve Ünvan */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-orange-500 font-semibold text-sm">
                      {doctor.title}
                    </p>
                  </div>

                  {/* Uzmanlık Alanı */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{doctor.specialty}</span>
                  </div>

                  {/* Eğitim */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">{doctor.education}</span>
                  </div>

                  {/* Açıklama */}
                  <p className="text-gray-400 text-sm leading-relaxed pt-2 border-t border-gray-700">
                    {doctor.description}
                  </p>

                  {/* Randevu Butonu */}
                  <a
                    href="#iletisim"
                    className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center rounded-full font-semibold text-sm shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
                  >
                    Randevu Al
                  </a>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/30 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Alt Bilgi - Ekip Özellikleri */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Uzman Kadro',
                description: 'Alanında uzman hekimler'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Sürekli Eğitim',
                description: 'Güncel tedavi yöntemleri'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Ekip Çalışması',
                description: 'Multidisipliner yaklaşım'
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Hasta Odaklı',
                description: 'Kişiye özel tedavi planı'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm hover:scale-105 text-center"
              >
                {/* İkon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>

                {/* İçerik */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-orange-500/20 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - İletişim Bölümü */}
      <section id="iletisim" className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-sm font-semibold tracking-[0.3em] uppercase">İletişim</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bizimle
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Size en kısa sürede dönüş yapalım. Randevu almak veya bilgi almak için formu doldurun.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards - İletişim Bilgileri */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="group relative p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">Adres</h3>
                    <p className="text-gray-400 leading-relaxed">Merkez Mahallesi, Sağlık Caddesi No:123<br />Şişli, İstanbul, Türkiye</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/20 pointer-events-none"></div>
              </div>

              {/* Phone Card */}
              <div className="group relative p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9203 21 20.9203H18C8.61116 20.9203 1 13.3091 1 3.92029V1.92029C1 1.36758 1.44772 0.920288 2 0.920288H5C5.55228 0.920288 6 1.36758 6 1.92029V5.92029C6 6.47258 5.55228 6.92029 5 6.92029H4C4 12.4431 8.47715 16.9203 14 16.9203V15.9203C14 15.368 14.4477 14.9203 15 14.9203H19C19.5523 14.9203 20 15.368 20 15.9203V16.9203C20 16.9203 21.4477 16.9203 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">Telefon</h3>
                    <a href="tel:+902121234567" className="text-gray-400 hover:text-orange-500 transition-colors text-lg">+90 (212) 123 45 67</a>
                    <p className="text-gray-500 text-sm mt-2">7/24 Acil Hizmet</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/20 pointer-events-none"></div>
              </div>

              {/* Email Card */}
              <div className="group relative p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">E-posta</h3>
                    <a href="mailto:info@bedent.com" className="text-gray-400 hover:text-orange-500 transition-colors text-lg">info@bedent.com</a>
                    <p className="text-gray-500 text-sm mt-2">24 saat içinde yanıt</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/20 pointer-events-none"></div>
              </div>

              {/* Working Hours Card */}
              <div className="group relative p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">Çalışma Saatleri</h3>
                    <div className="space-y-2 text-gray-400">
                      <p className="flex justify-between"><span>Pazartesi - Cuma:</span> <span className="text-white font-semibold">09:00 - 19:00</span></p>
                      <p className="flex justify-between"><span>Cumartesi:</span> <span className="text-white font-semibold">09:00 - 17:00</span></p>
                      <p className="flex justify-between"><span>Pazar:</span> <span className="text-orange-500 font-semibold">Kapalı</span></p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-500/20 pointer-events-none"></div>
              </div>
            </div>

            {/* Contact Form - İletişim Formu */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative p-10 rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm shadow-2xl">
                  {/* Form Header */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-3">Randevu Formu</h3>
                    <p className="text-gray-400">Formu doldurun, size en kısa sürede dönelim</p>
                  </div>

                  <form className="space-y-6">
                    {/* Name Input */}
                    <div className="group">
                      <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-orange-500 transition-colors">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-900/80 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="group">
                      <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-orange-500 transition-colors">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-900/80 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all"
                        placeholder="0 (5XX) XXX XX XX"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="group">
                      <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-orange-500 transition-colors">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-5 py-4 rounded-xl bg-gray-900/80 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="group">
                      <label className="block text-gray-300 font-semibold mb-3 group-focus-within:text-orange-500 transition-colors">
                        Mesajınız
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl bg-gray-900/80 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all resize-none"
                        placeholder="Tedavi hakkında bilgi almak istiyorum..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-5 rounded-xl font-bold text-lg overflow-hidden shadow-2xl shadow-orange-500/50 transition-all transform hover:scale-105 hover:shadow-orange-500/70"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Randevu Talebi Gönder
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      * Zorunlu alanlar
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Alt Bilgi */}
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(249 115 22) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Logo & Description */}
              <div className="lg:col-span-1">
                <Image
                  src="/logo.png"
                  alt="BeDent Logo"
                  width={240}
                  height={180}
                  className="h-20 w-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Sağlıklı gülüşler için profesyonel diş sağlığı hizmetleri. Modern teknoloji ve uzman kadromuzla yanınızdayız.
                </p>
                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a href="#" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 border border-gray-800 hover:border-transparent">
                    <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
                  </a>
                  <a href="#" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 border border-gray-800 hover:border-transparent">
                    <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
                  </a>
                  <a href="#" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 border border-gray-800 hover:border-transparent">
                    <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
                  </a>
                  <a href="#" className="group w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500 transition-all transform hover:scale-110 border border-gray-800 hover:border-transparent">
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="opacity-60 group-hover:opacity-100 transition-opacity" style={{filter: 'invert(100%)'}} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Hızlı Linkler</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#anasayfa" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Anasayfa
                    </a>
                  </li>
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Hizmetlerimiz
                    </a>
                  </li>
                  <li>
                    <a href="#hakkimizda" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="#hekimlerimiz" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Hekimlerimiz
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Hizmetlerimiz</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Gülüş Tasarımı
                    </a>
                  </li>
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Diş İmplantları
                    </a>
                  </li>
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Ortodonti
                    </a>
                  </li>
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Kozmetik Diş Hekimliği
                    </a>
                  </li>
                  <li>
                    <a href="#hizmetler" className="group flex items-center text-gray-400 hover:text-orange-500 transition-colors">
                      <span className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      Pedodonti
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">İletişim Bilgileri</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                    </svg>
                    <span className="text-gray-400 text-sm leading-relaxed">Merkez Mah. Sağlık Cad. No:123<br />Şişli, İstanbul</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92V19.92C22 20.4728 21.5523 20.9203 21 20.9203H18C8.61116 20.9203 1 13.3091 1 3.92029V1.92029C1 1.36758 1.44772 0.920288 2 0.920288H5C5.55228 0.920288 6 1.36758 6 1.92029V5.92029C6 6.47258 5.55228 6.92029 5 6.92029H4C4 12.4431 8.47715 16.9203 14 16.9203V15.9203C14 15.368 14.4477 14.9203 15 14.9203H19C19.5523 14.9203 20 15.368 20 15.9203V16.9203C20 16.9203 21.4477 16.9203 22 16.92Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a href="tel:+902121234567" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">+90 (212) 123 45 67</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a href="mailto:info@bedent.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">info@bedent.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  &copy; 2024 <span className="text-orange-500 font-semibold">BeDent</span>. Tüm hakları saklıdır.
                </p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Gizlilik Politikası</a>
                  <span className="text-gray-700">|</span>
                  <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">Kullanım Koşulları</a>
                  <span className="text-gray-700">|</span>
                  <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">KVKK</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
