import "./Cards.css";

import FechApi from "../../hooks/Hooks";

import { Link } from "react-router-dom";

export default function Cards() {
  const url = "https://valorant-api.com/v1/agents"; //url da api raiz da riot

  const { agent: agentes } = FechApi(url); //enviando a url para a função que ira consumi-la / puxando a variavel que armazena os valores da api

  return (
    <div className="cards">
      {agentes.map((agent) => (
        // link para a rota dinamica pelo id. Redireciona o usuario para uma tela que ira mostrar os dados individuais do agente 
        <Link key={agent.uuid} to={`/products/${agent.uuid}`}> 
          <div  className="box-item">
            <img alt={agent.displayName} src={agent.displayIcon}></img>
          </div>
        </Link>
      ))}
    </div>
  );
}
