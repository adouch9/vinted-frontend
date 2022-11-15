import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="container">
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          // Je fais une requête vers le back
          // Le back me renvoie un token
          const token = "1234567890";
          handleToken(token);
          // À la fin de cete procédure je suis redirigé vers Home
          navigate("/");
        }}
      >
        <h1 className="title-connecter">Se connecter</h1>
        <input
          type="text"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="submit"
          value="Se connecter"
          className="button-connection"
        />
        <Link to="/signup">Pas encore de compte ? Inscrit-toi 😎</Link>
      </form>
    </div>
  );
};

export default Login;
