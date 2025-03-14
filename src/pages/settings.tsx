import { useState } from "react";
import { useAuth } from "../authentication/auth";
import Header from "../components/header";
import { Navigate } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa6";

function Settings() {
  // Ensure that state persist after refresh
  const [userName] = useState<string | null>(localStorage.getItem("name"));
  const [userRole] = useState<string | null>(localStorage.getItem("role"));

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

        <div className="job">
          <h4>
            <span>
              <FaSuitcase />
            </span>
            Jobs management
          </h4>
          <nav>
            <p>Intern</p>
            <p>Associate</p>
            <p>Manager</p>
          </nav>
        </div>
        <section className="section-2">
          <div>
            <aside>
              <p>Create new job and stages</p>
            </aside>
            <aside>
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" defaultChecked />
              <input type="checkbox" name="" id="" defaultChecked />
            </aside>
          </div>

          <div>
            <aside>
              <p>Edit job and stages</p>
            </aside>
            <aside>
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" defaultChecked />
              <input type="checkbox" name="" id="" defaultChecked />
            </aside>
          </div>

          <div>
            <aside>
              <p>Archive job</p>
            </aside>
            <aside>
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" defaultChecked />
              <input type="checkbox" name="" id="" defaultChecked />
            </aside>
          </div>

          <div>
            <aside>
              <p>Change job status</p>
            </aside>
            <aside>
              <input type="checkbox" name="" id="" />
              <input type="checkbox" name="" id="" defaultChecked />
              <input type="checkbox" name="" id="" defaultChecked />
            </aside>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Settings;
