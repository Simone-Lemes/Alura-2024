
function pesquisar() {
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Obtém o termo de pesquisa e converte para minúsculas
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";
  
    // Filtra os dados com base no termo de pesquisa
    const resultadosFiltrados = dados.filter(dado => {
      return dado.titulo.toLowerCase().includes(termoPesquisa) || 
             dado.descricao.toLowerCase().includes(termoPesquisa);
    });
  
    // Cria o HTML para os resultados filtrados
    resultadosFiltrados.forEach(dado => {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.esporte}</p>
          <p class="descricao-meta">${dado.medalhas}</p>
          <img src="${dado.img}" alt="${dado.titulo}">
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
          <a href="${dado.instagram}" target="_blank">Instagram</a>
          
        </div>
      `;
    });
  
    section.innerHTML = resultados;
}