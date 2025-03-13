import { IoIosApps } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/auth";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Form input type
type FormData = {
  name: string;
  role: string;
  password: string;
};

function Login() {
  // navigate programatically to dashboard
  const navigate = useNavigate();

  // Handle role based Authentication
  const { login } = useAuth();

  //Create form validation schema
  const formSchema: ZodType<FormData> = z.object({
    name: z
      .string()
      .min(1, { message: "Name cannot be empty" })
      .min(4, { message: "Enter your full name" })
      .trim(),
    role: z.string().min(1, { message: "Select a valid role" }).trim(),
    password: z
      .string()
      .min(1, { message: "Password cannont be empty" })
      .min(8, { message: "Password can't be less than 8" })
      .trim(),
  });

  // Link Zod validation to react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const submitForm = (data: FormData) => {
    // Submit function

    // store the data in local storage to allow for persisting state
    localStorage.setItem("name", data.name);
    localStorage.setItem("role", data.role);

    login(data.name, data.role);

    navigate("/dashboard");
  };

  const falseLink = () => {
    // for feedback on forgot password and register here
    alert("Feature currently unavailable");
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
          <form onSubmit={handleSubmit(submitForm)}>
            <label>
              <p>
                Name <span>*</span>
              </p>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
              />
              {errors?.name && <p className="error">{errors.name.message}</p>}
            </label>
            <label>
              <p>
                Role <span>*</span>
              </p>
              <select {...register("role")}>
                <option value="">--Select your role--</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
              {errors?.role && <p className="error">{errors.role.message}</p>}
            </label>
            <label>
              <p>
                Password <span>*</span>
              </p>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter password"
              />
              {errors?.password && (
                <p className="error">{errors.password.message}</p>
              )}
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
