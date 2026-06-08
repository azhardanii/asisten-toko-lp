import React from 'react';

export default function Hero() {
  return (
    <>
      {/* ===== HERO ===== */}
<section className="hero">
  <div className="hero-orb1" />
  <div className="hero-orb2" />
  <div className="container">
    <div className="hero-grid">
      <div>
        <div className="hero-eyebrow">
          <div className="eyebrow-dot" />
          AI-Powered · Scan · Simple
        </div>
        <h1 className="hero-title">
          Pencatatan Instan,<br />
          Cukup <span className="highlight" style={{lineHeight: 100}}>Scan</span> Produk<br />
          Tanpa Barcode.
        </h1>
        <p className="hero-desc">
          Arahkan kamera. Jual. Selesai. AsistenToko hadir 24/7 untuk mengenali produk lewat kamera HP. Transaksi
          lebih cepat, jualan lebih mudah.
        </p>
        <div className="hero-cta">
          <a href="#" className="btn-primary" style={{fontSize: 16, padding: '16px 32px'}} id="hero-cta">
            Mulai Sekarang
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#cara-kerja" className="btn-ghost" style={{fontSize: 16, padding: '14px 28px'}}>Lihat Cara Kerjanya</a>
        </div>
        <div className="hero-badges" style={{marginTop: 28}}>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Login dengan Google
          </div>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Langsung aktif
          </div>
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
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
                  <div className="phone-notch-dot" />
                  <div className="phone-notch-dot" />
                  <div className="phone-notch-dot active" />
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
                  <div className="pcard-small" style={{background: '#fff8f0'}}>
                    <div className="pcard-label">Produk</div>
                    <div className="pcard-value" style={{color: '#ea580c', fontSize: 15}}>48</div>
                  </div>
                  <div className="pcard-small" style={{background: '#fff0f0'}}>
                    <div className="pcard-label">Stok Habis</div>
                    <div className="pcard-value" style={{color: '#dc2626', fontSize: 15}}>3</div>
                  </div>
                </div>
                <div className="pchart">
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '30%'}} />
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '55%'}} />
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '40%'}} />
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '70%'}} />
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '45%'}} />
                  <div className="pchart-bar" style={{background: '#0f7c44', height: '90%'}} />
                  <div className="pchart-bar" style={{background: '#dcfce7', height: '60%'}} />
                </div>
              </div>
              <div className="phone-nav-bar">
                <div className="pnav-item">
                  <div className="pnav-icon">📊</div>
                  <div className="pnav-label">Home</div>
                </div>
                <div className="pnav-item">
                  <div className="pnav-icon">📦</div>
                  <div className="pnav-label">Produk</div>
                </div>
                <div className="pnav-center">🔍</div>
                <div className="pnav-item">
                  <div className="pnav-icon">💰</div>
                  <div className="pnav-label">Transaksi</div>
                </div>
                <div className="pnav-item">
                  <div className="pnav-icon">⚙️</div>
                  <div className="pnav-label">Setting</div>
                </div>
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

    </>
  );
}
