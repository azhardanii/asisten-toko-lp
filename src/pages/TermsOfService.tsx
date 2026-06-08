
import { Link } from 'react-router-dom';
import '../index.css';

export default function TermsOfService() {
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
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '10px', color: 'var(--bg-dark)' }}>Syarat &amp; Ketentuan Layanan</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>Pembaruan Terakhir: 8 Juni 2026</p>

        <div style={{ lineHeight: '1.8', color: '#444', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>
            Harap baca Syarat dan Ketentuan Layanan ("Ketentuan") ini dengan saksama sebelum menggunakan aplikasi AsistenToko. Dengan mendaftar dan menggunakan layanan kami, Anda menyetujui seluruh ketentuan operasional dan batasan tanggung jawab yang berlaku.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>1. Akses &amp; Akun Pengguna</h2>
          <p>
            Layanan kami dirancang untuk membantu kemudahan operasional toko, minimarket, warung, hingga apotek. Pendaftaran akun dilakukan secara aman melalui otentikasi Google (Google OAuth). Anda bertanggung jawab penuh atas keamanan kredensial akun Google Anda. Segala aktivitas pencatatan transaksi, modifikasi stok, dan pengubahan harga yang terjadi di dalam akun Anda adalah sepenuhnya tanggung jawab Anda.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>2. Penggunaan Teknologi AI &amp; Batasan Tanggung Jawab</h2>
          <p>
            Fitur utama AsistenToko menggunakan kecerdasan buatan (AI) untuk mendeteksi nama produk dan harga dari input kamera (tanpa barcode). Anda wajib memahami bahwa:
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>AI Bersifat Bantuan:</strong> Meskipun AI AsistenToko (didukung oleh Google Gemini) dirancang untuk beroperasi secara instan dan sangat akurat, teknologi *computer vision* dapat mengalami *mis-identifikasi* akibat pencahayaan buruk, kemasan produk yang pudar, atau sudut kemiringan kamera.</li>
            <li><strong>Wajib Verifikasi Manual:</strong> Kasir atau pengguna platform <strong>diwajibkan untuk memverifikasi ulang</strong> daftar barang dan total harga di layar sebelum memproses penyelesaian transaksi (Checkout).</li>
            <li><strong>Pembebasan Kerugian:</strong> Tim AsistenToko <strong>tidak bertanggung jawab secara finansial maupun hukum</strong> atas kerugian penjualan yang terjadi akibat kesalahan AI dalam mendeteksi harga barang atau jumlah stok. Kesalahan transaksi yang tidak dikoreksi secara manual oleh kasir di luar kendali dan tanggung jawab kami.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>3. Fitur Stok &amp; Pencatatan Keuangan</h2>
          <p>
            Platform kami menyediakan modul *Stok Opname Digital* dan *Laporan Bisnis* otomatis. AsistenToko mencatat pergerakan stok (masuk dan keluar) secara otomatis berdasarkan transaksi scan dan input manual (Scan Kulakan). Meskipun demikian, perhitungan fisik nyata (*opname*) di toko harus dilakukan secara berkala. Selisih data stok dengan kenyataan fisik bukan merupakan tanggung jawab platform.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>4. Skema Berlangganan &amp; Pembayaran</h2>
          <p>AsistenToko menggunakan sistem *Software-as-a-Service* (SaaS) berbayar untuk menjaga kualitas server AI kami.</p>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Opsi Paket:</strong> Layanan dikenakan biaya sesuai paket berlangganan yang Anda pilih (Bulanan, 3 Bulan, atau Tahunan). Akses premium langsung aktif setelah sistem mengonfirmasi pembayaran Anda.</li>
            <li><strong>Kebijakan Pengembalian Dana (Refund):</strong> Kami memberikan <strong>Garansi 7 Hari Uang Kembali</strong> sejak tanggal pembayaran awal. Jika Anda merasa fitur AI kasir dan pencatatan stok kami tidak sesuai dengan kebutuhan toko Anda, silakan hubungi Customer Support kami dalam rentang 7 hari tersebut untuk meminta klaim pengembalian dana 100%. Setelah melewati 7 hari, seluruh transaksi bersifat mutlak (Non-Refundable).</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--bg-dark)', marginTop: '20px', marginBottom: '-10px' }}>5. Penyalahgunaan Platform</h2>
          <p>
            Tim AsistenToko berhak membekukan atau mencabut akses akun Anda tanpa pemberitahuan sebelumnya (dan tanpa kewajiban pengembalian dana) apabila sistem kami mendeteksi rekayasa lalu lintas (*spamming*), pembobolan API AI kami, upaya modifikasi ilegal (*hacking*), atau penggunaan layanan untuk aktivitas bisnis yang melanggar hukum di Indonesia.
          </p>

          <p style={{ marginTop: '30px' }}>
            Dengan terus menggunakan AsistenToko, Anda secara otomatis menyetujui syarat operasional di atas. Jika Anda tidak menyetujui salah satu pasal, kami menyarankan agar tidak menggunakan layanan ini.
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
