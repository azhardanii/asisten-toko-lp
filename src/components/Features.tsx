import React from 'react';

export default function Features() {
  return (
    <>
      {/* ===== FEATURES ===== */}
<section className="features-section" id="fitur">
  <div className="container">
    <div className="section-head reveal">
      <div className="section-label">✨ Fitur Lengkap</div>
      <h2 className="section-title">Semua yang toko kamu<br /><span style={{color: 'var(--green)'}}>butuhkan, ada di sini</span>
      </h2>
      <p className="section-sub">Dirancang khusus untuk pemilik toko yang ingin bisnis lebih rapi tanpa perlu belajar
        software yang rumit.</p>
    </div>
    <div className="features-grid">
      <div className="feature-card reveal">
        <span className="feature-badge">⭐ Unggulan</span>
        <div className="feature-top">
          <div className="feature-icon-wrap">📸</div>
          <h3>Scan Transaksi AI</h3>
        </div>
        <p>Arahkan kamera ke produk, AI mengenali barang, harga, dan jumlah secara otomatis. Checkout dalam hitungan
          detik, tanpa input manual.</p>
      </div>
      <div className="feature-card reveal reveal-delay-1">
        <div className="feature-top">
          <div className="feature-icon-wrap">📦</div>
          <h3>Stok Real-time</h3>
        </div>
        <p>Pantau semua stok produk secara langsung. Notifikasi otomatis saat stok mendekati batas minimum, tidak ada
          lagi stok habis yang tak disadari.</p>
      </div>
      <div className="feature-card reveal reveal-delay-2">
        <div className="feature-top">
          <div className="feature-icon-wrap">📊</div>
          <h3>Laporan &amp; Analitik</h3>
        </div>
        <p>Dashboard visual: grafik penjualan harian, produk terlaris, top keuntungan, dan distribusi kategori. Export
          laporan PDF kapanpun.</p>
      </div>
      <div className="feature-card reveal">
        <div className="feature-top">
          <div className="feature-icon-wrap">🛒</div>
          <h3>Scan Kulakan Pintar</h3>
        </div>
        <p>Scan produk saat belanja ke distributor. Stok otomatis bertambah, harga modal (HPP) dan harga jual bisa
          diperbarui sekaligus.</p>
      </div>
      <div className="feature-card reveal reveal-delay-1">
        <div className="feature-top">
          <div className="feature-icon-wrap">🔍</div>
          <h3>Stok Opname Digital</h3>
        </div>
        <p>Panduan langkah demi langkah untuk penghitungan fisik. Sistem otomatis mendeteksi selisih dan menghitung
          nilai kerugian/kelebihan.</p>
      </div>
      <div className="feature-card reveal reveal-delay-2">
        <div className="feature-top">
          <div className="feature-icon-wrap">🔔</div>
          <h3>Notifikasi Cerdas</h3>
        </div>
        <p>Peringatan stok menipis, anomali transaksi mencurigakan, pengingat opname, semua terdeteksi AI, dan
          langsung masuk notifikasi.</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
