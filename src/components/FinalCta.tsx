import React from 'react';

export default function FinalCta() {
  return (
    <>
      {/* ===== FINAL CTA ===== */}
<section className="final-cta">
  <div className="final-cta-content">
    <span className="final-icon">🤖</span>
    <h2>Tokomu terlalu berharga<br />untuk dikelola manual.</h2>
    <p>Bergabunglah dengan 3.200+ pemilik toko yang sudah merasakan kemudahan punya asisten toko cerdas yang selalu
      siap bekerja.</p>
    <div>
      <a href="#" className="btn-white" style={{fontSize: 17, padding: '16px 36px'}} id="final-cta">
        Mulai Sekarang dengan Google
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    <p className="final-sub" style={{paddingTop: 50}}>Login dengan Google · Akses langsung aktif · Garansi 7 hari</p>
  </div>
</section>

    </>
  );
}
