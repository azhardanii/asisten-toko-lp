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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <p>Mengarahkan ke file APK... Jika tidak dialihkan otomatis, <a href="https://github.com/azhardanii/asisten-toko/releases/download/latest/AsistenToko.apk" style={{color: '#16A34A', fontWeight: 'bold'}}>klik di sini</a>.</p>
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
