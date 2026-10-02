import React, { useEffect, useState } from 'react'

interface PdfGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

export const PDF_GUIDE_URL = '/Panduan%20AsistenToko%20.pdf'
export const PDF_FILE_NAME = 'Panduan AsistenToko.pdf'

export default function PdfGuideModal({ isOpen, onClose }: PdfGuideModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="pdf-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div 
        className="pdf-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="pdf-modal-header">
          <div className="pdf-modal-title-wrap">
            <div className="pdf-modal-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <div className="pdf-modal-header-meta">
                <span className="pdf-badge-tag">Dokumen Resmi</span>
                <span className="pdf-size-tag">PDF · 50 MB</span>
              </div>
              <h2 id="pdf-modal-title" className="pdf-modal-title">
                Buku Panduan Penggunaan AsistenToko
              </h2>
            </div>
          </div>

          <div className="pdf-modal-actions">
            <a 
              href={PDF_GUIDE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pdf-btn-secondary"
              title="Buka PDF di tab baru browser"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span className="pdf-btn-label">Buka di Tab Baru</span>
            </a>

            <a 
              href={PDF_GUIDE_URL} 
              download={PDF_FILE_NAME} 
              className="pdf-btn-primary"
              title="Download file PDF ke perangkat Anda"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span className="pdf-btn-label">Download PDF</span>
            </a>

            <button 
              type="button" 
              onClick={onClose} 
              className="pdf-btn-close" 
              aria-label="Tutup Preview Panduan"
              title="Tutup"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Info Bar */}
        <div className="pdf-modal-notice">
          <div className="pdf-notice-content">
            <span className="pdf-notice-icon">💡</span>
            <span>
              <strong>Petunjuk:</strong> File panduan ini lengkap mencakup alur pendaftaran, scan kamera, dan manajemen kasir (ukuran ~50MB). Jika di HP Anda layar preview terasa sempit atau lambat dimuat, gunakan tombol <strong>Buka di Tab Baru</strong> atau <strong>Download PDF</strong>.
            </span>
          </div>
        </div>

        {/* Modal Body / Viewer */}
        <div className="pdf-modal-body">
          {isLoading && (
            <div className="pdf-loading-overlay">
              <div className="pdf-spinner"></div>
              <p className="pdf-loading-text">Sedang menyiapkan preview panduan...</p>
              <span className="pdf-loading-subtext">Ukuran file ~50 MB, mohon tunggu sebentar</span>
            </div>
          )}

          <iframe
            src={`${PDF_GUIDE_URL}#toolbar=1&navpanes=1&view=FitH`}
            title="Preview Panduan AsistenToko"
            className="pdf-iframe-element"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Modal Footer */}
        <div className="pdf-modal-footer">
          <div className="pdf-modal-footer-info">
            <span>Panduan Resmi AsistenToko • Hak Cipta Dilindungi</span>
          </div>
          <div className="pdf-modal-footer-actions">
            <a 
              href={PDF_GUIDE_URL} 
              download={PDF_FILE_NAME} 
              className="pdf-footer-download-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Unduh Panduan PDF (50 MB)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
