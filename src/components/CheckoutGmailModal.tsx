import { useEffect } from 'react'

export interface CheckoutPlanInfo {
  title: string
  priceLabel: string
  url: string
  badge?: string
}

interface CheckoutGmailModalProps {
  plan: CheckoutPlanInfo | null
  onClose: () => void
}

export default function CheckoutGmailModal({ plan, onClose }: CheckoutGmailModalProps) {
  useEffect(() => {
    if (!plan) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [plan, onClose])

  if (!plan) return null

  return (
    <div
      className="gmail-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gmail-modal-heading"
    >
      <div className="gmail-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="gmail-modal-top">
          <button
            type="button"
            className="gmail-modal-close"
            onClick={onClose}
            aria-label="Tutup notifikasi"
          >
            ✕
          </button>
          <div className="gmail-plan-pill">
            <span>🛒 {plan.badge || 'Pilihan Paket Anda'}</span>
          </div>
          <h3 id="gmail-modal-heading" style={{ fontSize: '21px', fontWeight: 900, lineHeight: 1.25, marginBottom: '4px' }}>
            {plan.title}
          </h3>
          <div style={{ fontSize: '14px', color: '#dcfce7', fontWeight: 600 }}>
            {plan.priceLabel}
          </div>
        </div>

        {/* Body */}
        <div className="gmail-modal-body">
          <div className="gmail-warning-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>📧</span>
              <div style={{ fontSize: '15.5px', fontWeight: 800, color: '#92400e', lineHeight: 1.3 }}>
                Penting! Wajib Isi Email Gmail yang Aktif
              </div>
            </div>
            <p style={{ fontSize: '13.5px', color: '#78350f', lineHeight: 1.6, margin: 0 }}>
              Di halaman pembayaran berikutnya, pastikan Anda mengetik <strong>alamat Gmail (@gmail.com) yang benar dan aktif di HP Anda</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#334155', lineHeight: 1.5 }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontWeight: 900, width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>1</span>
              <span><strong>Dipakai untuk Masuk (Login):</strong> Email Gmail tersebut adalah akun yang akan Anda gunakan saat klik tombol <em>"Masuk dengan Google"</em> di aplikasi AsistenToko.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#334155', lineHeight: 1.5 }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontWeight: 900, width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>2</span>
              <span><strong>Langsung Aktif Otomatis:</strong> Begitu pembayaran selesai, masa aktif paket otomatis langsung masuk ke email Gmail yang Anda isikan.</span>
            </div>
          </div>

          <div className="gmail-example-box">
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Contoh Pengisian Email yang Benar:
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', padding: '8px 12px', borderRadius: '10px', border: '1px solid #bbf7d0', fontWeight: 700, color: '#166534', fontSize: '13.5px' }}>
              <span>tokosembakoberkah@gmail.com</span>
              <span style={{ fontSize: '12px', background: '#dcfce7', padding: '2px 8px', borderRadius: '100px' }}>✓ Benar</span>
            </div>
            <div style={{ fontSize: '12px', color: '#dc2626', marginTop: '6px', fontWeight: 600 }}>
              ⚠️ Jangan sampai salah ketik huruf (misal: @gamil.com atau email yang sudah lupa sandinya).
            </div>
          </div>

          <a
            href={plan.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gmail-proceed-btn"
            onClick={onClose}
          >
            <span>Mengerti, Lanjut ke Pembayaran</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '100%',
              marginTop: '10px',
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              fontSize: '13.5px',
              fontWeight: 600,
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            Kembali / Pilih Paket Lain
          </button>
        </div>
      </div>
    </div>
  )
}

