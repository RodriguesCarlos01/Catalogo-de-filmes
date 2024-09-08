function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultado-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
 

  //se campoPesquisa for uma string sem nada
  if(!campoPesquisa ){
    section.innerHTML = `<p>Nada foi encontrado. Você precisa digitar o que esta procurando!</p>`
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
  

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let genero = "";
  let tags = "";
  // Itera sobre cada filme no array de dados
  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    genero = dado.genero.toLowerCase()
    tags = dado.tags.toLowerCase()
    //se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada filme, formatando as informações
    resultados += `
    <div class="pesquisa-resutado">
      <h2>${dado.titulo}</h2>
      <p>${dado.anoDeLancamento}</p>
      <p>${dado.genero}</p>
      <p>${dado.sinopse}</p>
      <p>${dado.oQueEsperar}</p>
      <a href=${dado.link} target="_blank">Assista Agora</a>
    </div>
  `;
    } 
    
  }

  if(!resultados){
    resultados = `<p>Nada foi econtrado!</p>`
  }
  // Atualiza o conteúdo da seção HTML com os resultados
  section.innerHTML = resultados;
}

//console.log(dados);




