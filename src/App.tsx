import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./authentication/auth";
import Protected from "./components/protected";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import NotFound from "./pages/notFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Login serving as home route*/}
        <Route path="/" element={<Login />} />

        {/* Proteted routes */}
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch all Route */}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
