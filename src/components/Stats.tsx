import React from 'react';

export default function Stats() {
  return (
    <>
      {/* ===== STATS ===== */}
<section className="stats-section">
  <div className="container">
    <div className="section-head reveal">
      <div className="section-label">📈 Angka yang bicara</div>
      <h2 className="section-title">Dipercaya pemilik toko<br /><span style={{color: 'var(--green)'}}>di seluruh Indonesia</span>
      </h2>
    </div>
    <div className="stats-grid">
      <div className="stat-card reveal reveal-delay-1">
        <div className="stat-emoji">🏪</div>
        <div className="stat-num">3.200+</div>
        <div className="stat-label">Pemilik Toko Aktif</div>
      </div>
      <div className="stat-card reveal reveal-delay-2">
        <div className="stat-emoji">💳</div>
        <div className="stat-num">Rp 12M+</div>
        <div className="stat-label">Total Transaksi Dicatat</div>
      </div>
      <div className="stat-card reveal reveal-delay-3">
        <div className="stat-emoji">⭐</div>
        <div className="stat-num">98%</div>
        <div className="stat-label">Kepuasan Pengguna</div>
      </div>
      <div className="stat-card reveal" style={{transitionDelay: '0.4s'}}>
        <div className="stat-emoji">⚡</div>
        <div className="stat-num">Detik</div>
        <div className="stat-label">Waktu Scan Produk</div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
