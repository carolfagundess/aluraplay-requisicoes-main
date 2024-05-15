//importando um arquivo
import { conectaApi } from "./conectaApi.js";
//importando uma funcao
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosPesquisa = document.querySelector("[data-barra-pesquisa]").value;
  const busca = await conectaApi.buscarVideo(dadosPesquisa);

  //teste de busca
  console.log(busca);

  const lista = document.querySelector("[data-lista]");

  //faça enquanto a lista tiver um primeiro filho ela deve remover o primeiro filho da lista;
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  //criado um card para o elemento//para cada elemento relacionado com a  busca sera adicioando (sera um filho) a lista//
  busca.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", (evento) => buscarVideo(evento));
