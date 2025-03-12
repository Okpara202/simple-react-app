import { useAuth } from "../authentication/auth";

function Dashboard() {
  const { user, role } = useAuth();
  console.log(user);
  console.log(role);
  return <div>Dashboard</div>;
}

export default Dashboard;
