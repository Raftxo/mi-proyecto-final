const handleLinkKeyDown = (event) => {
  if (event.key === ' ') {
    event.preventDefault()
    event.currentTarget.click()
  }
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Faraday Fit - Proteccion electromagnética con estilo y una pizca de
        paranoia saludable.
      </p>
      <p>
        Contacto ficticio:{' '}
        <a href="mailto:hola@faradayfit.example" onKeyDown={handleLinkKeyDown}>
          hola@faradayfit.example
        </a>
      </p>
    </footer>
  )
}

export default Footer
