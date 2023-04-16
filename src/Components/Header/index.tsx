import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="text-center text-slate-50 bg-slate-900 h-40 p-5">
      <h1 className="text=2x1">React Tools</h1>
      <nav>
        <Link to="products" className="text-white no-underline p-1">
          Products
        </Link>
        <NavLink
          to="products"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid  border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          NavProducts
        </NavLink>
        <NavLink
          to="admin"
          className={({ isActive }) =>
            `text-white no-underline p-1 pb-0.5 border-solid  border-b-2 ${
              isActive ? "border-white" : "border-transparent"
            }`
          }
        >
          admin
        </NavLink>
      </nav>
    </header>
  );
}
