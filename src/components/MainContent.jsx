import { useEffect, useRef } from 'react'
import bufandaImg from '../assets/bufanda.webp'
import bufanda300 from '../assets/bufanda-300.webp'
import bufanda100 from '../assets/bufanda-100.webp'
import calcetinesImg from '../assets/calcetines.webp'
import calcetines300 from '../assets/calcetines-300.webp'
import calcetines100 from '../assets/calcetines-100.webp'
import carteraImg from '../assets/cartera.webp'
import cartera300 from '../assets/cartera-300.webp'
import cartera100 from '../assets/cartera-100.webp'
import gorraImg from '../assets/gorra.webp'
import gorra300 from '../assets/gorra-300.webp'
import gorra100 from '../assets/gorra-100.webp'
import heroImg from '../assets/hero.webp'
import hero300 from '../assets/hero-300.webp'
import hero100 from '../assets/hero-100.webp'
import camiseta1img from '../assets/camisetaAntenas.webp'
import camiseta1_300 from '../assets/camisetaAntenas-300.webp'
import camiseta1_100 from '../assets/camisetaAntenas-100.webp'
import camiseta2img from '../assets/camisetaJaula.webp'
import camiseta2_300 from '../assets/camisetaJaula-300.webp'
import camiseta2_100 from '../assets/camisetaJaula-100.webp'
import camiseta3img from '../assets/camisetaRouter.webp'
import camiseta3_300 from '../assets/camisetaRouter-300.webp'
import camiseta3_100 from '../assets/camisetaRouter-100.webp'
import camiseta4img from '../assets/camisetaPing.webp'
import camiseta4_300 from '../assets/camisetaPing-300.webp'
import camiseta4_100 from '../assets/camisetaPing-100.webp'
import sudadera1img from '../assets/sudadera1.webp'
import sudadera1_300 from '../assets/sudadera1-300.webp'
import sudadera1_100 from '../assets/sudadera1-100.webp'
import sudadera2img from '../assets/sudadera2.webp'
import sudadera2_300 from '../assets/sudadera2-300.webp'
import sudadera2_100 from '../assets/sudadera2-100.webp'
import sudadera3img from '../assets/sudadera3.webp'
import sudadera3_300 from '../assets/sudadera3-300.webp'
import sudadera3_100 from '../assets/sudadera3-100.webp'
import sudadera4img from '../assets/sudadera4.webp'
import sudadera4_300 from '../assets/sudadera4-300.webp'
import sudadera4_100 from '../assets/sudadera4-100.webp'
import mapImg from '../assets/hero.webp'
import map300 from '../assets/hero-300.webp'
import map100 from '../assets/hero-100.webp'

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
        srcset: `${camiseta1_100} 100w, ${camiseta1_300} 300w, ${camiseta1img} 560w`,
        imageAlt:
          'Camiseta plateada de proteccion electromagnetica con diseno futurista',
      },
      {
        name: 'Camiseta Jaula de Faraday Casual',
        description:
          'Perfecta para videollamadas en las que nadie sabe si te has congelado o te proteges.',
        price: '42,90 EUR',
        image: camiseta2img,
        srcset: `${camiseta2_100} 100w, ${camiseta2_300} 300w, ${camiseta2img} 560w`,
        imageAlt: 'Camiseta tecnica plateada con estampado de ondas bloqueadas',
      },
      {
        name: 'Camiseta Router en Silencio',
        description:
          'Corte comodo para bloquear malas vibras y alguna que otra notificacion.',
        price: '37,90 EUR',
        image: camiseta3img,
        srcset: `${camiseta3_100} 100w, ${camiseta3_300} 300w, ${camiseta3img} 560w`,
        imageAlt: 'Camiseta urbana anti wifi con detalles reflectantes',
      },
      {
        name: 'Camiseta Ping Cero',
        description:
          'Para quien quiere ir elegante sin que su torso responda a paquetes de datos.',
        price: '44,90 EUR',
        image: camiseta4img,
        srcset: `${camiseta4_100} 100w, ${camiseta4_300} 300w, ${camiseta4img} 560w`,
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
        srcset: `${sudadera1_100} 100w, ${sudadera1_300} 300w, ${sudadera1img} 560w`,
        imageAlt:
          'Sudadera tecnica de proteccion 5G con acabado metalizado y capucha',
      },
      {
        name: 'Sudadera Torre Lejana',
        description:
          'Aislamiento extra para mirar antenas desde lejos con superioridad textil.',
        price: '69,90 EUR',
        image: sudadera2img,
        srcset: `${sudadera2_100} 100w, ${sudadera2_300} 300w, ${sudadera2img} 560w`,
        imageAlt: 'Sudadera gris metalizada de proteccion frente a antenas 5G',
      },
      {
        name: 'Sudadera No Disponible',
        description:
          'Ideal para desaparecer de grupos, redes y ondas con una sola cremallera.',
        price: '72,90 EUR',
        image: sudadera3img,
        srcset: `${sudadera3_100} 100w, ${sudadera3_300} 300w, ${sudadera3img} 560w`,
        imageAlt: 'Sudadera con capucha y tejido reflectante anti radiacion',
      },
      {
        name: 'Sudadera Apagon Selectivo',
        description:
          'Confort premium para cuando quieres que solo te llegue el olor a cafe.',
        price: '74,90 EUR',
        image: sudadera4img,
        srcset: `${sudadera4_100} 100w, ${sudadera4_300} 300w, ${sudadera4img} 560w`,
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
        srcset: `${gorra100} 100w, ${gorra300} 300w, ${gorraImg} 560w`,
        imageAlt:
          'Gorra de proteccion RFID con estilo urbano y tejido reflectante',
      },
      {
        name: 'Bufanda Cortafrecuencias',
        description:
          'Envuelve el cuello y, segun tu tio, tambien las ondas sospechosas.',
        price: '29,90 EUR',
        image: bufandaImg,
        srcset: `${bufanda100} 100w, ${bufanda300} 300w, ${bufandaImg} 560w`,
        imageAlt: 'Bufanda tecnica reflectante para proteccion electromagnetica',
      },
      {
        name: 'Cartera Tarjeta Fantasma',
        description:
          'Tu tarjeta sigue ahi, pero el lector del metro tendra que creer en ella.',
        price: '34,90 EUR',
        image: carteraImg,
        srcset: `${cartera100} 100w, ${cartera300} 300w, ${carteraImg} 560w`,
        imageAlt: 'Cartera RFID plateada para proteger tarjetas sin contacto',
      },
      {
        name: 'Calcetines Baja Latencia',
        description:
          'No bloquean el WiFi, pero te ayudan a pisar fuerte en zonas de cobertura dudosa.',
        price: '18,90 EUR',
        image: calcetinesImg,
        srcset: `${calcetines100} 100w, ${calcetines300} 300w, ${calcetinesImg} 560w`,
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
          srcSet={`${hero100} 100w, ${hero300} 300w, ${heroImg} 720w`}
          sizes="(max-width: 760px) 300px, 360px"
          alt="Chaqueta futurista de proteccion electromagnetica para uso diario"
          width="360"
          height="360"
          fetchpriority="high"
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
                  srcSet={product.srcset}
                  sizes="(max-width: 760px) 100px, 280px"
                  alt={product.imageAlt}
                  width="280"
                  height="175"
                  loading="lazy"
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
          srcSet={`${map100} 100w, ${map300} 300w, ${mapImg} 720w`}
          sizes="(max-width: 760px) 300px, 380px"
          alt="Mapa ficticio de la tienda Faraday Fit en una zona sin cobertura"
          width="380"
          height="380"
          loading="lazy"
        />
      </section>
    </main>
  )
}

export default MainContent
