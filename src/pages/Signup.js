import { useState } from "react";
import { Link } from "react-router-dom";



const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    return <div className="container">
    <form className="signup-form">
      <h1 className="title-inscription">S'inscrire</h1>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div className="checkbox-newsletter">
        <input
          type="checkbox"
          className="checkbox-button"
          checked={newsletter}
          onChange={() => {
            setNewsletter(!newsletter);
          }}
        />
        <p className="p-checkbox">S'inscrire à notre newsletter</p>
      </div>
     
      <input type="submit" value="S'inscrire" className="button-inscire" />
      <Link to="/login">Tu as déjà un compte ? Connecte-toi 😎</Link>
    </form>
  </div>
};

export default Signup;