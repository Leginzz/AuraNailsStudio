import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Proposal04.css'

export default function Proposal04() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { number: '01', name: 'Acrílicas', price: '$550', desc: 'Durabilidad extrema con acabado de alta costura. Esmaltado en gel con diseño minimalista.' },
    { number: '02', name: 'Polygel', price: '$700', desc: 'Extensión ligera con estructura firme. Ideal para manos que buscan elegancia natural.' },
    { number: '03', name: 'Gel Semipermante', price: '$350', desc: 'Brillo inalterable por semanas. Nuestra carta de colores editorial.' },
    { number: '04', name: 'Nail Art', price: '$450', desc: 'Diseños de autor. Cada uña es un lienzo en nuestra galería personal.' },
    { number: '05', name: 'Manicure', price: '$250', desc: 'Cuidado esencial con ritual de hidratación profunda. La base del estilo.' },
    { number: '06', name: 'Pedicure', price: '$400', desc: 'Tratamiento completo con exfoliación y masaje. Pasarela para tus pies.' },
  ]

  const gallery = [
    { gradient: 'linear-gradient(45deg, #c62828, #000)', label: 'Red Collection' },
    { gradient: 'linear-gradient(45deg, #000, #f5f0e1)', label: 'Cream Minimal' },
    { gradient: 'linear-gradient(45deg, #c62828, #f5f0e1)', label: 'Editorial Rouge' },
    { gradient: 'linear-gradient(45deg, #111, #333)', label: 'Dark Aesthetic' },
    { gradient: 'linear-gradient(45deg, #f5f0e1, #c62828)', label: 'Classic Glam' },
    { gradient: 'linear-gradient(45deg, #000, #c62828)', label: 'Black & Red' },
  ]

  const testimonials = [
    { name: 'Valentina de la Vega', text: 'Es la primera vez que salgo de un salón sintiéndome como en una editorial de Vogue. El nivel de detalle es obsesivo, en el mejor sentido.', role: 'Diseñadora de Moda' },
    { name: 'Regina Torres', text: 'Cada visita es una experiencia curatorial. No solo cuidan tus uñas, transforman tu perspectiva del cuidado personal.', role: 'Artista Visual' },
    { name: 'Daniela Mendoza', text: 'Descubrí este estudio por recomendación y ahora es mi único destino. La técnica en polygel es impecable, digna de pasarela.', role: 'Influencer' },
    { name: 'Camila Herrera', text: 'El mejor servicio de nail art que he probado. Los diseños son verdaderamente únicos y el equipo es súper profesional.', role: 'Arquitecta' },
  ]

  const promotions = [
    { name: 'Primera Vez', items: 'Manicure + Gel Semipermante + Nail Art básico', price: '$550', badge: 'Edición Limitada' },
    { name: 'Colección Completa', items: 'Manicure + Pedicure + Acrílicas + Retoque', price: '$1,050', badge: 'Selección Editorial' },
    { name: 'Experiencia Premium', items: 'Manicure Spa + Pedicure Spa + Polygel + Nail Art', price: '$1,400', badge: 'Alta Costura' },
  ]

  const faqs = [
    { q: '¿Cuánto dura una sesión de acrílicas?', a: 'Aproximadamente 1.5 a 2 horas. El tiempo varía según la複雜idad del diseño. Recomendamos llegar 10 minutos antes para iniciar puntuales.' },
    { q: '¿Cuál es la diferencia entre polygel y acrílico?', a: 'El polygel es más ligero y flexible que el acrílico tradicional, con un acabado más natural. Es ideal para quienes buscan una extensión cómoda y duradera.' },
    { q: '¿Ofrecen servicios para eventos especiales?', a: 'Sí, tenemos paquetes personalizados para bodas, quinceañeras y sesiones editoriales. Agenda con al menos dos semanas de anticipación.' },
    { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos efectivo, tarjetas de crédito/débito y transferencias. Pagos en efectivo tienen 5% de descuento.' },
    { q: '¿Cuánto tiempo debo esperar entre retoques?', a: 'Recomendamos retoques cada 2-3 semanas para uñas acrílicas y 3-4 semanas para gel semipermante, dependiendo del crecimiento natural.' },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="proposal04">
      <nav className="ef-nav" aria-label="Navegación principal">
        <div className="ef-nav-container">
          <Link to="/design-lab" className="ef-nav-back" aria-label="Volver al laboratorio">← Volver al laboratorio</Link>
          <div className="ef-nav-brand">AURA</div>
          <button
            className="ef-nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <span></span><span></span><span></span>
          </button>
          <ul className={`ef-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>Servicios</a></li>
            <li><a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria') }}>Galería</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios') }}>Testimonios</a></li>
            <li><a href="#promociones" onClick={(e) => { e.preventDefault(); scrollToSection('promociones') }}>Ediciones</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="ef-hero" id="hero" aria-label="Sección principal">
        <div className="ef-hero-overlay"></div>
        <div className="ef-hero-content">
          <span className="ef-hero-number">— 2026</span>
          <h1 className="ef-hero-title">
            <span className="ef-hero-line">AURA</span>
            <span className="ef-hero-line ef-hero-line--red">NAILS</span>
            <span className="ef-hero-line ef-hero-line--small">Studio Editorial</span>
          </h1>
          <p className="ef-hero-subtitle">Donde la alta costura encuentra su expresión en cada uña. Una experiencia de belleza curada al detalle.</p>
          <div className="ef-hero-actions">
            <a href="https://wa.me/5217831377679" className="ef-btn ef-btn-primary" target="_blank" rel="noopener noreferrer">
              Reservar cita
            </a>
            <a href="#galeria" className="ef-btn ef-btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('galeria') }}>
              Ver colección
            </a>
          </div>
        </div>
        <div className="ef-hero-marquee">
          <span>ALTA COSTURA · BEAUTY EDITORIAL · DISEÑO DE AUTOR · ALTA COSTURA · BEAUTY EDITORIAL · DISEÑO DE AUTOR ·</span>
        </div>
      </section>

      <section className="ef-services section" id="servicios" aria-label="Servicios">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">01</span>
            <span className="ef-section-tag">— Servicios</span>
            <h2 className="ef-section-title">Carta de <span className="ef-red">Experiencias</span></h2>
            <p className="ef-section-desc">Cada tratamiento es una pieza curada de nuestra colección. Selecciona tu experiencia.</p>
          </header>
          <div className="ef-services-list">
            {services.map((service, index) => (
              <article key={index} className="ef-service-item">
                <span className="ef-service-num">{service.number}</span>
                <div className="ef-service-body">
                  <div className="ef-service-header">
                    <h3 className="ef-service-name">{service.name}</h3>
                    <span className="ef-service-price">{service.price}</span>
                  </div>
                  <p className="ef-service-desc">{service.desc}</p>
                </div>
                <span className="ef-service-line"></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ef-gallery section" id="galeria" aria-label="Galería">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">02</span>
            <span className="ef-section-tag">— Galería</span>
            <h2 className="ef-section-title">Archivo <span className="ef-red">Visual</span></h2>
          </header>
          <div className="ef-gallery-scroll">
            <div className="ef-gallery-track">
              {gallery.map((item, index) => (
                <div key={index} className="ef-gallery-card">
                  <div className="ef-gallery-img" style={{ background: item.gradient }}>
                    <div className="ef-gallery-img-overlay">
                      <span className="ef-gallery-label">{item.label}</span>
                    </div>
                  </div>
                  <span className="ef-gallery-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ef-quote section" aria-label="Cita destacada">
        <div className="ef-section-container">
          <blockquote className="ef-pull-quote">
            <span className="ef-quote-mark">&ldquo;</span>
            <p className="ef-quote-text">El arte no está en la mano, está en la intención detrás de cada trazo.</p>
            <cite className="ef-quote-cite">— Aura Nails, Fundadora Creativa</cite>
          </blockquote>
        </div>
      </section>

      <section className="ef-testimonials section" id="testimonios" aria-label="Testimonios">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">03</span>
            <span className="ef-section-tag">— Testimonios</span>
            <h2 className="ef-section-title">Voces de <span className="ef-red">Nuestra Comunidad</span></h2>
          </header>
          <div className="ef-testimonials-grid">
            {testimonials.map((t, index) => (
              <article key={index} className="ef-testimonial">
                <p className="ef-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="ef-testimonial-author">
                  <span className="ef-testimonial-name">{t.name}</span>
                  <span className="ef-testimonial-role">{t.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ef-promos section" id="promociones" aria-label="Promociones">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">04</span>
            <span className="ef-section-tag">— Ediciones</span>
            <h2 className="ef-section-title">Colecciones <span className="ef-red">Especiales</span></h2>
          </header>
          <div className="ef-promos-grid">
            {promotions.map((promo, index) => (
              <article key={index} className="ef-promo">
                {promo.badge && <span className="ef-promo-badge">{promo.badge}</span>}
                <div className="ef-promo-body">
                  <h3 className="ef-promo-name">{promo.name}</h3>
                  <p className="ef-promo-items">{promo.items}</p>
                  <span className="ef-promo-price">{promo.price}</span>
                </div>
                <a href="https://wa.me/5217831377679" className="ef-btn ef-btn-primary ef-btn-sm" target="_blank" rel="noopener noreferrer">
                  Adquirir
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ef-cta section" aria-label="Reservar cita">
        <div className="ef-section-container">
          <div className="ef-split-cta">
            <div className="ef-split-cta-content">
              <h2 className="ef-cta-title">Tu <span className="ef-red">próxima</span> pieza maestra te espera</h2>
              <p className="ef-cta-text">Reserva una sesión privada en nuestro estudio editorial.</p>
              <a href="https://wa.me/5217831377679" className="ef-btn ef-btn-primary" target="_blank" rel="noopener noreferrer">
                Reservar cita
              </a>
            </div>
            <div className="ef-split-cta-visual">
              <div className="ef-cta-visual-bg">
                <span className="ef-cta-visual-text">BOOKING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ef-location section" id="ubicacion" aria-label="Ubicación">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">05</span>
            <span className="ef-section-tag">— Ubicación</span>
            <h2 className="ef-section-title">Encuentra <span className="ef-red">Nuestro Atelier</span></h2>
          </header>
          <div className="ef-layout-split">
            <article className="ef-location-info">
              <h3 className="ef-location-city">Tuxpan, Veracruz, México</h3>
              <p className="ef-location-desc">Estudio editorial en el corazón del puerto.</p>
              <p className="ef-location-phone">+52 783 137 7679</p>
              <div className="ef-hours">
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes — 10:00 AM a 8:00 PM</p>
                <p>Sábado — 10:00 AM a 6:00 PM</p>
                <p>Domingo — Cerrado</p>
              </div>
            </article>
            <div className="ef-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.12345!2d-97.4123!3d20.9578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d927f5a0a0a0a0%3A0x123456789!2sTuxpan%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de Tuxpan, Veracruz"
                aria-label="Mapa de ubicación en Tuxpan, Veracruz"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ef-faq section" id="faq" aria-label="Preguntas frecuentes">
        <div className="ef-section-container">
          <header className="ef-section-header">
            <span className="ef-section-number">06</span>
            <span className="ef-section-tag">— FAQ</span>
            <h2 className="ef-section-title">Preguntas <span className="ef-red">Frecuentes</span></h2>
          </header>
          <div className="ef-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`ef-faq-item ${openFaq === index ? 'open' : ''}`}>
                <button
                  className="ef-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`ef-faq-answer-${index}`}
                >
                  <span className="ef-faq-q">{faq.q}</span>
                  <span className="ef-faq-icon">
                    <span className="ef-faq-line ef-faq-line-h"></span>
                    <span className={`ef-faq-line ef-faq-line-v ${openFaq === index ? 'rotated' : ''}`}></span>
                  </span>
                </button>
                <div
                  id={`ef-faq-answer-${index}`}
                  className="ef-faq-answer"
                  role="region"
                  hidden={openFaq !== index}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="ef-footer" id="contacto" aria-label="Pie de página">
        <div className="ef-section-container">
          <div className="ef-footer-grid">
            <div className="ef-footer-brand">
              <h3>AURA NAILS</h3>
              <p>Estudio Editorial de Nail Art. Tuxpan, Veracruz.</p>
              <div className="ef-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">PN</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
              </div>
            </div>
            <div className="ef-footer-hours">
              <h4>Horario</h4>
              <p>Lun — Vie: 10:00 AM — 8:00 PM</p>
              <p>Sáb: 10:00 AM — 6:00 PM</p>
              <p>Dom: Cerrado</p>
            </div>
            <div className="ef-footer-contact">
              <h4>Contacto</h4>
              <p>Tuxpan, Veracruz</p>
              <p>+52 783 137 7679</p>
              <a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="ef-footer-bottom">
            <p>&copy; 2026 Aura Nails Studio Design Lab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5217831377679" className="ef-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">💬</a>

      <nav className="ef-proposal-nav" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/03" className="ef-nav-link prev">← Anterior</Link>
        <span className="ef-nav-label">Propuesta 04 — Editorial Fashion</span>
        <Link to="/design-lab/propuesta/05" className="ef-nav-link next">Siguiente →</Link>
      </nav>
    </div>
  )
}
