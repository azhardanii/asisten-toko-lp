import { useEffect, useState, useRef } from 'react'

interface BuyerNotification {
  name: string
  store: string
  city: string
  plan: string
}

const BUYER_POOL: Array<{ name: string; store: string; city: string }> = [
  { name: 'Pak Budi Santoso', store: 'Toko Sembako Jaya', city: 'Surabaya' },
  { name: 'Ibu Siti Aminah', store: 'Warung Berkah', city: 'Bekasi' },
  { name: 'Pak Hendra Wijaya', store: 'Minimarket Maju', city: 'Medan' },
  { name: 'Ibu Rina Kartika', store: 'Toko Kelontong Rina', city: 'Bandung' },
  { name: 'Pak Ahmad Fauzi', store: 'Grosir Sembako Makmur', city: 'Semarang' },
  { name: 'Kak Dewi Lestari', store: 'Toko Bahan Kue Dewi', city: 'Yogyakarta' },
  { name: 'Mas Eko Prasetyo', store: 'Warung Sembako 24 Jam', city: 'Jakarta Timur' },
  { name: 'Ibu Nurul Hidayah', store: 'Toko Kosmetik & Obat', city: 'Malang' },
  { name: 'Pak Agus Setiawan', store: 'Toko Bangunan Abadi', city: 'Solo' },
  { name: 'Ibu Sri Wahyuni', store: 'Warung Sembako Sri', city: 'Tangerang' },
  { name: 'Mas Rizky Ramadhan', store: 'Counter & Aksesoris', city: 'Depok' },
  { name: 'Haji Sulaiman', store: 'Grosir Beras & Sembako', city: 'Makassar' },
  { name: 'Ibu Maryam', store: 'Warung Harian Maryam', city: 'Bogor' },
  { name: 'Pak Antonius', store: 'Toko Plastik & Kemasan', city: 'Pontianak' },
  { name: 'Pak Darmawan', store: 'Minimarket Keluarga', city: 'Palembang' },
  { name: 'Kak Dina Mariana', store: 'Toko Frozen Food', city: 'Sidoarjo' },
  { name: 'Pak Lukman Hakim', store: 'Toko Pakan & Sembako', city: 'Kediri' },
  { name: 'Ibu Yuni Astuti', store: 'Warung Sembako Yuni', city: 'Pekanbaru' },
  { name: 'Pak Wahyu Hidayat', store: 'Toko Grosir Sumber Rejeki', city: 'Cirebon' },
  { name: 'Ibu Lilis Suryani', store: 'Warung Kelontong Lilis', city: 'Tasikmalaya' },
  { name: 'Mas Fajar Nugroho', store: 'Toko Sembako Mandiri', city: 'Sleman' },
  { name: 'Pak Ridwan Kamiludin', store: 'Minimarket Amanah', city: 'Bandar Lampung' },
  { name: 'Ibu Ratna Sari', store: 'Toko Kue & Roti Ratna', city: 'Denpasar' },
  { name: 'Pak Taufik Hidayat', store: 'Grosir Jajanan & Snack', city: 'Gresik' },
  { name: 'Ibu Hasanah', store: 'Warung Sembako Hasanah', city: 'Serang' },
  { name: 'Mas Adi Saputra', store: 'Toko Kelontong Modern', city: 'Balikpapan' },
  { name: 'Pak Gunawan', store: 'Toko Alat Listrik & Baut', city: 'Purwokerto' },
  { name: 'Ibu Endang', store: 'Warung Sayur & Sembako', city: 'Klaten' },
  { name: 'Pak Syamsul Arifin', store: 'Toko Sembako Barokah', city: 'Jember' },
  { name: 'Kak Nabila Putri', store: 'Toko Perlengkapan Bayi', city: 'Banjarmasin' },
]

const PLAN_CHOICES = [
  'Paket Business (1 Tahun)',
  'Paket Business (3 Bulan)',
  'Paket Basic Lifetime',
  'Paket Business (1 Bulan)',
  'Paket Basic (Bulanan)',
]

function buildShuffledQueue(): BuyerNotification[] {
  const copy = [...BUYER_POOL]
  // Fisher-Yates shuffle for buyers
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.map((buyer, idx) => ({
    ...buyer,
    plan: PLAN_CHOICES[idx % PLAN_CHOICES.length],
  }))
}

