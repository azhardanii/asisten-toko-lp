import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AffiliateGuide from './pages/AffiliateGuide';
import AffiliateRedirect from './pages/AffiliateRedirect';
import ScrollToTop from './components/ScrollToTop';

import { useEffect } from 'react';

function ApkRedirect() {
  useEffect(() => {
    // Redirect to the actual APK file
    window.location.href = "https://github.com/azhardanii/asisten-toko/releases/download/latest/AsistenToko.apk";
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'Inter, sans-serif', padding: '20px', textAlign: 'center' }}>
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '24px', animation: 'bounce 2s infinite' }}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Mengunduh AsistenToko...</h2>
      <p style={{ color: '#94a3b8', marginBottom: '32px', maxWidth: '400px', lineHeight: 1.6 }}>File APK sedang disiapkan. Jika unduhan tidak dimulai secara otomatis karena pemblokiran browser, silakan klik tombol di bawah ini.</p>
      <a href="https://github.com/azhardanii/asisten-toko/releases/download/latest/AsistenToko.apk" style={{ backgroundColor: '#16A34A', color: 'white', padding: '14px 28px', borderRadius: '100px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.4)' }}>
        Download Manual
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program-afiliasi" element={<AffiliateGuide />} />
        <Route path="/affiliate" element={<AffiliateRedirect />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        {/* Fallback route if vercel.json is bypassed */}
        <Route path="/apk-download" element={<ApkRedirect />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
