import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Proposal02.css'

const NAV_ITEMS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Galería', id: 'galeria' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Promociones', id: 'promociones' },
  { label: 'Ubicación', id: 'ubicacion' },
  { label: 'FAQ', id: 'faq' },
]

const SERVICIOS = [
  { nombre: 'Acrílicas', precio: '$450', desc: 'Esculpidas con forma y longitud personalizada' },
  { nombre: 'Polygel', precio: '$550', desc: 'Extensión ligera y resistente' },
  { nombre: 'Gel Semipermante', precio: '$350', desc: 'Esmaltado de larga duración' },
  { nombre: 'Nail Art', precio: '$250', desc: 'Diseños artísticos personalizados' },
  { nombre: 'Manicure', precio: '$200', desc: 'Cuidado completo de manos' },
  { nombre: 'Pedicure', precio: '$300', desc: 'Spa y embellecimiento de pies' },
]

const GALERIA_IMGS = [
  '1604654894610-df63bc536371',
  '1607779097040-26e80aa78e66',
  '1632345031435-8727f6897d53',
  '1608460770809-5e1ac9a7ffb4',
  '1610992015732-2449b76344bc',
  '1519014816548-bf5fe059798b',
]

const TESTIMONIOS = [
  { nombre: 'María G.', texto: 'La mejor experiencia en uñas acrílicas que he tenido. El detalle y la calidad son impresionantes.' },
  { nombre: 'Ana L.', texto: 'El ambiente es tan elegante y relajante. Salí sintiéndome renovada y con unas uñas espectaculares.' },
  { nombre: 'Carmen R.', texto: 'Llevo un año asistiendo y siempre superan mis expectativas. El nail art es una obra de arte.' },
  { nombre: 'Sofía M.', texto: 'Los precios son justos para la calidad que ofrecen. Mi lugar favorito para consentirme.' },
]

