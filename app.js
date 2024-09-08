
function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Obtém o termo de pesquisa e converte para minúsculas
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
  
    if (!campoPesquisa) {
      section.innerHTML = "<p class='sem-resultados'>Nenhum atleta foi encontrado &#128531</p>"
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
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.modalidade}</p>
          <img src="${dado.img}" alt="${dado.titulo}">
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.instagram}" target="_blank">Instagram</a>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    });

   if (!resultados) {
       resultados = "<p class='sem-resultados'> Infelizmente esse atleta não existe <br> em nosso banco de dados &#128531 </p>"

   }
  
    section.innerHTML = resultados;
}