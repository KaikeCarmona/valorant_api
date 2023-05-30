import "./AgentCard.css";
import { useParams } from "react-router-dom";
import FechApi from "../../hooks/Hooks";

export default function AgentCard() {
  const { id } = useParams();

  const url = "http://localhost:5173/products/" + id;
  
 


  const { agent: agentes } = FechApi();

  return (
    <div>
      <img
        className="imageteste"
        src="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
        alt=""
      />
    </div>
  );
}
