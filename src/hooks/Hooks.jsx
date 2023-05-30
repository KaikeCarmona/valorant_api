import { useEffect, useState } from "react";


//consumindo a url da api, seja ela a url raiz ou uma url dinamica com o id do personagem

export default function FechApi(url){
    const [agent, setAgent] = useState([]);
  useEffect(() =>{
    async function getValorantApi() {
      try {
        const url1 = await fetch(url);
        const json = await url1.json();
        const data = await json.data //acessando o "data" do array, tentei criar outra função para fazer a varredura do array mas n consegui
        setAgent(data);
        console.log(data);
      } catch (error) {
        console.log("error:", error);
      }
    }
    getValorantApi();
  },[url])
  return{agent} //retornando a variavel agent como prop
}