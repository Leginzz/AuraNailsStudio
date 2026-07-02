import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import './Proposal06.css'

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={`p06-faq-item${isOpen ? ' open' : ''}`}>
      <button
        className="p06-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`p06-answer-${question.slice(0, 10)}`}
      >
        {question}
        <span className="p06-faq-question__icon" aria-hidden="true">+</span>
      </button>
      <div
        className="p06-faq-answer"
        id={`p06-answer-${question.slice(0, 10)}`}
        role="region"
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

export default function Proposal06() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleFAQ = useCallback((index: number) => {
    setOpenFAQ(prev => (prev === index ? null : index))
  }, [])

  const servicios = [
    { icon: '✦', name: 'Acrílicas', desc: 'Durabilidad excepcional con un acabado natural y elegante', price: 650 },
    { icon: '◈', name: 'Polygel', desc: 'Ligereza y resistencia en una fusión perfecta de tecnología y belleza', price: 850 },
    { icon: '◇', name: 'Gel Semipermanente', desc: 'Brillo radiante que perdura día tras día sin perder intensidad', price: 450 },
    { icon: '♢', name: 'Nail Art', desc: 'Diseños personalizados que cuentan tu historia con arte', price: 350 },
    { icon: '○', name: 'Manicure', desc: 'El cuidado esencial que tus manos merecen en cada visita', price: 250 },
    { icon: '◎', name: 'Pedicure', desc: 'Renovación completa para tus pies con un toque de bienestar', price: 350 },
  ]

  const testimonios = [
    { stars: '★★★★★', quote: 'Desde que entré sentí una paz inmensa. El polygel me duró más de 3 semanas y el diseño era exactamente lo que soñaba.', author: 'María F.', detail: 'Cliente frecuente' },
    { stars: '★★★★★', quote: 'Un oasis en Tuxpan. La manicura con gel sempermanente es impecable y el trato es cálido y profesional.', author: 'Sofía L.', detail: '2 visitas' },
    { stars: '★★★★★', quote: 'Nunca había disfrutado tanto un pedicure. El ambiente, los aromas, la música... una experiencia de bienestar completa.', author: 'Gabriela R.', detail: 'Recomendado por amiga' },
  ]

  const promos = [
    { type: 'forest', tag: 'Bienvenida', title: 'Ritual de Inicio', desc: 'Acrílicas + manicura básica con un 20% de descuento en tu primera visita. Incluye aceite esencial de regalo.', price: '$580' },
    { type: 'sage', tag: 'Parejas', title: 'Conexión Natural', desc: 'Ven con tu persona especial y ambas reciben un 15% de descuento más un tratamiento de parafina.', price: '15% OFF' },
    { type: 'gold', tag: 'Fidelidad', title: 'Círculo de Bienestar', desc: 'Acumula puntos con cada servicio y canjea por un pedicure spa completamente gratis.', price: 'Gratis' },
  ]

  const faqs = [
    { question: '¿Cuánto dura una aplicación de polygel?', answer: 'El polygel bien aplicado puede durar de 3 a 4 semanas. Recomendamos un retoque cada 21 días para mantener su aspecto óptimo.' },
    { question: '¿Qué cuidados debo tener después del servicio?', answer: 'Evita exponer tus uñas a químicos agresivos, usa guantes para labores domésticas e hidrata tus cutículas diariamente.' },
    { question: '¿Puedo hacer cambios en mi diseño de nail art?', answer: 'Por supuesto. Durante tu cita, nuestra artista discutirá tus ideas y creará un diseño único y personalizado para ti.' },
    { question: '¿Ofrecen servicios para uñas mordidas o débiles?', answer: 'Sí, el polygel es ideal para fortalecer uñas débiles. También ofrecemos tratamientos de cuidado intensivo.' },
    { question: '¿Hay estacionamiento cerca del estudio?', answer: 'Sí, contamos con estacionamiento privado para clientas. También estamos cerca de varias rutas de transporte.' },
  ]

  const galeria = [
    { gradient: 'linear-gradient(135deg, #2d4a3b 0%, #4a7a5f 100%)', label: 'Polygel Natural', span: '' },
    { gradient: 'linear-gradient(135deg, #9caea9 0%, #b8ccc7 100%)', label: 'Manicure Spa', span: 'p06-gallery__item--tall' },
    { gradient: 'linear-gradient(135deg, #c4a97d 0%, #d4c09a 100%)', label: 'Nail Art Dorado', span: '' },
    { gradient: 'linear-gradient(135deg, #e8ddd0 0%, #f5f0e8 100%)', label: 'Pedicure Premium', span: 'p06-gallery__item--wide' },
    { gradient: 'linear-gradient(135deg, #3a5f4d 0%, #2d4a3b 100%)', label: 'Gel Esmeralda', span: '' },
    { gradient: 'linear-gradient(135deg, #7d938d 0%, #9caea9 100%)', label: 'Acrílicas Rosadas', span: '' },
  ]

  const [serviciosRef, serviciosInView] = useInView()
  const [galeriaRef, galeriaInView] = useInView()
  const [testimoniosRef, testimoniosInView] = useInView()
  const [promosRef, promosInView] = useInView()
  const [faqRef, faqInView] = useInView()

  return (
    <div className="p06">
      {/* Nav */}
      <nav className={`p06-nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegación principal">
        <Link to="/design-lab" className="p06-nav__back" aria-label="Volver al laboratorio de diseño">
          ← Volver al laboratorio
        </Link>
        <div className="p06-nav__logo">Aura<span>.</span>Nails</div>
        <button
          className="p06-nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`p06-nav__links${menuOpen ? ' open' : ''}`}>
          <li><a href="#p06-servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#p06-galeria" onClick={() => setMenuOpen(false)}>Galería</a></li>
          <li><a href="#p06-testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a></li>
          <li><a href="#p06-promociones" onClick={() => setMenuOpen(false)}>Promociones</a></li>
          <li><a href="#p06-faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="p06-hero" aria-label="Inicio">
        <div className="p06-hero__leaf p06-hero__leaf--1" aria-hidden="true"></div>
        <div className="p06-hero__leaf p06-hero__leaf--2" aria-hidden="true"></div>
        <div className="p06-hero__leaf p06-hero__leaf--3" aria-hidden="true"></div>
        <div className="p06-hero__content">
          <div className="p06-hero__wellness">
            Wellness Journey
          </div>
          <h1 className="p06-hero__title">
            Donde tus manos<br />encuentran <em>paz</em>
          </h1>
          <p className="p06-hero__subtitle">Aura Nails Studio — Tuxpan, Veracruz</p>
          <p className="p06-hero__desc">
            Un espacio sagrado donde el cuidado de tus manos se convierte en
            un ritual de bienestar. Te invitamos a desconectar del ruido y
            reconectar contigo misma.
          </p>
          <a
            href="https://wa.me/5217831377679"
            className="p06-hero__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
          >
            Iniciar viaje
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="p06-hero__scroll" aria-hidden="true">
          <div className="p06-hero__scroll-dot"></div>
          <span className="p06-hero__scroll-text">Descubre</span>
        </div>
      </section>

      {/* Servicios */}
      <section className="p06-section" id="p06-servicios" aria-label="Servicios">
        <div className="p06-section__header">
          <span className="p06-section-label">Servicios</span>
          <h2>Tu viaje de bienestar</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-servicios-grid" ref={serviciosRef}>
          {servicios.map((s, i) => (
            <div
              key={s.name}
              className={`p06-service-card${serviciosInView ? ' p06-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="p06-service-card__leaf-bg" aria-hidden="true"></div>
              <div className="p06-service-card__icon" aria-hidden="true">{s.icon}</div>
              <h3 className="p06-service-card__name">{s.name}</h3>
              <p className="p06-service-card__desc">{s.desc}</p>
              <div className="p06-service-card__price">
                ${s.price} <small>MXN</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="p06-section" id="p06-galeria" aria-label="Galería">
        <div className="p06-section__header">
          <span className="p06-section-label">Galería</span>
          <h2>Momentos de belleza</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-gallery-grid" ref={galeriaRef}>
          {galeria.map((g, i) => (
            <div
              key={g.label}
              className={`p06-gallery__item ${g.span}${galeriaInView ? ' p06-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="p06-gallery__placeholder"
                style={{ background: g.gradient }}
                role="img"
                aria-label={g.label}
              >
                {g.label}
              </div>
              <div className="p06-gallery__overlay">
                <span>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="p06-section p06-testimonios" id="p06-testimonios" aria-label="Testimonios">
        <div className="p06-section__header">
          <span className="p06-section-label">Testimonios</span>
          <h2>Historias de bienestar</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-testimonios-grid" ref={testimoniosRef}>
          {testimonios.map((t, i) => (
            <div
              key={t.author}
              className={`p06-testimonial-card${testimoniosInView ? ' p06-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="p06-testimonial-card__stars" aria-label={`${t.stars.length} de 5 estrellas`}>
                {t.stars}
              </div>
              <p className="p06-testimonial-card__quote">"{t.quote}"</p>
              <div className="p06-testimonial-card__author">
                {t.author} <span>— {t.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promociones */}
      <section className="p06-section" id="p06-promociones" aria-label="Promociones">
        <div className="p06-section__header">
          <span className="p06-section-label">Promociones</span>
          <h2>Ofertas especiales</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-promos-grid" ref={promosRef}>
          {promos.map((p, i) => (
            <div
              key={p.title}
              className={`p06-promo-card p06-promo-card--${p.type}${promosInView ? ' p06-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="p06-promo-card__leaf p06-promo-card__leaf--1" aria-hidden="true"></div>
              <div className="p06-promo-card__leaf p06-promo-card__leaf--2" aria-hidden="true"></div>
              <span className="p06-promo-card__tag">{p.tag}</span>
              <h3 className="p06-promo-card__title">{p.title}</h3>
              <p className="p06-promo-card__desc">{p.desc}</p>
              <div className="p06-promo-card__price">{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ubicación + Mapa */}
      <section className="p06-section p06-ubicacion" id="p06-ubicacion" aria-label="Ubicación">
        <div className="p06-section__header">
          <span className="p06-section-label">Ubicación</span>
          <h2>Encuéntranos</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-ubicacion-wrap">
          <div className="p06-ubicacion-info">
            <div className="p06-ubicacion-info__icon" aria-hidden="true">✦</div>
            <span className="p06-ubicacion-info__label">Dirección</span>
            <h3 className="p06-ubicacion-info__title">Tuxpan, Veracruz, México</h3>
            <p className="p06-ubicacion-info__text">
              En el corazón de la Huasteca veracruzana, nuestro estudio es un refugio
              de tranquilidad. Un espacio diseñado para que cada visita sea una
              experiencia de renovación y bienestar.
            </p>
            <div className="p06-ubicacion-info__hours">
              <p><strong>Lunes a viernes:</strong> 10:00 – 19:00</p>
              <p><strong>Sábados:</strong> 10:00 – 17:00</p>
              <p><strong>Domingos:</strong> Cerrado</p>
            </div>
          </div>
          <div className="p06-mapa-wrap" aria-label="Mapa de Tuxpan, Veracruz">
            <iframe
              title="Mapa de Tuxpan, Veracruz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120537.20915690224!2d-97.45102965563967!3d20.95565939801376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db036f58a6c5e9%3A0x3a9c1f1e5c7b9a0b!2sTuxpan%2C%20Ver.%2C%20M%C3%A9xico!5e0!3m2!1ses!2s!4v1680000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="p06-section" id="p06-faq" aria-label="Preguntas frecuentes">
        <div className="p06-section__header">
          <span className="p06-section-label">FAQ</span>
          <h2>Preguntas frecuentes</h2>
          <div className="p06-section__leaf-divider" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div className="p06-section__header-line"></div>
        </div>
        <div className="p06-faq-list" ref={faqRef}>
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`p06-faq-item${openFAQ === i ? ' open' : ''}${faqInView ? ' p06-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onToggle={() => toggleFAQ(i)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reservar CTA */}
      <section className="p06-reservar" aria-label="Reservar cita">
        <div className="p06-reservar__leaf p06-reservar__leaf--1" aria-hidden="true"></div>
        <div className="p06-reservar__leaf p06-reservar__leaf--2" aria-hidden="true"></div>
        <h2 className="p06-reservar__title">Comienza tu viaje de bienestar</h2>
        <p className="p06-reservar__desc">
          Reserva tu cita y descubre el placer de cuidar de ti misma.
        </p>
        <a
          href="https://wa.me/5217831377679"
          className="p06-reservar__btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar cita por WhatsApp"
        >
          Reservar ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="p06-footer" aria-label="Pie de página">
        <div className="p06-footer__grid">
          <div>
            <div className="p06-footer__brand">Aura<span>.</span>Nails</div>
            <p className="p06-footer__desc">
              Estudio de nail art y bienestar en Tuxpan, Veracruz.
              Un espacio dedicado al cuidado consciente de tus manos.
            </p>
          </div>
          <div>
            <h3 className="p06-footer__heading">Enlaces</h3>
            <ul className="p06-footer__list">
              <li><a href="#p06-servicios">Servicios</a></li>
              <li><a href="#p06-galeria">Galería</a></li>
              <li><a href="#p06-testimonios">Testimonios</a></li>
              <li><a href="#p06-promociones">Promociones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="p06-footer__heading">Horario</h3>
            <ul className="p06-footer__list">
              <li>Lun–Vie: 10:00–19:00</li>
              <li>Sáb: 10:00–17:00</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>
          <div>
            <h3 className="p06-footer__heading">Contacto</h3>
            <ul className="p06-footer__list">
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:hello@auranails.mx">hello@auranails.mx</a></li>
              <li>Tuxpan, Veracruz</li>
            </ul>
          </div>
        </div>
        <div className="p06-footer__bottom">
          <span>© {new Date().getFullYear()} Aura Nails Studio</span>
          <span>Hecho con amor en Tuxpan</span>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5217831377679"
        className="p06-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Nav bottom */}
      <nav className="p06-nav-bottom" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/05" aria-label="Propuesta anterior">
          ← Anterior
        </Link>
        <Link to="/design-lab" aria-label="Volver al laboratorio">
          Volver al laboratorio
        </Link>
        <Link to="/design-lab/propuesta/07" aria-label="Propuesta siguiente">
          Siguiente →
        </Link>
      </nav>
    </div>
  )
}
