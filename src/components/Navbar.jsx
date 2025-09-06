import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/about", label: "Sobre" },
  { to: "/pricing", label: "Preços" },
];

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-teal-600 font-medium"
    : "text-slate-600 hover:text-slate-900 transition-colors";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-teal-600">
          Elementar
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu mobile */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col items-center py-4 md:hidden">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClass}
                onClick={() => setOpen(false)} // fecha menu ao clicar
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
