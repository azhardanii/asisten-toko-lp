import React from 'react';

export default function ProblemSolution() {
  return (
    <>
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
          <div className="pain-item"><span className="pain-emoji">📓</span>
            <p className="pain-text">Buku catatan hilang atau tulisan yang susah dibaca besok paginya</p>
          </div>
          <div className="pain-item"><span className="pain-emoji">🤔</span>
            <p className="pain-text">Gak tau produk mana yang paling laris dan mana yang ngendap</p>
          </div>
          <div className="pain-item"><span className="pain-emoji">😱</span>
            <p className="pain-text">Tiba-tiba stok habis tanpa disadari, pelanggan langsung pergi</p>
          </div>
          <div className="pain-item"><span className="pain-emoji">😴</span>
            <p className="pain-text">Rekap akhir bulan bikin pusing dan makan waktu berjam-jam</p>
          </div>
        </div>
      </div>
      <div className="reveal reveal-delay-2">
        <div className="solution-box">
          <div style={{fontSize: 40, marginBottom: 20}}>🤖</div>
          <h3>Saatnya punya Asisten yang kerja tanpa istirahat</h3>
          <p>AsistenToko bukan sekadar aplikasi kasir biasa, ini asisten cerdas yang belajar dari pola tokomu dan
            selalu siap 24/7.</p>
          <div className="solution-points">
            <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">📱 Scan produk pakai
                kamera HP biasa, tanpa alat barcode mahal</span></div>
            <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">🧠 AI kenali produk &amp;
                catat transaksi otomatis dalam hitungan detik</span></div>
            <div className="solution-point"><span className="sol-check">✓</span><span className="sol-text">📊 Laporan penjualan,
                stok, &amp; laba bersih tersedia kapan saja</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
