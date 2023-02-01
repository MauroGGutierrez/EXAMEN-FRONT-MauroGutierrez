import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left-nav">
          <div>
            <Link to={"/ShopPage"} className="links">
              <h3 className="nav-h3">COMPRAR</h3>
            </Link>
          </div>
          <div className="box-nav">
            <Link to={"/"} className="links">
              <h3 className="nav-h3">COTIZAR</h3>
            </Link>
          </div>
          <div className="box-nav">
            <Link to={"/graph"} className="links">
              <h3 className="nav-h3">GRAFICO EVOLUTIVO</h3>
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h2 className="logo">Criptozacion</h2>
          </Link>
        </div>
      </div>
    </>
  );
};
