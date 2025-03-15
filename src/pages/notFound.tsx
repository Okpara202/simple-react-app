import { FaAngry } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1>
        <FaAngry />
      </h1>
      <h1>404</h1>
      <h3>Oops... page not found.</h3>
      <p>
        We don't know how you ended up here, but you should go{" "}
        <Link title="Back to dashboard" to={"/dashboard"}>
          away now.
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
