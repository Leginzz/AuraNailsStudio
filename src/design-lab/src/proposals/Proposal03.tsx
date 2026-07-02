import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Proposal03.css'

export default function Proposal03() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: 'Acrílicas', price: '$550', desc: 'Durabilidad y estilo en cada uña', gradient: 'linear-gradient(135deg, #ff3b6f, #ff7e5f)', icon: '💅' },
    { name: 'Polygel', price: '$700', desc: 'Extensión ligera y natural', gradient: 'linear-gradient(135deg, #8b5cf6, #ff3b6f)', icon: '✨' },
    { name: 'Gel Semipermante', price: '$350', desc: 'Color brillante por semanas', gradient: 'linear-gradient(135deg, #f9d423, #ff7e5f)', icon: '💖' },
    { name: 'Nail Art', price: '$450', desc: 'Diseños únicos personalizados', gradient: 'linear-gradient(135deg, #ff3b6f, #8b5cf6)', icon: '🎨' },
    { name: 'Manicure', price: '$250', desc: 'Cuidado clásico para tus manos', gradient: 'linear-gradient(135deg, #ff7e5f, #f9d423)', icon: '🌸' },
    { name: 'Pedicure', price: '$400', desc: 'Relajación y belleza para tus pies', gradient: 'linear-gradient(135deg, #8b5cf6, #ff7e5f)', icon: '🦋' },
  ]

  const gallery = [
    { gradient: 'linear-gradient(45deg, #ff3b6f, #ff7e5f)', label: 'Acrílicas Rosa' },
    { gradient: 'linear-gradient(45deg, #8b5cf6, #ff3b6f)', label: 'Polygel Glitter' },
    { gradient: 'linear-gradient(45deg, #f9d423, #ff7e5f)', label: 'Nail Art Verano' },
    { gradient: 'linear-gradient(45deg, #ff3b6f, #8b5cf6)', label: 'French Manicure' },
    { gradient: 'linear-gradient(45deg, #ff7e5f, #f9d423)', label: 'Diseños 3D' },
    { gradient: 'linear-gradient(45deg, #8b5cf6, #f9d423)', label: 'Gel Color' },
  ]

  const testimonials = [
    { name: 'María García', text: 'Me encantó mi experiencia. Mis uñas de polygel quedaron perfectas. El equipo es súper talentoso y el ambiente es increíble.', rating: 5 },
    { name: 'Ana López', text: 'Llevo un año viniendo y siempre salgo feliz. Los diseños de nail art son únicos, nadie más los tiene.', rating: 5 },
    { name: 'Carmen Ruiz', text: 'La mejor manicura de Tuxpan. Precios accesibles y resultados de revista. 100% recomendado.', rating: 5 },
    { name: 'Sofía Martínez', text: 'El servicio de pedicure es relajante y profesional. Me encanta cómo cuidan cada detalle.', rating: 5 },
  ]

  const promotions = [
    { name: 'Pack Instagram', items: 'Manicure + Pedicure + Nail Art', price: '$750', badge: 'Más popular' },
    { name: 'Pack Glamour', items: 'Acrílicas + Diseño 3D + Retoque', price: '$950', badge: 'Mejor valor' },
    { name: 'Pack Novia', items: 'Manicure + Pedicure + Acrílicas + Nail Art', price: '$1,200', badge: 'Premium' },
  ]

  const faqs = [
    { q: '¿Cuánto duran las uñas acrílicas?', a: 'Con el cuidado adecuado, las uñas acrílicas duran de 3 a 4 semanas. Recomendamos retoques cada 2-3 semanas para mantenerlas impecables.' },
    { q: '¿Duele el proceso de aplicación?', a: 'No, el proceso es indoloro. Solo sentirás presión al limar. Si experimentas molestias, avísanos y ajustaremos la técnica.' },
    { q: '¿Cuánto tiempo dura una sesión?', a: 'Depende del servicio: manicure básico ~45 min, acrílicas ~1.5 hrs, polygel ~2 hrs. Los diseños de nail art pueden requerir tiempo adicional.' },
    { q: '¿Aceptan pagos con tarjeta?', a: 'Sí, aceptamos efectivo, tarjetas de débito/crédito y transferencias bancarias. También tenemos promociones de pago en efectivo.' },
    { q: '¿Necesito reservar cita?', a: 'Recomendamos reservar con anticipación, especialmente en fines de semana. Puedes agendar directamente por WhatsApp o en nuestro sitio.' },
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
    <div className="proposal03">
      <nav className="ig-nav" aria-label="Navegación principal">
        <div className="nav-container">
          <Link to="/design-lab" className="nav-back" aria-label="Volver al laboratorio">
            ← Volver al laboratorio
          </Link>
          <div className="nav-brand">Aura Nails</div>
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>Servicios</a></li>
            <li><a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria') }}>Galería</a></li>
            <li><a href="#promociones" onClick={(e) => { e.preventDefault(); scrollToSection('promociones') }}>Promociones</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollToSection('testimonios') }}>Testimonios</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto') }}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="ig-hero" id="hero" aria-label="Sección principal">
        <div className="hero-gradient-bg"></div>
        <div className="hero-content">
          <span className="hero-tag">Aura Studio Design Lab</span>
          <h1 className="hero-title">Aura <span className="gradient-text">Nails</span></h1>
          <p className="hero-subtitle">Donde tus uñas cuentan tu historia. Diseño único con pasión y creatividad.</p>
          <div className="hero-cta-group">
            <a href="https://wa.me/5217831377679" className="btn-primary pulse" target="_blank" rel="noopener noreferrer">
              Agenda tu cita
            </a>
            <a href="#galeria" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('galeria') }}>
              Ver trabajos
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Clientas felices</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Diseños únicos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Calificación</span>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <section className="ig-services section" id="servicios" aria-label="Servicios">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">Nuestros Servicios</span>
            <h2 className="section-title">Transformamos tus <span className="gradient-text">uñas</span> en arte</h2>
          </header>
          <div className="services-story">
            {services.map((service, index) => (
              <article key={index} className="service-story-item slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="story-circle" style={{ background: service.gradient }}>
                  <span className="story-icon">{service.icon}</span>
                </div>
                <div className="story-info">
                  <h3 className="story-name">{service.name}</h3>
                  <p className="story-desc">{service.desc}</p>
                  <span className="story-price">{service.price}</span>
                </div>
                <div className="story-badge">Nuevo</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ig-gallery section" id="galeria" aria-label="Galería">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">Galería Instagram</span>
            <h2 className="section-title">Nuestras <span className="gradient-text">creaciones</span></h2>
          </header>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="gallery-img" style={{ background: item.gradient }}>
                  <div className="gallery-overlay">
                    <span className="gallery-label">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ig-testimonials section" id="testimonios" aria-label="Testimonios">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">Testimonios</span>
            <h2 className="section-title">Lo que dicen <span className="gradient-text">nuestras clientas</span></h2>
          </header>
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <article key={index} className="testimonial-card slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: `linear-gradient(135deg, #ff3b6f, #8b5cf6)` }}>
                    {t.name.charAt(0)}
                  </div>
                  <span className="author-name">{t.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ig-promos section" id="promociones" aria-label="Promociones">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">Promociones</span>
            <h2 className="section-title">Paquetes <span className="gradient-text">especiales</span></h2>
          </header>
          <div className="promos-grid">
            {promotions.map((promo, index) => (
              <article key={index} className="promo-card slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {promo.badge && <span className="promo-badge">{promo.badge}</span>}
                <h3 className="promo-name">{promo.name}</h3>
                <p className="promo-items">{promo.items}</p>
                <span className="promo-price">{promo.price}</span>
                <a href="https://wa.me/5217831377679" className="btn-primary small" target="_blank" rel="noopener noreferrer">
                  Lo quiero
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ig-cta section" aria-label="Reservar cita">
        <div className="section-container">
          <div className="cta-content fade-in">
            <h2 className="cta-title">¿Lista para <span className="gradient-text">brillar</span>?</h2>
            <p className="cta-text">Reserva tu cita hoy y descubre el arte de unas uñas perfectas.</p>
            <a href="https://wa.me/5217831377679" className="btn-primary pulse" target="_blank" rel="noopener noreferrer">
              Reservar cita
            </a>
          </div>
        </div>
      </section>

      <section className="ig-location section" id="ubicacion" aria-label="Ubicación">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">Ubicación</span>
            <h2 className="section-title">Encuéntranos en <span className="gradient-text">Tuxpan</span></h2>
          </header>
          <div className="location-content">
            <article className="location-info fade-in">
              <h3 className="location-city">Tuxpan, Veracruz, México</h3>
              <p className="location-phone">+52 783 137 7679</p>
              <div className="location-hours">
                <h4>Horario</h4>
                <p>Lun - Vie: 10:00 AM - 8:00 PM</p>
                <p>Sáb: 10:00 AM - 6:00 PM</p>
                <p>Dom: Cerrado</p>
              </div>
            </article>
            <div className="location-map fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.12345!2d-97.4123!3d20.9578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d927f5a0a0a0a0%3A0x123456789!2sTuxpan%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                title="Mapa de Tuxpan, Veracruz"
                aria-label="Mapa de ubicación en Tuxpan, Veracruz"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ig-faq section" id="faq" aria-label="Preguntas frecuentes">
        <div className="section-container">
          <header className="section-header fade-in">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Preguntas <span className="gradient-text">frecuentes</span></h2>
          </header>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item slide-up ${openFaq === index ? 'open' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
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

      <footer className="ig-footer" id="contacto" aria-label="Pie de página">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Aura Nails Studio</h3>
              <p>Donde el arte y la belleza se encuentran.</p>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
              </div>
            </div>
            <div className="footer-hours">
              <h4>Horario</h4>
              <p>Lun - Vie: 10:00 AM - 8:00 PM</p>
              <p>Sáb: 10:00 AM - 6:00 PM</p>
              <p>Dom: Cerrado</p>
            </div>
            <div className="footer-contact">
              <h4>Contacto</h4>
              <p>Tuxpan, Veracruz</p>
              <p>+52 783 137 7679</p>
              <a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Aura Nails Studio Design Lab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5217831377679" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        💬
      </a>

      <nav className="proposal-nav" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/02" className="proposal-nav-link prev">← Anterior</Link>
        <span className="proposal-nav-label">Propuesta 03 — Instagram Beauty</span>
        <Link to="/design-lab/propuesta/04" className="proposal-nav-link next">Siguiente →</Link>
      </nav>
    </div>
  )
}
