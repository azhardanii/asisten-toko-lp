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
          <h3 id="gmail-modal-heading" className="gmail-modal-title">
            {plan.title}
          </h3>
          <div className="gmail-modal-price">
            {plan.priceLabel}
          </div>
        </div>

        {/* Body */}
        <div className="gmail-modal-body">
          <div className="gmail-warning-box">
            <div className="gmail-warning-header">
              <span className="gmail-warning-icon">📧</span>
              <div className="gmail-warning-title">
                Penting! Wajib Isi Email Gmail yang Aktif
              </div>
            </div>
            <p className="gmail-warning-desc">
              Di halaman pembayaran berikutnya, pastikan Anda mengetik <strong>alamat Gmail (@gmail.com) yang benar dan aktif di HP Anda</strong>.
            </p>
          </div>

          <div className="gmail-steps-list">
            <div className="gmail-step-item">
              <span className="gmail-step-num">1</span>
              <div className="gmail-step-text">
                <strong>Dipakai untuk Masuk (Login):</strong> Email Gmail tersebut adalah akun yang akan Anda gunakan saat klik tombol <em>"Masuk dengan Google"</em> di aplikasi AsistenToko.
              </div>
            </div>
            <div className="gmail-step-item">
              <span className="gmail-step-num">2</span>
              <div className="gmail-step-text">
                <strong>Langsung Aktif Otomatis:</strong> Begitu pembayaran selesai, masa aktif paket otomatis langsung masuk ke email Gmail yang Anda isikan.
              </div>
            </div>
          </div>

          <div className="gmail-example-box">
            <div className="gmail-example-label">
              Contoh Pengisian Email yang Benar:
            </div>
            <div className="gmail-example-input">
              <span className="gmail-example-email">tokosembakoberkah@gmail.com</span>
              <span className="gmail-example-badge">✓ Benar</span>
            </div>
            <div className="gmail-example-note">
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
            className="gmail-back-btn"
            onClick={onClose}
          >
            Kembali / Pilih Paket Lain
          </button>
        </div>
      </div>
    </div>
  )
}
