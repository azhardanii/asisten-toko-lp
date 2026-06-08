import React from 'react';

export default function Footer() {
  return (
    <>
      {/* ===== FOOTER ===== */}
<footer className="footer">
  <div className="container">
    <div className="footer-grid">
      <div>
        <div className="footer-logo-row">
          <div className="footer-logo-icon">A</div>
          <span className="footer-logo-text">AsistenToko</span>
        </div>
        <p className="footer-tagline">Asisten cerdas untuk pemilik toko yang ingin bisnis lebih mudah, rapi, dan
          menguntungkan.</p>
      </div>
      <div>
        <div className="footer-col-title">Produk</div>
        <a href="#fitur" className="footer-link">Fitur</a>
        <a href="#harga" className="footer-link">Harga</a>
        <a href="#cara-kerja" className="footer-link">Cara Kerja</a>
        <a href="#faq" className="footer-link">FAQ</a>
      </div>
      {/* <div>
    <div class="footer-col-title">Perusahaan</div>
    <a href="#" class="footer-link">Tentang Kami</a>
    <a href="#" class="footer-link">Blog</a>
    <a href="#" class="footer-link">Karir</a>
  </div> */}
      <div>
        <div className="footer-col-title">Bantuan</div>
        <a href="#" className="footer-link">WhatsApp Support</a>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms of Service</a>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom">
      <span>© 2025 AsistenToko. Hak cipta dilindungi undang-undang.</span>
      <span>Dibuat dengan ❤️ untuk pemilik toko Indonesia</span>
    </div>
  </div>
</footer>

    </>
  );
}
