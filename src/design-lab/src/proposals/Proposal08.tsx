import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Proposal08.css'

interface FaqItem {
  q: string
  a: string
  open: boolean
}

export default function Proposal08() {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      q: '¿Cuánto dura una aplicación de uñas en gel?',
      a: 'El servicio completo dura aproximadamente 2 horas. Incluye preparación, aplicación y curado de cada capa para garantizar un resultado impecable y duradero.',
      open: false,
    },
    {
      q: '¿Con qué frecuencia debo dar mantenimiento?',
      a: 'Recomendamos visitarnos cada 2 a 3 semanas para mantener tus uñas impecables. El mantenimiento incluye retoque de cutícula, relleno si es necesario y nuevo esmalte.',
      open: false,
    },
    {
      q: '¿Qué métodos de pago aceptan?',
      a: 'Aceptamos efectivo, tarjetas de crédito y débito, así como transferencias bancarias y depósitos en OXXO.',
      open: false,
    },
    {
      q: '¿Necesito agendar cita o aceptan walk-ins?',
      a: 'Trabajamos exclusivamente con cita previa para garantizar la mejor experiencia. Agenda a través de WhatsApp o nuestro formulario en línea.',
      open: false,
    },
    {
      q: '¿Ofrecen servicios a domicilio?',
      a: 'Sí, contamos con servicio a domicilio en Tuxpan y zonas aledañas con un costo adicional. Consulta disponibilidad al agendar.',
      open: false,
    },
  ])

  const toggleFaq = (i: number) => {
    setFaqs(faqs.map((f, j) => (j === i ? { ...f, open: !f.open } : f)))
  }

  const testimonials = [
    {
      name: 'Carlos Méndez',
      text: 'Un estudio con una estética increíble. La tecnología que usan para el curado de uñas es impresionante, todo muy profesional y limpio.',
    },
    {
      name: 'Diana Rojas',
      text: 'Me encanta lo moderno que es el lugar. La atención es rápida pero súper detallada, y mis uñas siempre quedan perfectas.',
    },
    {
      name: 'Laura Cortés',
      text: 'El diseño de interiores es de otro nivel, te sientes en el futuro. Los chicos son muy talentosos y usan productos de alta gama.',
    },
    {
      name: 'Sofía Medina',
      text: 'Desde la recepción digital hasta el área de trabajo todo es impecable. Sin duda el estudio más innovador de Tuxpan.',
    },
  ]

  const services = [
    { name: 'Manicura Clásica', desc: 'Limpieza, limado y esmalte tradicional con acabado impecable.', price: '$280' },
    { name: 'Manicura en Gel', desc: 'Esmaltado semipermanente con hasta 3 semanas de duración.', price: '$420' },
    { name: 'Uñas Acrílicas', desc: 'Extensión completa con forma y largo personalizados.', price: '$650' },
    { name: 'Gelish Diseño', desc: 'Diseños artísticos con encapsulados, degradados y detalles en 3D.', price: '$550' },
    { name: 'Spa de Manos', desc: 'Exfoliación, mascarilla hidratante y masaje relajante con aceites esenciales.', price: '$380' },
    { name: 'Tratamiento Reparador', desc: 'Terapia intensiva para uñas dañadas con queratina y vitaminas.', price: '$450' },
  ]

  const promotions = [
    { title: 'Debut Digital', desc: '30% de descuento en tu primera visita al usar nuestro sistema de reserva en línea.', tag: 'NUEVO' },
    { title: 'Pack Futurista', desc: 'Manicura + Pedicura + Diseño UV con efectos holográficos.', tag: 'ESPECIAL' },
    { title: 'Suscripción Pro', desc: 'Acceso ilimitado a mantenimiento semanal con beneficios exclusivos.', tag: 'VIP' },
  ]

  return (
    <div className="p08-page">
      {/* Bokeh Background Blobs */}
      <div className="p08-bokeh" aria-hidden="true">
        <span className="p08-blob p08-blob--1" />
        <span className="p08-blob p08-blob--2" />
        <span className="p08-blob p08-blob--3" />
        <span className="p08-blob p08-blob--4" />
      </div>

      {/* Nav */}
      <nav className="p08-nav" aria-label="Navegación principal">
        <div className="p08-nav-inner">
          <Link to="/design-lab" className="p08-nav-back" aria-label="Volver al laboratorio">← Volver al laboratorio</Link>
          <ul className="p08-nav-links">
            <li><a href="#servicios" aria-label="Ir a Servicios">Servicios</a></li>
            <li><a href="#galeria" aria-label="Ir a Galería">Galería</a></li>
            <li><a href="#testimonios" aria-label="Ir a Testimonios">Testimonios</a></li>
            <li><a href="#contacto" aria-label="Ir a Contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="p08-hero" id="inicio">
        <div className="p08-hero-glass" />
        <div className="p08-hero-content">
          <span className="p08-hero-label">AURA NAILS STUDIO</span>
          <h1 className="p08-hero-title">El futuro del<br />nail art está aquí</h1>
          <p className="p08-hero-sub">
            Donde la tecnología y la belleza convergen. Vive una experiencia
            inmersiva de cuidado de uñas con estándares digitales de precisión.
          </p>
          <a
            href="https://wa.me/5217831377679"
            className="p08-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
          >
            Agendar cita
          </a>
        </div>
        <div className="p08-hero-glare" aria-hidden="true" />
      </header>

      {/* Servicios */}
      <section className="p08-section" id="servicios">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">Servicios</span>
            <h2 className="p08-section-title">Nail Studio 2.0</h2>
          </div>
          <div className="p08-services-grid">
            {services.map((s, i) => (
              <article
                key={i}
                className="p08-glass-panel p08-service-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="p08-service-glow" aria-hidden="true" />
                <h3 className="p08-service-name">{s.name}</h3>
                <p className="p08-service-desc">{s.desc}</p>
                <span className="p08-service-price">{s.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="p08-section" id="galeria">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">Portafolio digital</span>
            <h2 className="p08-section-title">Galería</h2>
          </div>
          <div className="p08-gallery-grid">
            {[
              { bg: 'linear-gradient(135deg, #7c3aed44, #4f8cff44)', border: '#7c3aed' },
              { bg: 'linear-gradient(135deg, #4f8cff44, #d4af3744)', border: '#4f8cff' },
              { bg: 'linear-gradient(135deg, #d4af3744, #7c3aed44)', border: '#d4af37' },
              { bg: 'linear-gradient(135deg, #7c3aed44, #4f8cff44)', border: '#7c3aed' },
              { bg: 'linear-gradient(135deg, #4f8cff44, #d4af3744)', border: '#4f8cff' },
              { bg: 'linear-gradient(135deg, #d4af3744, #7c3aed44)', border: '#d4af37' },
            ].map((item, i) => (
              <div
                key={i}
                className="p08-gallery-item"
                style={{
                  background: item.bg,
                  borderColor: item.border,
                  animationDelay: `${i * 0.08}s`,
                }}
                role="img"
                aria-label={`Diseño de uñas ejemplo ${i + 1}`}
              >
                <span className="p08-gallery-icon" aria-hidden="true">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="p08-section" id="testimonios">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">Reseñas</span>
            <h2 className="p08-section-title">Testimonios</h2>
          </div>
          <div className="p08-testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="p08-glass-panel p08-testimonial"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="p08-testi-stars" aria-label="5 estrellas">★★★★★</div>
                <p className="p08-testi-text">"{t.text}"</p>
                <footer className="p08-testi-author">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section className="p08-section" id="promociones">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">Ofertas</span>
            <h2 className="p08-section-title">Promociones</h2>
          </div>
          <div className="p08-promo-grid">
            {promotions.map((p, i) => (
              <article
                key={i}
                className="p08-glass-panel p08-promo-card"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="p08-promo-tag">{p.tag}</span>
                <h3 className="p08-promo-title">{p.title}</h3>
                <p className="p08-promo-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación + Mapa */}
      <section className="p08-section" id="contacto">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">Ubicación</span>
            <h2 className="p08-section-title">Encuéntranos</h2>
          </div>
          <p className="p08-location-text">Tuxpan, Veracruz, México</p>
          <div className="p08-glass-panel p08-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236870.27117553172!2d-97.5779308431039!3d20.957190595739705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db6333a1d6c3d7%3A0x8e2f5e7f0c3b9a6!2sTuxpan%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Tuxpan, Veracruz"
              aria-label="Mapa de ubicación del estudio en Tuxpan, Veracruz"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="p08-section" id="faq">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-services-header">
            <span className="p08-section-tag">FAQ</span>
            <h2 className="p08-section-title">Preguntas Frecuentes</h2>
          </div>
          <div className="p08-glass-panel p08-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`p08-faq-item${f.open ? ' p08-faq-item--open' : ''}`}>
                <button
                  className="p08-faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={f.open}
                  aria-controls={`p08-faq-answer-${i}`}
                >
                  {f.q}
                  <span className="p08-faq-icon" aria-hidden="true">{f.open ? '−' : '+'}</span>
                </button>
                <div
                  id={`p08-faq-answer-${i}`}
                  className="p08-faq-answer"
                  hidden={!f.open}
                  role="region"
                >
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservar CTA */}
      <section className="p08-section p08-section--cta">
        <div className="p08-section-inner">
          <div className="p08-glass-panel p08-cta-panel">
            <h2 className="p08-section-title">¿Lista para la experiencia?</h2>
            <p className="p08-cta-text">Reserva tu cita en segundos y descubre el futuro del nail art.</p>
            <a
              href="https://wa.me/5217831377679"
              className="p08-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar cita por WhatsApp"
            >
              Reservar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p08-footer">
        <div className="p08-footer-inner">
          <div className="p08-footer-brand">
            <h3 className="p08-footer-logo">Aura Nails Studio</h3>
            <p>Tuxpan, Veracruz, México</p>
          </div>
          <div className="p08-footer-links">
            <a href="#servicios" aria-label="Servicios">Servicios</a>
            <a href="#galeria" aria-label="Galería">Galería</a>
            <a href="#testimonios" aria-label="Testimonios">Testimonios</a>
            <a href="#contacto" aria-label="Contacto">Contacto</a>
          </div>
          <div className="p08-footer-social">
            <a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
          <p className="p08-footer-copy">© {new Date().getFullYear()} Aura Nails Studio Design Lab. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5217831377679"
        className="p08-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.857L.053 23.947l6.136-1.468A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.677-.56-5.214-1.522l-.373-.225-3.641.873.874-3.637-.24-.385A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>

      {/* Prev / Next */}
      <nav className="p08-prevnext" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/07" className="p08-prevnext-link" aria-label="Propuesta anterior">← Anterior</Link>
        <Link to="/design-lab/propuesta/09" className="p08-prevnext-link" aria-label="Siguiente propuesta">Siguiente →</Link>
      </nav>
    </div>
  )
}
