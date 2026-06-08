import React from 'react';

export default function Testimonials() {
  return (
    <>
      {/* ===== TESTIMONIALS ===== */}
<section className="testimonials-section" id="testimoni">
  <div className="container">
    <div className="section-head reveal">
      <div className="section-label">💬 Testimoni</div>
      <h2 className="section-title">Mereka sudah merasakan<br /><span style={{color: 'var(--green)', fontSize: 80}}>bedanya.</span></h2>
      <p className="section-sub">Dari warung kelontong sampai minimarket <br /> semua bisa pakai AsistenToko.</p>
    </div>
    <div className="testimonials-grid">
      <div className="testi-card reveal">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Dulu saya nyatat di buku terus lupa. Sekarang pakai AsistenToko, semua otomatis. Yang
          paling seneng bisa tau produk mana yang laris jadi saya bisa belanja yang bener."</p>
        <div className="testi-author">
          <div className="testi-avatar">👩</div>
          <div>
            <div className="testi-name">Ibu Siti Rahayu</div>
            <div className="testi-role">Warung Sembako, Bekasi</div>
          </div>
        </div>
      </div>
      <div className="testi-card featured reveal reveal-delay-1">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Fitur scan transaksinya luar biasa! Kasir saya bisa lebih cepat layani pembeli. Stok
          opname yang biasanya 2 hari, sekarang beres 3 jam. Worth it banget!"</p>
        <div className="testi-author">
          <div className="testi-avatar">👨</div>
          <div>
            <div className="testi-name">Pak Budi Santoso</div>
            <div className="testi-role">Minimarket, Surabaya</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-2">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Awalnya ragu karena gaptek, tapi ternyata gampang banget! Sekarang bisa pantau toko
          sambil di dapur. Luar biasa fiturnya."</p>
        <div className="testi-author">
          <div className="testi-avatar">👩‍🦱</div>
          <div>
            <div className="testi-name">Kak Nadia</div>
            <div className="testi-role">Toko Kue, Bandung</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Saya pakai banyak aplikasi kasir, tapi yang scan pakai AI kamera kayak gini baru
          AsistenToko. Produk langsung kedeteksi tanpa input manual!"</p>
        <div className="testi-author">
          <div className="testi-avatar">🧑</div>
          <div>
            <div className="testi-name">Mas Deni</div>
            <div className="testi-role">Counter Pulsa, Jakarta</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-1">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Notifikasi stok menipis itu yang paling berguna. Sekarang tidak pernah lagi kehabisan
          obat yang sering dicari. Pelanggan jadi tidak kecewa."</p>
        <div className="testi-author">
          <div className="testi-avatar">👩‍⚕️</div>
          <div>
            <div className="testi-name">Ibu Rina</div>
            <div className="testi-role">Apotek Kecil, Yogyakarta</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal reveal-delay-2">
        <div className="testi-stars">★★★★★</div>
        <p className="testi-text">"Fitur kulakan-nya yang bikin saya paling terkesan. Scan barang waktu kulak, stok
          langsung update, HPP berubah otomatis. Hemat waktu banget!"</p>
        <div className="testi-author">
          <div className="testi-avatar">👷</div>
          <div>
            <div className="testi-name">Pak Hendra</div>
            <div className="testi-role">Toko Bangunan, Medan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
