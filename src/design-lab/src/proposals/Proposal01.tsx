import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Proposal01.css'

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
  { nombre: 'Acrílicas', precio: '$450', desc: 'Esculpidas con forma y longitud personalizada', badge: 'Premium' },
  { nombre: 'Polygel', precio: '$550', desc: 'Extensión ligera y resistente', badge: 'Premium' },
  { nombre: 'Gel Semipermante', precio: '$350', desc: 'Esmaltado de larga duración', badge: 'Popular' },
  { nombre: 'Nail Art', precio: '$250', desc: 'Diseños artísticos personalizados', badge: 'Exclusivo' },
  { nombre: 'Manicure', precio: '$200', desc: 'Cuidado completo de manos', badge: null },
  { nombre: 'Pedicure', precio: '$300', desc: 'Spa y embellecimiento de pies', badge: null },
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
  { nombre: 'María G.', texto: 'La mejor experiencia en uñas acrílicas que he tenido. El detalle y la calidad son impresionantes.', lugar: 'Tuxpan' },
  { nombre: 'Ana L.', texto: 'El ambiente es tan elegante y relajante. Salí sintiéndome renovada y con unas uñas espectaculares.', lugar: 'Veracruz' },
  { nombre: 'Carmen R.', texto: 'Llevo un año asistiendo y siempre superan mis expectativas. El nail art es una obra de arte.', lugar: 'Poza Rica' },
]

const PROMOCIONES = [
  { nombre: 'Pack Novia', precio: '$1,200', incluye: ['Manicure', 'Pedicure', 'Nail Art', 'Gel Seal'], vigencia: 'Válido hasta 30 días' },
  { nombre: 'Pack Amigas', precio: '$1,800', incluye: ['4 Manicures', '4 Pedicures', 'Brunch'], vigencia: 'Válido para 4 personas' },
  { nombre: 'Pack Mensual', precio: '$950', incluye: ['2 Cambios de Gel', 'Retoque ilimitado'], vigencia: 'Por 1 mes' },
]

const FAQS = [
  { pregunta: '¿Cuánto duran las uñas acrílicas?', respuesta: 'Con cuidado adecuado, las uñas acrílicas pueden durar de 3 a 4 semanas antes de necesitar un retoque o llenado.' },
  { pregunta: '¿Duele el proceso de aplicación?', respuesta: 'No, el proceso no debería doler. Si sientes molestias, avísanos inmediatamente para ajustar la técnica.' },
  { pregunta: '¿Cómo puedo cuidar mis uñas en casa?', respuesta: 'Recomendamos usar guantes para labores domésticas, aplicar aceite cutícula diariamente y evitar usar las uñas como herramientas.' },
  { pregunta: '¿Cuánto tiempo toma una cita?', respuesta: 'Una manicura completa toma aproximadamente 45–60 minutos. Los servicios de acrílico o polygel pueden tomar de 1.5 a 2 horas.' },
  { pregunta: '¿Aceptan pagos con tarjeta?', respuesta: 'Sí, aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias.' },
]

