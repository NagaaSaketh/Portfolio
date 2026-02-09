import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="text-center mt-3 pt-3">
        <p>&copy; {new Date().getFullYear()} Naga Saketh • All rights reserved</p>
        <p>
          Learning full stack development at{" "}
          <Link className="neog text-success">neog.camp</Link>
        </p>
      </div>
      <div className="top-btn position-fixed bottom-0 end-0 p-2">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="btn btn-light rounded-circle p-3"
        >
          <img
            className="img-fluid bg-light"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Top_Arrow.svg/768px-Top_Arrow.svg.png"
            alt="arrow"
          />
        </button>
      </div>
    </>
  );
};

export default Footer;
