import React from 'react';

export default function Pricing() {
  return (
    <>
      {/* ===== PRICING ===== */}
<section className="pricing-section" id="harga">
  <div className="container-sm">
    <div className="section-head reveal">
      <div className="section-label">💰 Harga</div>
      <h2 className="section-title">Investasi terkecil,<br /><span style={{color: 'var(--green)'}}>keuntungan terbesar</span>
      </h2>
      <p className="section-sub">Lebih murah dari gaji kasir sehari. Akses langsung aktif setelah pembayaran.</p>
    </div>
    <div className="pricing-grid reveal">
      {/* Monthly */}
      <div className="pricingcard">
        <div className="plan-type">Bulanan</div>
        <div className="price-new" style={{marginTop: 24}}>
          <span className="price-num">99k</span>
          <span className="price-per">/bulan</span>
        </div>
        <div className="plan-features" style={{marginTop: 32}}>
          <div className="plan-feature"><span className="check">✓</span> Semua fitur lengkap</div>
          <div className="plan-feature"><span className="check">✓</span> Scan AI tanpa batas</div>
          <div className="plan-feature"><span className="check">✓</span> Master produk unlimited</div>
          <div className="plan-feature"><span className="check">✓</span> Laporan &amp; export PDF</div>
          <div className="plan-feature"><span className="check">✓</span> Notifikasi stok otomatis</div>
          <div className="plan-feature"><span className="check">✓</span> Support via WhatsApp</div>
        </div>
        <a href="#" className="btn-ghost" style={{display: 'flex', justifyContent: 'center'}} id="pricing-monthly">Mulai
          Sekarang</a>
      </div>
      {/* 3 Months */}
      <div className="pricingcard popular">
        <div className="popular-badge">⭐ Paling Populer</div>
        <div className="plan-type">3 Bulan</div>
        <span className="price-old">Rp 297.000</span>
        <div className="price-new">
          <span className="price-num green">249k</span>
          <span className="price-per">/3 bulan</span>
        </div>
        <div className="price-save bold">Hemat Rp 48.000 🎉</div>
        <div className="plan-features">
          <div className="plan-feature"><span className="check">✓</span> Semua fitur bulanan</div>
          <div className="plan-feature"><span className="check">✓</span> Akses penuh 3 bulan</div>
          <div className="plan-feature"><span className="check">✓</span> Prioritas support &amp; update</div>
          <div className="plan-feature"><span className="check">✓</span> Backup data otomatis</div>
          <div className="plan-feature"><span className="check">✓</span> Gratis konsultasi setup toko</div>
          <div className="plan-feature"><span className="check">✓</span> Setara ~83k/bulan</div>
        </div>
        <a href="#" className="btn-primary" style={{display: 'flex', justifyContent: 'center'}} id="pricing-quarterly">Mulai
          Sekarang →</a>
      </div>
      {/* Yearly */}
      <div className="pricingcard">
        <div className="popular-badge" style={{background: '#ea580c'}}>🔥 Hemat Terbesar</div>
        <div className="plan-type">Tahunan</div>
        <span className="price-old">Rp 1.188.000</span>
        <div className="price-new">
          <span className="price-num green" style={{color: '#ea580c'}}>799k</span>
          <span className="price-per">/tahun</span>
        </div>
        <div className="price-save bold" style={{background: '#ea580c'}}>Hemat Rp 389.000 🔥</div>
        <div className="plan-features">
          <div className="plan-feature"><span className="check">✓</span> Semua fitur 3 bulanan</div>
          <div className="plan-feature"><span className="check">✓</span> Akses penuh 12 bulan</div>
          <div className="plan-feature"><span className="check">✓</span> Prioritas support utama</div>
          <div className="plan-feature"><span className="check">✓</span> Backup data harian otomatis</div>
          <div className="plan-feature"><span className="check">✓</span> Dedicated Account Manager</div>
          <div className="plan-feature"><span className="check">✓</span> Setara ~66k/bulan</div>
        </div>
        <a href="#" className="btn-ghost" style={{display: 'flex', justifyContent: 'center', color: '#ea580c', borderColor: '#ea580c'}} id="pricing-yearly">Mulai
          Sekarang</a>
      </div>
    </div>
    <div className="pricing-note reveal">
      <p>🔒 Tidak puas setelah coba? <strong>Garansi 7 hari uang kembali.</strong></p>
    </div>
  </div>
</section>

    </>
  );
}
