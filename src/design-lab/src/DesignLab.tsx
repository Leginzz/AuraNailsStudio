import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './DesignLab.css'

const proposals = [
  {
    id: '01',
    title: 'Luxury Black & Gold',
    description: 'Elegancia extrema. Negro profundo y dorado metálico con animaciones suaves.',
    elegance: 10,
    conversion: 9,
    speed: 8,
    seo: 9,
    accessibility: 8,
    responsive: 10
  },
  {
    id: '02',
    title: 'Minimal White',
    description: 'Inspirado en Apple. Mucho espacio, blanco puro, tipografía limpia.',
    elegance: 9,
    conversion: 8,
    speed: 10,
    seo: 9,
    accessibility: 10,
    responsive: 10
  },
  {
    id: '03',
    title: 'Instagram Beauty',
    description: 'Enfocado en redes sociales. Gradientes vibrantes, impacto visual.',
    elegance: 8,
    conversion: 10,
    speed: 7,
    seo: 8,
    accessibility: 7,
    responsive: 10
  },
  {
    id: '04',
    title: 'Editorial Fashion',
    description: 'Inspirado en revistas de moda. Tipografía audaz, composición editorial.',
    elegance: 10,
    conversion: 8,
    speed: 7,
    seo: 8,
    accessibility: 7,
    responsive: 9
  },
  {
    id: '05',
    title: 'Japanese Minimal',
    description: 'Diseño limpio y muy elegante. Influencia wabi-sabi, asimetría cuidada.',
    elegance: 10,
    conversion: 8,
    speed: 9,
    seo: 9,
    accessibility: 9,
    responsive: 10
  },
  {
    id: '06',
    title: 'Spa Premium',
    description: 'Relajante, natural, lujoso. Tonos tierra, orgánico, sereno.',
    elegance: 9,
    conversion: 9,
    speed: 8,
    seo: 9,
    accessibility: 9,
    responsive: 10
  },
  {
    id: '07',
    title: 'Luxury Pink',
    description: 'Femenino y premium. Rosas sofisticados sin caer en excesos.',
    elegance: 9,
    conversion: 9,
    speed: 8,
    seo: 8,
    accessibility: 8,
    responsive: 10
  },
  {
    id: '08',
    title: 'Glassmorphism',
    description: 'Moderno. Efectos de cristal, blur, capas traslúcidas.',
    elegance: 8,
    conversion: 8,
    speed: 7,
    seo: 7,
    accessibility: 7,
    responsive: 9
  },
  {
    id: '09',
    title: 'Dark Premium',
    description: 'Modo oscuro sofisticado. Negro, blanco y dorado.',
    elegance: 10,
    conversion: 9,
    speed: 9,
    seo: 9,
    accessibility: 8,
    responsive: 10
  },
  {
    id: '10',
    title: 'Creative Freedom',
    description: 'La mejor propuesta posible. Libertad creativa total.',
    elegance: 10,
    conversion: 10,
    speed: 9,
    seo: 10,
    accessibility: 9,
    responsive: 10
  }
]

function StarRating({ value }: { value: number }) {
  return (
    <span className="dl-stars">
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={`dl-star ${i < value ? 'filled' : ''}`}>★</span>
      ))}
    </span>
  )
}

export default function DesignLab() {
  const navigate = useNavigate()
  const [confirm, setConfirm] = useState<string | null>(null)

  return (
    <div className="dl-page">
      <header className="dl-header">
        <div className="dl-header-inner">
          <h1 className="dl-title">
            <span className="dl-title-icon">◇</span>
            Design Lab
            <span className="dl-title-icon">◇</span>
          </h1>
          <p className="dl-subtitle">Aura Nails Studio · Propuestas de Diseño</p>
          <p className="dl-desc">
            Compara 10 propuestas completamente funcionales. Cada una tiene su propia
            personalidad, layout y experiencia de usuario.
          </p>
        </div>
      </header>

      <div className="dl-grid">
        {proposals.map((p) => (
          <article key={p.id} className="dl-card">
            <div className="dl-card-badge">Propuesta {p.id}</div>
            <h2 className="dl-card-title">{p.title}</h2>
            <p className="dl-card-desc">{p.description}</p>

            <div className="dl-card-stats">
              <div className="dl-stat">
                <label>Elegancia</label>
                <StarRating value={p.elegance} />
              </div>
              <div className="dl-stat">
                <label>Conversión</label>
                <StarRating value={p.conversion} />
              </div>
              <div className="dl-stat">
                <label>Velocidad</label>
                <StarRating value={p.speed} />
              </div>
              <div className="dl-stat">
                <label>SEO</label>
                <StarRating value={p.seo} />
              </div>
              <div className="dl-stat">
                <label>Accesibilidad</label>
                <StarRating value={p.accessibility} />
              </div>
              <div className="dl-stat">
                <label>Responsive</label>
                <StarRating value={p.responsive} />
              </div>
            </div>

            <div className="dl-card-actions">
              <button
                className="dl-btn dl-btn-secondary"
                onClick={() => navigate(`/design-lab/propuesta/${p.id}`)}
              >
                Vista Previa
              </button>
              <button
                className="dl-btn dl-btn-primary"
                onClick={() => setConfirm(p.title)}
              >
                Usar esta propuesta
              </button>
            </div>
          </article>
        ))}
      </div>

      {confirm && (
        <div className="dl-overlay" onClick={() => setConfirm(null)}>
          <div className="dl-modal" onClick={(e) => e.stopPropagation()}>
            <h3>¿Usar esta propuesta?</h3>
            <p>
              <strong>{confirm}</strong> será utilizada como base del sitio oficial de
              Aura Nails Studio.
            </p>
            <p className="dl-modal-note">
              Esta acción no modifica la página actual. Solo registra tu selección.
            </p>
            <div className="dl-modal-actions">
              <button className="dl-btn dl-btn-secondary" onClick={() => setConfirm(null)}>
                Cancelar
              </button>
              <button
                className="dl-btn dl-btn-primary"
                onClick={() => {
                  setConfirm(null)
                  alert(`✓ "${confirm}" seleccionada como base del sitio.`)
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
