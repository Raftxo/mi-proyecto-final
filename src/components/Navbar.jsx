const menuLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#camisetas', label: 'Camisetas Blindadas' },
  { href: '#sudaderas', label: 'Sudaderas 5G-Proof' },
  { href: '#accesorios', label: 'Accesorios RFID' },
  { href: '#contacto', label: 'Contacto' },
]

const handleLinkKeyDown = (event) => {
  if (event.key === ' ') {
    event.preventDefault()
    event.currentTarget.click()
  }
}

function Navbar({ activeSection }) {
  return (
    <nav className="main-nav" aria-label="Navegacion principal">
      <ul>
        {menuLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'is-active' : ''}
              aria-current={
                activeSection === link.href.slice(1) ? 'page' : undefined
              }
              onKeyDown={handleLinkKeyDown}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