export default function ConversionBoosters() {
  const [activeToast, setActiveToast] = useState<BuyerNotification | null>(null)
  const [showScarcityBar, setShowScarcityBar] = useState(false)
  const [isInHero, setIsInHero] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 59) // 14:59 countdown

  const queueRef = useRef<BuyerNotification[]>([])
  const usedNamesRef = useRef<Set<string>>(new Set())

  // Observe Hero section so promo notifications are hidden while user is in the Hero section
  useEffect(() => {
    const heroEl = document.querySelector('.hero')
    if (!heroEl || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInHero(entry.isIntersecting)
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    queueRef.current = buildShuffledQueue()

    let nextPopupTimer: ReturnType<typeof setTimeout> | null = null
    let hideToastTimer: ReturnType<typeof setTimeout> | null = null
    let isUnmounted = false

    const triggerToast = () => {
      if (isUnmounted) return

      // Pick a buyer that hasn't been shown yet
      let nextBuyer = queueRef.current.shift()
      while (nextBuyer && usedNamesRef.current.has(nextBuyer.name)) {
        nextBuyer = queueRef.current.shift()
      }

      // If all 30 unique buyers were exhausted in a very long session, stop or rebuild without last shown
      if (!nextBuyer) return

      usedNamesRef.current.add(nextBuyer.name)
      setActiveToast(nextBuyer)

      // Stay visible for exactly 3 seconds (3000ms)
      hideToastTimer = setTimeout(() => {
        if (isUnmounted) return
        setActiveToast(null)

        // Schedule next popup at random interval between 30 - 60 seconds (30000ms - 60000ms)
        const randomDelayMs = Math.floor(Math.random() * (60000 - 30000 + 1)) + 30000
        nextPopupTimer = setTimeout(triggerToast, randomDelayMs)
      }, 3000)
    }

    // Start first appearance 1 minute (60,000ms) after landing page is accessed
    const initialOneMinuteTimer = setTimeout(() => {
      if (isUnmounted) return
      setShowScarcityBar(true)
      triggerToast()
    }, 60000)

    return () => {
      isUnmounted = true
      clearTimeout(initialOneMinuteTimer)
      if (nextPopupTimer) clearTimeout(nextPopupTimer)
      if (hideToastTimer) clearTimeout(hideToastTimer)
    }
  }, [])

  // Countdown ticker once scarcity bar is shown
  useEffect(() => {
    if (!showScarcityBar) return
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [showScarcityBar])

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const secs = String(secondsLeft % 60).padStart(2, '0')

  return (
    <>
      {/* TOP FLOATING SOCIAL PROOF PURCHASE NOTIFICATION (3s duration, hidden while in Hero) */}
      {activeToast && !isInHero && (
        <div className="purchase-toast-top" role="status" aria-live="polite">
          <div className="purchase-toast-avatar">✓</div>
          <div className="purchase-toast-content">
            <div className="purchase-toast-title">
              {activeToast.name} <span style={{ fontWeight: 500, color: '#64748b' }}>({activeToast.store}, {activeToast.city})</span>
            </div>
            <div className="purchase-toast-sub">
              Baru saja mengaktifkan <span className="purchase-toast-plan">{activeToast.plan}</span>
            </div>
          </div>
          <span className="purchase-toast-time">Baru saja</span>
        </div>
      )}

      {/* BOTTOM FLOATING SCARCITY COUNTDOWN BAR (Appears after 1 minute, hidden while in Hero) */}
      {showScarcityBar && !isInHero && (
        <>
          <style>{`
            .wa-float {
              bottom: 88px !important;
            }
            @media (max-width: 768px) {
              .wa-float {
                bottom: 108px !important;
              }
              .scarcity-desktop-sub {
                display: none !important;
              }
            }
          `}</style>
          <div className="scarcity-bottom-bar">
            <div className="scarcity-bar-inner">
              <div className="scarcity-left">
                <span className="scarcity-pulse-badge">🔥 Promo Terbatas</span>
                <span className="scarcity-headline">
                  Jangan tunda sampai harga naik!
                  <span className="scarcity-desktop-sub"> Kuota harga promo hari ini berakhir dalam:</span>
                </span>
              </div>
              <div className="scarcity-right">
                <div className="scarcity-timer-box" aria-label="Sisa waktu promo">
                  <span style={{ fontSize: '14px' }}>⏳</span>
                  <span className="scarcity-timer-text">
                    00 : {mins} : {secs}
                  </span>
                </div>
                <a href="#harga" className="scarcity-cta-btn">
                  Ambil Paket Sekarang →
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