const PROMOCIONES = [
  { nombre: 'Pack Novia', precio: '$1,200', incluye: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Seal'] },
  { nombre: 'Pack Amigas', precio: '$1,800', incluye: ['4 Manicures', '4 Pedicures', 'Brunch'] },
  { nombre: 'Pack Mensual', precio: '$950', incluye: ['2 Cambios de Gel', 'Retoque ilimitado'] },
]

const FAQS = [
  { pregunta: '¿Cuánto duran las uñas acrílicas?', respuesta: 'Con cuidado adecuado, las uñas acrílicas pueden durar de 3 a 4 semanas antes de necesitar un retoque o llenado.' },
  { pregunta: '¿Duele el proceso de aplicación?', respuesta: 'No, el proceso no debería doler. Si sientes molestias, avísanos inmediatamente para ajustar la técnica.' },
  { pregunta: '¿Cómo puedo cuidar mis uñas en casa?', respuesta: 'Recomendamos usar guantes para labores domésticas, aplicar aceite cutícula diariamente y evitar usar las uñas como herramientas.' },
  { pregunta: '¿Cuánto tiempo toma una cita?', respuesta: 'Una manicura completa toma aproximadamente 45–60 minutos. Los servicios de acrílico o polygel pueden tomar de 1.5 a 2 horas.' },
  { pregunta: '¿Aceptan pagos con tarjeta?', respuesta: 'Sí, aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.' },
]

export default function Proposal02() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleFAQ = (i: number) => setOpenFAQ(openFAQ === i ? null : i)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (showModal || mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showModal, mobileOpen])

  return (
    <div className="proposal-02">
      <nav className="nav" role="navigation" aria-label="Navegación principal">
        <div className="nav-inner">
          <Link to="/design-lab" className="nav-back" aria-label="Volver al laboratorio">
            ← Volver al laboratorio
          </Link>

          <button
            className={`menu-toggle ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="inicio" className="hero" aria-label="Inicio">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content animate">
          <div className="hero-mockup" aria-hidden="true">
            <div className="mockup-inner">
              <span className="mockup-nail" />
              <span className="mockup-nail" />
              <span className="mockup-nail" />
            </div>
          </div>
          <h1 className="hero-title">Aura Nails Studio</h1>
          <p className="hero-subtitle">Diseño y cuidado profesional de uñas en Tuxpan, Veracruz.</p>
          <button className="btn-hero" onClick={() => setShowModal(true)}>
            Reservar cita
          </button>
        </div>
      </section>

      <section id="servicios" className="section" aria-label="Servicios">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Servicios</h2>
            <p className="section-desc">Todo lo que necesitas para unas uñas impecables</p>
          </header>

          <div className="grid-cards">
            {SERVICIOS.map((s, i) => (
              <article
                key={s.nombre}
                className="card animate"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="card-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v2a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 15v-2a7 7 0 0 0-14 0v2" />
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <line x1="9" y1="22" x2="15" y2="22" />
                  </svg>
                </div>
                <h3 className="card-title">{s.nombre}</h3>
                <p className="card-desc">{s.desc}</p>
                <p className="card-price">{s.precio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section section-alt" aria-label="Galería">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Galería</h2>
            <p className="section-desc">Nuestros trabajos recientes</p>
          </header>

          <div className="grid-gallery">
            {GALERIA_IMGS.map((id, i) => (
              <figure key={id} className="gallery-item animate">
                <img
                  src={`https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop`}
                  alt={`Trabajo de nail art ${i + 1}`}
                  loading="lazy"
                  className="gallery-img"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="section" aria-label="Testimonios">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Testimonios</h2>
            <p className="section-desc">Lo que opinan nuestras clientas</p>
          </header>

          <div className="grid-testimonios">
            {TESTIMONIOS.map((t) => (
              <blockquote key={t.nombre} className="testimonio-card animate">
                <p className="testimonio-text">"{t.texto}"</p>
                <footer className="testimonio-footer">
                  <cite className="testimonio-name">{t.nombre}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="promociones" className="section section-alt" aria-label="Promociones">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Promociones</h2>
            <p className="section-desc">Paquetes especiales</p>
          </header>

          <div className="grid-promos">
            {PROMOCIONES.map((p) => (
              <article key={p.nombre} className="promo-card animate">
                <h3 className="promo-title">{p.nombre}</h3>
                <p className="promo-price">{p.precio}</p>
                <ul className="promo-list">
                  {p.incluye.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="btn-promo" onClick={() => setShowModal(true)}>
                  Reservar ahora
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section" aria-label="Ubicación">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Ubicación</h2>
            <p className="section-desc">Visítanos en Tuxpan</p>
          </header>

          <div className="ubicacion-grid animate">
            <div className="ubicacion-info">
              <h3>Aura Nails Studio</h3>
              <p className="ubicacion-dir">Tuxpan, Veracruz, México</p>
              <p className="ubicacion-ref">Centro de Tuxpan</p>
              <div className="ubicacion-horario">
                <h4>Horario</h4>
                <p>Lun – Vie: 9:00 AM – 8:00 PM</p>
                <p>Sáb: 9:00 AM – 6:00 PM</p>
                <p>Dom: Cerrado</p>
              </div>
              <div className="ubicacion-contacto">
                <p>+52 783 137 7679</p>
                <p>hello@auranails.mx</p>
              </div>
            </div>

            <div className="ubicacion-mapa">
              <iframe
                title="Ubicación de Aura Nails Studio en Tuxpan, Veracruz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240245.8419660505!2d-97.57273099370065!3d20.95483409846682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db7c3a1a2b3c4d%3A0x1a2b3c4d5e6f7a8b!2sTuxpan%2C%20Ver.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1690000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section section-alt" aria-label="Preguntas frecuentes">
        <div className="container">
          <header className="section-header animate">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-desc">Resolvemos tus dudas</p>
          </header>

          <div className="faq-list animate">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openFAQ === i ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={openFAQ === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  {faq.pregunta}
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-answer"
                  role="region"
                  aria-hidden={openFAQ !== i}
                >
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Aura Nails Studio</h3>
              <p>Diseño y cuidado profesional de uñas.</p>
              <div className="social-links">
                <a href="#" aria-label="Instagram" className="social-link">Instagram</a>
                <a href="#" aria-label="Facebook" className="social-link">Facebook</a>
                <a href="#" aria-label="TikTok" className="social-link">TikTok</a>
              </div>
            </div>
            <div className="footer-hours">
              <h4>Horario</h4>
              <p>Lun – Vie: 9:00 AM – 8:00 PM</p>
              <p>Sáb: 9:00 AM – 6:00 PM</p>
              <p>Dom: Cerrado</p>
            </div>
            <div className="footer-contact">
              <h4>Contacto</h4>
              <p>Tuxpan, Veracruz, México</p>
              <p>+52 783 137 7679</p>
              <p>hello@auranails.mx</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Aura Nails Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5217831377679"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} role="dialog" aria-modal="true" aria-label="Reservar cita">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Cerrar modal">×</button>
            <h2 className="modal-title">Reserva tu Cita</h2>
            <p className="modal-desc">Contáctanos por WhatsApp para agendar tu cita</p>
            <a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer" className="btn-modal">
              Abrir WhatsApp
            </a>
            <p className="modal-small">O llama al +52 783 137 7679</p>
          </div>
        </div>
      )}

      <nav className="bottom-nav" aria-label="Navegación entre propuestas">
        <div className="container">
          <Link to="/design-lab" className="bottom-nav-back">← Volver al laboratorio</Link>
          <div className="bottom-nav-props">
            <Link to="/design-lab/propuesta/01">← Anterior</Link>
            <Link to="/design-lab/propuesta/03">Siguiente →</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
