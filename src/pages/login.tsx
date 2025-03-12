import { useRef, useState } from "react";
import { IoIosApps } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/auth";

function Login() {
  // navigate programatically to dashboard
  const navigate = useNavigate();

  // Create Refs for input form focusing
  const nameRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // Handle Errors
  const [nameError, setNameError] = useState<string>("");
  const [roleError, setRoleError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // Handle name and password state
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  // Handle role state
  const [role, setRole] = useState<string>("");

  // Handle role based Authentication
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Submit function
    e.preventDefault();

    // Validate name
    if (form.name === "") {
      setNameError("Name cannont be empty");
      nameRef.current?.focus();
      return;
    } else if (form.name.length < 4) {
      setNameError("Enter your real name");
      nameRef.current?.focus();
      return;
    }

    // Validate role
    if (role === "") {
      setRoleError("Select a valid role");
      roleRef.current?.focus();
      return;
    }

    // Validate password
    if (form.password === "") {
      setPasswordError("Enter your password");
      passwordRef.current?.focus();
      return;
    } else if (form.password.length < 8) {
      setPasswordError("Password cannot be less than 8");
      passwordRef.current?.focus();
      return;
    }

    login(form.name, role);

    navigate("/dashboard");
  };

  const falseLink = () => {
    // for feedback on forgot password and register here
    alert("Feature currently unavailable");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle name and password state change
    e.preventDefault();
    const { type, name, value, checked } = e.target;
    setForm((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
  };

  return (
    <section className="login-section">
      <aside>
        <div className="form">
          <h1 className="icon">
            <IoIosApps />
          </h1>
          <h1>Welcome back !</h1>
          <p className="loginEnter">Enter the correct information to login</p>
          <form onSubmit={handleSubmit}>
            <label>
              <p>
                Name <span>*</span>
              </p>
              <input
                ref={nameRef}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {nameError && <p className="error">{nameError}</p>}
            </label>
            <label>
              <p>
                Role <span>*</span>
              </p>
              <select
                ref={roleRef}
                name=""
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">--Select your role--</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
              {roleError && <p className="error">{roleError}</p>}
            </label>
            <label>
              <p>
                Password <span>*</span>
              </p>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </label>

            <div className="remember">
              <label>
                <input type="checkbox" name="" id="" /> Remember me
              </label>
              <p onClick={falseLink}>Forgot password</p>
            </div>
            <button>Log in</button>

            <h4>
              Don't have an account?{" "}
              <span onClick={falseLink}>Register here</span>
            </h4>
          </form>
        </div>
      </aside>
      <aside></aside>
    </section>
  );
}

export default Login;
