import { Link } from 'react-router-dom';
import '../index.css';

export default function AffiliateGuide() {
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
        <h1 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '10px', color: 'var(--bg-dark)' }}>Program Afiliasi AsistenToko</h1>
        <p style={{ color: 'var(--muted)', marginBottom: '40px' }}>Hasilkan komisi dengan merekomendasikan AsistenToko</p>

        <div style={{ lineHeight: '1.8', color: '#444', fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ padding: '24px', backgroundColor: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#166534', marginBottom: '16px' }}>Langkah-Langkah Menjadi Affiliator:</h2>
            
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <strong>Wajib punya akun Lynk.id:</strong><br/>
                Jika belum punya, silakan registrasi terlebih dahulu melalui tautan ini <br/>
                <a href="https://lynk.id/register" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 'bold' }}>&#8594; Daftar Lynk.id</a>
              </li>
              
              <li>
                <strong>Tambahkan Affiliate AsistenToko:</strong><br/>
                Kalau sudah memiliki akun Lynk.id, klik tombol di bawah ini untuk mencari dan menambahkan AsistenToko.<br/>
                <a href="/affiliate" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 20px', fontSize: '14px' }}>
                  Tambahkan Affiliate AsistenToko
                </a>
              </li>
              
              <li>
                <strong>Tap tombol "Add"</strong> pada semua pilihan paket AsistenToko yang tersedia di halaman Lynk.id tersebut.
                <div style={{ marginTop: '16px' }}>
                  <img 
                    src="/add-aff.png" 
                    alt="Panduan tap tombol Add" 
                    style={{ 
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                </div>
              </li>
              
              <li>
                Kembali ke <strong>Dashboard Lynk</strong>, lalu buka halaman Lynk.id milikmu.
              </li>
              
              <li>
                Kamu bisa langsung <strong>share link halaman Lynk.id</strong> kamu, atau share spesifik link produk AsistenToko yang sudah kamu tambahkan.
                <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <img 
                    src="/share-aff-1.png" 
                    alt="Panduan share link 1" 
                    style={{ 
                      flex: '1 1 200px',
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <img 
                    src="/share-aff-2.png" 
                    alt="Panduan share link 2" 
                    style={{ 
                      flex: '1 1 200px',
                      maxWidth: '100%', 
                      height: 'auto', 
                      borderRadius: '8px', 
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                </div>
              </li>
              
              <li>
                <strong>Selamat, kamu udah jadi affiliator AsistenToko!</strong> 🎉<br/>
                Jika ada pengguna yang membeli paket dari link produk kamu, maka secara otomatis komisi akan langsung masuk ke saldo Lynk.id kamu.
              </li>
            </ol>
          </div>

          <p style={{ marginTop: '30px', textAlign: 'center' }}>
            Butuh bantuan terkait program afiliasi? Hubungi tim support kami via WhatsApp.
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <span>© {new Date().getFullYear()} AsistenToko. Hak cipta dilindungi undang-undang.</span>
            <span>Dibuat dengan ❤️ untuk pemilik toko Indonesia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
