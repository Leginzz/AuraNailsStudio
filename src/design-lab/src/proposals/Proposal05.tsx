import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import './Proposal05.css'

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className={`p05-faq-item${isOpen ? ' open' : ''}`}>
      <button
        className="p05-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 10)}`}
      >
        {question}
        <span className="p05-faq-question__icon" aria-hidden="true">+</span>
      </button>
      <div
        className="p05-faq-answer"
        id={`faq-answer-${question.slice(0, 10)}`}
        role="region"
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

function useInView(options: UseInViewOptions = {}) {
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
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, inView] as const
}

export default function Proposal05() {
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
    { ja: '聚丙烯樹脂', name: 'Acrílicas', desc: 'Esculpidas con técnica japonesa, acabado impecable', price: '$650' },
    { ja: '聚膠', name: 'Polygel', desc: 'Extensión ligera y natural, duradera hasta 4 semanas', price: '$850' },
    { ja: '凝膠', name: 'Gel Semipermanente', desc: 'Brillo y color intenso por semanas sin perder frescura', price: '$450' },
    { ja: '指甲藝術', name: 'Nail Art', desc: 'Diseños únicos inspirados en la estética zen', price: '$350+' },
    { ja: '修指甲', name: 'Manicure', desc: 'Cuidado clásico con esencia de tranquilidad', price: '$250' },
    { ja: '修腳', name: 'Pedicure', desc: 'Pureza y renovación para tus pies', price: '$350' },
  ]

  const testimonios = [
    { quote: 'Un espacio de paz. Mis uñas nunca habían lucido tan elegantes. La técnica de polygel es impecable.', author: '— Hiroko M.' },
    { quote: 'Cada visita es un ritual. La atención al detalle y la estética minimalista me hacen volver siempre.', author: '— Ana Laura S.' },
    { quote: 'El ambiente es tan sereno que pareciera estar en un ryokan. El nail art más hermoso que he tenido.', author: '— Carmen R.' },
    { quote: 'Descubrí el verdadero significado del cuidado personal aquí. Resultados sutiles pero transformadores.', author: '— Valeria G.' },
  ]

  const promos = [
    { tag: 'Primera visita', title: 'Bienvenida Zen', desc: 'Acrílicas + Nail Art a juego con un 20% de descuento en tu primera cita.', price: '$520' },
    { tag: 'Combo Amigas', title: 'Armonía Compartida', desc: 'Trae a una amiga y ambas reciben un 15% de descuento en servicios seleccionados.', price: '15% OFF' },
    { tag: 'Fidelidad', title: 'Susurro del Bosque', desc: 'Acumula puntos con cada visita y canjea por un tratamiento de parafina gratis.', price: 'Gratis' },
  ]

  const faqs = [
    { question: '¿Cuánto duran las uñas de polygel?', answer: 'Con el cuidado adecuado, pueden durar de 3 a 4 semanas sin perder su forma ni brillo. Recomendamos retoque cada 21 días.' },
    { question: '¿Duele el proceso de aplicación?', answer: 'No. Nuestro proceso es completamente indoloro. Nos enfocamos en una experiencia relajante y cuidadosa.' },
    { question: '¿Cuánto tiempo dura una cita?', answer: 'Una aplicación completa de polygel o acrílicas toma aproximadamente 90 minutos. El gel sempermanente unos 45 minutos.' },
    { question: '¿Usan productos libres de crueldad animal?', answer: 'Sí. Todos nuestros productos son cruelty-free y seleccionados cuidadosamente por su calidad y ética.' },
    { question: '¿Puedo cancelar o reagendar mi cita?', answer: 'Aceptamos cambios hasta 24 horas antes de tu cita. Agradecemos la consideración para ofrecer el mejor servicio a todas.' },
  ]

  const galeria = [
    { gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', label: 'Acrílicas Naturales', span: '' },
    { gradient: 'linear-gradient(135deg, #1b2838 0%, #2a4055 100%)', label: 'Polygel Esmeralda', span: 'p05-gallery__item--tall' },
    { gradient: 'linear-gradient(135deg, #5a7a5a 0%, #7a9a7a 100%)', label: 'Nail Art Zen', span: '' },
    { gradient: 'linear-gradient(135deg, #d43333 0%, #a82828 100%)', label: 'Esmalte Vermillion', span: 'p05-gallery__item--wide' },
    { gradient: 'linear-gradient(135deg, #f5f0e8 0%, #e8ddd0 100%)', label: 'Manicure Clásico', span: '' },
    { gradient: 'linear-gradient(135deg, #3d3d3d 0%, #1a1a1a 100%)', label: 'Pedicure Bambú', span: '' },
    { gradient: 'linear-gradient(135deg, #2d4a3b 0%, #1b2838 100%)', label: 'Gel Semipermanente', span: 'p05-gallery__item--wide' },
  ]

  // Intersection hooks
  const [serviciosRef, serviciosInView] = useInView()
  const [galeriaRef, galeriaInView] = useInView()
  const [testimoniosRef, testimoniosInView] = useInView()
  const [promosRef, promosInView] = useInView()
  const [faqRef, faqInView] = useInView()

  return (
    <div className="p05">
      {/* Nav */}
      <nav className={`p05-nav${scrolled ? ' scrolled' : ''}`} aria-label="Navegación principal">
        <Link to="/design-lab" className="p05-nav__back" aria-label="Volver al laboratorio de diseño">
          ← Volver al laboratorio
        </Link>
        <div className="p05-nav__logo">Aura Nails</div>
        <button
          className="p05-nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`p05-nav__links${menuOpen ? ' open' : ''}`}>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a></li>
          <li><a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a></li>
          <li><a href="#promociones" onClick={() => setMenuOpen(false)}>Promociones</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="p05-hero" aria-label="Inicio">
        <div className="p05-hero__content">
          <div className="p05-hero__stamp" aria-hidden="true">
            <div className="p05-hero__stamp-inner"></div>
          </div>
          <span className="p05-hero__subtitle-en">Nail Studio — Tuxpan</span>
          <h1 className="p05-hero__title">
            Belleza<br />en el silencio
            <span className="p05-hero__title-ja" aria-hidden="true">静寂の美</span>
          </h1>
          <p className="p05-hero__desc">
            Donde cada trazo es meditación. Inspirado en la filosofía wabi-sabi,
            celebramos la belleza imperfecta, efímera y auténtica de tus manos.
          </p>
          <a
            href="https://wa.me/5217831377679"
            className="p05-hero__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar cita por WhatsApp"
          >
            Reservar experiencia
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="p05-hero__visual" aria-hidden="true">
          <div className="p05-hero__ink p05-hero__ink--1"></div>
          <div className="p05-hero__ink p05-hero__ink--2"></div>
          <div className="p05-hero__circle-vermillion"></div>
          <div className="p05-hero__circle-vermillion--inner"></div>
          <div className="p05-hero__line p05-hero__line--h"></div>
          <div className="p05-hero__line p05-hero__line--v"></div>
          <div className="p05-hero__line p05-hero__line--h2"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
          <div className="p05-wind-particle" aria-hidden="true"></div>
        </div>
        <div className="p05-hero__scroll" aria-hidden="true">
          <span className="p05-hero__scroll-text">Desplázate</span>
          <div className="p05-hero__scroll-line"></div>
        </div>
      </section>

      {/* Servicios */}
      <section className="p05-section" id="servicios" aria-label="Servicios">
        <div className="container">
          <div className="p05-section__header p05-section__header--asymmetric">
            <div className="p05-section__header-text">
              <span className="p05-section__number">01</span>
              <span className="section-label">Servicios</span>
              <h2>Artesanía en cada detalle</h2>
              <div className="p05-section__hr"></div>
            </div>
            <div className="p05-vertical-label" aria-hidden="true">技芸</div>
          </div>
        </div>
        <div
          className="p05-servicios-grid"
          ref={serviciosRef}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {servicios.map((s, i) => (
            <div
              key={s.name}
              className={`p05-service-card${serviciosInView ? ' p05-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="p05-service-card__ja" aria-hidden="true">{s.ja}</span>
              <h3 className="p05-service-card__name">{s.name}</h3>
              <p className="p05-service-card__desc">{s.desc}</p>
              <span className="p05-service-card__price">{s.price} MXN</span>
            </div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section className="p05-section" id="galeria" aria-label="Galería">
        <div className="container">
          <div className="p05-section__header p05-section__header--asymmetric">
            <div className="p05-section__header-text">
              <span className="p05-section__number">02</span>
              <span className="section-label">Galería</span>
              <h2>Instantáneas de serenidad</h2>
              <div className="p05-section__hr"></div>
            </div>
            <div className="p05-vertical-label" aria-hidden="true">展示</div>
          </div>
        </div>
        <div
          className="p05-gallery-grid"
          ref={galeriaRef}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {galeria.map((g, i) => (
            <div
              key={g.label}
              className={`p05-gallery__item ${g.span}${galeriaInView ? ' p05-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="p05-gallery__placeholder"
                style={{ background: g.gradient }}
                role="img"
                aria-label={g.label}
              >
                {g.label}
              </div>
              <div className="p05-gallery__overlay">
                <span>{g.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="p05-section p05-testimonios" id="testimonios" aria-label="Testimonios">
        <div className="container">
          <div className="p05-section__header p05-section__header--asymmetric">
            <div className="p05-section__header-text">
              <span className="p05-section__number">03</span>
              <span className="section-label">Testimonios</span>
              <h2>Voces de armonía</h2>
              <div className="p05-section__hr"></div>
            </div>
            <div className="p05-vertical-label" aria-hidden="true">言葉</div>
          </div>
        </div>
        <div
          className="p05-testimonios-grid"
          ref={testimoniosRef}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {testimonios.map((t, i) => (
            <div
              key={t.author}
              className={`p05-testimonial-card${testimoniosInView ? ' p05-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="p05-testimonial-card__dots" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <p className="p05-testimonial-card__quote">{t.quote}</p>
              <span className="p05-testimonial-card__author">{t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Promociones */}
      <section className="p05-section" id="promociones" aria-label="Promociones">
        <div className="container">
          <div className="p05-section__header p05-section__header--asymmetric">
            <div className="p05-section__header-text">
              <span className="p05-section__number">04</span>
              <span className="section-label">Promociones</span>
              <h2>Ofrendas estacionales</h2>
              <div className="p05-section__hr"></div>
            </div>
            <div className="p05-vertical-label" aria-hidden="true">贈り物</div>
          </div>
        </div>
        <div
          className="p05-promos-grid"
          ref={promosRef}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {promos.map((p, i) => (
            <div
              key={p.title}
              className={`p05-promo-card${promosInView ? ' p05-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="p05-promo-card__circle p05-promo-card__circle--1" aria-hidden="true"></div>
              <div className="p05-promo-card__circle p05-promo-card__circle--2" aria-hidden="true"></div>
              <span className="p05-promo-card__tag">{p.tag}</span>
              <h3 className="p05-promo-card__title">{p.title}</h3>
              <p className="p05-promo-card__desc">{p.desc}</p>
              <div className="p05-promo-card__price">{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ubicación + Mapa */}
      <section className="p05-section" id="ubicacion" aria-label="Ubicación">
        <div className="p05-ubicacion-wrap" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="p05-ubicacion-info">
            <span className="p05-ubicacion-info__label">Ubicación</span>
            <h2 className="p05-ubicacion-info__title">Tuxpan, Veracruz</h2>
            <p className="p05-ubicacion-info__text">
              En el corazón de la Huasteca veracruzana, nuestro estudio es un refugio
              de calma junto al río. Te esperamos en un espacio diseñado para el bienestar.
            </p>
            <dl className="p05-ubicacion-info__hours">
              <dt>Horario</dt>
              <dd>Lunes a viernes: 10:00 – 19:00</dd>
              <dd>Sábados: 10:00 – 17:00</dd>
              <dd>Domingos: Cerrado</dd>
            </dl>
          </div>
          <div className="p05-mapa-wrap" aria-label="Mapa de Tuxpan, Veracruz">
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
      <section className="p05-section" id="faq" aria-label="Preguntas frecuentes">
        <div className="container">
          <div className="p05-section__header p05-section__header--asymmetric">
            <div className="p05-section__header-text">
              <span className="p05-section__number">05</span>
              <span className="section-label">FAQ</span>
              <h2>Preguntas frecuentes</h2>
              <div className="p05-section__hr"></div>
            </div>
            <div className="p05-vertical-label" aria-hidden="true">疑問</div>
          </div>
          <div className="p05-faq-list" ref={faqRef}>
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`p05-faq-item${openFAQ === i ? ' open' : ''}${faqInView ? ' p05-visible' : ''}`}
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
        </div>
      </section>

      {/* Reservar CTA */}
      <section className="p05-reservar" aria-label="Reservar cita">
        <h2 className="p05-reservar__title">Comienza tu viaje zen</h2>
        <p className="p05-reservar__desc">
          Reserva tu experiencia y descubre la belleza en la simplicidad.
        </p>
        <a
          href="https://wa.me/5217831377679"
          className="p05-reservar__btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar cita por WhatsApp"
        >
          Reservar cita
        </a>
      </section>

      {/* Footer */}
      <footer className="p05-footer" aria-label="Pie de página">
        <div className="p05-footer__grid">
          <div>
            <div className="p05-footer__brand">Aura Nails</div>
            <p className="p05-footer__desc">
              Estudio de nail art inspirado en la estética japonesa.
              Wabi-sabi, zen y artesanía en cada servicio.
            </p>
          </div>
          <div>
            <h3 className="p05-footer__heading">Enlaces</h3>
            <ul className="p05-footer__list">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#promociones">Promociones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="p05-footer__heading">Horario</h3>
            <ul className="p05-footer__list">
              <li>Lun–Vie: 10–19</li>
              <li>Sáb: 10–17</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>
          <div>
            <h3 className="p05-footer__heading">Contacto</h3>
            <ul className="p05-footer__list">
              <li><a href="https://wa.me/5217831377679" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:hello@auranails.mx">hello@auranails.mx</a></li>
              <li>Tuxpan, Veracruz</li>
            </ul>
          </div>
        </div>
        <div className="p05-footer__bottom">
          <span>© {new Date().getFullYear()} Aura Nails Studio</span>
          <span>Diseñado con esencia wabi-sabi</span>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5217831377679"
        className="p05-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Nav bottom */}
      <nav className="p05-nav-bottom" aria-label="Navegación entre propuestas">
        <Link to="/design-lab/propuesta/04" aria-label="Propuesta anterior">
          ← Anterior
        </Link>
        <Link to="/design-lab" aria-label="Volver al laboratorio">
          Volver al laboratorio
        </Link>
        <Link to="/design-lab/propuesta/06" aria-label="Propuesta siguiente">
          Siguiente →
        </Link>
      </nav>
    </div>
  )
}
