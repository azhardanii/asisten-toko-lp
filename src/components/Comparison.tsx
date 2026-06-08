import React from 'react';

export default function Comparison() {
  return (
    <>
      {/* ===== COMPARISON ===== */}
<section className="compare-section">
  <div className="container-sm">
    <div className="section-head reveal">
      <div className="section-label" style={{background: 'rgba(255,255,255,0.1)', color: '#86efac'}}>⚖️ Perbandingan</div>
      <h2 className="section-title">AsistenToko vs <span style={{color: '#4b5563'}}>Cara Lama</span></h2>
    </div>
    <div className="compare-table reveal">
      <div className="compare-head">
        <div className="compare-head-cell aspect">Aspek</div>
        <div className="compare-head-cell us">🤖 AsistenToko</div>
        <div className="compare-head-cell them">📓 Manual</div>
      </div>
      <div className="compare-row">
        <div className="compare-cell aspect">Catat Transaksi</div>
        <div className="compare-cell us">✅ Scan kamera, otomatis</div>
        <div className="compare-cell them">❌ Tulis tangan</div>
      </div>
      <div className="compare-row">
        <div className="compare-cell aspect">Pantau Stok</div>
        <div className="compare-cell us">✅ Real-time + notif</div>
        <div className="compare-cell them">❌ Hitung manual</div>
      </div>
      <div className="compare-row">
        <div className="compare-cell aspect">Laporan Bisnis</div>
        <div className="compare-cell us">✅ Dashboard instan</div>
        <div className="compare-cell them">❌ Rekap berjam-jam</div>
      </div>
      <div className="compare-row">
        <div className="compare-cell aspect">Stok Opname</div>
        <div className="compare-cell us">✅ Panduan digital</div>
        <div className="compare-cell them">❌ 1–2 hari penuh</div>
      </div>
      <div className="compare-row">
        <div className="compare-cell aspect">Update Harga Kulakan</div>
        <div className="compare-cell us">✅ Langsung saat scan</div>
        <div className="compare-cell them">❌ Satu per satu manual</div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
