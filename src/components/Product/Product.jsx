import { useParams } from "react-router-dom";
import FechApi from "../../hooks/Hooks";

export default function Product() {
  const { id } = useParams(); //id do personagem

  const url = 'https://valorant-api.com/v1/agents/' + id //url do agente selecionado

  const {agente: agentes} = FechApi(url) 

  console.log(agentes) //verificar se os dados estão chegando nessa tela (não estão, chegaram como undefined)

  return (
    <>
      <p>id do agente: {id}</p>
      {agentes && (
         <p key={agentes.uuid} className="box-item">{agentes.displayname}</p>//mostra no nome do personagem
       )}
    </>
  );
}
