import { useParams } from "react-router-dom";
import "./AgentCardInfo.css";

import FechApi from "../../hooks/Hooks";

export default function AgentCardInfo() {

  const {id} = useParams();

  const url = "https://valorant-api.com/v1/agents/" + id

  const { agent: agentes } = FechApi(url);


  return (
    <div className="container">
      <div className="side-row"></div>
      <div className="info-agent">
        <h3>Duelista</h3>
        <h1>GEKKO</h1>
        <div className="wrapper-skills">
          <div className="skills"></div>
          <div className="skills"></div>
          <div className="skills"></div>
          <div className="skills"></div>
        </div>
        <p>
          Aqui tem um texto bla bla bla Aqui tem um texto bla bla bla Aqui tem
          um texto bla bla bla
        </p>
        <div className="type">
          <h4>Iniciador</h4>
          <p>
            Aqui tem um texto bla bla bla Aqui tem um texto bla bla bla Aqui tem
            um texto bla bla bla
          </p>
        </div>
      </div>
    </div>
  );
}
