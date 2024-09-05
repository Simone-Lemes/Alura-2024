const dadosCompletos = dadosAtletas.map(atleta => {
    return {
        esporte: atleta.esporte,
        titulo: atleta.titulo,
        foto: atleta.foto,
        linkWikipedia: atleta.linkWikipedia,
        instagram: atleta.instagram,
        medalhas: atleta.medalhas
    };
})

console.log(dadosAtletas);
