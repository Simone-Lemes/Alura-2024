
function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Obtém o termo de pesquisa e converte para minúsculas
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum atleta foi encontrado</p>"
      return
    }
  
    // Filtra os dados com base no campo de pesquisa
    let resultadosFiltrados = dados.filter(dado => {
      return dado.titulo.toLowerCase().includes(campoPesquisa) ||     
             dado.descricao.toLowerCase().includes(campoPesquisa); 
             
    });
  
    // Cria o HTML para os resultados filtrados
    resultadosFiltrados.forEach(dado => {
      resultados += `
        <div class="item-resultado">
          <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
          <img src="${dado.img}" alt="${dado.titulo}">
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    });

   if (!resultados) {
       resultados = "<p> Nada foi encontrado </p>"

   }
  
    section.innerHTML = resultados;
}