export default function Proposal01() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleFAQ = (i: number) => setOpenFAQ(openFAQ === i ? null : i)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      const bg = document.querySelector<HTMLElement>('.hero-bg')
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
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
    <div className="proposal-01">
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
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content animate">
          <div className="hero-symbol" aria-hidden="true">✦</div>
          <h1 className="hero-title">Aura Nails Studio</h1>
          <p className="hero-subtitle">Donde el arte y la elegancia se encuentran en cada detalle</p>
          <button className="btn-hero" onClick={() => setShowModal(true)}>
            Reserva tu cita
            <span className="btn-shimmer" aria-hidden="true" />
          </button>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <span>Descubre</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      <section id="servicios" className="section" aria-label="Servicios">
        <div className="container">
          <header className="section-header animate">
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Servicios</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
            <p className="section-desc">Transformamos tus uñas en obras de arte</p>
          </header>

          <div className="grid-cards">
            {SERVICIOS.map((s, i) => (
              <article
                key={s.nombre}
                className={`card animate ${s.badge ? 'has-badge' : ''}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {s.badge && <span className="badge">{s.badge}</span>}
                <div className="card-icon" aria-hidden="true">✦</div>
                <h3 className="card-title">{s.nombre}</h3>
                <p className="card-desc">{s.desc}</p>
                <div className="card-divider" aria-hidden="true" />
                <p className="card-price">{s.precio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="section section-alt" aria-label="Galería">
        <div className="container">
          <header className="section-header animate">
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Galería</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
            <p className="section-desc">Nuestro trabajo habla por sí mismo</p>
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
                <figcaption className="gallery-caption" aria-hidden="true">Ver más</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="section" aria-label="Testimonios">
        <div className="container">
          <header className="section-header animate">
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Testimonios</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
            <p className="section-desc">Lo que dicen nuestras clientas</p>
          </header>

          <div className="grid-testimonios">
            {TESTIMONIOS.map((t) => (
              <blockquote key={t.nombre} className="testimonio-card animate">
                <div className="quote-mark" aria-hidden="true">"</div>
                <p className="testimonio-text">"{t.texto}"</p>
                <footer className="testimonio-footer">
                  <cite className="testimonio-name">{t.nombre}</cite>
                  <span className="testimonio-lugar">{t.lugar}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="promociones" className="section section-alt" aria-label="Promociones">
        <div className="container">
          <header className="section-header animate">
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Promociones</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
            <p className="section-desc">Paquetes especiales para ti</p>
          </header>

          <div className="grid-promos">
            {PROMOCIONES.map((p) => (
              <article key={p.nombre} className="promo-card animate">
                <div className="promo-header">
                  <h3 className="promo-title">{p.nombre}</h3>
                  <p className="promo-price">{p.precio}</p>
                </div>
                <ul className="promo-list">
                  {p.incluye.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="promo-vigencia">{p.vigencia}</p>
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
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Ubicación</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
          </header>

          <div className="ubicacion-grid animate">
            <div className="ubicacion-info">
              <div className="ubicacion-icon" aria-hidden="true">✦</div>
              <h3>Aura Nails Studio</h3>
              <p className="ubicacion-dir">Tuxpan, Veracruz, México</p>
              <p className="ubicacion-ref">Centro de Tuxpan, a una cuadra del zócalo</p>
              <div className="ubicacion-horario">
                <h4>Horario</h4>
                <p>Lun – Vie: 9:00 AM – 8:00 PM</p>
                <p>Sáb: 9:00 AM – 6:00 PM</p>
                <p>Dom: Cerrado</p>
              </div>
              <div className="ubicacion-contacto">
                <p>📞 +52 783 137 7679</p>
                <p>✉️ hello@auranails.mx</p>
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
            <span className="section-symbol" aria-hidden="true">✦</span>
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
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
                  <span>{faq.pregunta}</span>
                  <span className="faq-icon" aria-hidden="true">{openFAQ === i ? '−' : '+'}</span>
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
              <div className="footer-symbol" aria-hidden="true">✦</div>
              <h3>Aura Nails Studio</h3>
              <p>Donde el arte y la elegancia se encuentran.</p>
              <div className="social-links" aria-label="Redes sociales">
                <a href="#" aria-label="Instagram" className="social-link">IG</a>
                <a href="#" aria-label="Facebook" className="social-link">FB</a>
                <a href="#" aria-label="TikTok" className="social-link">TT</a>
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
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
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
        <span aria-hidden="true">💬</span>
      </a>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)} role="dialog" aria-modal="true" aria-label="Reservar cita">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Cerrar modal">×</button>
            <div className="modal-symbol" aria-hidden="true">✦</div>
            <h2 className="modal-title">Reserva tu Cita</h2>
            <div className="divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-diamond">◇</span>
              <span className="divider-line" />
            </div>
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
            <span className="bottom-nav-disabled">← Anterior</span>
            <Link to="/design-lab/propuesta/02">Siguiente →</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
