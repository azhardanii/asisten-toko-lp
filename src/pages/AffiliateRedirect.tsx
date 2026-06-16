import { useEffect } from 'react';

export default function AffiliateRedirect() {
  useEffect(() => {
    window.location.href = 'https://lynk.id/admin/affiliate-add?search=AsistenToko';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF6F2]">
      <div className="text-center animate-pulse">
        <p className="text-xl font-bold text-[#1F2937]">Mengalihkan ke Lynk.id...</p>
        <p className="text-[#4B5563] mt-2">Mohon tunggu sebentar.</p>
      </div>
    </div>
  );
}
