import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-teal-600">
          Elementar
        </Link>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-medium"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Preços
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
