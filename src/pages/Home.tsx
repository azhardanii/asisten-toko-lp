import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import PdfGuideModal, { PDF_GUIDE_URL, PDF_FILE_NAME } from '../components/PdfGuideModal'
import CheckoutGmailModal, { type CheckoutPlanInfo } from '../components/CheckoutGmailModal'
import InteractiveFeatureHub from '../components/InteractiveFeatureHub'
import ConversionBoosters from '../components/ConversionBoosters'
import '../index.css'

const APP_URL = 'https://app.asistentoko.com'

// Official Lynk.id Checkout Links
const CHECKOUT_LINKS = {
  freeTrial: 'http://lynk.id/usahatokosembako/g7zr8vnlrv6e/checkout',
  basicMonthly: 'http://lynk.id/usahatokosembako/379l8jz16m9q/checkout',
  basicLifetime: 'http://lynk.id/usahatokosembako/w2d613qg61q9/checkout',
  business1Month: 'http://lynk.id/usahatokosembako/85v23g9p6v86/checkout',
  business3Months: 'http://lynk.id/usahatokosembako/g5w147m1jo8o/checkout',
  business1Year: 'http://lynk.id/usahatokosembako/erp1exgo0ozm/checkout',
  addonScanAi: 'http://lynk.id/usahatokosembako/4ov97x58kov3/checkout',
  addonUpgradeBusiness: 'http://lynk.id/usahatokosembako/o2dp4zkgll1y/checkout',
}

type BusinessDuration = '1_bulan' | '3_bulan' | '1_tahun'

const BUSINESS_PLANS: Record<
  BusinessDuration,
  {
    tabLabel: string
    price: string
    period: string
    subnote: string
    btnText: string
    url: string
    modalTitle: string
    modalPrice: string
  }
