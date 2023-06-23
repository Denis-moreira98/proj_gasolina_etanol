//import { useState } from "react";
import "./App.css";

import LogoImg from "./assets/logo.png";

function App() {
   return (
      <div>
         <main className="container">
            <img className="logo" src={LogoImg} alt="logo" />
            <h1 className="title">Qual melhor opção?</h1>

            <form className="form">
               <label>Álcool (preço por litro)</label>
               <input
                  type="number"
                  className="input"
                  placeholder="4,90"
                  min="1"
                  step="0.01"
                  required
               />
               <label>Gasolina (preço por litro)</label>
               <input
                  type="number"
                  className="input"
                  placeholder="4,90"
                  min="1"
                  step="0.01"
                  required
               />
               <input type="submit" value="Calcular" className="button" />
            </form>
         </main>
      </div>
   );
}

export default App;
