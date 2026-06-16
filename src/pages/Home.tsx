import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const APP_URL = 'https://app.asistentoko.com'

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null)

  // CTA links are now hardcoded in the JSX

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
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  // ===== FAQ Toggle =====
  const setupFAQ = useCallback(() => {
    const items = document.querySelectorAll('.faq-item')
    const handlers: Array<{ btn: Element; handler: () => void }> = []
    items.forEach(item => {
      const btn = item.querySelector('.faq-btn')
      if (!btn) return
      const handler = () => {
        const isOpen = item.classList.contains('open')
        items.forEach(i => i.classList.remove('open'))
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

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
    }, { threshold: 0.3 })

    const statsGrid = document.querySelector('.stats-grid')
    if (statsGrid) statsObserver.observe(statsGrid)
    return () => statsObserver.disconnect()
  }, [])

  // ===== Nav Active State =====
  const setupNavActive = useCallback(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            (link as HTMLElement).style.color = '';
            (link as HTMLElement).style.background = ''
          })
          const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`) as HTMLElement | null
          if (activeLink) {
            activeLink.style.color = 'var(--green)'
            activeLink.style.background = 'var(--green-light)'
          }
        }
      })
    }, { threshold: 0.4 })

    sections.forEach(s => activeObserver.observe(s))
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
    return () => cleanups.forEach(fn => fn?.())
  }, [setupCursorGlow, setupNavbarScroll, setupReveal, setupFAQ, setupCounters, setupNavActive])

  return (
    <div ref={appRef}>
      <div className="cursor-glow" id="cursorGlow"></div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">
            <img src="/logo-asistentoko.webp" alt="AsistenToko Logo" style={{ height: '38px' }} />
            <span className="nav-logo-text"><span style={{ color: '#0F5132' }}>Asisten</span><span style={{ color: '#16A34A' }}>Toko</span></span>
          </a>
          <div className="nav-links">
            <a href="#fitur" className="nav-link">Fitur</a>
            <a href="#cara-kerja" className="nav-link">Cara Kerja</a>
            <a href="#testimoni" className="nav-link">Testimoni</a>
            <a href="#harga" className="nav-link">Harga</a>
          </div>
          <div className="nav-actions">
            <a href="http://lynk.id/usahatokosembako/g7zr8vnlrv6e/checkout" className="nav-signin" style={{ color: 'var(--green)' }}>Coba Gratis</a>
            <a href={APP_URL} className="nav-signin" id="nav-signin">Masuk</a>
            <a href="#harga" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px' }} id="nav-cta">Mulai Sekarang →</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-orb1"></div>
        <div className="hero-orb2"></div>
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <div className="eyebrow-dot"></div>
                AI-Powered · Scan · Simple
              </div>
              <h1 className="hero-title">
                Pencatatan Instan,<br />
                Cukup <span className="highlight" style={{ lineHeight: '100px' }}>Scan</span> Produk<br />
                Tanpa Barcode.
              </h1>
              <p className="hero-desc">
                Arahkan kamera. Jual. Selesai. AsistenToko hadir 24/7 untuk mengenali produk lewat kamera HP. Transaksi
                lebih cepat, jualan lebih mudah.
              </p>
              <div className="hero-cta">
                <a href="#harga" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }} id="hero-cta">
                  Mulai Sekarang
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="http://lynk.id/usahatokosembako/g7zr8vnlrv6e/checkout" className="btn-ghost" style={{ fontSize: '16px', padding: '14px 28px' }}>Coba Gratis 1 Hari</a>
              </div>
              <div className="hero-badges" style={{ marginTop: '28px' }}>
                <div className="hero-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Login dengan Google
                </div>
                <div className="hero-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Langsung aktif
                </div>
                <div className="hero-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  Tanpa install aplikasi
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-float">
                <div className="phone-shell">
                  <div className="phone-screen">
                    <div className="phone-notch">
                      <span className="phone-notch-time">9:41</span>
                      <div className="phone-notch-dots">
                        <div className="phone-notch-dot"></div>
                        <div className="phone-notch-dot"></div>
                        <div className="phone-notch-dot active"></div>
                      </div>
                    </div>
                    <div className="phone-head">
                      <div className="phone-head-sub">Selamat pagi, Pak Ahmad 👋</div>
                      <div className="phone-head-name">Dashboard Toko</div>
                    </div>
                    <div className="phone-body">
                      <div className="pcard-main">
                        <div className="pcard-label">Penjualan Hari Ini</div>
                        <div className="pcard-value">Rp 1.240.000</div>
                        <div className="pcard-change">↑ +18% dari kemarin</div>
                      </div>
                      <div className="pcard-row">
                        <div className="pcard-small" style={{ background: '#fff8f0' }}>
                          <div className="pcard-label">Produk</div>
                          <div className="pcard-value" style={{ color: '#ea580c', fontSize: '15px' }}>48</div>
                        </div>
                        <div className="pcard-small" style={{ background: '#fff0f0' }}>
                          <div className="pcard-label">Stok Habis</div>
                          <div className="pcard-value" style={{ color: '#dc2626', fontSize: '15px' }}>3</div>
                        </div>
                      </div>
                      <div className="pchart">
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '30%' }}></div>
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '55%' }}></div>
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '40%' }}></div>
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '70%' }}></div>
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '45%' }}></div>
                        <div className="pchart-bar" style={{ background: '#0f7c44', height: '90%' }}></div>
                        <div className="pchart-bar" style={{ background: '#dcfce7', height: '60%' }}></div>
                      </div>
                    </div>
                    <div className="phone-nav-bar">
                      <div className="pnav-item"><div className="pnav-icon">📊</div><div className="pnav-label">Home</div></div>
                      <div className="pnav-item"><div className="pnav-icon">📦</div><div className="pnav-label">Produk</div></div>
                      <div className="pnav-center">🔍</div>
                      <div className="pnav-item"><div className="pnav-icon">💰</div><div className="pnav-label">Transaksi</div></div>
                      <div className="pnav-item"><div className="pnav-icon">⚙️</div><div className="pnav-label">Setting</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chip chip-trx">
                <div className="chip-label">Transaksi hari ini</div>
                <div className="chip-val green">+24 transaksi</div>
              </div>
              <div className="chip chip-stok">
                <div className="chip-label">⚠️ Perlu restock</div>
                <div className="chip-val orange">3 produk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-set">
            <span className="ticker-item">🏪 Warung Kelontong</span>
            <span className="ticker-item">🛒 Minimarket</span>
            <span className="ticker-item">🍳 Toko Sembako</span>
            <span className="ticker-item">👔 Toko Pakaian</span>
            <span className="ticker-item">💊 Apotek</span>
            <span className="ticker-item">🍰 Toko Kue</span>
            <span className="ticker-item">📱 Counter Pulsa</span>
            <span className="ticker-item">🔧 Toko Bangunan</span>
          </div>
          <div className="ticker-set" aria-hidden="true">
            <span className="ticker-item">🏪 Warung Kelontong</span>
            <span className="ticker-item">🛒 Minimarket</span>
            <span className="ticker-item">🍳 Toko Sembako</span>
            <span className="ticker-item">👔 Toko Pakaian</span>
            <span className="ticker-item">💊 Apotek</span>
            <span className="ticker-item">🍰 Toko Kue</span>
            <span className="ticker-item">📱 Counter Pulsa</span>
            <span className="ticker-item">🔧 Toko Bangunan</span>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">📈 Angka yang bicara</div>
            <h2 className="section-title">Dipercaya pemilik toko<br /><span style={{ color: 'var(--green)' }}>di seluruh Indonesia</span></h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card reveal reveal-delay-1"><div className="stat-emoji">🏪</div><div className="stat-num">3.200+</div><div className="stat-label">Pemilik Toko Aktif</div></div>
            <div className="stat-card reveal reveal-delay-2"><div className="stat-emoji">💳</div><div className="stat-num">Rp 12M+</div><div className="stat-label">Total Transaksi Dicatat</div></div>
            <div className="stat-card reveal reveal-delay-3"><div className="stat-emoji">⭐</div><div className="stat-num">98%</div><div className="stat-label">Kepuasan Pengguna</div></div>
            <div className="stat-card reveal" style={{ transitionDelay: '0.4s' }}><div className="stat-emoji">⚡</div><div className="stat-num">Detik</div><div className="stat-label">Waktu Scan Produk</div></div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM / SOLUTION ===== */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="reveal">
              <div className="problem-badge">😰 Masalah yang sangat familiar...</div>
              <h2 className="problem-title">
                Capek nyatat manual<br />dan gak tau stok<br /><em>masih berapa?</em>
              </h2>
              <div className="pain-list">
                <div className="pain-item"><span className="pain-emoji">📓</span><p className="pain-text">Buku catatan hilang atau tulisan yang susah dibaca besok paginya</p></div>
                <div className="pain-item"><span className="pain-emoji">🤔</span><p className="pain-text">Gak tau produk mana yang paling laris dan mana yang ngendap</p></div>
                <div className="pain-item"><span className="pain-emoji">😱</span><p className="pain-text">Tiba-tiba stok habis tanpa disadari, pelanggan langsung pergi</p></div>
                <div className="pain-item"><span className="pain-emoji">😴</span><p className="pain-text">Rekap akhir bulan bikin pusing dan makan waktu berjam-jam</p></div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="solution-box">
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>🤖</div>
                <h3>Saatnya punya Asisten yang kerja tanpa istirahat</h3>
                <p>AsistenToko bukan sekadar aplikasi kasir biasa, ini asisten cerdas yang belajar dari pola tokomu dan selalu siap 24/7.</p>
                <div className="solution-points">
                  <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">📱 Scan produk pakai kamera HP biasa, tanpa alat barcode mahal</span></div>
                  <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">🧠 AI kenali produk &amp; catat transaksi otomatis dalam hitungan detik</span></div>
                  <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">📊 Laporan penjualan, stok, &amp; laba bersih tersedia kapan saja</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features-section" id="fitur">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">✨ Fitur Lengkap</div>
            <h2 className="section-title">Semua yang toko kamu<br /><span style={{ color: 'var(--green)' }}>butuhkan, ada di sini</span></h2>
            <p className="section-sub">Dirancang khusus untuk pemilik toko yang ingin bisnis lebih rapi tanpa perlu belajar software yang rumit.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal"><span className="feature-badge">⭐ Unggulan</span><div className="feature-top"><div className="feature-icon-wrap">📸</div><h3>Scan Transaksi AI</h3></div><p>Arahkan kamera ke produk, AI mengenali barang, harga, dan jumlah secara otomatis. Checkout dalam hitungan detik, tanpa input manual.</p></div>
            <div className="feature-card reveal reveal-delay-1"><div className="feature-top"><div className="feature-icon-wrap">📦</div><h3>Stok Real-time</h3></div><p>Pantau semua stok produk secara langsung. Notifikasi otomatis saat stok mendekati batas minimum, tidak ada lagi stok habis yang tak disadari.</p></div>
            <div className="feature-card reveal reveal-delay-2"><div className="feature-top"><div className="feature-icon-wrap">📊</div><h3>Laporan &amp; Analitik</h3></div><p>Dashboard visual: grafik penjualan harian, produk terlaris, top keuntungan, dan distribusi kategori. Export laporan PDF kapanpun.</p></div>
            <div className="feature-card reveal"><div className="feature-top"><div className="feature-icon-wrap">🛒</div><h3>Scan Kulakan Pintar</h3></div><p>Scan produk saat belanja ke distributor. Stok otomatis bertambah, harga modal (HPP) dan harga jual bisa diperbarui sekaligus.</p></div>
            <div className="feature-card reveal reveal-delay-1"><div className="feature-top"><div className="feature-icon-wrap">🔍</div><h3>Stok Opname Digital</h3></div><p>Panduan langkah demi langkah untuk penghitungan fisik. Sistem otomatis mendeteksi selisih dan menghitung nilai kerugian/kelebihan.</p></div>
            <div className="feature-card reveal reveal-delay-2"><div className="feature-top"><div className="feature-icon-wrap">🔔</div><h3>Notifikasi Cerdas</h3></div><p>Peringatan stok menipis, anomali transaksi mencurigakan, pengingat opname, semua terdeteksi AI, dan langsung masuk notifikasi.</p></div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-section" id="cara-kerja">
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label">🚀 Cara Kerja</div>
            <h2 className="section-title">Langsung bisa pakai<br /><span style={{ color: 'var(--green)' }}>dalam 3 langkah</span></h2>
          </div>
          <div className="how-steps">
            <div className="how-step reveal">
              <div><div className="step-num-big">01</div><h3>Daftar dengan Google</h3><p>Tekan tombol "Masuk dengan Google", pilih akunmu, dan selesai. Tidak ada form panjang, tidak ada verifikasi email. Akun dan toko digitalmu langsung aktif.</p></div>
              <div className="how-visual"><div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#dcfce7,#bbf7d0)' }}>🔑</div></div>
            </div>
            <div className="how-step reveal">
              <div className="how-visual" style={{ order: -1 }}><div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)' }}>📦</div></div>
              <div><div className="step-num-big">02</div><h3>Input Produk via Scan</h3><p>Tambah produk yang kamu jual, bisa manual atau langsung scan kemasan. AI otomatis membaca nama produk dari foto dan mengisi form untukmu.</p></div>
            </div>
            <div className="how-step reveal" style={{ borderBottom: 'none' }}>
              <div><div className="step-num-big">03</div><h3>Scan &amp; Jalankan Toko</h3><p>Setiap ada transaksi, scan produk pakai kamera. Stok berkurang, laporan terupdate, semua berjalan otomatis. Kamu tinggal fokus ke pelanggan.</p></div>
              <div className="how-visual"><div className="how-icon-box" style={{ background: 'linear-gradient(135deg,#bbf7d0,#86efac)' }}>💰</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" id="testimoni">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-label">💬 Testimoni</div>
            <h2 className="section-title">Mereka sudah merasakan<br /><span style={{ color: 'var(--green)', fontSize: '80px' }}>bedanya.</span></h2>
            <p className="section-sub">Dari warung kelontong sampai minimarket <br /> semua bisa pakai AsistenToko.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testi-card reveal">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Dulu saya nyatat di buku terus lupa. Sekarang pakai AsistenToko, semua otomatis. Yang paling seneng bisa tau produk mana yang laris jadi saya bisa belanja yang bener."</p>
              <div className="testi-author"><div className="testi-avatar">👩</div><div><div className="testi-name">Ibu Siti Rahayu</div><div className="testi-role">Warung Sembako, Bekasi</div></div></div>
            </div>
            <div className="testi-card featured reveal reveal-delay-1">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Fitur scan transaksinya luar biasa! Kasir saya bisa lebih cepat layani pembeli. Stok opname yang biasanya 2 hari, sekarang beres 3 jam. Worth it banget!"</p>
              <div className="testi-author"><div className="testi-avatar">👨</div><div><div className="testi-name">Pak Budi Santoso</div><div className="testi-role">Minimarket, Surabaya</div></div></div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Awalnya ragu karena gaptek, tapi ternyata gampang banget! Sekarang bisa pantau toko sambil di dapur. Luar biasa fiturnya."</p>
              <div className="testi-author"><div className="testi-avatar">👩‍🦱</div><div><div className="testi-name">Kak Nadia</div><div className="testi-role">Toko Kue, Bandung</div></div></div>
            </div>
            <div className="testi-card reveal">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Saya pakai banyak aplikasi kasir, tapi yang scan pakai AI kamera kayak gini baru AsistenToko. Produk langsung kedeteksi tanpa input manual!"</p>
              <div className="testi-author"><div className="testi-avatar">🧑</div><div><div className="testi-name">Mas Deni</div><div className="testi-role">Counter Pulsa, Jakarta</div></div></div>
            </div>
            <div className="testi-card reveal reveal-delay-1">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Notifikasi stok menipis itu yang paling berguna. Sekarang tidak pernah lagi kehabisan obat yang sering dicari. Pelanggan jadi tidak kecewa."</p>
              <div className="testi-author"><div className="testi-avatar">👩‍⚕️</div><div><div className="testi-name">Ibu Rina</div><div className="testi-role">Apotek Kecil, Yogyakarta</div></div></div>
            </div>
            <div className="testi-card reveal reveal-delay-2">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Fitur kulakan-nya yang bikin saya paling terkesan. Scan barang waktu kulak, stok langsung update, HPP berubah otomatis. Hemat waktu banget!"</p>
              <div className="testi-author"><div className="testi-avatar">👷</div><div><div className="testi-name">Pak Hendra</div><div className="testi-role">Toko Bangunan, Medan</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="compare-section">
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#86efac' }}>⚖️ Perbandingan</div>
            <h2 className="section-title">AsistenToko vs <span style={{ color: '#4b5563' }}>Cara Lama</span></h2>
          </div>
          <div className="compare-table reveal">
            <div className="compare-head">
              <div className="compare-head-cell aspect">Aspek</div>
              <div className="compare-head-cell us">🤖 AsistenToko</div>
              <div className="compare-head-cell them">📓 Manual</div>
            </div>
            <div className="compare-row"><div className="compare-cell aspect">Catat Transaksi</div><div className="compare-cell us">✅ Scan kamera, otomatis</div><div className="compare-cell them">❌ Tulis tangan</div></div>
            <div className="compare-row"><div className="compare-cell aspect">Pantau Stok</div><div className="compare-cell us">✅ Real-time + notif</div><div className="compare-cell them">❌ Hitung manual</div></div>
            <div className="compare-row"><div className="compare-cell aspect">Laporan Bisnis</div><div className="compare-cell us">✅ Dashboard instan</div><div className="compare-cell them">❌ Rekap berjam-jam</div></div>
            <div className="compare-row"><div className="compare-cell aspect">Stok Opname</div><div className="compare-cell us">✅ Panduan digital</div><div className="compare-cell them">❌ 1–2 hari penuh</div></div>
            <div className="compare-row"><div className="compare-cell aspect">Update Harga Kulakan</div><div className="compare-cell us">✅ Langsung saat scan</div><div className="compare-cell them">❌ Satu per satu manual</div></div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing-section" id="harga">
        <div className="container-sm">
          <div className="section-head reveal">
            <div className="section-label">💰 Harga</div>
            <h2 className="section-title">Investasi terkecil,<br /><span style={{ color: 'var(--green)' }}>Keuntungan terbesar</span></h2>
            <p className="section-sub">Lebih murah dari gaji kasir.<br />Akses langsung aktif setelah pembayaran.</p>
          </div>
          <div className="pricing-grid reveal">
            {/* Monthly */}
            <div className="pricingcard">
              <div className="plan-type">Bulanan</div>
              <span className="price-old">Rp 149.000</span>
              <div className="price-new"><span className="price-num">99k</span><span className="price-per">/bulan</span></div>
              <div className="price-save bold">Hemat Rp 50.000 🎉</div>
              <div className="plan-features">
                <div className="plan-feature"><span className="check">✓</span> Semua fitur lengkap</div>
                <div className="plan-feature"><span className="check">✓</span> Scan AI tanpa batas</div>
                <div className="plan-feature"><span className="check">✓</span> Master produk unlimited</div>
                <div className="plan-feature"><span className="check">✓</span> Laporan &amp; export PDF</div>
                <div className="plan-feature"><span className="check">✓</span> Notifikasi stok otomatis</div>
                <div className="plan-feature"><span className="check">✓</span> Support via WhatsApp</div>
              </div>
              <a href="http://lynk.id/usahatokosembako/z730eoo6eyqm/checkout" className="btn-ghost" style={{ display: 'flex', justifyContent: 'center' }} id="pricing-monthly">Mulai Sekarang</a>
            </div>
            {/* 3 Months */}
            <div className="pricingcard popular">
              <div className="popular-badge">⭐ Paling Populer</div>
              <div className="plan-type">3 Bulan</div>
              <span className="price-old">Rp 599.000</span>
              <div className="price-new"><span className="price-num green">249k</span><span className="price-per">/3 bulan</span></div>
              <div className="price-save bold">Hemat Rp 350.000 🎉</div>
              <div className="plan-features">
                <div className="plan-feature"><span className="check">✓</span> Semua fitur bulanan</div>
                <div className="plan-feature"><span className="check">✓</span> Akses penuh 3 bulan</div>
                <div className="plan-feature"><span className="check">✓</span> Prioritas support &amp; update</div>
                <div className="plan-feature"><span className="check">✓</span> Backup data otomatis</div>
                <div className="plan-feature"><span className="check">✓</span> Gratis konsultasi setup toko</div>
                <div className="plan-feature"><span className="check">✓</span> Setara ~83k/bulan</div>
              </div>
              <a href="http://lynk.id/usahatokosembako/4oygzreoeee1/checkout" className="btn-primary" style={{ display: 'flex', justifyContent: 'center' }} id="pricing-quarterly">Akses Sekarang</a>
            </div>
            {/* Yearly */}
            <div className="pricingcard">
              <div className="popular-badge" style={{ background: '#ea580c' }}>🔥 Hemat Terbesar</div>
              <div className="plan-type">Tahunan</div>
              <span className="price-old">Rp 2.199.000</span>
              <div className="price-new"><span className="price-num green" style={{ color: '#ea580c' }}>799k</span><span className="price-per">/tahun</span></div>
              <div className="price-save bold" style={{ background: '#ea580c' }}>Hemat Rp 1.400.000 🔥</div>
              <div className="plan-features">
                <div className="plan-feature"><span className="check">✓</span> Semua fitur 3 bulanan</div>
                <div className="plan-feature"><span className="check">✓</span> Akses penuh 12 bulan</div>
                <div className="plan-feature"><span className="check">✓</span> Prioritas support utama</div>
                <div className="plan-feature"><span className="check">✓</span> Backup data harian otomatis</div>
                <div className="plan-feature"><span className="check">✓</span> Dedicated Account Manager</div>
                <div className="plan-feature"><span className="check">✓</span> Setara ~66k/bulan</div>
              </div>
              <a href="http://lynk.id/usahatokosembako/5ryv6z3e204y/checkout" className="btn-ghost" style={{ display: 'flex', justifyContent: 'center', color: '#ea580c', borderColor: '#ea580c' }} id="pricing-yearly">Mau Hemat</a>
            </div>
          </div>
          <div className="pricing-note reveal">
            <p>🔒 Tidak puas setelah coba? <strong>Garansi 7 hari uang kembali.</strong></p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section" id="faq">
        <div className="container-xs">
          <div className="section-head reveal">
            <div className="section-label">❓ FAQ</div>
            <h2 className="section-title">Pertanyaan yang<br /><span style={{ color: 'var(--green)' }}>sering ditanya</span></h2>
          </div>
          <div className="faq-list reveal">
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Apakah perlu beli alat scan barcode khusus?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Tidak sama sekali! AsistenToko menggunakan kamera HP yang sudah kamu miliki. AI kami mampu mengenali produk dari foto biasa, tanpa barcode sekalipun.</p></div></div>
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Berapa produk yang bisa saya masukkan?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Tidak ada batasan! Kamu bisa mengelola ratusan bahkan ribuan produk tanpa biaya tambahan. Semua sudah termasuk dalam harga berlangganan.</p></div></div>
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Bagaimana cara daftar? Apakah perlu isi form panjang?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Sangat mudah! Cukup klik tombol "Masuk dengan Google", pilih akun Gmail kamu, dan selesai. Akses langsung aktif, tidak perlu verifikasi email atau isi formulir.</p></div></div>
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Apakah data saya aman?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Sangat aman. Data tersimpan di server terenkripsi dan dicadangkan otomatis setiap hari. Kami tidak pernah membagikan data ke pihak manapun.</p></div></div>
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Bagaimana jika saya tidak puas?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Kami memberikan garansi 7 hari uang kembali. Jika kamu merasa AsistenToko tidak memberikan manfaat yang kamu harapkan, hubungi kami dan kami kembalikan pembayaranmu penuh.</p></div></div>
            <div className="faq-item"><button className="faq-btn"><span className="faq-q">Apakah bisa dipakai di HP Android dan iPhone?</span><span className="faq-icon">+</span></button><div className="faq-body"><p className="faq-ans">Ya! AsistenToko berbasis web yang dioptimalkan untuk mobile, sehingga bisa dipakai di semua HP, Android maupun iPhone, cukup buka browser, tidak perlu install aplikasi.</p></div></div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="final-cta-content">
          <span className="final-icon">🤖</span>
          <h2>Tokomu terlalu berharga<br />untuk dikelola manual.</h2>
          <p>Bergabunglah dengan 3.200+ pemilik toko yang sudah merasakan kemudahan punya asisten toko cerdas yang selalu siap bekerja.</p>
          <div>
            <a href="#harga" className="btn-white" style={{ fontSize: '17px', padding: '16px 36px' }} id="final-cta">
              Mulai Sekarang
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <p className="final-sub" style={{ paddingTop: '50px' }}>Login dengan Google · Akses langsung aktif · Garansi 7 hari</p>
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
              <p className="footer-tagline">Asisten cerdas untuk pemilik toko yang ingin bisnis lebih mudah, rapi, dan menguntungkan.</p>
            </div>
            <div className="footer-links-wrapper">
              <div>
                <div className="footer-col-title">Produk</div>
                <a href="#fitur" className="footer-link">Fitur</a>
                <a href="#harga" className="footer-link">Harga</a>
                <a href="#cara-kerja" className="footer-link">Cara Kerja</a>
                <a href="#faq" className="footer-link">FAQ</a>
              </div>
              <div>
                <div className="footer-col-title">Bantuan</div>
                <a href="#" className="footer-link">WhatsApp Support</a>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} AsistenToko. Hak cipta dilindungi.</span>
            <span>Dibuat dengan ❤️ untuk pemilik toko Indonesia.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
