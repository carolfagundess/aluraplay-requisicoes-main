import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
  //criando um elemento li
  //template strings com inner html para criar um elemento li dinamico
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;

  return video;
}

//funcao pra consumir a funcao da api
async function listaMostraVideos() {
  const listaApi = await conectaApi.listaVideos();
  //adicionando os li na UL
  listaApi.forEach(elemento => lista.appendChild(
    constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}

listaMostraVideos();
