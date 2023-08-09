import React from "react";
import Lipe from "../../assets/lipe.png";
import "./style.css";
import Button from "../../components/button";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center w-100 p-5 home-container">
      <img src={Lipe} alt="lipe" />

      <h1>Filipe Eduardo</h1>
      <p>Alooo, tudo bem?</p>

      <div className="buttons">
        <Button
          title="Quem é lipe?"
          description="Um pouquinho de mim"
          href="/sobre-mim"
          target="_self"
        />
        <Button
          title="Instagram"
          description="Me dá um oi :)"
          href="https://www.instagram.com/fpeduu/"
        />
      </div>

      <div className="buttons">
        <Button
          title="Github"
          description="Chega e vê o que já fiz!"
          href="https://github.com/fpeduu/"
        />
        <Button
          title="Segredo"
          description="Mensagem ultra secreta"
          href="/segredo"
          target="_self"
        />
      </div>

      <span className="mt-5">
        Tem uma senha escondida que desbloqueia o segredo no site! Consegue
        descobrir qual é?
      </span>
    </div>
  );
}

export default Home;
