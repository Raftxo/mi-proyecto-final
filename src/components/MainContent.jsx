import { useEffect, useRef } from 'react'
import bufandaImg from '../assets/bufanda.png'
import calcetinesImg from '../assets/calcetines.png'
import carteraImg from '../assets/cartera.png'
import gorraImg from '../assets/gorra.png'
import heroImg from '../assets/hero.png'
import camiseta1img from '../assets/camisetaAntenas.png'
import camiseta2img from '../assets/camisetaJaula.png'
import camiseta3img from '../assets/camisetaRouter.png'
import camiseta4img from '../assets/camisetaPing.png'
import sudadera1img from '../assets/sudadera1.png'
import sudadera2img from '../assets/sudadera2.png'
import sudadera3img from '../assets/sudadera3.png'
import sudadera4img from '../assets/sudadera4.png'
import mapImg from '../assets/hero.png'

const WHEEL_SCROLL_SPEED = 16

const handleLinkKeyDown = (event) => {
  if (event.key === ' ') {
    event.preventDefault()
    event.currentTarget.click()
  }
}

const categories = [
  {
    id: 'camisetas',
    title: 'Camisetas Blindadas',
    tagline: 'Capas ligeras para pecho, espalda y teorias de sobremesa.',
    products: [
      {
        name: 'Camiseta Antenas No Gracias',
        description:
          'Algodon suave con actitud metalizada para paseos cerca del router.',
        price: '39,90 EUR',
        image: camiseta1img,
        imageAlt:
          'Camiseta plateada de proteccion electromagnetica con diseno futurista',
      },
      {
        name: 'Camiseta Jaula de Faraday Casual',
        description:
          'Perfecta para videollamadas en las que nadie sabe si te has congelado o te proteges.',
        price: '42,90 EUR',
        image: camiseta2img,
        imageAlt: 'Camiseta tecnica plateada con estampado de ondas bloqueadas',
      },
      {
        name: 'Camiseta Router en Silencio',
        description:
          'Corte comodo para bloquear malas vibras y alguna que otra notificacion.',
        price: '37,90 EUR',
        image: camiseta3img,
        imageAlt: 'Camiseta urbana anti wifi con detalles reflectantes',
      },
      {
        name: 'Camiseta Ping Cero',
        description:
          'Para quien quiere ir elegante sin que su torso responda a paquetes de datos.',
        price: '44,90 EUR',
        image: camiseta4img,
        imageAlt: 'Camiseta futurista de proteccion contra senales inalambricas',
      },
    ],
  },
  {
    id: 'sudaderas',
    title: 'Sudaderas 5G-Proof',
    tagline: 'Abrigo emocional para antenas, ascensores y reuniones eternas.',
    products: [
      {
        name: 'Sudadera Modo Avion Permanente',
        description:
          'Capucha comoda, bolsillo amplio y energia de "hoy no recibo notificaciones".',
        price: '64,90 EUR',
        image: sudadera1img,
        imageAlt:
          'Sudadera tecnica de proteccion 5G con acabado metalizado y capucha',
      },
      {
        name: 'Sudadera Torre Lejana',
        description:
          'Aislamiento extra para mirar antenas desde lejos con superioridad textil.',
        price: '69,90 EUR',
        image: sudadera2img,
        imageAlt: 'Sudadera gris metalizada de proteccion frente a antenas 5G',
      },
      {
        name: 'Sudadera No Disponible',
        description:
          'Ideal para desaparecer de grupos, redes y ondas con una sola cremallera.',
        price: '72,90 EUR',
        image: sudadera3img,
        imageAlt: 'Sudadera con capucha y tejido reflectante anti radiacion',
      },
      {
        name: 'Sudadera Apagon Selectivo',
        description:
          'Confort premium para cuando quieres que solo te llegue el olor a cafe.',
        price: '74,90 EUR',
        image: sudadera4img,
        imageAlt: 'Sudadera futurista de proteccion electromagnetica para invierno',
      },
    ],
  },
  {
    id: 'accesorios',
    title: 'Accesorios RFID',
    tagline: 'Pequenos escudos para bolsillos, cabezas y tarjetas sensibles.',
    products: [
      {
        name: 'Gorra RFID Invisible',
        description:
          'Para proteger tus ideas, tus tarjetas y ese flequillo que desafia la normativa.',
        price: '24,90 EUR',
        image: gorraImg,
        imageAlt:
          'Gorra de proteccion RFID con estilo urbano y tejido reflectante',
      },
      {
        name: 'Bufanda Cortafrecuencias',
        description:
          'Envuelve el cuello y, segun tu tio, tambien las ondas sospechosas.',
        price: '29,90 EUR',
        image: bufandaImg,
        imageAlt: 'Bufanda tecnica reflectante para proteccion electromagnetica',
      },
      {
        name: 'Cartera Tarjeta Fantasma',
        description:
          'Tu tarjeta sigue ahi, pero el lector del metro tendra que creer en ella.',
        price: '34,90 EUR',
        image: carteraImg,
        imageAlt: 'Cartera RFID plateada para proteger tarjetas sin contacto',
      },
      {
        name: 'Calcetines Baja Latencia',
        description:
          'No bloquean el WiFi, pero te ayudan a pisar fuerte en zonas de cobertura dudosa.',
        price: '18,90 EUR',
        image: calcetinesImg,
        imageAlt: 'Calcetines tecnicos con diseno futurista anti ondas',
      },
    ],
  },
]

