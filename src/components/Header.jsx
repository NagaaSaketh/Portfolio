import { Link } from 'react-router-dom'
import devLogo from "../assets/dev.png";
const Header = () => {
  return (
    <div>
        <div className="navbar-container">
        <div className="container">
          <div className="navbar">
            <Link
              className="navbar-brand d-flex align-items-center gap-3"
              to="/"
            >
              <img className="img-fluid" src={devLogo} alt="developer-logo" />
              <span className="fs-5 fw-bold">Naga Saketh</span>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Header