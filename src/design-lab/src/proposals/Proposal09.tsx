import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import './Proposal09.css'

const servicios = [
  { icon: '💎', name: 'Gelish Premium', desc: 'Esmaltado en gel de larga duración con acabado brillante y sellado profesional.', price: '$450' },
  { icon: '✨', name: 'Uñas Acrílicas', desc: 'Extensión y diseño en acrílico con forma personalizada y decoración exclusiva.', price: '$750' },
  { icon: '🎨', name: 'Nail Art Exclusivo', desc: 'Diseños únicos con cristales, foil, degradados y técnicas avanzadas.', price: '$850' },
  { icon: '🦶', name: 'Pedicura Spa', desc: 'Tratamiento completo con exfoliación, masaje, hidratación y esmaltado.', price: '$550' },
  { icon: '🌿', name: 'Kapping Gel', desc: 'Baño en gel fortificante que protege la uña natural con un acabado impecable.', price: '$520' },
  { icon: '👑', name: 'Servicio VIP', desc: 'Experiencia premium con diseño personalizado, brindes y atención dedicada.', price: '$1,200' },
]

const testimonios = [
  { text: 'Un lugar mágico. La atención es increíble y el diseño de uñas más hermoso que he tenido. Súper recomendado.', author: 'María Fernanda', role: 'Cliente frecuente' },
  { text: 'Desde que entré supe que era especial. El ambiente es tan elegante y relajante. Salí con las uñas perfectas.', author: 'Ana Sofía', role: 'Cliente VIP' },
  { text: 'El mejor salón de uñas en Tuxpan. Los detalles en oro y la calidad del trabajo son insuperables. Volveré cada mes.', author: 'Valentina', role: 'Cliente habitual' },
  { text: 'Me encanta la atención personalizada. Cada diseño es único y hecho con mucho amor. Mi lugar favorito.', author: 'Regina', role: 'Cliente frecuente' },
]

const promos = [
  { badge: 'NUEVA', title: 'Pack Glamour', desc: 'Gelish + Nail Art básico con diseño de tu elección.', price: '$680', original: '$850', tag: '20% OFF' },
  { badge: 'ESPECIAL', title: 'Parejas', desc: 'Dos servicios de gelish o acrílico al precio de uno.', price: '$750', original: '$1,500', tag: '50% OFF' },
  { badge: 'MENSUAL', title: 'Suscripción Diamante', desc: 'Una visita al mes con diseño exclusivo y brindes especiales.', price: '$980', original: '$1,300', tag: '25% OFF' },
]

const faqs = [
  { q: '¿Cuánto duran las uñas de gel?', a: 'Nuestro gelish dura de 3 a 4 semanas con el cuidado adecuado. Recomendamos no exponerlas a químicos agresivos y usar guantes para labores domésticas.' },
  { q: '¿Duele el proceso de uñas acrílicas?', a: 'No duele. Durante la colocación del acrílico no hay dolor. Si sientes molestia, puede ser señal de que la uña está mal colocada; en Aura Nails garantizamos un proceso cómodo y seguro.' },
  { q: '¿Cómo puedo reservar una cita?', a: 'Puedes reservar a través de nuestro WhatsApp o directamente en el estudio. Te recomendamos agendar con al menos 2 días de anticipación para asegurar tu horario preferido.' },
  { q: '¿Tienen estacionamiento?', a: 'Sí, contamos con estacionamiento privado para nuestras clientas. También estamos cerca de la plaza principal de Tuxpan.' },
  { q: '¿Cuál es el tiempo promedio de cada servicio?', a: 'Un gelish toma aproximadamente 45 minutos. Las acrílicas pueden tardar de 1.5 a 2 horas dependiendo de la complejidad del diseño.' },
]

