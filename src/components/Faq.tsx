import React from 'react';

export default function Faq() {
  return (
    <>
      {/* ===== FAQ ===== */}
<section className="faq-section" id="faq">
  <div className="container-xs">
    <div className="section-head reveal">
      <div className="section-label">❓ FAQ</div>
      <h2 className="section-title">Pertanyaan yang<br /><span style={{color: 'var(--green)'}}>sering ditanya</span></h2>
    </div>
    <div className="faq-list reveal">
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Apakah perlu beli alat scan barcode khusus?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Tidak sama sekali! AsistenToko menggunakan kamera HP yang sudah kamu miliki. AI kami
            mampu mengenali produk dari foto biasa, tanpa barcode sekalipun.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Berapa produk yang bisa saya masukkan?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Tidak ada batasan! Kamu bisa mengelola ratusan bahkan ribuan produk tanpa biaya tambahan.
            Semua sudah termasuk dalam harga berlangganan.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Bagaimana cara daftar? Apakah perlu isi form panjang?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Sangat mudah! Cukup klik tombol "Masuk dengan Google", pilih akun Gmail kamu, dan
            selesai. Akses langsung aktif, tidak perlu verifikasi email atau isi formulir.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Apakah data saya aman?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Sangat aman. Data tersimpan di server terenkripsi dan dicadangkan otomatis setiap hari.
            Kami tidak pernah membagikan data ke pihak manapun.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Bagaimana jika saya tidak puas?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Kami memberikan garansi 7 hari uang kembali. Jika kamu merasa AsistenToko tidak
            memberikan manfaat yang kamu harapkan, hubungi kami dan kami kembalikan pembayaranmu penuh.</p>
        </div>
      </div>
      <div className="faq-item">
        <button className="faq-btn"><span className="faq-q">Apakah bisa dipakai di HP Android dan iPhone?</span><span className="faq-icon">+</span></button>
        <div className="faq-body">
          <p className="faq-ans">Ya! AsistenToko berbasis web yang dioptimalkan untuk mobile, sehingga bisa dipakai di
            semua HP, Android maupun iPhone, cukup buka browser, tidak perlu install aplikasi.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
