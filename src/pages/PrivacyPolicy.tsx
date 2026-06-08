
import { Link } from 'react-router-dom';
import '../index.css';

export default function PrivacyPolicy() {
  return (
    <div>
      <nav className="navbar" style={{ position: 'relative', background: '#fff', borderBottom: '1px solid #eee' }}>
        <div className="container navbar-inner">
          <Link to="/" className="nav-logo">
            <img src="/logo-asistentoko.webp" alt="AsistenToko Logo" style={{height: '38px'}} />
            <span className="nav-logo-text"><span style={{color:'#0F5132'}}>Asisten</span><span style={{color:'#16A34A'}}>Toko</span></span>
          </Link>
          <div className="nav-actions">
            <Link to="/" className="btn-ghost" style={{ padding: '8px 16px', fontSize: '14px' }}>Kembali ke Beranda</Link>
          </div>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '60px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '10px', color: 'var(--bg-dark)' }}>Kebijakan Privasi</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>Pembaruan Terakhir: 8 Juni 2026</p>

        <div style={{ lineHeight: '1.8', color: '#444', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>
            Selamat datang di AsistenToko. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi serta data operasional toko Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan platform AsistenToko.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>1. Pengumpulan Data Informasi</h2>
          <p>Kami mengumpulkan beberapa tipe informasi untuk memberikan layanan terbaik bagi manajemen toko Anda:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Data Profil Akun:</strong> Saat Anda mendaftar melalui Google OAuth, kami menyimpan informasi dasar seperti nama, alamat email, dan foto profil Anda.</li>
            <li><strong>Data Transaksi &amp; Inventaris:</strong> Data terkait barang dagangan, harga, jumlah stok, dan catatan penjualan harian (termasuk laba/rugi) disimpan secara aman di database kami.</li>
            <li><strong>Data Gambar Kamera (Pemrosesan AI):</strong> Saat menggunakan fitur Scan Transaksi atau Scan Kulakan, aplikasi kami akan mengakses kamera perangkat Anda. <strong>Penting:</strong> Gambar yang diambil hanya diproses oleh sistem AI kami (Google Gemini) untuk mengidentifikasi produk. AsistenToko <strong>tidak menyimpan</strong> foto-foto produk atau pelanggan Anda secara permanen di server kami.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>2. Penggunaan Data</h2>
          <p>Data yang kami kumpulkan digunakan secara spesifik untuk operasional platform, antara lain:</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Mengotomatisasi pencatatan kasir dan pembaruan stok secara *real-time*.</li>
            <li>Menghasilkan laporan analitik toko (produk terlaris, pendapatan harian).</li>
            <li>Mengirimkan notifikasi peringatan saat stok barang menipis atau perlu restock.</li>
            <li>Mengidentifikasi produk yang belum terdaftar di database Anda (Master Produk).</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>3. Keamanan Data &amp; Enkripsi</h2>
          <p>
            Toko Anda adalah bisnis Anda. Data finansial, jumlah stok, dan detail transaksi Anda disimpan dengan algoritma enkripsi standar industri. Kami melakukan <strong>pencadangan (backup) otomatis</strong> (frekuensi harian untuk paket Tahunan) untuk memastikan data Anda tidak pernah hilang, bahkan jika Anda mengganti perangkat. AsistenToko tidak akan pernah menjual atau menyewakan data penjualan toko Anda ke pihak ketiga manapun.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>4. Pihak Ketiga &amp; Infrastruktur Cloud</h2>
          <p>
            Untuk memberikan layanan berbasis AI yang cepat dan akurat, AsistenToko terintegrasi dengan layanan <strong>Google Cloud Platform</strong> dan <strong>Google Gemini API</strong>. Permintaan pemrosesan gambar (*image processing*) disalurkan secara aman (*encrypted in transit*) ke server AI dan dikembalikan murni sebagai data teks (nama barang/harga).
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>5. Penghapusan Akun &amp; Data</h2>
          <p>
            Anda memiliki kontrol penuh atas bisnis Anda. Jika Anda memutuskan untuk berhenti menggunakan AsistenToko, Anda dapat menghapus akun beserta seluruh data master produk dan riwayat transaksi secara permanen melalui menu Pengaturan di Dashboard. Setelah dihapus, data tidak dapat dipulihkan.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>6. Perubahan Kebijakan Privasi</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Jika terdapat perubahan material, kami akan memberitahu Anda melalui email atau pemberitahuan langsung di Dashboard AsistenToko.
          </p>

          <p style={{ marginTop: '30px' }}>
            Jika Anda memiliki pertanyaan terkait privasi data, silakan hubungi tim dukungan kami melalui WhatsApp Support.
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <span>© 2026 AsistenToko. Hak cipta dilindungi undang-undang.</span>
            <span>Dibuat dengan ❤️ untuk pemilik toko Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
