import React from 'react';

export default function Ticker() {
  return (
    <>
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

    </>
  );
}
