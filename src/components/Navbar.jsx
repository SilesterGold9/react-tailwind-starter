import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          MyProject
        </Link>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Landing
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
