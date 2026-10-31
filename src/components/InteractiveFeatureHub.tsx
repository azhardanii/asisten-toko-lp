import { useState } from 'react'

export type FeatureKey =
  | 'scan_ai'
  | 'scan_barcode'
  | 'manual_input'
  | 'laporan'
  | 'produk'
  | 'kasbon_wa'
  | 'tim_shift'
  | 'opname'
  | 'struk_offline'

interface FeatureDetailData {
  id: FeatureKey
  badge: string
  title: string
  subtitle: string
  problemText: string
  solutionText: string
  benefits: string[]
}

const FEATURE_DATA: Record<FeatureKey, FeatureDetailData> = {
  scan_ai: {
    id: 'scan_ai',
    badge: '📸 Fitur Paling Disukai · Scan AI',
    title: 'Barang Gak Ada Barcode? Arahkan Kamera HP, Langsung Dikenali!',
    subtitle:
      'Jual gorengan, sayur, beras eceran, kue basah, atau barang curah? Tidak perlu tempel stiker satu-satu dan tidak perlu hafal harga. Fitur Scan AI AsistenToko langsung mengenali barang dari bentuk dan kemasannya.',
    problemText:
      '❌ Cara Lama: Jual barang curah atau tanpa kemasan harus diingat-ingat harganya. Kalau yang jaga toko orang baru atau saudara, sering salah kasih harga.',
    solutionText:
      '✅ Solusi AsistenToko: Cukup arahkan kamera HP ke barang dengan tombol Scan AI. Dalam hitungan detik, nama barang dan harganya langsung masuk ke nota belanja!',
    benefits: [
      'Siapa saja bisa langsung jaga kasir tanpa perlu hafal ratusan harga barang',
      'Cocok untuk warung sembako, toko kue, sayur, buah, hingga barang eceran',
      'Hemat jutaan rupiah karena tidak wajib beli alat kasir khusus',
    ],
  },
  scan_barcode: {
    id: 'scan_barcode',
    badge: '||||| Scan Barcode Kamera & Alat Scanner',
    title: 'Scan Kode Batang Kemasan Secepat Minimarket Modern',
    subtitle:
      'Untuk barang kemasan pabrik (seperti mie instan, minuman, sabun, rokok), Anda bisa scan barcode beruntun pakai kamera HP belakang atau sambungkan alat scanner barcode USB/Bluetooth.',
    problemText:
      '❌ Cara Lama: Cari barang satu-satu di buku atau ketik manual saat pembeli antre panjang bikin pelayanan lambat dan pembeli tidak sabar.',
    solutionText:
      '✅ Solusi AsistenToko: Kamera HP menyala terus—begitu kode batang lewat di depan kamera, terdengar bunyi "BEEP!" dan barang otomatis masuk keranjang tanpa perlu sentuh layar.',
    benefits: [
      'Scan banyak barang berturut-turut tanpa harus bolak-balik tekan tombol',
      'Mendukung alat tembak Barcode Scanner kabel USB maupun Bluetooth',
      'Bisa dipakai kapan saja dari layar utama untuk cek harga barang secara instan',
    ],
  },
  manual_input: {
    id: 'manual_input',
    badge: '🛍️ Cari Cepat, Multi-Satuan & Diskon',
    title: 'Ketik 2 Huruf Langsung Ketemu + Bebas Pilih Eceran atau Grosir',
    subtitle:
      'Mau input tanpa kamera? Ketik sebagian nama barang, pilih apakah pembeli beli eceran (Pcs/Sachet) atau grosir (Renceng/Dus), tambahkan diskon atau kupon promo, lalu hitung kembalian otomatis.',
    problemText:
      '❌ Cara Lama: Pembeli beli 1 Dus + 3 Biji, ditambah minta diskon. Hitung pakai kalkulator sering salah pencet dan bikin pusing potong stoknya.',
    solutionText:
      '✅ Solusi AsistenToko: Tinggal pilih satuan di keranjang (misal: 1 Dus = 24 Pcs). Harga grosir otomatis terpasang dan stok gudang otomatis dipotong 24 Pcs!',
    benefits: [
      'Pilih varian rasa/ukuran (misal: Rasa Balado vs Keju, Beras 1Kg vs 5Kg) dengan mudah',
      'Tombol uang pas & nominal cepat (Rp 10.000, Rp 50.000, Rp 100.000) anti salah kembalian',
      'Bisa bayar Tunai, QRIS/Transfer, atau langsung catat ke Buku Kasbon',
    ],
  },
  laporan: {
    id: 'laporan',
    badge: '📊 Laporan Keuangan & Sensor Privasi',
    title: 'Tahu Persis Berapa Omset & Untung Bersih Toko Setiap Hari',
    subtitle:
      'Tidak perlu lagi begadang rekap nota di akhir bulan. Semua uang masuk, keuntungan bersih setelah dikurangi modal, barang paling laris, hingga pelanggan paling setia langsung tersaji rapi.',
    problemText:
      '❌ Cara Lama: Toko kelihatan ramai dan uang di laci banyak, tapi pas mau kulakan lagi uangnya kurang karena tidak tahu berapa untung bersih sebenarnya.',
    solutionText:
      '✅ Solusi AsistenToko: Sistem memisahkan uang modal dan laba bersih secara otomatis. Dilengkapi Ikon Mata untuk menyembunyikan angka omset saat banyak pembeli di depan meja kasir.',
    benefits: [
      'Bebas cek laporan Hari Ini, Bulan Ini, atau Pilih Tanggal tertentu suka-suka',
      'Ketahuan 10 Barang Paling Laris agar stoknya selalu Anda utamakan',
      'Download laporan resmi ke PDF atau Excel kapan saja dengan 1 klik',
    ],
  },
  produk: {
    id: 'produk',
    badge: '📦 Produk, Kulakan & Stok Otomatis',
    title: 'Beli Kulakan Pakai Dus, Jual Eceran? Stok & Modal Terhitung Otomatis!',
    subtitle:
      'Kelola ratusan hingga ribuan barang tanpa pusing. Saat barang datang dari sales/grosir, cukup catat di mode Kulakan—stok langsung bertambah dan harga modal rata-rata otomatis diperbarui.',
    problemText:
      '❌ Cara Lama: Kulakan Kopi 5 Dus (isi 600 sachet), dijual eceran per sachet. Lama-lama bingung sisa stok di rak masih berapa dan kapan harus belanja lagi.',
    solutionText:
      '✅ Solusi AsistenToko: Cukup input kulakan 5 Dus, sistem otomatis menambah 600 sachet ke stok! Saat stok hampir habis, muncul peringatan merah otomatis di HP Anda.',
    benefits: [
      'Bikin Paket Hemat (Bundling) — stok tiap barang di dalamnya otomatis terpotong saat terjual',
      'Punya ratusan barang? Upload sekaligus lewat file Excel tanpa ketik satu per satu',
      'Bisa buat & cetak stiker kode barcode sendiri untuk barang curah/olahan',
    ],
  },
  kasbon_wa: {
    id: 'kasbon_wa',
    badge: '📝 Buku Kasbon & Tagih WA 1-Klik',
    title: 'Catat Kasbon Pelanggan & Tagih Lewat WhatsApp Tanpa Rasa Sungkan',
    subtitle:
      'Sering lupa siapa tetangga yang belum bayar hutang belanja? Atau gak enak hati mau nagih? Semua catatan kasbon tersimpan rapi lengkap dengan tanggal jatuh tempo dan tombol pengingat WA otomatis.',
    problemText:
      '❌ Cara Lama: Catatan kasbon di buku kertas sobek, terselip, atau lupa ditagih. Mau chat pelanggan satu-satu rasanya canggung dan makan waktu.',
    solutionText:
      '✅ Solusi AsistenToko: Klik tombol "Kirim Pengingat WA", aplikasi langsung membuatkan pesan WhatsApp yang sopan, ramah, dan berisi rincian belanjaan serta jatuh temponya.',
    benefits: [
      'Tanda warna otomatis: Merah (Lewat Jatuh Tempo), Kuning (Segera Jatuh Tempo), Hijau (Lunas)',
      'Terima pembayaran cicilan (nyicil) maupun pelunasan penuh',
      'Cetak Struk Khusus Bukti Pelunasan agar sama-sama jelas dan transparan',
    ],
  },
  tim_shift: {
    id: 'tim_shift',
    badge: '👥 Akun Kasir, Shift & Rahasia Modal',
    title: 'Tenang Tinggal Toko: Kasir Bisa Jualan, Tapi Modal & Untung Anda Tetap Rahasia!',
    subtitle:
      'Punya karyawan kasir atau staf gudang? Berikan mereka akses login sendiri dengan PIN cepat tanpa membocorkan akun Pemilik Toko. Semua angka modal kulakan dan keuntungan bersih otomatis disembunyikan dari layar mereka.',
    problemText:
      '❌ Cara Lama: Takut ninggal toko karena khawatir uang di laci selisih, atau karyawan tahu persis berapa modal beli barang dan total keuntungan bersih toko.',
    solutionText:
      '✅ Solusi AsistenToko: Fitur Buka & Tutup Toko wajibkan kasir hitung uang fisik di laci setiap ganti shift. Sistem langsung memberitahu Anda jika uang pas, kurang, atau lebih!',
    benefits: [
      'Harga modal (HPP) & Laba Bersih disensor otomatis dari akun Kasir dan Gudang',
      'Tercatat jelas siapa nama kasir yang melayani setiap nota transaksi',
      'Keamanan ekstra 1 Akun = 1 HP Aktif agar akun tidak dibuka sembarangan di luar toko',
    ],
  },
  opname: {
    id: 'opname',
    badge: '📋 Cek Stok Fisik (Opname) Anti-Curang',
    title: 'Cek Kecocokan Stok Rak vs Sistem Tanpa Takut Dimanipulasi Staf',
    subtitle:
      'Saat periksa stok barang bulanan/mingguan, tugaskan karyawan untuk menghitung fisik barang di rak lewat HP mereka. Karyawan hanya bisa mengisi angka fisik tanpa tahu berapa stok di sistem.',
    problemText:
      '❌ Cara Lama: Kalau karyawan tahu angka stok di aplikasi, mereka bisa saja malas menghitung dan langsung menyamakan angkanya, atau menyembunyikan barang yang hilang.',
    solutionText:
      '✅ Solusi AsistenToko: Staf hanya input jumlah fisik. Anda (Owner) yang melihat perbandingan selisihnya beserta total nilai kerugian/kelebihan dalam Rupiah sebelum disetujui!',
    benefits: [
      'Deteksi barang hilang, rusak, atau lupa tercatat lebih cepat',
      'Karyawan tidak bisa mengubah atau menimpa jumlah stok gudang secara sepihak',
      'Hemat waktu cek stok dari yang biasanya berhari-hari jadi hitungan jam',
    ],
  },
  struk_offline: {
    id: 'struk_offline',
    badge: '🖨️ Struk Bluetooth, Nota WA & Mode Offline',
    title: 'Cetak Struk Bluetooth Sekali Klik & Tetap Jalan Walau Internet Mati!',
    subtitle:
      'Sambungkan HP ke printer thermal Bluetooth (ukuran 58mm atau 80mm) langsung tanpa instal driver rumit. Bisa juga kirim struk digital ke WhatsApp pembeli. Sinyal internet sedang gangguan? Kasir tetap lancar!',
    problemText:
      '❌ Cara Lama: Aplikasi kasir lain langsung macet total saat WiFi atau kuota internet habis, padahal pembeli sudah antre di depan meja kasir.',
    solutionText:
      '✅ Solusi AsistenToko: Otomatis beralih ke Mode Offline saat internet putus—tetap bisa transaksi dan cetak struk! Data otomatis tersimpan ke server begitu internet nyambung kembali.',
    benefits: [
      'Atur nama toko, logo, alamat, dan pesan ucapan di bagian bawah struk sesuka hati',
      'Hemat kertas: bisa kirim nota rapi langsung ke WhatsApp pelanggan',
      'Tampilan nyaman di semua layar: HP Android, Tablet Kasir, hingga Komputer/Laptop',
    ],
  },
}

