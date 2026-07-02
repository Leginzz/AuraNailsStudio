import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import './Proposal10.css'

const servicios = [
  { name: 'Retrato en Gel', desc: 'Esmaltado en gel con acabado de porcelana. Brillante, duradero y elegante.', price: '$450', frame: 'Obra I' },
  { name: 'Escultura Acrílica', desc: 'Extensiones esculpidas a mano con técnica de precisión. Arquitectura para tus uñas.', price: '$780', frame: 'Obra II' },
  { name: 'Arte Contemporáneo', desc: 'Diseños exclusivos con incrustaciones, láminas de oro y técnicas mixtas.', price: '$920', frame: 'Obra III' },
  { name: 'Restauración + Spa', desc: 'Pedicura completa con exfoliación, masaje y tratamiento rejuvenecedor.', price: '$580', frame: 'Obra IV' },
  { name: 'Baño de Gel Forte', desc: 'Recubrimiento fortificante que protege y realza la belleza natural de tus uñas.', price: '$520', frame: 'Obra V' },
  { name: 'Colección Privada', desc: 'Experiencia personalizada con diseñadora senior, brindes y atención exclusiva.', price: '$1,200', frame: 'Obra VI' },
]

const testimonios = [
  { text: 'Cada visita al Atelier es una experiencia transformadora. El detalle y la dedicación que ponen en cada diseño es simplemente extraordinario.', author: 'Daniela G.', role: 'Coleccionista' },
  { text: 'No es solo un salón de uñas, es una galería de arte. Camila entendió exactamente lo que quería y lo superó.', author: 'Sofía L.', role: 'Crítica invitada' },
  { text: 'La calidad y el cuidado que ponen en cada servicio es incomparable. Mis uñas nunca habían lucido tan hermosas.', author: 'Andrea M.', role: 'Visitante frecuente' },
  { text: 'Un espacio donde el arte y la belleza se encuentran. Cada diseño es una obra maestra. Altamente recomendado.', author: 'Paola R.', role: 'Miembro del Atelier' },
]

const promos = [
  { tag: 'EXPOSICIÓN', title: 'Dueto Armónico', desc: 'Gelish + Nail Art contemporáneo. Dos servicios, una experiencia completa.', price: '$690', original: '$870' },
  { tag: 'COLECCIÓN', title: 'Edición Limitada', desc: 'Acrílico con diseño exclusivo de temporada. Piezas únicas.', price: '$850', original: '$1,200' },
  { tag: 'MEMBRESÍA', title: 'Círculo del Atelier', desc: 'Una visita mensual con diseños rotativos y beneficios exclusivos.', price: '$950', original: '$1,350' },
]

const faqs = [
  { q: '¿Cómo agendo una cita en el Atelier?', a: 'Puedes reservar a través de WhatsApp o visitarnos directamente. Recomendamos agendar con 48 horas de anticipación para garantizar tu espacio en nuestra galería.' },
  { q: '¿Cuánto dura cada obra?', a: 'Un gelish dura de 3 a 4 semanas. Las esculturas acrílicas pueden durar hasta 5 semanas con el mantenimiento adecuado. Incluimos una revisión gratuita a los 7 días.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos efectivo, tarjetas de crédito y débito, así como transferencias bancarias. También ofrecemos planes de membresía mensual.' },
  { q: '¿Puedo cancelar o reagendar mi cita?', a: 'Aceptamos cancelaciones hasta 12 horas antes de la cita. Reagendar es completamente gratuito. Agradecemos la consideración con nuestro tiempo.' },
  { q: '¿Ofrecen servicios para eventos especiales?', a: 'Sí, tenemos paquetes para bodas, quinceañeras y eventos especiales. Incluye visita a domicilio para grupos de 4 o más personas.' },
]

const artists = [
  { name: 'Camila Rojas', bio: 'Artista principal especializada en escultura acrílica y diseños contemporáneos con 8 años de experiencia.', gradient: '180deg, #1a1a2e 30%, #2a2a4e 70%' },
  { name: 'Valentina Cruz', bio: 'Maestra del gelish y la restauración. Experta en técnicas de porcelana y acabados de alta costura.', gradient: '180deg, #c17767 30%, #e8d5c4 70%' },
  { name: 'Isabella Torres', bio: 'Directora creativa especializada en nail art de lujo con incrustaciones y técnicas mixtas.', gradient: '180deg, #d4a84b 30%, #e8d5c4 70%' },
]

