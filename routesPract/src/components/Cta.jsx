import { Link } from 'react-router-dom'

function Cta() {
  return (
    <div className="cta section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4>Are You Ready To Work &amp; Develop With Us ?<br />Don't Hesitate &amp; Contact Us !</h4>
          </div>
          <div className="col-lg-4">
            <div className="main-button">
              <Link to="/contact">Contact Us Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
