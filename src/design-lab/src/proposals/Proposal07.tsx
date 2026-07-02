import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Proposal07.css'

interface FaqItem {
  q: string
  a: string
  open: boolean
}

export default function Proposal07() {
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
      name: 'María Fernanda',
      text: 'Un lugar verdaderamente elegante. Desde que entré sentí que estaba en un spa de lujo. Mis uñas quedaron perfectas, duran semanas sin perder su brillo.',
    },
    {
      name: 'Ana Sofía',
      text: 'La atención es impecable. Explican cada paso y realmente se toman el tiempo para hacer un trabajo artesanal. Los diseños son una obra de arte.',
    },
    {
      name: 'Valentina',
      text: 'Los productos que usan son de primera calidad. Mis uñas nunca habían lucido tan saludables y hermosas. Definitivamente mi lugar favorito en Tuxpan.',
    },
    {
      name: 'Regina',
      text: 'El ambiente es tan tranquilo y sofisticado. La música, la decoración, el aroma... todo está cuidado al detalle. Una experiencia de lujo accesible.',
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
    { title: 'Primera Visita', desc: '20% de descuento en tu primer servicio de uñas en gel.', tag: 'NUEVA' },
    { title: 'Paquete Novia', desc: 'Manicura + Pedicura + Diseño exclusivo para tu gran día.', tag: 'ESPECIAL' },
    { title: 'Membresía Platino', desc: '4 visitas al mes con mantenimiento incluido y precio preferencial.', tag: 'VIP' },
  ]

  return (
    <div className="p07-page">
      {/* Nav */}
      <nav className="p07-nav" aria-label="Navegación principal">
        <div className="p07-nav-inner">
          <Link to="/design-lab" className="p07-nav-back" aria-label="Volver al laboratorio">← Volver al laboratorio</Link>
          <ul className="p07-nav-links">
            <li><a href="#servicios" aria-label="Ir a Servicios">Servicios</a></li>
            <li><a href="#galeria" aria-label="Ir a Galería">Galería</a></li>
            <li><a href="#testimonios" aria-label="Ir a Testimonios">Testimonios</a></li>
            <li><a href="#contacto" aria-label="Ir a Contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="p07-hero" id="inicio">
        <div className="p07-hero-marble" aria-hidden="true" />
        <div className="p07-hero-content">
          <span className="p07-hero-label">AURA NAILS STUDIO</span>
          <h1 className="p07-hero-title">Elegancia que<br />florece en tus manos</h1>
          <p className="p07-hero-sub">
            Donde el arte del cuidado de uñas se encuentra con el lujo parisino.
            Vive una experiencia de belleza exclusiva en el corazón de Tuxpan.
          </p>
          <a
            href="https://wa.me/5217831377679"
            className="p07-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
          >
            Reserva tu cita
          </a>
        </div>
        <div className="p07-hero-petals" aria-hidden="true">
          <span className="p07-petal" />
          <span className="p07-petal" />
          <span className="p07-petal" />
          <span className="p07-petal" />
          <span className="p07-petal" />
        </div>
      </header>

      {/* Servicios */}
      <section className="p07-section" id="servicios">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Nuestro menú</span>
          <h2 className="p07-section-title">Servicios de lujo</h2>
          <div className="p07-services-grid">
            {services.map((s, i) => (
              <article key={i} className="p07-service-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="p07-service-gold" aria-hidden="true" />
                <h3 className="p07-service-name">{s.name}</h3>
                <p className="p07-service-desc">{s.desc}</p>
                <span className="p07-service-price">{s.price}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="p07-section p07-section--dark" id="galeria">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Nuestro portafolio</span>
          <h2 className="p07-section-title">Galería</h2>
          <div className="p07-gallery-grid">
            {['#d4a5a5', '#c48b8b', '#e8d0a0', '#3a2525', '#f5e6d0', '#d4a5a5', '#c48b8b', '#e8d0a0'].map((c, i) => (
              <div
                key={i}
                className="p07-gallery-item"
                style={{
                  background: `linear-gradient(135deg, ${c}, ${c}dd, ${c}88)`,
                  animationDelay: `${i * 0.08}s`,
                }}
                role="img"
                aria-label={`Diseño de uñas ejemplo ${i + 1}`}
              >
                <span className="p07-gallery-icon" aria-hidden="true">✧</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="p07-section" id="testimonios">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Lo que dicen</span>
          <h2 className="p07-section-title">Testimonios</h2>
          <div className="p07-testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="p07-testimonial" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="p07-testi-stars" aria-label="5 estrellas">★★★★★</div>
                <p className="p07-testi-text">"{t.text}"</p>
                <footer className="p07-testi-author">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section className="p07-section p07-section--champagne" id="promociones">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Ofertas exclusivas</span>
          <h2 className="p07-section-title">Promociones</h2>
          <div className="p07-promo-grid">
            {promotions.map((p, i) => (
              <article key={i} className="p07-promo-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="p07-promo-tag">{p.tag}</span>
                <h3 className="p07-promo-title">{p.title}</h3>
                <p className="p07-promo-desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación + Mapa */}
      <section className="p07-section" id="contacto">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Visítanos</span>
          <h2 className="p07-section-title">Ubicación</h2>
          <p className="p07-location-text">Tuxpan, Veracruz, México</p>
          <div className="p07-map-container">
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
      <section className="p07-section p07-section--dark" id="faq">
        <div className="p07-section-inner">
          <span className="p07-section-tag">Resolver tus dudas</span>
          <h2 className="p07-section-title">Preguntas Frecuentes</h2>
          <div className="p07-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`p07-faq-item${f.open ? ' p07-faq-item--open' : ''}`}>
                <button
                  className="p07-faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={f.open}
                  aria-controls={`p07-faq-answer-${i}`}
                >
                  {f.q}
                  <span className="p07-faq-icon" aria-hidden="true">{f.open ? '−' : '+'}</span>
                </button>
                <div
                  id={`p07-faq-answer-${i}`}
                  className="p07-faq-answer"
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
      <section className="p07-section p07-section--cta">
        <div className="p07-section-inner">
          <h2 className="p07-section-title">Lista para mimar tus manos</h2>
          <p className="p07-cta-text">Agenda tu cita hoy y descubre el lujo que mereces.</p>
          <a
            href="https://wa.me/5217831377679"
            className="p07-btn-primary p07-btn-primary--lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
          >
            Reservar cita
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p07-footer">
        <div className="p07-footer-inner">
          <div className="p07-footer-brand">
            <h3 className="p07-footer-logo">Aura Nails Studio</h3>
            <p>Tuxpan, Veracruz, México</p>
          </div>
          <div className="p07-footer-links">
            <a href="#servicios" aria-label="Servicios">Servicios</a>
            <a href="#galeria" aria-label="Galería">Galería</a>
            <a href="#testimonios" aria-label="Testimonios">Testimonios</a>
            <a href="#contacto" aria-label="Contacto">Contacto</a>
          </div>
          <div className="p07-footer-social">
            <a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
          <p className="p07-footer-copy">© {new Date().getFullYear()} Aura Nails Studio Design Lab. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5217831377679"
        className="p07-whatsapp"
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
      <nav className="p07-prevnext" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/06" className="p07-prevnext-link" aria-label="Propuesta anterior">← Anterior</Link>
        <Link to="/design-lab/propuesta/08" className="p07-prevnext-link" aria-label="Siguiente propuesta">Siguiente →</Link>
      </nav>
    </div>
  )
}
