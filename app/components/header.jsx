import { Link } from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

function Header() {
  
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className='logo' src={Logo} alt="Imagen Logo" />
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header

//   forma fresa:
//   <nav className="navegacion">
//   {[
//     { route: "/", label: "Inicio" },
//     { route: "/nosotros", label: "Nosotros" },
//     { route: "/tienda", label: "Tienda" },
//     { route: "/blog", label: "Blog" },
//   ].map((link) => (
//     <Link
//       key={link.route}
//       to={link.route}
//       className={location.pathname === link.route ? "active" : ""}
//     >
//       {link.label}
//     </Link>
//   ))}
// </nav>