import React from 'react';

export default function HowItWorks() {
  return (
    <>
      {/* ===== HOW IT WORKS ===== */}
<section className="how-section" id="cara-kerja">
  <div className="container-sm">
    <div className="section-head reveal">
      <div className="section-label">🚀 Cara Kerja</div>
      <h2 className="section-title">Langsung bisa pakai<br /><span style={{color: 'var(--green)'}}>dalam 3 langkah</span></h2>
    </div>
    <div className="how-steps">
      <div className="how-step reveal">
        <div>
          <div className="step-num-big">01</div>
          <h3>Daftar dengan Google</h3>
          <p>Tekan tombol "Masuk dengan Google", pilih akunmu, dan selesai. Tidak ada form panjang, tidak ada
            verifikasi email. Akun dan toko digitalmu langsung aktif.</p>
        </div>
        <div className="how-visual">
          <div className="how-icon-box" style={{background: 'linear-gradient(135deg,#dcfce7,#bbf7d0)'}}>🔑</div>
        </div>
      </div>
      <div className="how-step reveal">
        <div className="how-visual" style={{order: -1}}>
          <div className="how-icon-box" style={{background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)'}}>📦</div>
        </div>
        <div>
          <div className="step-num-big">02</div>
          <h3>Input Produk via Scan</h3>
          <p>Tambah produk yang kamu jual, bisa manual atau langsung scan kemasan. AI otomatis membaca nama produk
            dari foto dan mengisi form untukmu.</p>
        </div>
      </div>
      <div className="how-step reveal" style={{borderBottom: 'none'}}>
        <div>
          <div className="step-num-big">03</div>
          <h3>Scan &amp; Jalankan Toko</h3>
          <p>Setiap ada transaksi, scan produk pakai kamera. Stok berkurang, laporan terupdate, semua berjalan
            otomatis. Kamu tinggal fokus ke pelanggan.</p>
        </div>
        <div className="how-visual">
          <div className="how-icon-box" style={{background: 'linear-gradient(135deg,#bbf7d0,#86efac)'}}>💰</div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
