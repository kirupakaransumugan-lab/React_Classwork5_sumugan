import Footer from '../components/Footer.jsx'
import services01 from '../assets/services-01.jpg'
import services02 from '../assets/services-02.jpg'
import services03 from '../assets/services-03.jpg'
import services04 from '../assets/services-04.jpg'
import leftInfos from '../assets/left-infos.jpg'

const services = [
  ['Discover More on Latest SEO Trends', services01, 'discover SEO'],
  ['Real-Time Big Data Analysis', services02, 'data analysis'],
  ['Precise Data Analysis & Prediction', services03, 'precise data'],
  ['SEO Marketing & Social Media', services04, 'SEO marketing'],
]

function About() {
  return (
    <>
      <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>We Provide <em>Different Services</em> &amp; <span>Features</span> For Your Agency</h2>
                    <div className="line-dec"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                  </div>
                </div>
                {services.map(([title, image, alt]) => (
                  <div className="col-lg-6 col-sm-6" key={title}>
                    <div className="service-item">
                      <div className="icon">
                        <img src={image} alt={alt} className="templatemo-feature" />
                      </div>
                      <h4>{title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="infos section" id="infos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="left-image">
                      <img src={leftInfos} alt="Team discussion" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="section-heading">
                      <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                      <div className="line-dec"></div>
                      <p>You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.</p>
                    </div>
                    <div className="skills">
                      <div className="skill-slide marketing">
                        <div className="fill"></div>
                        <h6>Marketing</h6>
                        <span>90%</span>
                      </div>
                      <div className="skill-slide digital">
                        <div className="fill"></div>
                        <h6>Ditigal Media</h6>
                        <span>80%</span>
                      </div>
                      <div className="skill-slide media">
                        <div className="fill"></div>
                        <h6>Social Media Managing</h6>
                        <span>95%</span>
                      </div>
                    </div>
                    <p className="more-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About