interface InteractiveFeatureHubProps {
  onOpenCheckout: (title: string, priceLabel: string, url: string, badge?: string) => void
}

export default function InteractiveFeatureHub({ onOpenCheckout }: InteractiveFeatureHubProps) {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>('scan_ai')
  const [isArcOpen, setIsArcOpen] = useState<boolean>(true)

  // Interactive states inside the live simulator preview
  const [aiCart, setAiCart] = useState<Array<{ name: string; price: number; qty: number }>>([
    { name: '🍚 Beras Rojolele Ecer 1Kg', price: 15500, qty: 1 },
    { name: '🍌 Pisang Goreng Hangat', price: 2000, qty: 3 },
  ])
  const [lastScannedItem, setLastScannedItem] = useState<string>('🍌 Pisang Goreng Hangat (Rp 2.000)')

  const [selectedUnit, setSelectedUnit] = useState<'pcs' | 'renceng' | 'dus'>('dus')
  const [hideOmset, setHideOmset] = useState<boolean>(false)
  const [reportPeriod, setReportPeriod] = useState<'today' | 'month' | 'custom'>('today')
  const [viewRole, setViewRole] = useState<'owner' | 'kasir'>('owner')
  const [waPreviewOpen, setWaPreviewOpen] = useState<boolean>(false)
  const [kulakanAdded, setKulakanAdded] = useState<boolean>(false)
  const [isOfflineSim, setIsOfflineSim] = useState<boolean>(false)

  const current = FEATURE_DATA[activeFeature]

  const handleSelectFeature = (key: FeatureKey) => {
    setActiveFeature(key)
  }

  const addAiSampleItem = (name: string, price: number) => {
    setLastScannedItem(`${name} (Rp ${price.toLocaleString('id-ID')})`)
    setAiCart((prev) => {
      const existing = prev.find((i) => i.name === name)
      if (existing) {
        return prev.map((i) => (i.name === name ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { name, price, qty: 1 }]
    })
  }

  const totalAiCart = aiCart.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <section className="interactive-hub-section" id="simulasi-interaktif">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-label">👆 Coba Sendiri Tombol Interaktif Ini</div>
          <h2 className="section-title">
            Klik Tombol Menu di Bawah,<br />
            <span style={{ color: 'var(--green)' }}>Lihat Solusi Nyata Buat Toko Anda</span>
          </h2>
          <p className="section-sub" style={{ maxWidth: '640px' }}>
            Ini adalah tampilan tombol navigasi asli di dalam aplikasi AsistenToko.{' '}
            <strong>Silakan klik tombol-tombol di bawah ini</strong> untuk melihat betapa mudah dan praktisnya mengelola toko Anda!
          </p>
        </div>

        <div className="img5-interactive-wrapper reveal">
          {/* ===== THE EXACT IMAGE-5 UI STAGE (GREEN PALETTE & SYMMETRIC CENTERED) ===== */}
          <div className="img5-control-stage">
            {/* Blurred background decor mimicking the app screen behind the popup menu in Image 5 */}
            <div className="img5-stage-bg-decor" aria-hidden="true">
              <div className="img5-bg-fake-row">
                <div className="img5-bg-fake-pill"></div>
                <div className="img5-bg-fake-pill"></div>
                <div className="img5-bg-fake-pill"></div>
                <div className="img5-bg-fake-pill"></div>
              </div>
              <div className="img5-bg-fake-banner"></div>
              <div className="img5-bg-fake-row">
                <div className="img5-bg-fake-pill"></div>
                <div className="img5-bg-fake-pill"></div>
              </div>
            </div>

            <div className="img5-stage-instruction">
              <span className="img5-click-hand">👆</span>
              <span>Klik salah satu tombol menu di bawah untuk mencoba fiturnya langsung:</span>
            </div>

            {/* Symmetric 3-Column Floating Arc + Bottom Bar */}
            <div className="img5-widget-container">
              {/* 3 Arc Buttons: Scan Barcode | Scan AI | Manual */}
              <div className={`img5-arc-group ${isArcOpen ? '' : 'closed'}`}>
                {/* Column 1 (Left): Scan Barcode */}
                <button
                  type="button"
                  className={`img5-arc-item ${activeFeature === 'scan_barcode' ? 'active' : ''}`}
                  onClick={() => handleSelectFeature('scan_barcode')}
                >
                  <div className="img5-arc-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
                      <line x1="4" y1="5" x2="4" y2="19" />
                      <line x1="8" y1="5" x2="8" y2="19" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="16" y1="5" x2="16" y2="19" />
                      <line x1="20" y1="5" x2="20" y2="19" />
                    </svg>
                  </div>
                  <span className="img5-arc-pill">Scan Barcode</span>
                </button>

                {/* Column 2 (Center-Top): Scan AI */}
                <button
                  type="button"
                  className={`img5-arc-item center-top ${activeFeature === 'scan_ai' ? 'active' : ''}`}
                  onClick={() => handleSelectFeature('scan_ai')}
                >
                  <div className="img5-arc-circle">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </div>
                  <span className="img5-arc-pill">Scan AI</span>
                </button>

                {/* Column 3 (Right): Manual */}
                <button
                  type="button"
                  className={`img5-arc-item ${activeFeature === 'manual_input' ? 'active' : ''}`}
                  onClick={() => handleSelectFeature('manual_input')}
                >
                  <div className="img5-arc-circle">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <span className="img5-arc-pill">Manual</span>
                </button>
              </div>

              {/* Bottom White Pill Bar: Laporan | TUTUP (X) | Produk */}
              <div className="img5-bottom-bar">
                {/* Column 1 (Left): Laporan */}
                <button
                  type="button"
                  className={`img5-dock-side-btn ${activeFeature === 'laporan' ? 'active' : ''}`}
                  onClick={() => handleSelectFeature('laporan')}
                >
                  <div className="img5-dock-side-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="8" y1="13" x2="16" y2="13" />
                      <line x1="8" y1="17" x2="16" y2="17" />
                    </svg>
                  </div>
                  <span className="img5-dock-side-label">Laporan</span>
                </button>

                {/* Column 2 (Center): TUTUP (X) / BUKA SCAN */}
                <div className="img5-dock-center-wrap">
                  <button
                    type="button"
                    className={`img5-dock-center-btn ${isArcOpen ? '' : 'closed-mode'}`}
                    onClick={() => {
                      if (!isArcOpen) {
                        setIsArcOpen(true)
                        setActiveFeature('scan_ai')
                      } else {
                        setIsArcOpen(false)
                      }
                    }}
                    title={isArcOpen ? 'Tutup Menu Scan' : 'Buka 3 Mode Scan Kasir'}
                  >
                    {isArcOpen ? (
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                  <span className={`img5-dock-center-label ${isArcOpen ? '' : 'closed-mode'}`}>
                    {isArcOpen ? 'TUTUP' : 'BUKA SCAN'}
                  </span>
                </div>

                {/* Column 3 (Right): Produk */}
                <button
                  type="button"
                  className={`img5-dock-side-btn ${activeFeature === 'produk' ? 'active' : ''}`}
                  onClick={() => handleSelectFeature('produk')}
                >
                  <div className="img5-dock-side-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <span className="img5-dock-side-label">Produk</span>
                </button>
              </div>
            </div>

            {/* Extra Feature Pills for Complete Exploration */}
            <div className="img5-extra-pills">
              <span style={{ width: '100%', textAlign: 'center', fontSize: '12px', color: '#86efac', fontWeight: 600, marginBottom: '4px' }}>
                Eksplor juga fitur unggulan lainnya di Dashboard AsistenToko:
              </span>
              <button
                type="button"
                className={`img5-extra-pill ${activeFeature === 'kasbon_wa' ? 'active' : ''}`}
                onClick={() => handleSelectFeature('kasbon_wa')}
              >
                <span>📝</span> Buku Kasbon &amp; Tagih WA
              </button>
              <button
                type="button"
                className={`img5-extra-pill ${activeFeature === 'tim_shift' ? 'active' : ''}`}
                onClick={() => handleSelectFeature('tim_shift')}
              >
                <span>👥</span> Akun Kasir &amp; Rahasia Modal
              </button>
              <button
                type="button"
                className={`img5-extra-pill ${activeFeature === 'opname' ? 'active' : ''}`}
                onClick={() => handleSelectFeature('opname')}
              >
                <span>📋</span> Cek Stok (Opname) Aman
              </button>
              <button
                type="button"
                className={`img5-extra-pill ${activeFeature === 'struk_offline' ? 'active' : ''}`}
                onClick={() => handleSelectFeature('struk_offline')}
              >
                <span>🖨️</span> Struk Bluetooth &amp; Offline
              </button>
            </div>
          </div>

          {/* ===== DYNAMIC INTERACTIVE FEATURE SHOWCASE PANEL ===== */}
          <div className="sim-detail-panel" key={activeFeature}>
            {/* Left Content: Copywriting & Value Proposition */}
            <div className="sim-left-content">
              <div>
                <div className="sim-feature-tag">{current.badge}</div>
                <h3 className="sim-feature-title">{current.title}</h3>
                <p className="sim-feature-desc">{current.subtitle}</p>

                <div className="sim-problem-solution-box">
                  <div className="sim-ps-card problem">{current.problemText}</div>
                  <div className="sim-ps-card solution">{current.solutionText}</div>
                </div>

                <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Keuntungan Kongkrit Buat Anda:
                </div>
                <div className="sim-benefits-list">
                  {current.benefits.map((b, i) => (
                    <div className="sim-benefit-item" key={i}>
                      <span className="sim-benefit-check">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                <a href="#harga" className="btn-primary" style={{ padding: '12px 24px', fontSize: '14.5px' }}>
                  Pakai Fitur Ini Sekarang →
                </a>
                <button
                  type="button"
                  onClick={() =>
                    onOpenCheckout(
                      'Coba Gratis 1 Hari ~ AsistenToko',
                      'Uji coba penuh semua fitur tanpa komitmen',
                      'http://lynk.id/usahatokosembako/g7zr8vnlrv6e/checkout',
                      'Free Trial 1 Hari'
                    )
                  }
                  className="btn-ghost"
                  style={{ padding: '11px 20px', fontSize: '14px' }}
                >
                  🎁 Coba Gratis 1 Hari
                </button>
              </div>
            </div>

            {/* Right Content: Live Interactive Mini-App Simulator */}
            <div className="sim-right-preview">
              {/* 1. SCAN AI */}
              {activeFeature === 'scan_ai' && (
                <div className="sim-live-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f7c44', background: '#dcfce7', padding: '4px 10px', borderRadius: '100px' }}>
                      📷 Scan AI Aktif (Tanpa Barcode)
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#16a34a', fontWeight: 700 }}>● Siap Kenali Barang</span>
                  </div>

                  {/* Simulated Viewfinder */}
                  <div style={{ background: '#0f1a0f', borderRadius: '16px', padding: '16px', color: '#fff', marginBottom: '14px', position: 'relative', textAlign: 'center' }}>
                    <div style={{ border: '2px dashed rgba(74, 222, 128, 0.7)', borderRadius: '12px', padding: '14px 10px' }}>
                      <div style={{ fontSize: '11px', color: '#86efac', fontWeight: 700, marginBottom: '4px' }}>
                        ✨ Scan AI Berhasil Mengenali Produk:
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>{lastScannedItem}</div>
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#cbd5e1', marginTop: '10px' }}>
                      👇 <strong>Coba klik barang di bawah</strong> untuk simulasi Scan AI:
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
                      <button
                        type="button"
                        onClick={() => addAiSampleItem('🍚 Beras Rojolele Ecer 1Kg', 15500)}
                        style={{ background: 'rgba(22, 163, 74, 0.25)', border: '1px solid rgba(134, 239, 172, 0.45)', color: '#fff', padding: '6px 10px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 700, cursor: 'pointer' }}
                      >
                        + 🍚 Beras 1Kg
                      </button>
                      <button
                        type="button"
                        onClick={() => addAiSampleItem('🥚 Telur Ayam 1/2 Kg', 14000)}
                        style={{ background: 'rgba(22, 163, 74, 0.25)', border: '1px solid rgba(134, 239, 172, 0.45)', color: '#fff', padding: '6px 10px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 700, cursor: 'pointer' }}
                      >
                        + 🥚 Telur 1/2 Kg
                      </button>
                      <button
                        type="button"
                        onClick={() => addAiSampleItem('🍌 Pisang Goreng Hangat', 2000)}
                        style={{ background: 'rgba(22, 163, 74, 0.25)', border: '1px solid rgba(134, 239, 172, 0.45)', color: '#fff', padding: '6px 10px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 700, cursor: 'pointer' }}
                      >
                        + 🍌 Gorengan
                      </button>
                    </div>
                  </div>

                  {/* Live Cart */}
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                    Keranjang Kasir Otomatis:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                    {aiCart.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', background: '#f8fafc', padding: '8px 10px', borderRadius: '10px' }}>
                        <span style={{ fontWeight: 600, color: '#1e293b' }}>
                          {item.name} <strong style={{ color: '#0f7c44' }}>x{item.qty}</strong>
                        </span>
                        <span style={{ fontWeight: 800, color: '#0f172a' }}>
                          Rp {(item.price * item.qty).toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#dcfce7', padding: '10px 14px', borderRadius: '12px', color: '#166534', fontWeight: 900, fontSize: '14px' }}>
                    <span>Total Bayar</span>
                    <span>Rp {totalAiCart.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              )}

              {/* 2. SCAN BARCODE */}
              {activeFeature === 'scan_barcode' && (
                <div className="sim-live-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f7c44', background: '#dcfce7', padding: '4px 10px', borderRadius: '100px' }}>
                      ||||| Pemindai Barcode Kontinu
                    </span>
                    <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 700 }}>Kamera HP &amp; USB/BT</span>
                  </div>

                  <div style={{ background: '#0f1a0f', borderRadius: '16px', padding: '18px', color: '#fff', textAlign: 'center', marginBottom: '14px' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: '26px', letterSpacing: '4px', color: '#fff', marginBottom: '6px' }}>
                      ||| |||| || ||||| |||
                    </div>
                    <div style={{ height: '2px', background: '#22c55e', width: '80%', margin: '0 auto 8px', boxShadow: '0 0 8px #22c55e' }}></div>
                    <div style={{ fontSize: '12px', color: '#4ade80', fontWeight: 700 }}>
                      🔊 BEEP! Indomie Goreng 85g (+1 Pcs) — Rp 3.500
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px', borderRadius: '12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>📱 Kamera HP</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                        Scan maraton tanpa perlu tekan tombol berulang kali.
                      </div>
                    </div>
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px', borderRadius: '12px' }}>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>🔫 Alat Scanner</div>
                      <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px' }}>
                        Colok scanner USB/Bluetooth langsung otomatis jalan.
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '10px 12px', borderRadius: '12px', fontSize: '12.5px', color: '#166534', fontWeight: 600 }}>
                    💡 <strong>Pintasan Cepat:</strong> Tekan tombol Scan di tengah bawah kapan saja untuk cek harga barang!
                  </div>
                </div>
              )}

              {/* 3. INPUT MANUAL & MULTI SATUAN */}
              {activeFeature === 'manual_input' && (
                <div className="sim-live-card">
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f7c44', marginBottom: '8px' }}>
                    🛍️ Coba Pilih Satuan Belanja di Keranjang:
                  </div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', marginBottom: '14px' }}>
                    <div style={{ fontWeight: 800, fontSize: '15px', color: '#0f172a', marginBottom: '4px' }}>
                      ☕ Kopi Kapal Api Special Mix
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                      Stok Gudang Saat Ini: <strong>600 Sachet (5 Dus)</strong>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '12px' }}>
                      <button
                        type="button"
                        onClick={() => setSelectedUnit('pcs')}
                        style={{
                          padding: '8px 6px',
                          borderRadius: '10px',
                          border: selectedUnit === 'pcs' ? '2px solid #0f7c44' : '1px solid #cbd5e1',
                          background: selectedUnit === 'pcs' ? '#dcfce7' : '#fff',
                          fontWeight: 800,
                          fontSize: '12px',
                          color: '#0f172a',
                          cursor: 'pointer',
                        }}
                      >
                        1 Sachet (Ecer)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedUnit('renceng')}
                        style={{
                          padding: '8px 6px',
                          borderRadius: '10px',
                          border: selectedUnit === 'renceng' ? '2px solid #0f7c44' : '1px solid #cbd5e1',
                          background: selectedUnit === 'renceng' ? '#dcfce7' : '#fff',
                          fontWeight: 800,
                          fontSize: '12px',
                          color: '#0f172a',
                          cursor: 'pointer',
                        }}
                      >
                        1 Renceng (10)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedUnit('dus')}
                        style={{
                          padding: '8px 6px',
                          borderRadius: '10px',
                          border: selectedUnit === 'dus' ? '2px solid #0f7c44' : '1px solid #cbd5e1',
                          background: selectedUnit === 'dus' ? '#dcfce7' : '#fff',
                          fontWeight: 800,
                          fontSize: '12px',
                          color: '#0f172a',
                          cursor: 'pointer',
                        }}
                      >
                        1 Dus (120)
                      </button>
                    </div>

                    <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#64748b' }}>Harga Otomatis:</span>
                        <strong style={{ color: '#0f7c44' }}>
                          {selectedUnit === 'pcs' && 'Rp 2.000'}
                          {selectedUnit === 'renceng' && 'Rp 18.500'}
                          {selectedUnit === 'dus' && 'Rp 210.000'}
                        </strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Potong Stok Otomatis:</span>
                        <strong style={{ color: '#dc2626' }}>
                          {selectedUnit === 'pcs' && '-1 Sachet (Sisa 599)'}
                          {selectedUnit === 'renceng' && '-10 Sachet (Sisa 590)'}
                          {selectedUnit === 'dus' && '-120 Sachet (Sisa 480)'}
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', textAlign: 'center' }}>
                    ✨ Gak perlu hitung kalikan manual di kepala—semua otomatis!
                  </div>
                </div>
              )}

              {/* 4. LAPORAN & SENSOR OMSET */}
              {activeFeature === 'laporan' && (
                <div className="sim-live-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Filter Periode:</span>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {(['today', 'month', 'custom'] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setReportPeriod(p)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            background: reportPeriod === p ? '#0f7c44' : '#f1f5f9',
                            color: reportPeriod === p ? '#fff' : '#475569',
                          }}
                        >
                          {p === 'today' ? 'Hari Ini' : p === 'month' ? 'Bulan Ini' : '📅 Pilih Tanggal'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Green Financial Card */}
                  <div style={{ background: 'linear-gradient(135deg, #0a5c32, #0f7c44)', borderRadius: '18px', padding: '18px', color: '#fff', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', color: '#dcfce7' }}>Total Omset Penjualan</span>
                      <button
                        type="button"
                        onClick={() => setHideOmset(!hideOmset)}
                        style={{ background: 'rgba(255,255,255,0.18)', border: 'none', color: '#fff', padding: '4px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
                      >
                        {hideOmset ? '👁️ Tampilkan' : '🙈 Sensor Privasi'}
                      </button>
                    </div>
                    <div style={{ fontSize: '26px', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                      {hideOmset
                        ? 'Rp •••••••••'
                        : reportPeriod === 'today'
                        ? 'Rp 3.480.000'
                        : reportPeriod === 'month'
                        ? 'Rp 84.650.000'
                        : 'Rp 18.920.000'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '12px', fontSize: '12px' }}>
                      <div>
                        <div style={{ color: '#bbf7d0', fontSize: '11px' }}>Laba Bersih (Owner)</div>
                        <div style={{ fontWeight: 800 }}>
                          {hideOmset
                            ? 'Rp •••••••'
                            : reportPeriod === 'today'
                            ? 'Rp 695.000'
                            : reportPeriod === 'month'
                            ? 'Rp 17.420.000'
                            : 'Rp 3.850.000'}
                        </div>
                      </div>
                      <div>
                        <div style={{ color: '#bbf7d0', fontSize: '11px' }}>Total Transaksi</div>
                        <div style={{ fontWeight: 800 }}>
                          {reportPeriod === 'today' ? '64 Nota' : reportPeriod === 'month' ? '1.840 Nota' : '392 Nota'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#334155', background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <span>📄 Ekspor Pembukuan Resmi:</span>
                    <span style={{ fontWeight: 800, color: '#0f7c44' }}>PDF &amp; Excel (.XLSX)</span>
                  </div>
                </div>
              )}

              {/* 5. PRODUK & KULAKAN OTOMATIS */}
              {activeFeature === 'produk' && (
                <div className="sim-live-card">
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f7c44', marginBottom: '10px' }}>
                    📦 Simulasi Barang Datang (Mode Kulakan):
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>🛢️ Minyak Goreng SunCo 2L</strong>
                      <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '100px', background: kulakanAdded ? '#dcfce7' : '#fee2e2', color: kulakanAdded ? '#15803d' : '#dc2626' }}>
                        {kulakanAdded ? 'Stok Aman: 39 Pouch' : '⚠️ Stok Tipis: 3 Pouch'}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                      Konversi Otomatis: <strong>1 Dus = 6 Pouch</strong>
                    </div>

                    <button
                      type="button"
                      onClick={() => setKulakanAdded(!kulakanAdded)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '10px',
                        border: 'none',
                        background: kulakanAdded ? '#e2e8f0' : '#0f7c44',
                        color: kulakanAdded ? '#334155' : '#fff',
                        fontWeight: 800,
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      {kulakanAdded ? '🔄 Ulangi Simulasi Kulakan' : '+ Input Kulakan Masuk: 6 Dus (+36 Pouch)'}
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
                    <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '10px', color: '#166534', fontWeight: 700 }}>
                      📥 Impor Ratusan Barang via Excel
                    </div>
                    <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '10px', color: '#166534', fontWeight: 700 }}>
                      🏷️ Cetak Label Barcode Mandiri
                    </div>
                  </div>
                </div>
              )}

              {/* 6. BUKU KASBON & TAGIH WA */}
              {activeFeature === 'kasbon_wa' && (
                <div className="sim-live-card">
                  <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    📝 Daftar Piutang / Kasbon Pelanggan:
                  </div>
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>Ibu Ratna (Tetangga Blok C)</strong>
                      <span style={{ fontSize: '10.5px', fontWeight: 800, background: '#dc2626', color: '#fff', padding: '2px 8px', borderRadius: '100px' }}>
                        Jatuh Tempo
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#991b1b', fontWeight: 800, marginBottom: '10px' }}>
                      Sisa Kasbon: Rp 145.000
                    </div>
                    <button
                      type="button"
                      onClick={() => setWaPreviewOpen(!waPreviewOpen)}
                      style={{
                        width: '100%',
                        background: '#16a34a',
                        color: '#fff',
                        border: 'none',
                        padding: '9px 12px',
                        borderRadius: '10px',
                        fontWeight: 800,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                      }}
                    >
                      💬 {waPreviewOpen ? 'Tutup Draf Pesan WA' : 'Klik Coba Tagih Sopan via WhatsApp'}
                    </button>
                  </div>

                  {waPreviewOpen && (
                    <div style={{ background: '#dcfce7', border: '1px solid #86efac', borderRadius: '12px', padding: '12px', fontSize: '12px', color: '#1e293b', lineHeight: 1.5 }}>
                      <strong>📱 Draf Otomatis di WhatsApp:</strong>
                      <br />
                      <em>
                        "Halo Ibu Ratna 🙏 Semoga sehat selalu. Sekadar mengingatkan dengan hormat untuk catatan belanja di Toko Berkah sebesar <strong>Rp 145.000</strong> telah memasuki jadwal pembayaran. Terima kasih banyak sebelumnya ya Bu 😊"
                      </em>
                    </div>
                  )}
                </div>
              )}

              {/* 7. MANAJEMEN TIM & SENSOR MODAL */}
              {activeFeature === 'tim_shift' && (
                <div className="sim-live-card">
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#475569', marginBottom: '8px', textAlign: 'center' }}>
                    👇 Klik untuk melihat perbedaan layar Owner vs Kasir:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', background: '#f1f5f9', padding: '5px', borderRadius: '12px', marginBottom: '14px' }}>
                    <button
                      type="button"
                      onClick={() => setViewRole('owner')}
                      style={{
                        padding: '8px',
                        borderRadius: '9px',
                        border: 'none',
                        fontWeight: 800,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        background: viewRole === 'owner' ? '#0f7c44' : 'transparent',
                        color: viewRole === 'owner' ? '#fff' : '#475569',
                      }}
                    >
                      👑 Layar Owner
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewRole('kasir')}
                      style={{
                        padding: '8px',
                        borderRadius: '9px',
                        border: 'none',
                        fontWeight: 800,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        background: viewRole === 'kasir' ? '#15803d' : 'transparent',
                        color: viewRole === 'kasir' ? '#fff' : '#475569',
                      }}
                    >
                      🧑‍💼 Layar Staf Kasir
                    </button>
                  </div>

                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>Kasir &amp; Jual Barang:</span>
                      <strong style={{ color: '#16a34a' }}>✓ Bisa Akses</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>Harga Modal Kulakan (HPP):</span>
                      {viewRole === 'owner' ? (
                        <strong style={{ color: '#0f172a' }}>Rp 13.200 / Pcs</strong>
                      ) : (
                        <strong style={{ color: '#dc2626', background: '#fee2e2', padding: '2px 8px', borderRadius: '6px', fontSize: '11.5px' }}>
                          🔒 DISEMBUNYIKAN
                        </strong>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>Total Keuntungan Toko:</span>
                      {viewRole === 'owner' ? (
                        <strong style={{ color: '#0f7c44' }}>Rp 17.420.000</strong>
                      ) : (
                        <strong style={{ color: '#dc2626', background: '#fee2e2', padding: '2px 8px', borderRadius: '6px', fontSize: '11.5px' }}>
                          🔒 DISEMBUNYIKAN
                        </strong>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>Rekap Uang Fisik Shift:</span>
                      <strong style={{ color: '#0f7c44' }}>Pas (Selisih Rp 0)</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. STOCK OPNAME BERJENJANG */}
              {activeFeature === 'opname' && (
                <div className="sim-live-card">
                  <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    📋 Audit Stok Opname Berjenjang:
                  </div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#15803d', marginBottom: '6px' }}>
                      Tahap 1 — Diisi Staf di Rak Barang:
                    </div>
                    <div style={{ fontSize: '13px', color: '#334155', marginBottom: '12px', background: '#fff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      Staf input jumlah fisik: <strong>48 Bungkus</strong>
                      <br />
                      <span style={{ fontSize: '11.5px', color: '#64748b' }}>(Staf tidak tahu stok sistem &amp; tidak tahu harga modal)</span>
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f7c44', marginBottom: '6px' }}>
                      Tahap 2 — Ditinjau Owner Toko:
                    </div>
                    <div style={{ fontSize: '13px', color: '#334155', background: '#f0fdf4', padding: '8px 10px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                      Stok Sistem: <strong>50</strong> vs Fisik: <strong>48</strong> → <strong style={{ color: '#dc2626' }}>Selisih -2 Pcs (Rp 24.000)</strong>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', textAlign: 'center' }}>
                    🔒 Stok hanya berubah setelah disetujui oleh Owner!
                  </div>
                </div>
              )}

              {/* 9. STRUK BLUETOOTH & MODE OFFLINE */}
              {activeFeature === 'struk_offline' && (
                <div className="sim-live-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Simulasi Koneksi:</span>
                    <button
                      type="button"
                      onClick={() => setIsOfflineSim(!isOfflineSim)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '100px',
                        border: 'none',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        background: isOfflineSim ? '#fef3c7' : '#dcfce7',
                        color: isOfflineSim ? '#b45309' : '#15803d',
                      }}
                    >
                      {isOfflineSim ? '⚡ Mode Offline Aktif (Tanpa Sinyal)' : '🟢 Online Normal (Klik Coba Offline)'}
                    </button>
                  </div>

                  {/* Thermal Receipt Preview */}
                  <div style={{ background: '#fff', border: '1px dashed #94a3b8', borderRadius: '12px', padding: '14px', fontFamily: 'monospace', fontSize: '12px', color: '#1e293b', marginBottom: '12px' }}>
                    <div style={{ textAlign: 'center', fontWeight: 800, marginBottom: '6px' }}>
                      TOKO SEMBAKO BERKAH
                      <br />
                      <span style={{ fontWeight: 400, fontSize: '11px' }}>Jl. Merdeka No. 12 • WA: 0812xxxx</span>
                    </div>
                    <div style={{ borderTop: '1px dashed #cbd5e1', borderBottom: '1px dashed #cbd5e1', padding: '6px 0', margin: '6px 0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Minyak SunCo 2L x1</span>
                        <span>38.000</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Beras 5Kg x1</span>
                        <span>72.000</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                      <span>TOTAL LUNAS</span>
                      <span>Rp 110.000</span>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '10.5px', color: '#64748b', marginTop: '8px' }}>
                      Terima Kasih Atas Kunjungan Anda!
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', fontWeight: 700, textAlign: 'center' }}>
                    <div style={{ background: '#f0fdf4', color: '#0f7c44', border: '1px solid #bbf7d0', padding: '8px', borderRadius: '8px' }}>
                      🖨️ Cetak 58mm / 80mm
                    </div>
                    <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px', borderRadius: '8px' }}>
                      📲 Kirim Struk ke WA
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
