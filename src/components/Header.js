import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
    <header>
      <div className="container">
        <div className="container-header">
          <img
            className="header-logo"
            src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
            alt="vinted"
          ></img>
          <input
            type="text"
            className="search-input"
            placeholder="Recherche des articles"
          ></input>
          {token ? (
            <button
              onClick={() => {
                handleToken(null);
              }}
            >
              Deconexion
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="button-inscrire">S'inscrire</button>
              </Link>

              <Link to="/login">
                <button className="button-connecter">Se connecter</button>
              </Link>
              <button className="button-vend">Vends tes articles</button>
              {/* <Link to="/">clik</Link> */}
            </>
          )}
        </div>

        {/* Si le token existe, on affiche déconnexion, sinon s'inscrire et se connecter */}
      </div>
    </header>
  );
};

export default Header;
