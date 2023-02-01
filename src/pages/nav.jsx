import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left-nav">
          <div>
            <h3 className="nav-h3">COMPRAR</h3>
          </div>
          <div>
            <h3 className="nav-h3">COTIZAR</h3>
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