export default function Proposal09() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleFaqToggle = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <div className="proposal-09">

      <nav className="p09-nav" aria-label="Navegación principal">
        <span className="p09-nav-logo">Aura Nails</span>
        <ul className="p09-nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#promociones">Promociones</a></li>
          <li><a href="#ubicacion">Ubicación</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <section className="p09-hero" aria-label="Hero principal">
        <div className="p09-hero-content">
          <p className="p09-hero-subtitle">Design Lab · Nails Studio</p>
          <div className="p09-hero-divider" />
          <h1 className="p09-hero-title">
            Elegancia <span>Nocturna</span>
          </h1>
          <p className="p09-hero-desc">
            Donde el lujo se encuentra con la oscuridad. Experiencias de nail art
            premium en un ambiente sofisticado y envolvente.
          </p>
          <Link to="/" className="p09-btn-primary" aria-label="Reservar cita">
            Reservar Cita
          </Link>
        </div>
        <div className="p09-scroll-indicator" aria-hidden="true">
          <span>Descubre</span>
          <div className="p09-scroll-line" />
        </div>
      </section>

      <section id="servicios" className="p09-section" aria-label="Servicios">
        <p className="p09-section-tag">Nuestro menú</p>
        <h2 className="p09-section-title">Servicios</h2>
        <p className="p09-section-subtitle">Arte en cada detalle</p>
        <div className="p09-section-line" />
        <div className="p09-servicios-grid">
          {servicios.map((s, i) => (
            <div key={i} className="p09-servicio-card p09-animate-in" tabIndex={0}>
              <div className="p09-servicio-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="p09-servicio-name">{s.name}</h3>
              <p className="p09-servicio-desc">{s.desc}</p>
              <span className="p09-servicio-price">{s.price} MXN</span>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="p09-section" aria-label="Galería">
        <p className="p09-section-tag">Portafolio</p>
        <h2 className="p09-section-title">Galería</h2>
        <p className="p09-section-subtitle">Nuestro arte habla</p>
        <div className="p09-section-line" />
        <div className="p09-galeria-grid" role="list">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="p09-galeria-item p09-animate-in" role="listitem" tabIndex={0} aria-label={`Diseño de uñas ${i + 1}`}>
              <div className="p09-galeria-overlay">
                <span>Ver diseño</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonios" className="p09-section" aria-label="Testimonios">
        <p className="p09-section-tag">Voces</p>
        <h2 className="p09-section-title">Testimonios</h2>
        <p className="p09-section-subtitle">Lo que dicen de nosotros</p>
        <div className="p09-section-line" />
        <div className="p09-testimonios-grid">
          {testimonios.map((t, i) => (
            <div key={i} className="p09-testimonio-card p09-animate-in">
              <div className="p09-testimonio-quote" aria-hidden="true">"</div>
              <p className="p09-testimonio-text">{t.text}</p>
              <div className="p09-testimonio-author">{t.author}</div>
              <div className="p09-testimonio-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="promociones" className="p09-section" aria-label="Promociones">
        <p className="p09-section-tag">Ofertas</p>
        <h2 className="p09-section-title">Promociones</h2>
        <p className="p09-section-subtitle">Exclusivas del mes</p>
        <div className="p09-section-line" />
        <div className="p09-promo-grid">
          {promos.map((p, i) => (
            <div key={i} className="p09-promo-card p09-animate-in" tabIndex={0}>
              <div className="p09-promo-badge">{p.badge}</div>
              <h3 className="p09-promo-title">{p.title}</h3>
              <p className="p09-promo-desc">{p.desc}</p>
              <div className="p09-promo-price">{p.price} MXN</div>
              <div className="p09-promo-original">{p.original} MXN</div>
            </div>
          ))}
        </div>
      </section>

      <section className="p09-section" aria-label="Artistas">
        <p className="p09-section-tag">Talento</p>
        <h2 className="p09-section-title">Nuestras Artistas</h2>
        <p className="p09-section-subtitle">Manos que crean arte</p>
        <div className="p09-section-line" />
        <div className="p09-artists-grid">
          {['Sofía Valdez', 'Camila Rojas', 'Ximena Torres'].map((name, i) => (
            <div key={i} className="p09-artist-card p09-animate-in">
              <div className="p09-artist-avatar" aria-hidden="true" style={{ background: `linear-gradient(135deg, ${['#2a1a0a,#4a3520', '#1a0a1a,#3a1a2a', '#0a1a1a,#1a3a3a'][i]})` }} />
              <div className="p09-artist-name">{name}</div>
              <div className="p09-artist-role">{['Senior Nail Artist', 'Diseñadora Principal', 'Especialista en Gel'][i]}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="p09-section" aria-label="Proceso">
        <p className="p09-section-tag">Método</p>
        <h2 className="p09-section-title">Proceso de Creación</h2>
        <p className="p09-section-subtitle">De la idea a la obra maestra</p>
        <div className="p09-section-line" />
        <div className="p09-process-grid">
          <div className="p09-process-step p09-animate-in">
            <div className="p09-process-icon" aria-hidden="true">💬</div>
            <h3 className="p09-process-title">Consulta</h3>
            <p className="p09-process-desc">Diseñamos juntas el look perfecto para ti.</p>
          </div>
          <div className="p09-process-step p09-animate-in">
            <div className="p09-process-icon" aria-hidden="true">🎨</div>
            <h3 className="p09-process-title">Creación</h3>
            <p className="p09-process-desc">Técnicas avanzadas para resultados impecables.</p>
          </div>
          <div className="p09-process-step p09-animate-in">
            <div className="p09-process-icon" aria-hidden="true">✨</div>
            <h3 className="p09-process-title">Finalización</h3>
            <p className="p09-process-desc">Detalles finales y cuidado posterior.</p>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="p09-section" aria-label="Ubicación">
        <p className="p09-section-tag">Encuéntranos</p>
        <h2 className="p09-section-title">Ubicación</h2>
        <p className="p09-section-subtitle">Visítanos en nuestro estudio</p>
        <div className="p09-section-line" />
        <div className="p09-location-wrapper">
          <div className="p09-location-info">
            <h3>Tuxpan, Veracruz</h3>
            <p><strong>Dirección:</strong> Av. Independencia #245, Col. Centro, Tuxpan, Veracruz, México</p>
            <p><strong>Horario:</strong> Lunes a Sábado 10:00 AM - 8:00 PM</p>
            <p><strong>Teléfono:</strong> +52 783 137 7679</p>
            <p>Estacionamiento privado disponible. Te esperamos en un espacio diseñado para tu comodidad y relajación.</p>
          </div>
          <div className="p09-map-container">
            <iframe
              title="Mapa Tuxpan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30159.654248797897!2d-97.41894485!3d20.95689305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db1349c12d5555%3A0x9b0b0b0b0b0b0b0b!2sTuxpan%2C%20Ver.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa de Tuxpan, Veracruz"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="p09-section" aria-label="Preguntas frecuentes">
        <p className="p09-section-tag">Información</p>
        <h2 className="p09-section-title">Preguntas Frecuentes</h2>
        <p className="p09-section-subtitle">Todo lo que necesitas saber</p>
        <div className="p09-section-line" />
        <div className="p09-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="p09-faq-item">
              <button
                className={`p09-faq-question ${openFaq === i ? 'open' : ''}`}
                onClick={() => handleFaqToggle(i)}
                aria-expanded={openFaq === i}
                aria-controls={`p09-faq-answer-${i}`}
              >
                {faq.q}
                <span className="p09-faq-arrow" aria-hidden="true">▾</span>
              </button>
              <div
                id={`p09-faq-answer-${i}`}
                className={`p09-faq-answer ${openFaq === i ? 'open' : ''}`}
                role="region"
                aria-label={faq.q}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p09-cta-section" aria-label="Reservar cita">
        <h2 className="p09-cta-title">¿Lista para mimarte?</h2>
        <p className="p09-cta-desc">Reserva tu cita hoy y descubre la experiencia Aura Nails Studio.</p>
        <a
          href="https://wa.me/5217831377679"
          target="_blank"
          rel="noopener noreferrer"
          className="p09-cta-btn"
          aria-label="Reservar cita por WhatsApp"
        >
          Reservar mi cita
        </a>
      </section>

      <footer className="p09-footer" aria-label="Footer">
        <div className="p09-footer-grid">
          <div>
            <div className="p09-footer-brand">Aura Nails</div>
            <p className="p09-footer-desc">Design Lab · Nails Studio. Elegancia y arte en cada detalle.</p>
          </div>
          <div>
            <h3 className="p09-footer-heading">Enlaces</h3>
            <ul className="p09-footer-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#promociones">Promociones</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="p09-footer-heading">Horario</h3>
            <div className="p09-footer-hours">
              <p>Lun - Sáb: 10:00 AM - 8:00 PM</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
          <div>
            <h3 className="p09-footer-heading">Contacto</h3>
            <ul className="p09-footer-links">
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">+52 783 137 7679</a></li>
            </ul>
          </div>
        </div>
        <div className="p09-footer-bottom">
          © 2026 Aura Nails Studio Design Lab. Todos los derechos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/5217831377679"
        target="_blank"
        rel="noopener noreferrer"
        className="p09-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.56 4.146 1.537 5.896L0 24l6.336-1.462C8.086 23.44 10.04 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.56 17.32c-.38.95-1.1 1.72-2.48 2.08-.66.18-1.52.32-4.42-.95-3.72-1.62-6.12-5.58-6.32-5.85-.2-.27-1.5-2.02-1.5-3.85s.95-2.73 1.3-3.1c.35-.38.76-.48 1.02-.48.25 0 .52.01.74.03.23.02.55-.09.86.66.38.95 1.3 3.28 1.42 3.52.12.24.2.52.04.84-.16.32-.24.52-.48.8-.24.28-.5.62-.72.84-.24.24-.48.5-.2.98.28.48 1.24 2.04 2.66 3.3 1.82 1.62 3.36 2.14 3.84 2.38.48.24.76.2 1.04-.12.28-.32.98-1.14 1.24-1.52.26-.38.52-.32.88-.2.36.12 2.28 1.08 2.68 1.28.4.2.66.3.76.48.1.18.02.88-.28 1.72z"/>
        </svg>
      </a>

      <nav className="p09-bottom-nav" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/08" aria-label="Propuesta anterior">← Anterior</Link>
        <Link to="/design-lab" aria-label="Volver al laboratorio">← Volver al laboratorio</Link>
        <Link to="/design-lab/propuesta/10" aria-label="Siguiente propuesta">Siguiente →</Link>
      </nav>

    </div>
  )
}
