import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className="pre-header" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                  <li><a href="tel:+00012345678"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
                  <li><a href="mailto:infocompany@email.com"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
                  <li><a href="#top"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                  <li><a href="#top" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#top" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#top" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#top" aria-label="Google Plus"><i className="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo" onClick={closeMenu}>
                  <img src={logo} alt="Tale SEO Agency" style={{ maxWidth: '112px' }} />
                </Link>

                <ul className={`nav ${isOpen ? 'open' : ''}`}>
                  <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                  <li><NavLink to="/faq" onClick={closeMenu}>FAQs</NavLink></li>
                  <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
                  <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>

                <button
                  className={`menu-trigger ${isOpen ? 'active' : ''}`}
                  type="button"
                  onClick={() => setIsOpen((open) => !open)}
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation"
                >
                  <span>Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
