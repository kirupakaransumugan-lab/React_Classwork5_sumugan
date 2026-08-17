import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cta from '../components/Cta.jsx'
import Footer from '../components/Footer.jsx'
import faqsImage from '../assets/faqs-image.jpg'
import services01 from '../assets/services-01.jpg'
import services02 from '../assets/services-02.jpg'
import services03 from '../assets/services-03.jpg'
import services04 from '../assets/services-04.jpg'

const questions = [
  {
    title: 'Sartorial Butcher Humblebrag',
    body: (
      <>
        Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company.
        It is a free download provided by TemplateMo. There are 3 HTML pages, <Link to="/">Home</Link>,
        {' '}<Link to="/about">About</Link>, and <Link to="/faq">FAQ</Link>.
      </>
    ),
  },
  {
    title: 'Jean Shorts Microdosing',
    body: 'You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you. Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch.',
  },
  {
    title: 'Waistcoat Aesthetic Polaroid',
    body: 'Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch. Fingerstache cronut taxidermy, echo park quinoa tumblr activated charcoal before they sold out.',
  },
  {
    title: 'Dolores Accordion HTML5',
    body: 'Pickled succulents bitters belly direct trade, shaman iceland raw denim kombucha cray offal. Food truck swag hell of tumblr poutine tilde live-edge shorts microdosing fixie succulents, viral everyday carry tattooed.',
  },
]

const stepImages = [services01, services02, services03, services04]

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={faqsImage} alt="Frequently asked questions" />
            </div>
          </div>
        </div>
      </div>

      <div className="happy-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                <div className="row">
                  {['Project Introduction', 'Work Development', 'Data Analysis', 'Project Finishing'].map((title, index) => (
                    <div className="col-lg-3" key={title}>
                      <div className={`item ${index === 3 ? 'last-item' : ''}`}>
                        <img src={stepImages[index]} alt="" style={{ maxWidth: '66px', borderRadius: '50%', margin: '0 auto' }} />
                        <h4>{title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="most-asked section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Most <em>Frequently</em> Asked <span>Questions</span> ?</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                {questions.map((question, index) => (
                  <article className={`accordion ${activeQuestion === index ? 'active' : ''}`} key={question.title}>
                    <button className="accordion-head" type="button" onClick={() => setActiveQuestion(index)}>
                      <span>{question.title}</span>
                      <span className="icon">
                        <i className={`icon fa ${activeQuestion === index ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                      </span>
                    </button>
                    <div className="accordion-body">
                      <div className="content">
                        <p>{question.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get-free-quote">
                <form id="free-quote" onSubmit={(event) => event.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>Get a <em>Free Quote</em> Now</h2>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="email" name="email" id="email" placeholder="Your E-mail" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="url" name="website" id="website" placeholder="Website URL" autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="tel" name="phone-number" id="phone-number" placeholder="Phone Number" autoComplete="on" required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="full-name" id="full-name" placeholder="Full Name" autoComplete="on" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">Get Your Free Quote</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </>
  )
}

export default Faq
