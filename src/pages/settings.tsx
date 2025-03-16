import { useState } from "react";
import { useAuth } from "../authentication/auth";
import Header from "../components/header";
import { Navigate } from "react-router-dom";
import { FaGears, FaSuitcase } from "react-icons/fa6";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaUserAstronaut,
} from "react-icons/fa";

function Settings() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

  // For dropDown
  const [job, setJob] = useState<boolean>(false);
  const [candidate, setCandidate] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  // Allow logging out
  const { logout } = useAuth();

  if (userRole !== "Admin") {
    <Navigate to="/dashboard" />;
  }

  return (
    <section>
      <Header user={userName!} role={userRole!} logout={logout} />

      <main className="container settings">
        <section className="section-1">
          <aside>
            <h3>Team members</h3>
            <p className="gray">
              Invite or manage your organisations's members.
            </p>
          </aside>
          <aside>
            <button>+ Add Member</button>
          </aside>
        </section>

        <div onClick={() => setJob((prevState) => !prevState)} className="job">
          <h4>
            <span>
              <FaSuitcase />
            </span>{" "}
            Jobs management
            <span className="arrow">
              {job ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
            </span>{" "}
          </h4>
          <nav>
            <p>Viewer</p>
            <p>Editor</p>
            <p>Admin</p>
          </nav>
        </div>
        {job && (
          <section className="section-2">
            <div>
              <aside>
                <p>Create new job and stages</p>
              </aside>
              <aside>
                <input className="check1" type="checkbox" name="" id="" />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Edit job and stages</p>
              </aside>
              <aside>
                <input className="check1" type="checkbox" name="" id="" />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Archive job</p>
              </aside>
              <aside>
                <input className="check1" type="checkbox" name="" id="" />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Change job status</p>
              </aside>
              <aside>
                <input className="check1" type="checkbox" name="" id="" />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>
          </section>
        )}

        <div
          className="job"
          onClick={() => setCandidate((prevState) => !prevState)}
        >
          <h4>
            <span>
              <FaUserAstronaut />
            </span>{" "}
            Candidate management
            <span className="arrow">
              {candidate ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
            </span>
          </h4>
          <nav>
            <p>Viewer</p>
            <p>Editor</p>
            <p>Admin</p>
          </nav>
        </div>
        {candidate && (
          <section className="section-2">
            <div>
              <aside>
                <p>Change candidate stage</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>
                  Move applicant to terminal stage (Hired, Rejected, on hold)
                </p>
              </aside>
              <aside>
                <input className="check1" type="checkbox" name="" id="" />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Read messages</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Send ad-hoc messages to candidates</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>

            <div>
              <aside>
                <p>Reschedule interviews</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>
            <div>
              <aside>
                <p>Import applicants</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>
          </section>
        )}

        <div className="job" onClick={() => setUser((prevState) => !prevState)}>
          <h4>
            <span>
              <FaGears />
            </span>{" "}
            User management
            <span className="arrow">
              {user ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
            </span>{" "}
          </h4>
          <nav>
            <p>Viewer</p>
            <p>Editor</p>
            <p>Admin</p>
          </nav>
        </div>
        {user && (
          <section className="section-2">
            <div>
              <aside>
                <p>Edit user details</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>
            <div>
              <aside>
                <p>Participate interviews / Set calendar availability</p>
              </aside>
              <aside>
                <input
                  className="check1"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check2"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
                <input
                  className="check3"
                  type="checkbox"
                  name=""
                  id=""
                  defaultChecked
                />
              </aside>
            </div>
          </section>
        )}
      </main>
    </section>
  );
}

export default Settings;