function MainContent({ onActiveSectionChange }) {
  const mainRef = useRef(null)

  useEffect(() => {
    const main = mainRef.current

    if (!main) {
      return undefined
    }

    const handleWheel = (event) => {
      const scrollAmount =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX

      if (scrollAmount === 0) {
        return
      }

      event.preventDefault()
      main.scrollBy({
        left: scrollAmount * WHEEL_SCROLL_SPEED,
        behavior: 'auto',
      })
    }

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')

      if (!link) {
        return
      }

      const target = document.querySelector(link.getAttribute('href'))

      if (!target || !main.contains(target)) {
        return
      }

      event.preventDefault()
      onActiveSectionChange(target.id)
      main.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth',
      })
    }

    const updateActiveSection = () => {
      const sections = [...main.querySelectorAll('section[id]')]
      const mainCenter = main.scrollLeft + main.clientWidth / 2
      const currentSection = sections.reduce((closest, section) => {
        const sectionCenter = section.offsetLeft + section.offsetWidth / 2
        const distance = Math.abs(sectionCenter - mainCenter)

        if (!closest || distance < closest.distance) {
          return { id: section.id, distance }
        }

        return closest
      }, null)

      if (currentSection) {
        onActiveSectionChange(currentSection.id)
      }
    }

    main.addEventListener('wheel', handleWheel, {
      capture: true,
      passive: false,
    })
    main.addEventListener('scroll', updateActiveSection)
    document.addEventListener('click', handleAnchorClick)
    updateActiveSection()

    return () => {
      main.removeEventListener('wheel', handleWheel, { capture: true })
      main.removeEventListener('scroll', updateActiveSection)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [onActiveSectionChange])

  return (
    <main className="main-content" ref={mainRef}>
      <section className="hero-section" id="inicio" aria-labelledby="hero-title">
        <article className="hero-copy">
          <p className="eyebrow">Coleccion temporada baja radiacion</p>
          <h2 id="hero-title">Ropa preparada para sobrevivir al ascensor con 5G</h2>
          <p>
            Prendas comodas, llamativas y teoricamente listas para esquivar
            ondas electromagneticas con mas estilo que rigor cientifico.
          </p>
          <a
            className="button-link"
            href="#camisetas"
            onKeyDown={handleLinkKeyDown}
          >
            Ver productos
          </a>
        </article>

        <img
          className="hero-image"
          src={heroImg}
          alt="Chaqueta futurista de proteccion electromagnetica para uso diario"
        />
      </section>

      {categories.map((category) => (
        <section
          className="products-section"
          id={category.id}
          key={category.id}
          aria-labelledby={`${category.id}-title`}
        >
          <p className="eyebrow">Productos destacados</p>
          <h2 id={`${category.id}-title`}>{category.title}</h2>
          <p className="category-tagline">{category.tagline}</p>

          <section
            className="product-carousel"
            aria-label={`Productos de ${category.title}`}
          >
            {category.products.map((product) => (
              <article className="product-card" key={product.name}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.imageAlt}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price}</p>
              </article>
            ))}
          </section>
        </section>
      ))}

      <section className="contact-section" id="contacto" aria-labelledby="contact-title">
        <article className="contact-copy">
          <p className="eyebrow">Contacto</p>
          <h2 id="contact-title">Visitanos antes de que el GPS sospeche</h2>
          <p>
            Nuestro bunker boutique abre de lunes a viernes para consultas,
            pruebas de tallas y debates amistosos sobre si el microondas cuenta
            como mueble hostil.
          </p>

          <address className="contact-details">
            <strong>Faraday Fit Central</strong>
            <span>Calle del Router Apagado, 404</span>
            <span>Distrito Sin Cobertura, 28000 Madrid</span>
            <span>Telefono: 555 5G NO NO</span>
            <a
              href="mailto:dra.malla@faradayfit.example"
              onKeyDown={handleLinkKeyDown}
            >
              dra.malla@faradayfit.example
            </a>
          </address>

          <ul className="team-list" aria-label="Equipo de contacto">
            <li>Dra. Malla Cobre - asesora de blindaje elegante</li>
            <li>Kevin SinSenal - encargado de probadores offline</li>
            <li>Lola Cortaondas - responsable de paquetes discretos</li>
          </ul>
        </article>

        <img
          className="map-image"
          src={mapImg}
          alt="Mapa ficticio de la tienda Faraday Fit en una zona sin cobertura"
        />
      </section>
    </main>
  )
}

export default MainContent
