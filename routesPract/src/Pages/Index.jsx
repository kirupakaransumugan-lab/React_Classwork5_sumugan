import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cta from '../components/Cta.jsx'
import Footer from '../components/Footer.jsx'
import aboutUsImage from '../assets/about-us-image.jpg'
import videoThumb from '../assets/video-thumb.jpg'
import happyClient from '../assets/happyclient-01.jpg'

const steps = [
  {
    title: 'Best CSS Templates for you',
    labels: ['Website Design', 'User Interface', 'User Experience', 'Digital Agency'],
    text: (
      <>
        Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company.
        It is a free download provided by TemplateMo. There are 3 HTML pages, <Link to="/">Home</Link>,
        {' '}<Link to="/about">About</Link>, and <Link to="/faq">FAQ</Link>.
      </>
    ),
  },
  {
    title: 'Detailed Information On What We Do',
    labels: ['HTML CSS', 'Bootstrap 5', 'TemplateMo', 'Development'],
    text: 'You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.',
  },
  {
    title: 'Responsive HTML CSS Templates',
    labels: ['SEO Trend', 'Digital Agency', 'Best Template', 'Development'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod kent tempor incididunt ut labore et dolore dolor.',
  },
  {
    title: 'Detailed Information about SEO Techniques',
    labels: ['Data Analysis', 'SEO Trend', 'Templates', 'Research'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod kent tempor incididunt ut labore et dolore dolor.',
  },
]

function Index() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 align-self-center">
              <div className="caption header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>Discover More <em>About Us</em></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="main-button"><Link to="/about">Discover More</Link></div>
                <span>or</span>
                <div className="second-button"><Link to="/faq">Check our FAQs</Link></div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src={aboutUsImage} alt="About Tale SEO Agency" />
            </div>
          </div>
        </div>
      </div>

      <div className="video-info section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-thumb">
                <img src={videoThumb} alt="Video preview" />
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fa fa-play"></i></a>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>Detailed Information On What We Do &amp; Who We Are</h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor.</p>
              </div>
              <div className="skills">
                <div className="skill-slide marketing">
                  <div className="fill"></div>
                  <h6>SEO Marketing</h6>
                  <span>90%</span>
                </div>
                <div className="skill-slide digital">
                  <div className="fill"></div>
                  <h6>Digital Marketing</h6>
                  <span>80%</span>
                </div>
                <div className="skill-slide media">
                  <div className="fill"></div>
                  <h6>Social Media Management</h6>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="happy-clients section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our 4 Steps <em>To Success</em> &amp; <span>Happy Clients</span></h2>
                <div className="line-dec"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        {['Project Introduction', 'Work Development', 'Data Analysis', 'Project Finishing'].map((label, index) => (
                          <button
                            className={`${activeStep === index ? 'active' : ''} ${index === 3 ? 'last-item' : ''}`}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            key={label}
                          >
                            <span>{label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {steps.map((step, index) => (
                          <li className={activeStep === index ? 'active' : ''} key={step.title}>
                            <div>
                              <div className="row">
                                <div className="col-lg-7">
                                  <h4>{step.title}</h4>
                                  <div className="line-dec"></div>
                                  <p>{step.text}</p>
                                  <div className="info">
                                    {step.labels.map((label, labelIndex) => (
                                      <span className={labelIndex === step.labels.length - 1 ? 'last-span' : ''} key={label}>{label}</span>
                                    ))}
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipicing elit, sed doers eiusmod.</p>
                                </div>
                                <div className="col-lg-5 align-self-center">
                                  <img src={happyClient} alt="Happy client" />
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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

export default Index
