import { Link, useNavigate } from "react-router-dom";
import { IoIosApps } from "react-icons/io";
import { FaBars, FaBook } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";

function Header({
  user,
  role,
  logout,
}: {
  user: string;
  role: string;
  logout(): void;
}) {
  // programatically navigate to login
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logout user
    logout();
    navigate("/");
  };

  const show = () => {
    document.getElementById("nav")?.classList.toggle("show");
  };
  return (
    <header>
      <aside>
        <h1 className="icon">
          <IoIosApps />
        </h1>
        <div>
          <h1>{user} </h1>
          <p>{role}</p>
        </div>
      </aside>
      <nav id="nav">
        <Link to={""}>Dashboard</Link>
        <Link to={""}>Profile</Link>
        {role === "Admin" && <Link to={""}>Settings</Link>}
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <aside id="bar" className="bar" onClick={show}>
        <FaBars />
      </aside>
    </header>
  );
}

export default Header;
