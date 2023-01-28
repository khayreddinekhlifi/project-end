import React from "react";
import{Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
      <h1>
        affare<span>.tn</span>
      </h1>
      </Link>
     
      <div className="link">
        <ul>
          <Link to="/déposer une annence"><li>Déposer une annonce</li></Link>
          <li className="active">Mes favoris</li>
          <Link to="/mon compte"><li>Mon compte</li></Link>
          <li>publier gratuitement</li>
        </ul>
      </div>
    </div>
  );
}