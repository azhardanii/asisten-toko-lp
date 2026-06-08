import React from 'react';

export default function Navbar() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
<nav className="navbar">
  <div className="container navbar-inner">
    <a href="#" className="nav-logo">
      <img src="/logo-asistentoko.webp" alt="AsistenToko Logo" style={{height: 38}} />
      <span className="nav-logo-text"><span style={{color: '#0F5132'}}>Asisten</span><span style={{color: '#16A34A'}}>Toko</span></span>
    </a>
    <div className="nav-links">
      <a href="#fitur" className="nav-link">Fitur</a>
      <a href="#cara-kerja" className="nav-link">Cara Kerja</a>
      <a href="#testimoni" className="nav-link">Testimoni</a>
      <a href="#harga" className="nav-link">Harga</a>
    </div>
    <div className="nav-actions">
      <a href="#" className="nav-signin" id="nav-signin">Masuk</a>
      <a href="#" className="btn-primary" style={{padding: '10px 22px', fontSize: 14}} id="nav-cta">Mulai Sekarang →</a>
    </div>
  </div>
</nav>

    </>
  );
}
