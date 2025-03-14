import { useState } from "react";
import Header from "../components/header";
import { useAuth } from "../authentication/auth";
import {
  FaArrowLeft,
  FaFacebook,
  FaLinkedin,
  FaMobileAlt,
  FaUserCircle,
} from "react-icons/fa";
import { FaGear, FaMessage, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Profile() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

  // Allow logging out
  const { logout } = useAuth();

  return (
    <section>
      <Header user={userName!} role={userRole!} logout={logout} />

      <section className="profileSection container">
        <aside>
          <section className="profileSection-1">
            <Link to={"/dashboard"} title="back to dashboard">
              <FaArrowLeft />
            </Link>
            <h3>Profile</h3>
            <Link to="">
              <FaGear />
            </Link>
          </section>
          <section className="profileSection-2">
            <FaUserCircle />
          </section>
          <section className="profileSection-3">
            <h3>
              Welcome Back <br /> {userRole} {userName}
            </h3>
          </section>
          <section className="profileSection-4">
            <p>
              <span>{Math.round(Math.random() * 1000)} </span> Followers
            </p>
            <p>|</p>
            <p>
              <span>{Math.round(Math.random() * 1000)}</span> Following
            </p>
          </section>
        </aside>
        <aside>
          <section>
            <div>
              <FaMessage />
            </div>
            <div>
              <p>Email</p>
              <p>{userName?.split(" ")}@gmail.com</p>
            </div>
          </section>
          <section>
            <div>
              <FaMobileAlt />
            </div>
            <div>
              <p>Mobile</p>
              <p>null</p>
            </div>
          </section>
          <section>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <p>Twitter</p>
              <p>@{userName?.split(" ")}</p>
            </div>
          </section>
          <section>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <p>LinkedIn</p>
              <p>www.LinkedIn.com/{userName?.split(" ")}</p>
            </div>
          </section>
          <section>
            <div>
              <FaFacebook />
            </div>
            <div>
              <p>Facebook</p>
              <p>www.facebook.com/{userName?.split(" ")}</p>
            </div>
          </section>
        </aside>
      </section>
    </section>
  );
}

export default Profile;