> = {
  '1_bulan': {
    tabLabel: '1 Bulan',
    price: 'Rp 129.000',
    period: '/ bulan',
    subnote: 'Standar bulanan fleksibel',
    btnText: 'Pilih Business (1 Bulan) →',
    url: CHECKOUT_LINKS.business1Month,
    modalTitle: 'Paket Business 1 Bulan ~ AsistenToko',
    modalPrice: 'Rp 129.000 / bulan (Multi-User Lengkap)',
  },
  '3_bulan': {
    tabLabel: '3 Bulan',
    price: 'Rp 299.000',
    period: '/ 3 bulan',
    subnote: 'Hemat Rp 88.000 (Setara Rp 99.600/bln)',
    btnText: 'Pilih Business (3 Bulan) →',
    url: CHECKOUT_LINKS.business3Months,
    modalTitle: 'Paket Business 3 Bulan ~ AsistenToko',
    modalPrice: 'Rp 299.000 / 3 bulan (Hemat Rp 88.000)',
  },
  '1_tahun': {
    tabLabel: '1 Tahun',
    price: 'Rp 999.000',
    period: '/ tahun',
    subnote: 'Paling Hemat! Setara cuma ~Rp 83.250/bulan',
    btnText: 'Pilih Business (1 Tahun) →',
    url: CHECKOUT_LINKS.business1Year,
    modalTitle: 'Paket Business 1 Tahun ~ AsistenToko',
    modalPrice: 'Rp 999.000 / tahun (Best Value 🔥 Setara ~Rp 83.250/bln)',
  },
}

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)
  const [selectedCheckout, setSelectedCheckout] = useState<CheckoutPlanInfo | null>(null)
  const [bizDuration, setBizDuration] = useState<BusinessDuration>('1_bulan')
  const [isInHero, setIsInHero] = useState(true)

  // ===== Hero Background Video: Strict Mute, Seamless Loop & Viewport Performance =====
  useEffect(() => {
    const video = heroVideoRef.current
    const heroEl = heroSectionRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.volume = 0

    const safePlay = () => {
      video.muted = true
      video.play().catch(() => { })
    }

    safePlay()

    if (!heroEl || typeof IntersectionObserver === 'undefined') return

    // Pause video when Hero is off-screen & track Hero visibility to hide floating WA
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInHero(entry.isIntersecting)
          if (entry.isIntersecting) {
            safePlay()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    videoObserver.observe(heroEl)
    return () => videoObserver.disconnect()
  }, [])

  const handleOpenCheckout = useCallback(
    (title: string, priceLabel: string, url: string, badge?: string) => {
      setSelectedCheckout({ title, priceLabel, url, badge })
    },
    []
  )

  // ===== Cursor Glow =====
  const setupCursorGlow = useCallback(() => {
    const glow = document.getElementById('cursorGlow')
    if (!glow) return
    const handler = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', handler)
    return () => document.removeEventListener('mousemove', handler)
  }, [])

  // ===== Navbar Scroll =====
  const setupNavbarScroll = useCallback(() => {
    const navbar = document.querySelector('.navbar') as HTMLElement | null
    if (!navbar) return
    const handler = () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
        navbar.style.background = 'rgba(255,255,255,0.97)'
      } else {
        navbar.style.boxShadow = 'none'
        navbar.style.background = 'rgba(255,255,255,0.85)'
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // ===== Scroll Reveal =====
  const setupReveal = useCallback(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  // ===== FAQ Toggle =====
  const setupFAQ = useCallback(() => {
    const items = document.querySelectorAll('.faq-item')
    const handlers: Array<{ btn: Element; handler: () => void }> = []
    items.forEach((item) => {
      const btn = item.querySelector('.faq-btn')
      if (!btn) return
      const handler = () => {
        const isOpen = item.classList.contains('open')
        items.forEach((i) => i.classList.remove('open'))
        if (!isOpen) item.classList.add('open')
      }
      btn.addEventListener('click', handler)
      handlers.push({ btn, handler })
    })
    return () => handlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler))
  }, [])

  // ===== Counter Animation =====
  const setupCounters = useCallback(() => {
    function animateValue(el: Element, target: number, prefix: string, suffix: string, duration: number) {
      let start = 0
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = prefix + Math.floor(eased * target).toLocaleString('id') + suffix
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll('.stat-num')
            const configs = [
              { target: 3200, prefix: '', suffix: '+', el: nums[0] },
              { target: 12, prefix: 'Rp ', suffix: 'M+', el: nums[1] },
              { target: 98, prefix: '', suffix: '%', el: nums[2] },
            ]
            configs.forEach(({ target, prefix, suffix, el }) => {
              if (el) animateValue(el, target, prefix, suffix, 1800)
            })
            statsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    const statsGrid = document.querySelector('.stats-grid')
    if (statsGrid) statsObserver.observe(statsGrid)
    return () => statsObserver.disconnect()
  }, [])

  // ===== Nav Active State =====
  const setupNavActive = useCallback(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              ; (link as HTMLElement).style.color = ''
                ; (link as HTMLElement).style.background = ''
            })
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            ) as HTMLElement | null
            if (activeLink) {
              activeLink.style.color = 'var(--green)'
              activeLink.style.background = 'var(--green-light)'
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((s) => activeObserver.observe(s))
    return () => activeObserver.disconnect()
  }, [])

  useEffect(() => {
    const cleanups = [
      setupCursorGlow(),
      setupNavbarScroll(),
      setupReveal(),
      setupFAQ(),
      setupCounters(),
      setupNavActive(),
    ]
    return () => cleanups.forEach((fn) => fn?.())
  }, [setupCursorGlow, setupNavbarScroll, setupReveal, setupFAQ, setupCounters, setupNavActive])

  const activeBizPlan = BUSINESS_PLANS[bizDuration]

  return (
    <div ref={appRef}>
      <div className="cursor-glow" id="cursorGlow"></div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">
            <img src="/logo-asistentoko.webp" alt="AsistenToko Logo" style={{ height: '38px' }} />
            <span className="nav-logo-text">
              <span style={{ color: '#0F5132' }}>Asisten</span>
              <span style={{ color: '#16A34A' }}>Toko</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#simulasi-interaktif" className="nav-link">
              🎮 Coba Simulasi
            </a>
            <a href="#fitur" className="nav-link">
              Fitur Lengkap
            </a>
            <a href="#cara-kerja" className="nav-link">
              Cara Kerja
            </a>
            <a href="#harga" className="nav-link">
              Harga Paket
            </a>
            <button
              type="button"
              onClick={() => setIsPdfModalOpen(true)}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                font: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
              title="Lihat Buku Panduan Penggunaan Terbaru"
            >
              📖 Panduan
            </button>
          </div>
          <div className="nav-actions">
            <button
              type="button"
              onClick={() =>
                handleOpenCheckout(
                  'Coba Gratis 1 Hari ~ AsistenToko',
                  'Akses penuh untuk mencoba semua fitur AsistenToko',
                  CHECKOUT_LINKS.freeTrial,
                  'Free Trial 1 Hari'
                )
              }
              className="nav-signin"
              style={{ color: 'var(--green)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Coba Gratis 1 Hari
            </button>
            <a
              href={APP_URL}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '14px' }}
              id="nav-signin"
            >
              Masuk Aplikasi
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero hero-v2" ref={heroSectionRef}>
        {/* Full-Height Background Video Layer + Dark Green Overlay */}
        <div className="hero-v2-media" aria-hidden="true">
          <video
            ref={heroVideoRef}
            className="hero-v2-video"
            src="/video-background.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            onEnded={(e) => {
              e.currentTarget.currentTime = 0
              e.currentTarget.play().catch(() => { })
            }}
          />
          <div className="hero-v2-overlay"></div>
        </div>

        <div className="container hero-v2-container">
          {/* TOP WHITESPACE AREA: Exact Copywriting from Uploaded Reference */}
          <div className="hero-v2-top">
            <div className="hero-v2-eyebrow">
              <div className="eyebrow-dot"></div>
              <span>Scan Tanpa Barcode · Bisa Offline · Sekali Beli<span className="desktop-inline"> Selamanya</span></span>
            </div>

            <h1 className="hero-v2-title">
              Jualan Lebih Cepat, Cukup <span className="hero-v2-highlight">Scan Kamera</span>. <span className="br-desktop" />Bisa Offline &amp; Sekali Beli Selamanya.
            </h1>

            <p className="hero-v2-desc">
              Kenali barang lewat kamera HP, tetap lancar walau tanpa internet, dan bebas biaya langganan selamanya.
            </p>
          </div>

          {/* MIDDLE OPEN STAGE: Unobstructed view of the character & products in the video */}
          <div className="hero-v2-middle-spacer" aria-hidden="true"></div>

          {/* BOTTOM AREA: Only the 2 Clean CTA Buttons */}
          <div className="hero-v2-bottom">
            <div className="hero-v2-cta-row">
              <a href="#harga" className="btn-primary hero-v2-btn-primary" id="hero-cta">
                Mulai Sekarang
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button
                type="button"
                onClick={() =>
                  handleOpenCheckout(
                    'Coba Gratis 1 Hari ~ AsistenToko',
                    'Rasakan langsung kemudahan semua fitur AsistenToko selama 1 hari penuh',
                    CHECKOUT_LINKS.freeTrial,
                    'Free Trial 1 Hari'
                  )
                }
                className="btn-ghost hero-v2-btn-trial"
              >
                Coba Gratis 1 Hari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK ACCESS BAR (BUKU PANDUAN & DOWNLOAD APK ANDROID) ===== */}
      <div className="hero-quick-bar">
        <div className="container hero-quick-bar-inner">
          {/* Buku Panduan AsistenToko */}
          <div className="hero-guide-widget hero-quick-guide">
            <div
              className="guide-widget-main"
              onClick={() => setIsPdfModalOpen(true)}
              role="button"
              tabIndex={0}
              title="Buka Preview Buku Panduan AsistenToko"
            >
              <div className="guide-widget-icon-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="guide-widget-svg"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span className="guide-pulse-dot"></span>
              </div>
              <div className="guide-widget-text">
                <div className="guide-widget-badge-row">
                  <span className="guide-badge-pill">Panduan Resmi</span>
                  <span className="guide-badge-size">Edisi Terbaru</span>
                </div>
                <div className="guide-widget-heading">Buku Panduan AsistenToko</div>
                <div className="guide-widget-sub">Pelajari alur &amp; fitur lengkap aplikasi</div>
              </div>
            </div>
            <div className="guide-widget-actions">
              <button
                type="button"
                onClick={() => setIsPdfModalOpen(true)}
                className="guide-btn guide-btn-preview"
                title="Lihat preview panduan langsung"
                id="guide-preview-btn-desktop"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview</span>
              </button>
              <a
                href={PDF_GUIDE_URL}
                download={PDF_FILE_NAME}
                className="guide-btn guide-btn-download"
                title="Download Buku Panduan PDF"
                id="guide-download-btn-desktop"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Download Aplikasi (Android APK) */}
          <div className="hero-quick-apk">
            <div className="hero-quick-apk-info">
              <div className="hero-quick-apk-title">✅ Tersedia APK Android &amp; Web Semua HP</div>
              <div className="hero-quick-apk-sub">Bisa juga langsung dibuka lewat browser Chrome di HP/Laptop.</div>
            </div>
            <a
              href="/AsistenToko.apk"
              download="AsistenToko.apk"
              className="btn-primary hero-quick-apk-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Aplikasi (Android APK)
            </a>
          </div>
        </div>
      </div>

      {/* ===== TICKER ===== */}
      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-set">
            <span className="ticker-item">🏪 Warung Kelontong &amp; Sembako</span>
            <span className="ticker-item">🛒 Minimarket &amp; Grosir</span>
            <span className="ticker-item">🍰 Toko Kue &amp; Roti</span>
            <span className="ticker-item">🥬 Warung Sayur &amp; Barang Curah</span>
            <span className="ticker-item">💊 Apotek &amp; Toko Obat</span>
            <span className="ticker-item">👔 Toko Pakaian</span>
            <span className="ticker-item">📱 Counter Pulsa &amp; Aksesoris</span>
            <span className="ticker-item">🔧 Toko Bangunan &amp; Alat Listrik</span>
          </div>
          <div className="ticker-set" aria-hidden="true">
            <span className="ticker-item">🏪 Warung Kelontong &amp; Sembako</span>
            <span className="ticker-item">🛒 Minimarket &amp; Grosir</span>
            <span className="ticker-item">🍰 Toko Kue &amp; Roti</span>
            <span className="ticker-item">🥬 Warung Sayur &amp; Barang Curah</span>
            <span className="ticker-item">💊 Apotek &amp; Toko Obat</span>
            <span className="ticker-item">👔 Toko Pakaian</span>
            <span className="ticker-item">📱 Counter Pulsa &amp; Aksesoris</span>
            <span className="ticker-item">🔧 Toko Bangunan &amp; Alat Listrik</span>
          </div>
        </div>
      </div>

      {/* ===== INTERACTIVE FEATURE HUB (EXACT IMAGE-5 UI) ===== */}
      <InteractiveFeatureHub onOpenCheckout={handleOpenCheckout} />

      {/* ===== STATS ===== */}
      <section className="stats-section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">📈 Terbukti Membantu UMKM</div>
            <h2 className="section-title">
              Dipercaya ribuan pemilik toko
              <br />
              <span style={{ color: 'var(--green)' }}>di seluruh Indonesia</span>
            </h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal reveal-delay-1">
              <div className="stat-emoji">🏪</div>
              <div className="stat-num">3.200+</div>
              <div className="stat-label">Pemilik Toko Terbantu</div>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <div className="stat-emoji">💳</div>
              <div className="stat-num">Rp 12M+</div>
              <div className="stat-label">Transaksi Toko Tercatat</div>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <div className="stat-emoji">⭐</div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Merasa Toko Lebih Rapi</div>
            </div>
            <div className="stat-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="stat-emoji">⚡</div>
              <div className="stat-num">Detik</div>
              <div className="stat-label">Kecepatan Scan Kasir</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / SOLUTION ===== */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="reveal">
              <div className="problem-badge">😰 Masalah yang sering bikin pusing pemilik toko...</div>
              <h2 className="problem-title">
                Toko ramai pembeli,
                <br />
                tapi uang &amp; stok
                <br />
                <em>sering gak cocok?</em>
              </h2>
              <div className="pain-list">
                <div className="pain-item">
                  <span className="pain-emoji">🤯</span>
                  <p className="pain-text">
                    <strong>Bingung hitung stok eceran vs dus:</strong> Beli barang pakai Dus/Renceng, dijual eceran per biji. Akhirnya gak tahu sisa stok di rak masih berapa.
                  </p>
                </div>
                <div className="pain-item">
                  <span className="pain-emoji">📒</span>
                  <p className="pain-text">
                    <strong>Catatan kasbon tetangga berantakan:</strong> Buku hutang terselip, lupa siapa yang sudah jatuh tempo, dan gak enak hati waktu mau nagih.
                  </p>
                </div>
                <div className="pain-item">
                  <span className="pain-emoji">🫣</span>
                  <p className="pain-text">
                    <strong>Was-was waktu ninggal toko ke karyawan:</strong> Takut uang laci kurang saat tutup toko, atau karyawan mengintip harga modal &amp; keuntungan Anda.
                  </p>
                </div>
                <div className="pain-item">
                  <span className="pain-emoji">🐌</span>
                  <p className="pain-text">
                    <strong>Pelayanan lambat karena barang tanpa barcode:</strong> Jual beras ecer, gorengan, atau sayur harus diingat-ingat harganya satu per satu.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="solution-box">
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>🤖</div>
                <h3>Bereskan Semuanya Hanya dari 1 HP Anda!</h3>
                <p>
                  AsistenToko dirancang khusus agar langsung mudah dipakai oleh siapa saja—bahkan bagi yang belum pernah memakai aplikasi kasir sekalipun.
                </p>
                <div className="solution-points">
                  <div className="solution-point">
                    <span className="sol-check">✓</span>
                    <span className="sol-text">
                      <strong>Scan Barang Tanpa Barcode:</strong> Arahkan kamera HP ke barang curah atau kemasan, harga langsung muncul otomatis.
                    </span>
                  </div>
                  <div className="solution-point">
                    <span className="sol-check">✓</span>
                    <span className="sol-text">
                      <strong>Potong Stok Dus ke Eceran Otomatis:</strong> Beli per Dus, jual per Sachet/Pcs—sistem yang hitung sisa stoknya.
                    </span>
                  </div>
                  <div className="solution-point">
                    <span className="sol-check">✓</span>
                    <span className="sol-text">
                      <strong>Rahasia Modal Terkunci dari Kasir:</strong> Staf kasir punya PIN sendiri, tidak bisa melihat modal &amp; laba bersih Anda.
                    </span>
                  </div>
                  <div className="solution-point">
                    <span className="sol-check">✓</span>
                    <span className="sol-text">
                      <strong>Tagih Kasbon via WhatsApp 1-Klik:</strong> Kirim pengingat tagihan sopan ke WA pelanggan tanpa ketik manual.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES (UPDATED TO MATCH NEW PDF GUIDE, SIMPLE & HIGH CONVERSION) ===== */}
      <section className="features-section" id="fitur">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">✨ Fitur Lengkap &amp; Praktis</div>
            <h2 className="section-title">
              Semua yang toko Anda butuhkan
              <br />
              <span style={{ color: 'var(--green)' }}>untuk naik kelas &amp; makin untung</span>
            </h2>
            <p className="section-sub">
              Tanpa istilah rumit yang membingungkan. Setiap fitur dibuat untuk menghemat waktu Anda dan mengamankan uang toko.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <span className="feature-badge">⭐ Paling Dicari</span>
              <div className="feature-top">
                <div className="feature-icon-wrap">📸</div>
                <h3>3 Cara Input Kasir + Kamera AI</h3>
              </div>
              <p>
                Barang tanpa barcode? Scan pakai <strong>Kamera AI</strong>. Barang kemasan? Scan kode batang pakai kamera HP atau <strong>Alat Scanner USB/Bluetooth</strong>. Mau ketik manual juga muncul dalam sekejap!
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-1">
              <span className="feature-badge" style={{ background: '#046c4e' }}>
                🔥 Otomatis
              </span>
              <div className="feature-top">
                <div className="feature-icon-wrap">📦</div>
                <h3>Beli Dus, Jual Eceran (Multi-Satuan)</h3>
              </div>
              <p>
                Kulakan beli pakai Dus, Renceng, atau Karung, lalu dijual eceran per Pcs/Bungkus? Sistem <strong>otomatis menghitung sisa stok eceran</strong> dan memperbarui harga modal rata-rata Anda!
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-top">
                <div className="feature-icon-wrap">🔒</div>
                <h3>Akun Kasir Terpisah &amp; Sensor Modal</h3>
              </div>
              <p>
                Buat akun khusus untuk <strong>Kasir dan Staf Gudang</strong> dengan PIN masing-masing. Angka harga modal kulakan dan keuntungan bersih toko <strong>otomatis disembunyikan</strong> dari layar karyawan.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-top">
                <div className="feature-icon-wrap">💬</div>
                <h3>Buku Kasbon &amp; Tagih WA Sekali Klik</h3>
              </div>
              <p>
                Catat pelanggan yang hutang lengkap dengan batas jatuh tempo. Cukup tekan 1 tombol untuk mengirim <strong>pesan pengingat WhatsApp yang sopan</strong>, terima cicilan, dan cetak struk pelunasan.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-top">
                <div className="feature-icon-wrap">💵</div>
                <h3>Kontrol Uang Laci (Buka &amp; Tutup Shift)</h3>
              </div>
              <p>
                Saat buka toko kasir mengisi modal uang kembalian, dan saat tutup toko wajib menghitung uang fisik di laci. Sistem langsung menampilkan apakah <strong>uang kas pas, kurang, atau lebih</strong>!
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-top">
                <div className="feature-icon-wrap">📋</div>
                <h3>Cek Stok Rak (Opname) Anti-Curang</h3>
              </div>
              <p>
                Saat cek stok barang, staf hanya bisa mengisi jumlah fisik di rak tanpa tahu angka di sistem. Anda sebagai Pemilik yang meninjau <strong>selisih barang dan nilai rupiahnya</strong> sebelum disetujui.
              </p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-top">
                <div className="feature-icon-wrap">🖨️</div>
                <h3>Struk Bluetooth, Nota WA &amp; Mode Offline</h3>
              </div>
              <p>
                Cetak struk ukuran 58mm/80mm ke printer Bluetooth atau kirim struk digital ke WA pembeli. <strong>Internet sedang mati?</strong> Kasir tetap bisa melayani dan cetak struk tanpa hambatan!
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-top">
                <div className="feature-icon-wrap">🎁</div>
                <h3>Poin Pelanggan, Voucher &amp; Paket Hemat</h3>
              </div>
              <p>
                Simpan kontak pelanggan, beri poin otomatis setiap belanja, buat kupon diskon, hingga bikin <strong>Paket Bundling Hemat</strong> yang otomatis memotong stok tiap barang penyusunnya.
              </p>
            </div>

            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-top">
                <div className="feature-icon-wrap">📊</div>
                <h3>Laporan Laba Bersih, Excel &amp; Cetak Barcode</h3>
              </div>
              <p>
                Pantau omset &amp; laba bersih (bisa pilih tanggal suka-suka), sembunyikan saldo dengan <strong>Ikon Mata</strong>, upload ratusan produk lewat <strong>Excel</strong>, dan cetak stiker barcode sendiri!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO TUTORIAL ===== */}
      <section className="video-section" style={{ padding: '60px 0' }}>
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label">🎥 Lihat Aksinya Langsung</div>
            <h2 className="section-title">
              Semudah Ini Memakai
              <br />
              <span style={{ color: 'var(--green)' }}>AsistenToko Sehari-hari</span>
            </h2>
            <p className="section-sub">
              Tonton video singkat bagaimana cepatnya melayani pembeli dan mencatat barang di AsistenToko.
            </p>
          </div>
          <div
            className="video-container reveal"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              aspectRatio: '9/16',
              background: '#000',
              cursor: 'pointer',
              maxWidth: '360px',
              margin: '0 auto',
            }}
            onClick={() => setIsVideoPlaying(true)}
          >
            {!isVideoPlaying ? (
              <div style={{ width: '100%', height: '100%', position: 'relative' }} className="thumbnail-wrapper">
                <img
                  src="/tutor_thumbnail.webp"
                  alt="Thumbnail Tutorial AsistenToko"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '84px',
                    height: '84px',
                    background: 'var(--green)',
                    borderRadius: '50%',
                    border: '4px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 40px rgba(22, 163, 74, 0.9), 0 8px 32px rgba(0, 0, 0, 0.5)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
                >
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: '8px' }}
                  >
                    <path d="M7 6v12l11-6z" />
                  </svg>
                </div>
              </div>
            ) : (
              <video
                src="/tutor_asistentoko.mp4"
                controls
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain', outline: 'none' }}
              ></video>
            )}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-section" id="cara-kerja">
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label">🚀 Langsung Jalan Tanpa Ribet</div>
            <h2 className="section-title">
              Siap dipakai jualan
              <br />
              <span style={{ color: 'var(--green)' }}>hanya dalam 3 langkah mudah</span>
            </h2>
          </div>
          <div className="how-steps">
            <div className="how-step reveal">
              <div>
                <div className="step-num-big">01</div>
                <h3>Pilih Paket &amp; Masuk Pakai Gmail</h3>
                <p>
                  Pilih paket yang sesuai untuk toko Anda, lalu pastikan mengisi <strong>alamat Gmail aktif</strong> saat pembayaran. Setelah itu cukup klik <strong>"Masuk dengan Google"</strong>—toko digital Anda langsung aktif detik itu juga!
                </p>
              </div>
              <div className="how-visual">
                <div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#dcfce7,#bbf7d0)' }}>
                  🔑
                </div>
              </div>
            </div>
            <div className="how-step reveal">
              <div className="how-visual" style={{ order: -1 }}>
                <div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)' }}>
                  📦
                </div>
              </div>
              <div>
                <div className="step-num-big">02</div>
                <h3>Masukkan Barang (Bisa Foto / Upload Excel)</h3>
                <p>
                  Tambahkan barang dagangan beserta harga modal, harga jual, dan satuan ecer/grosirnya. Punya ratusan barang? Tinggal <strong>upload file Excel</strong>, ratusan produk langsung tersimpan dalam hitungan detik!
                </p>
              </div>
            </div>
            <div className="how-step reveal" style={{ borderBottom: 'none' }}>
              <div>
                <div className="step-num-big">03</div>
                <h3>Scan Barang, Cetak Struk &amp; Pantau Untung</h3>
                <p>
                  Saat pembeli datang, tinggal scan pakai kamera atau alat barcode. Stok otomatis berkurang, struk tercetak via Bluetooth atau dikirim ke WA, dan laporan laba bersih langsung terhitung rapi!
                </p>
              </div>
              <div className="how-visual">
                <div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#bbf7d0,#86efac)' }}>
                  💰
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" id="testimoni">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">💬 Cerita Pemilik Toko</div>
            <h2 className="section-title">
              Mereka sudah merasakan
              <br />
              <span style={{ color: 'var(--green)' }}>betapa tenangnya punya AsistenToko.</span>
            </h2>
            <p className="section-sub">
              Dari warung sembako rumahan hingga toko grosir dengan beberapa kasir.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testi-card reveal">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Dulu pusing kalau beli kopi per dus terus dijual eceran per sachet, stoknya gak pernah ketahuan sisa berapa. Sekarang pakai AsistenToko, beli 5 dus otomatis masuk 600 sachet. Praktis banget!"
              </p>
              <div className="testi-author">
                <div className="testi-avatar">👩</div>
                <div>
                  <div className="testi-name">Ibu Siti Rahayu</div>
                  <div className="testi-role">Warung Sembako, Bekasi</div>
                </div>
              </div>
            </div>
            <div className="testi-card featured reveal reveal-delay-1">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Yang bikin saya langsung langganan Paket Business itu karena kasir gak bisa lihat harga modal saya, dan tiap tutup toko langsung ketahuan uang di laci pas atau kurang. Mau ninggal toko jadi tenang!"
              </p>
              <div className="testi-author">
                <div className="testi-avatar">👨</div>
                <div>
                  <div className="testi-name">Pak Budi Santoso</div>
                  <div className="testi-role">Minimarket &amp; Grosir, Surabaya</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Fitur tagih kasbon lewat WA sekali klik itu penyelamat! Gak perlu bingung ngerangkai kata-kata lagi karena pesannya udah sopan dan rapi. Banyak pelanggan langsung bayar."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">👩‍🦱</div>
                <div>
                  <div className="testi-name">Kak Nadia</div>
                  <div className="testi-role">Toko Kue &amp; Bahan Roti, Bandung</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Barang di toko saya banyak yang gak ada barcode-nya. Pakai fitur Scan Tanpa Barcode AI, tinggal arahkan kamera HP langsung kedeteksi barang dan harganya!"
              </p>
              <div className="testi-author">
                <div className="testi-avatar">🧑</div>
                <div>
                  <div className="testi-name">Mas Deni</div>
                  <div className="testi-role">Toko Kelontong, Jakarta</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-1">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Waktu cek stok bulanan (opname), karyawan tinggal isi jumlah barang di rak lewat HP mereka tanpa tahu stok sistem. Kalau ada barang hilang langsung ketahuan nilai rupiahnya."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">👩‍⚕️</div>
                <div>
                  <div className="testi-name">Ibu Rina</div>
                  <div className="testi-role">Apotek &amp; Toko Kosmetik, Yogyakarta</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">
                "Sinyal internet di ruko saya kadang suka mati, tapi kasir AsistenToko tetap jalan terus dan tetap bisa cetak struk Bluetooth. Begitu internet nyala, datanya otomatis tersimpan."
              </p>
              <div className="testi-author">
                <div className="testi-avatar">👷</div>
                <div>
                  <div className="testi-name">Pak Hendra</div>
                  <div className="testi-role">Toko Bangunan, Medan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="compare-section" style={{ display: 'block' }}>
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#86efac' }}>
              ⚖️ Bandingkan Sendiri
            </div>
            <h2 className="section-title">
              AsistenToko vs <span style={{ color: '#9ca3af' }}>Cara Manual / Kasir Biasa</span>
            </h2>
          </div>
          <div className="compare-table reveal" style={{ overflowX: 'auto' }}>
            <div className="compare-head" style={{ minWidth: '580px' }}>
              <div className="compare-head-cell aspect">Kebutuhan Harian Toko</div>
              <div className="compare-head-cell us">🤖 AsistenToko</div>
              <div className="compare-head-cell them">📓 Buku / Kasir Biasa</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Barang Tanpa Barcode (Curah/Kue/Ecer)</div>
              <div className="compare-cell us">✅ Kamera AI langsung kenali barang</div>
              <div className="compare-cell them">❌ Harus hafal / cari manual lama</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Beli Kulakan Dus, Jual Eceran (Pcs)</div>
              <div className="compare-cell us">✅ Stok &amp; modal dikonversi otomatis</div>
              <div className="compare-cell them">❌ Hitung kalikan sendiri di kepala</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Rahasia Harga Modal &amp; Laba Bersih</div>
              <div className="compare-cell us">✅ Disensor otomatis dari akun Kasir</div>
              <div className="compare-cell them">❌ Karyawan bisa ikut melihat modal</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Tagih Kasbon Pelanggan Jatuh Tempo</div>
              <div className="compare-cell us">✅ Kirim WA sopan otomatis 1-klik</div>
              <div className="compare-cell them">❌ Lupa nagih / sungkan ketik chat</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Cek Uang Laci Saat Pergantian Shift</div>
              <div className="compare-cell us">✅ Otomatis hitung selisih kas fisik</div>
              <div className="compare-cell them">❌ Rawan selisih &amp; tidak terlacak</div>
            </div>
            <div className="compare-row" style={{ minWidth: '580px' }}>
              <div className="compare-cell aspect">Saat Internet / WiFi Toko Mati</div>
              <div className="compare-cell us">✅ Mode Offline otomatis tetap jalan</div>
              <div className="compare-cell them">❌ Aplikasi kasir lain langsung macet</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION (EXACT MATCH TO IMAGES 1-4 + ADDONS + FREE TRIAL) ===== */}
      <section className="pricing-section" id="harga">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">💰 Pilihan Paket Resmi AsistenToko</div>
            <h2 className="section-title">
              Investasi Kecil untuk Toko yang
              <br />
              <span style={{ color: 'var(--green)' }}>Rapi, Aman, dan Menguntungkan</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: '620px' }}>
              Pilih paket sesuai skala toko Anda. Semua paket langsung aktif otomatis setelah pembayaran menggunakan{' '}
              <strong>email Gmail Anda</strong>.
            </p>
          </div>

          {/* Main 2-Column Layout: Paket Business (Left) + Paket Basic Bulanan & Lifetime (Right) */}
          <div className="pricing-v2-layout reveal">
            {/* LEFT COLUMN: PAKET BUSINESS (Matches Images 1, 2, 3) */}
            <div className="biz-pricing-card">
              <div className="biz-top-floating-badge">
                <span>✨</span>
                <span>Paket Business (Paling Populer &amp; Lengkap)</span>
              </div>

              <div className="biz-card-header">
                <div>
                  <h3 className="biz-card-title">Paket Business</h3>
                  <p className="biz-card-sub">
                    Untuk toko berkembang dengan tim staf kasir dan staf gudang
                  </p>
                </div>
                <span className="biz-role-pill">Multi-User</span>
              </div>

              {/* 3-Tab Duration Switcher (1 Bulan | 3 Bulan | 1 Tahun) */}
              <div className="biz-duration-tabs" role="tablist" aria-label="Pilih durasi Paket Business">
                <button
                  type="button"
                  role="tab"
                  aria-selected={bizDuration === '1_bulan'}
                  className={`biz-tab-btn ${bizDuration === '1_bulan' ? 'active' : ''}`}
                  onClick={() => setBizDuration('1_bulan')}
                >
                  <span className="biz-tab-label">1 Bulan</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={bizDuration === '3_bulan'}
                  className={`biz-tab-btn ${bizDuration === '3_bulan' ? 'active' : ''}`}
                  onClick={() => setBizDuration('3_bulan')}
                >
                  <span className="biz-tab-mini-badge hemat">Hemat</span>
                  <span className="biz-tab-label">3 Bulan</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={bizDuration === '1_tahun'}
                  className={`biz-tab-btn ${bizDuration === '1_tahun' ? 'active' : ''}`}
                  onClick={() => setBizDuration('1_tahun')}
                >
                  <span className="biz-tab-mini-badge best">Best Value 🔥</span>
                  <span className="biz-tab-label">1 Tahun</span>
                </button>
              </div>

              {/* Dynamic Price Display */}
              <div className="biz-price-block">
                <div className="biz-price-row">
                  <span className="biz-price-amount">{activeBizPlan.price}</span>
                  <span className="biz-price-period">{activeBizPlan.period}</span>
                </div>
                <div className="biz-price-subnote">{activeBizPlan.subnote}</div>
              </div>

              {/* Dynamic Business CTA Button (Triggers Gmail Popup) */}
              <button
                type="button"
                className="biz-cta-btn"
                onClick={() =>
                  handleOpenCheckout(
                    activeBizPlan.modalTitle,
                    activeBizPlan.modalPrice,
                    activeBizPlan.url,
                    'Paket Business (Multi-User)'
                  )
                }
              >
                <span>{activeBizPlan.btnText}</span>
              </button>

              <div className="biz-divider"></div>

              {/* 10 Features of Paket Business */}
              <div className="biz-feature-list">
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Multi-User Role:</strong> Owner, Kasir, dan Staf Gudang (Bisa invite banyak kasir)
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>AI Vision Scan Unlimited</strong> (Kamera AI untuk kenali produk &amp; nota)
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Kerahasiaan Data:</strong> HPP (Modal) dan Margin Laba disembunyikan otomatis dari Kasir
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Audit Trail &amp; Shift:</strong> Pencatatan identitas kasir &amp; cek uang fisik laci tiap shift
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Hardware POS:</strong> Dukungan Scanner Barcode &amp; Cetak Struk Thermal Bluetooth
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>CRM &amp; Buku Kasbon:</strong> Database Kontak WA, Riwayat Belanja, &amp; Tagih Kasbon WA 1-Klik
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Sistem Loyalitas:</strong> Poin Belanja &amp; Voucher Diskon Toko
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Produk Bundling &amp; Multi-Satuan:</strong> Paket hemat &amp; konversi Dus ke Eceran otomatis
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Laporan Penjualan, Laba Rugi, &amp; Rekapitulasi Kasir Lengkap</strong> (Ekspor PDF &amp; Excel)
                  </span>
                </div>
                <div className="biz-feature-item">
                  <span className="biz-feature-check">✓</span>
                  <span>
                    <strong>Prioritas Support WhatsApp Langsung</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PAKET BASIC BULANAN & PAKET BASIC LIFETIME (Matches Image 4) */}
            <div className="basic-cards-stack">
              {/* Card 1: Paket Basic (Bulanan) */}
              <div className="basic-tier-card">
                <div>
                  <div className="basic-card-top">
                    <div>
                      <h3 className="basic-card-title">Paket Basic (Bulanan)</h3>
                      <p className="basic-card-sub">
                        Cocok untuk toko mandiri yang dikelola owner sendiri
                      </p>
                    </div>
                    <span className="basic-pill-gray">Single User (1 Device)</span>
                  </div>

                  <div className="basic-price-row">
                    <span className="basic-price-amount">Rp 99.000</span>
                    <span className="basic-price-period">/ bulan</span>
                  </div>

                  <div className="basic-feature-list">
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>1 Akun Pengguna (Owner &amp; Kasir Tunggal, 1 Device aktif)</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>AI Vision Scan Terintegrasi (Scan produk tanpa barcode)</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>Fitur Kasir Cepat, Buku Kasbon, &amp; Cetak Struk Bluetooth</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>Katalog Produk, Varian Satuan (Dus/Ecer), &amp; Barcode Produk</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>CRM Toko: Database Pelanggan, Poin, &amp; Voucher Promo</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check">✓</span>
                      <span>Laporan Penjualan &amp; Rekap Keuangan</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="basic-outline-btn"
                  onClick={() =>
                    handleOpenCheckout(
                      'Paket Basic 1 Bulan ~ AsistenToko',
                      'Rp 99.000 / bulan (Single User - 1 Perangkat)',
                      CHECKOUT_LINKS.basicMonthly,
                      'Paket Basic Bulanan'
                    )
                  }
                >
                  Pilih Basic Bulanan (Rp 99.000)
                </button>
              </div>

              {/* Card 2: Paket Basic Lifetime */}
              <div className="basic-tier-card lifetime-variant">
                <div>
                  <div className="basic-card-top">
                    <div>
                      <h3 className="basic-card-title">Paket Basic Lifetime</h3>
                      <p className="basic-card-sub">
                        Sekali bayar untuk penggunaan selamanya tanpa biaya langganan berulang
                      </p>
                    </div>
                    <div className="basic-badges-col">
                      <span className="basic-pill-amber">Single User (1 Device)</span>
                      <span className="basic-pill-amber" style={{ background: '#fef3c7' }}>
                        Beli Putus
                      </span>
                    </div>
                  </div>

                  <div className="basic-price-row">
                    <span className="basic-price-amount amber">Rp 149.000</span>
                    <span className="basic-price-period">/ sekali bayar</span>
                  </div>

                  <div className="basic-feature-list">
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>
                        <strong>Akses Seumur Hidup</strong> (Bebas Tagihan Bulanan / Tanpa Biaya Berulang)
                      </span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>1 Akun Pengguna (Single User, 1 Device aktif)</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>Fitur Kasir Cepat, Buku Kasbon, &amp; Cetak Struk Bluetooth</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>Scan Barcode Standar &amp; Hardware Barcode Scanner</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>Katalog Produk, Stok Gudang, &amp; Varian Satuan</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>CRM Toko: Database Pelanggan, Poin, &amp; Voucher Promo</span>
                    </div>
                    <div className="basic-feature-item">
                      <span className="basic-check amber">✓</span>
                      <span>Dapat upgrade ke AI Scan / Business kapan saja via Add-on</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="basic-amber-btn"
                  onClick={() =>
                    handleOpenCheckout(
                      'Paket Basic Lifetime ~ AsistenToko',
                      'Rp 149.000 / sekali bayar seumur hidup (Beli Putus)',
                      CHECKOUT_LINKS.basicLifetime,
                      'Paket Basic Lifetime'
                    )
                  }
                >
                  Beli Paket Basic Lifetime (Rp 149.000)
                </button>
              </div>
            </div>
          </div>

          {/* FREE TRIAL 1 HARI BANNER (Tetap Dipertahankan) */}
          <div className="trial-highlight-banner reveal">
            <div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.16)', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, marginBottom: '8px' }}>
                🎁 Masih Ingin Coba Dulu Sebelum Berlangganan?
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '4px' }}>
                Coba Gratis 1 Hari — Rasakan Sendiri Semua Fiturnya!
              </h3>
              <p style={{ fontSize: '14px', color: '#dcfce7', margin: 0 }}>
                Coba langsung fitur Scan Kamera, Kasir, dan Laporan di HP Anda hari ini juga.
              </p>
            </div>
            <button
              type="button"
              className="btn-white"
              style={{ flexShrink: 0, padding: '14px 28px', fontSize: '15px' }}
              onClick={() =>
                handleOpenCheckout(
                  'Coba Gratis 1 Hari ~ AsistenToko',
                  'Uji coba 1 hari penuh semua fitur AsistenToko',
                  CHECKOUT_LINKS.freeTrial,
                  'Free Trial 1 Hari'
                )
              }
            >
              Coba Gratis 1 Hari Sekarang →
            </button>
          </div>
        </div>
      </section>

      {/* ===== AFFILIATE PARTNERSHIP HIGHLIGHT (FROM PDF PHASE 10) ===== */}
      <section style={{ padding: '40px 0 80px', background: '#ffffff' }}>
        <div className="container-sm">
          <div
            className="reveal"
            style={{
              background: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
              border: '1.5px solid #86efac',
              borderRadius: '28px',
              padding: '36px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '28px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 380px' }}>
              <div className="section-label" style={{ background: '#ffffff', marginBottom: '12px' }}>
                🤝 Program Kemitraan Afiliasi Auto-Tracking
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', marginBottom: '10px', lineHeight: 1.25 }}>
                Rekomendasikan ke Sesama Pedagang, Dapatkan Komisi 20% hingga 30%!
              </h3>
              <p style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.65, margin: 0 }}>
                Dilengkapi teknologi <strong>Link Afiliasi Otomatis</strong>—teman yang Anda ajak tidak perlu repot mengetik kode referral manual. Begitu mereka berlangganan, komisi langsung masuk ke saldo Anda dan siap ditarik ke rekening bank!
              </p>
            </div>
            <Link
              to="/program-afiliasi"
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '14.5px', flexShrink: 0 }}
            >
              Pelajari Program Afiliasi →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section" id="faq">
        <div className="container-xs">
          <div className="section-head reveal">
            <div className="section-label">❓ Tanya Jawab (FAQ)</div>
            <h2 className="section-title">
              Pertanyaan yang
              <br />
              <span style={{ color: 'var(--green)' }}>sering ditanyakan calon pembeli</span>
            </h2>
          </div>
          <div className="faq-list reveal">
            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Kenapa saat membeli wajib mengisi alamat email Gmail yang aktif?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  Karena alamat Gmail (@gmail.com) yang Anda tulis saat pembayaran akan langsung menjadi identitas akun toko Anda. Setelah bayar, Anda cukup klik tombol <strong>"Masuk dengan Google"</strong> menggunakan Gmail tersebut tanpa perlu repot membuat kata sandi baru.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Apakah harus beli alat scan barcode atau mesin kasir mahal?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  Tidak perlu! Kamera HP yang Anda pegang sekarang sudah cukup untuk scan barcode kemasan maupun mengenali barang tanpa barcode (dengan fitur Scan AI). Namun jika Anda sudah punya alat scanner barcode USB/Bluetooth dan printer struk Bluetooth, AsistenToko juga langsung mendukungnya.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Apa bedanya Paket Basic, Basic Lifetime, dan Paket Business?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  <strong>Paket Basic Bulanan (Rp 99.000)</strong> cocok untuk toko yang dijaga sendiri oleh pemilik (1 perangkat) dan sudah termasuk Scan AI. <strong>Paket Basic Lifetime (Rp 149.000)</strong> cukup sekali bayar untuk selamanya (1 perangkat, scan barcode standar, bisa tambah Add-on kapan saja). Sedangkan <strong>Paket Business</strong> dirancang untuk toko yang punya karyawan karena mendukung banyak akun (Owner, Kasir, Gudang), sensor rahasia modal (HPP), dan rekap shift kasir.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Kalau toko dijaga karyawan, apakah karyawan bisa melihat keuntungan saya?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  Tidak bisa! Pada Paket Business, Anda bisa membuatkan akun khusus Kasir dan Staf Gudang dengan PIN masing-masing. Sistem otomatis menyembunyikan angka harga modal (HPP) dan laba bersih dari layar mereka.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Bagaimana kalau sinyal internet atau WiFi di toko saya sedang mati?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  Jangan khawatir! AsistenToko dilengkapi <strong>Mode Offline Otomatis</strong>. Kasir tetap bisa melayani transaksi dan mencetak struk Bluetooth seperti biasa, lalu data akan tersinkronisasi otomatis saat internet kembali menyala.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-btn">
                <span className="faq-q">Saya punya ratusan barang di toko, apakah harus input satu per satu?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-body">
                <p className="faq-ans">
                  Tidak perlu ketik satu-satu di HP. Anda bisa mengunduh template Excel yang kami sediakan, mengisi daftar barang sekaligus di komputer/laptop, lalu mengunggahnya ke AsistenToko—ratusan barang langsung masuk dalam hitungan detik!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="final-cta-content">
          <span className="final-icon">🤖</span>
          <h2>
            Toko Anda Terlalu Berharga
            <br />
            untuk Dikelola Cara Lama.
          </h2>
          <p>
            Mulai hari ini, biarkan AsistenToko yang mengurus hitungan kasir, sisa stok eceran, catatan kasbon, hingga laporan laba bersih toko Anda secara otomatis.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#harga" className="btn-white" style={{ fontSize: '17px', padding: '16px 36px' }} id="final-cta">
              Pilih Paket Sekarang
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() =>
                handleOpenCheckout(
                  'Coba Gratis 1 Hari ~ AsistenToko',
                  'Uji coba penuh semua fitur AsistenToko selama 1 hari',
                  CHECKOUT_LINKS.freeTrial,
                  'Free Trial 1 Hari'
                )
              }
              className="btn-ghost"
              style={{
                fontSize: '17px',
                padding: '16px 32px',
                borderColor: 'rgba(255,255,255,0.45)',
                color: 'white',
                background: 'rgba(255,255,255,0.12)',
              }}
            >
              🎁 Coba Gratis 1 Hari
            </button>
            <a
              href="https://wa.me/6285121963721?text=Haloo%20kak,%20aku%20mau%20nanya%20soal%20AsistenToko"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                fontSize: '17px',
                padding: '16px 30px',
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              Tanya CS via WhatsApp
            </a>
          </div>
          <p className="final-sub" style={{ paddingTop: '40px' }}>
            Login 1-Klik dengan Gmail · Langsung Aktif · Bisa Dipakai di HP, Tablet, &amp; Laptop
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-row">
                <img src="/logo-asistentoko.webp" alt="AsistenToko Logo" style={{ height: '38px' }} />
                <span className="footer-logo-text">AsistenToko</span>
              </div>
              <p className="footer-tagline">
                Solusi kasir pintar &amp; manajemen toko terpadu untuk pemilik UMKM Indonesia yang ingin bisnis lebih mudah, rapi, dan menguntungkan.
              </p>
            </div>
            <div className="footer-links-wrapper">
              <div>
                <div className="footer-col-title">Navigasi</div>
                <a href="#simulasi-interaktif" className="footer-link">
                  Simulasi Fitur
                </a>
                <a href="#fitur" className="footer-link">
                  Fitur Lengkap
                </a>
                <a href="#harga" className="footer-link">
                  Harga &amp; Paket
                </a>
                <a href="#cara-kerja" className="footer-link">
                  Cara Kerja
                </a>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </div>
              <div>
                <div className="footer-col-title">Panduan &amp; Layanan</div>
                <button
                  type="button"
                  onClick={() => setIsPdfModalOpen(true)}
                  className="footer-link"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  Buku Panduan Resmi (PDF)
                </button>
                <Link to="/program-afiliasi" className="footer-link">
                  Program Afiliasi (Komisi s/d 30%)
                </Link>
                <a
                  href="https://wa.me/6285121963721?text=Haloo%20kak,%20aku%20mau%20nanya%20soal%20AsistenToko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  WhatsApp CS (+62 851-2196-3721)
                </a>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="footer-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} AsistenToko. <br className="mobile-break" />
              Hak cipta dilindungi.
            </span>
            <span>Dibuat dengan ❤️ untuk pemilik toko Indonesia.</span>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WA (HIDDEN IN HERO SECTION SO HERO REMAINS 100% CLEAN) ===== */}
      {!isInHero && (
        <>
          <style>{`
            .wa-float {
              position: fixed; bottom: 30px; right: 30px;
              background-color: #25D366; color: white; border-radius: 50%;
              width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; transition: transform 0.3s, opacity 0.25s;
            }
            .wa-float:hover { transform: scale(1.1); }
          `}</style>
          <a
            href="https://wa.me/6285121963721?text=Haloo%20kak,%20aku%20mau%20nanya%20soal%20AsistenToko"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-float"
            aria-label="Hubungi Admin WhatsApp"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </>
      )}

      {/* ===== PDF GUIDE MODAL ===== */}
      <PdfGuideModal isOpen={isPdfModalOpen} onClose={() => setIsPdfModalOpen(false)} />

      {/* ===== CHECKOUT GMAIL WARNING MODAL ===== */}
      <CheckoutGmailModal plan={selectedCheckout} onClose={() => setSelectedCheckout(null)} />

      {/* ===== FLOATING SOCIAL PROOF & SCARCITY COUNTDOWN ===== */}
      <ConversionBoosters />
    </div>
  )
}