export default function Proposal10() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleFaqToggle = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <div className="proposal-10">

      <nav className="p10-nav" aria-label="Navegación principal">
        <span className="p10-nav-logo">Nail <em>Atelier</em></span>
        <ul className="p10-nav-links">
          <li><a href="#coleccion">Colección</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#exposiciones">Exposiciones</a></li>
          <li><a href="#visita">Visita</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <section className="p10-hero" aria-label="Hero principal">
        <div className="p10-hero-ornament" aria-hidden="true" />
        <div className="p10-hero-content">
          <p className="p10-hero-label">Design Lab · Estudio de Arte</p>
          <div className="p10-hero-divider" />
          <h1 className="p10-hero-title">
            Donde las uñas
            <em>se vuelven arte</em>
          </h1>
          <p className="p10-hero-desc">
            Bienvenido al Atelier. Un espacio donde cada diseño es una obra única,
            creada con pasión y precisión para quienes aprecian la belleza en cada detalle.
          </p>
          <Link to="/" className="p10-btn-primary" aria-label="Reservar cita">
            Reservar mi visita
          </Link>
        </div>
      </section>

      <section id="coleccion" className="p10-section" aria-label="Servicios">
        <p className="p10-section-tag">La Colección</p>
        <h2 className="p10-section-title">Obras disponibles</h2>
        <p className="p10-section-subtitle">Cada servicio es una pieza única de arte</p>
        <div className="p10-section-divider" />
        <div className="p10-servicios-grid">
          {servicios.map((s, i) => (
            <div key={i} className="p10-servicio-card p10-frame p10-animate-in" tabIndex={0}>
              <div className="p10-servicio-frame">{s.frame}</div>
              <h3 className="p10-servicio-name">{s.name}</h3>
              <p className="p10-servicio-desc">{s.desc}</p>
              <span className="p10-servicio-price">{s.price} MXN</span>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="p10-section p10-section-alt" aria-label="Galería">
        <p className="p10-section-tag">Galería</p>
        <h2 className="p10-section-title">Muro de exposiciones</h2>
        <p className="p10-section-subtitle">Obras seleccionadas de nuestra colección</p>
        <div className="p10-section-divider" />
        <div className="p10-galeria-wall" role="list">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="p10-galeria-item p10-animate-in"
              role="listitem"
              tabIndex={0}
              aria-label={`Obra de galería ${i + 1}`}
            >
              <div className="p10-galeria-overlay">
                <span>Ver obra</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonios" className="p10-section" aria-label="Testimonios">
        <p className="p10-section-tag">Libro de visitas</p>
        <h2 className="p10-section-title">Lo que dicen nuestros visitantes</h2>
        <p className="p10-section-subtitle">Críticas de nuestra comunidad</p>
        <div className="p10-section-divider" />
        <div className="p10-testimonios-grid">
          {testimonios.map((t, i) => (
            <div key={i} className="p10-testimonio-card p10-animate-in">
              <div className="p10-testimonio-meta">Entrada del {i + 1} de mayo, 2026</div>
              <p className="p10-testimonio-text">"{t.text}"</p>
              <div className="p10-testimonio-author">{t.author}</div>
              <div className="p10-testimonio-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="exposiciones" className="p10-section p10-section-alt" aria-label="Promociones">
        <p className="p10-section-tag">Exposiciones especiales</p>
        <h2 className="p10-section-title">Promociones vigentes</h2>
        <p className="p10-section-subtitle">Por tiempo limitado</p>
        <div className="p10-section-divider" />
        <div className="p10-promo-grid">
          {promos.map((p, i) => (
            <div key={i} className="p10-promo-card p10-animate-in" tabIndex={0}>
              <div className="p10-promo-tag">{p.tag}</div>
              <h3 className="p10-promo-title">{p.title}</h3>
              <p className="p10-promo-desc">{p.desc}</p>
              <div className="p10-promo-price">{p.price} MXN</div>
              <div className="p10-promo-original">{p.original} MXN</div>
            </div>
          ))}
        </div>
      </section>

      <section className="p10-section" aria-label="Artistas">
        <p className="p10-section-tag">Conoce a los artistas</p>
        <h2 className="p10-section-title">Nuestro equipo creativo</h2>
        <p className="p10-section-subtitle">Las manos detrás de cada obra</p>
        <div className="p10-section-divider" />
        <div className="p10-artists-grid">
          {artists.map((a, i) => (
            <div key={i} className="p10-artist-card p10-animate-in" tabIndex={0}>
              <div
                className="p10-artist-portrait"
                aria-hidden="true"
                style={{ background: `linear-gradient(${a.gradient})` }}
              />
              <div className="p10-artist-name">{a.name}</div>
              <p className="p10-artist-bio">{a.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p10-section p10-section-alt" aria-label="Proceso">
        <p className="p10-section-tag">El método</p>
        <h2 className="p10-section-title">Proceso de creación</h2>
        <p className="p10-section-subtitle">De la inspiración a la obra terminada</p>
        <div className="p10-section-divider" />
        <div className="p10-process-timeline">
          <div className="p10-process-step p10-animate-in">
            <div className="p10-process-number">01</div>
            <h3 className="p10-process-title">Inspiración</h3>
            <p className="p10-process-desc">Conversamos contigo para entender tu estilo, tus gustos y la ocasión. Cada obra comienza con una historia.</p>
          </div>
          <div className="p10-process-step p10-animate-in">
            <div className="p10-process-number">02</div>
            <h3 className="p10-process-title">Boceto</h3>
            <p className="p10-process-desc">Diseñamos el concepto en nuestra mesa de trabajo, seleccionando colores, texturas y técnicas.</p>
          </div>
          <div className="p10-process-step p10-animate-in">
            <div className="p10-process-number">03</div>
            <h3 className="p10-process-title">Obra final</h3>
            <p className="p10-process-desc">Ejecutamos el diseño con precisión milimétrica, asegurando un resultado digno de galería.</p>
          </div>
        </div>
      </section>

      <section id="visita" className="p10-section" aria-label="Ubicación">
        <p className="p10-section-tag">Visítanos</p>
        <h2 className="p10-section-title">Ubicación del Atelier</h2>
        <p className="p10-section-subtitle">Te esperamos en nuestra galería</p>
        <div className="p10-section-divider" />
        <div className="p10-location-wrapper">
          <div className="p10-location-frame">
            <h3>Tuxpan, Veracruz, México</h3>
            <p><strong>Dirección:</strong> Av. Independencia #245, Col. Centro, Tuxpan, Veracruz</p>
            <p><strong>Horario de galería:</strong> Martes a Sábado 10:00 AM - 8:00 PM</p>
            <p><strong>Teléfono:</strong> +52 783 137 7679</p>
            <p>Estacionamiento privado. Acceso para silla de ruedas. Arte y confort te esperan.</p>
          </div>
          <div className="p10-map-container">
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

      <section id="faq" className="p10-section p10-section-alt" aria-label="Preguntas frecuentes">
        <p className="p10-section-tag">Información al visitante</p>
        <h2 className="p10-section-title">Preguntas Frecuentes</h2>
        <p className="p10-section-subtitle">Todo lo que necesitas saber antes de tu visita</p>
        <div className="p10-section-divider" />
        <div className="p10-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="p10-faq-item">
              <button
                className={`p10-faq-question ${openFaq === i ? 'open' : ''}`}
                onClick={() => handleFaqToggle(i)}
                aria-expanded={openFaq === i}
                aria-controls={`p10-faq-answer-${i}`}
              >
                {faq.q}
                <span className="p10-faq-arrow" aria-hidden="true">▾</span>
              </button>
              <div
                id={`p10-faq-answer-${i}`}
                className={`p10-faq-answer ${openFaq === i ? 'open' : ''}`}
                role="region"
                aria-label={faq.q}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p10-cta-section" aria-label="Reservar cita">
        <h2 className="p10-cta-title">¿Lista para tu próxima obra?</h2>
        <p className="p10-cta-desc">Agenda tu visita al Atelier y descubre el arte en tus manos.</p>
        <a
          href="https://wa.me/5217831377679"
          target="_blank"
          rel="noopener noreferrer"
          className="p10-cta-btn"
          aria-label="Reservar cita por WhatsApp"
        >
          Agendar mi visita
        </a>
      </section>

      <footer className="p10-footer" aria-label="Footer">
        <div className="p10-footer-grid">
          <div>
            <div className="p10-footer-brand">Nail <em>Atelier</em></div>
            <p className="p10-footer-desc">Donde el arte y la belleza se encuentran. Design Lab · Nails Studio.</p>
          </div>
          <div>
            <h3 className="p10-footer-heading">Exposiciones</h3>
            <ul className="p10-footer-links">
              <li><a href="#coleccion">Colección actual</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#exposiciones">Exposiciones</a></li>
              <li><a href="#faq">Información</a></li>
            </ul>
          </div>
          <div>
            <h3 className="p10-footer-heading">Horario de galería</h3>
            <div className="p10-footer-hours">
              <p>Mar - Sáb: 10:00 AM - 8:00 PM</p>
              <p>Dom - Lun: Cerrado</p>
            </div>
          </div>
          <div>
            <h3 className="p10-footer-heading">Contacto</h3>
            <ul className="p10-footer-links">
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">+52 783 137 7679</a></li>
            </ul>
          </div>
        </div>
        <div className="p10-footer-bottom">
          © 2026 Nail Atelier · Aura Nails Studio Design Lab. Todos los derechos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/5217831377679"
        target="_blank"
        rel="noopener noreferrer"
        className="p10-whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.56 4.146 1.537 5.896L0 24l6.336-1.462C8.086 23.44 10.04 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.56 17.32c-.38.95-1.1 1.72-2.48 2.08-.66.18-1.52.32-4.42-.95-3.72-1.62-6.12-5.58-6.32-5.85-.2-.27-1.5-2.02-1.5-3.85s.95-2.73 1.3-3.1c.35-.38.76-.48 1.02-.48.25 0 .52.01.74.03.23.02.55-.09.86.66.38.95 1.3 3.28 1.42 3.52.12.24.2.52.04.84-.16.32-.24.52-.48.8-.24.28-.5.62-.72.84-.24.24-.48.5-.2.98.28.48 1.24 2.04 2.66 3.3 1.82 1.62 3.36 2.14 3.84 2.38.48.24.76.2 1.04-.12.28-.32.98-1.14 1.24-1.52.26-.38.52-.32.88-.2.36.12 2.28 1.08 2.68 1.28.4.2.66.3.76.48.1.18.02.88-.28 1.72z"/>
        </svg>
      </a>

      <nav className="p10-bottom-nav" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/09" aria-label="Propuesta anterior">← Anterior</Link>
        <Link to="/design-lab" aria-label="Volver al laboratorio">← Volver al laboratorio</Link>
      </nav>

    </div>
  )
}
