async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  //acessando o localhost, com um tipo de requisao diferente
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      //que tipo de arquivo que esta sendo usado
      "Content-type": "application/json",
    },
    //Define o corpo da requisição como um objeto JavaScript convertido em uma string JSON
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  //variavel para receber o json
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

//recebe uma buscar dinamica
async function buscarVideo(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

export const conectaApi = { listaVideos, criaVideo, buscarVideo };
