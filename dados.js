/*let dadosAtletas = [
    {
        esporte: "Men's 100m - T37",
        titulo: "Ricardo Gomes de Mendonça",
        foto: "img/Ricardo_Gomes.jpg",
        linkWikipedia: "https://instagram.com/ricardomendonca31",
        instagram: "https://instagram.com/ricardomendonca31",
        medalhas: ["Medalha de Ouro"]
    }, 
    {
        esporte: "Men's 100m - T47 ",
        titulo: "Petrucio Ferreira dos Santos",
        foto: "img/Petrúcio_Ferreira.jpg",
        linkWikipedia: "https://pt.wikipedia.org/wiki/Petr%C3%BAcio_Ferreira",
        instagram: "https://instagram.com/petrucio_t47/",
        medalhas: ["Medalha de Ouro"]
    },
    {
      esporte: "Men's 1500m - T11, Men's 5000m - T11",
      titulo: "Yeltsin Jacques",
      foto: "img/Petrúcio_Ferreira.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Yeltsin_Jacques",
      instagram: "https://instagram.com/yeltsin.atleta",
      medalhas: ["Medalha de Ouro, Medalha de Bronze"]
    },
    {
      esporte: "Men's 5000m - T11, Men's 1500m - T11",
      titulo: "Julio Cesar Agripino dos Santos",
      foto: "img/julio_cesar_agripino.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/J%C3%BAlio_C%C3%A9sar_Agripino",
      instagram: "https://instagram.com/correjuliao/",
      medalhas: ["Medalha de Ouro, Medalha de Bronze"]
    },
    {
      esporte: "Men's Discus Throw - F56",
      titulo: "Claudiney Batista dos Santos",
      foto: "img/Claudiney_Batista.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Claudiney_Batista",
      instagram: "https://instagram.com/claudineysantos4668",
      medalhas: ["Medalha de Ouro"]
    },
    {
      esporte: "Women's 100m - T11",
      titulo: "Jerusa Geber dos Santos",
      foto: "img/Jerusa_Geber.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Jerusa_Geber",
      instagram: "https://instagram.com/jerusaatletismo/",
      medalhas: ["Medalha de Ouro"]
    },
    {
      esporte: "Women's 400m - T47",
      titulo: "Fernanda Yara da Silva",
      foto: "img/Yara.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Fernanda_Yara_da_Silva",
      instagram: "https://instagram.com/fernanda_atleta/",
      medalhas: ["Medalha de Ouro"]
    },
    {
      esporte: "Women's Discus Throw - F53, Women's Shot Put - F54",
      titulo: "Elizabeth Rodrigues Gomes",
      foto: "img/Beth_Gomes.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Elizabeth_Gomes",
      instagram: "https://instagram.com/atletabethgomesoficial",
      medalhas: ["Medalha de Ouro, Medalha de Prata"]
    },
    {
      esporte: "Men's 100m - T12",
      titulo: "Joeferson Marinho de Oliveira",
      foto: "img/Joeferson_Marinho_de_Oliveira.png",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Joeferson_Marinho_de_Oliveira",
      instagram: "https://instagram.com/joeferson_marinho/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Men's 400m - T37",
      titulo: "Bartolomeu da Silva Chaves",
      foto: "img/bartolomeu.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Bartolomeu_Chaves",
      instagram: "https://instagram.com/passarin77/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Men's Long Jump - T36",
      titulo: "Aser Mateus Almeida Ramos",
      foto: "img/Aser_Mateus_Almeida_Ramos.png",
      linkWikipedia: "https://en.wikipedia.org/wiki/Aser_Ramos",
      instagram: "https://instagram.com/aser_ramos",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Women's 100m - T13",
      titulo: "Rayane Soares da Silva",
      foto: "img/rayane.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Rayane_Soares_da_Silva",
      instagram: "https://instagram.com/rayane_atleta/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Women's 400m - T11",
      titulo: "Thalita Vitoria Simplicio da Silva",
      foto: "img/Thalita.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Thalita_Simpl%C3%ADcio",
      instagram: "https://instagram.com/thalita.simplicio/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Women's Shot Put - F32",
      titulo: "Wanna Helena Brito Oliveira",
      foto: "img/wanna_brito.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Wanna_Brito",
      instagram: "https://instagram.com/wannabritoo/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Women's Javelin Throw - F56",
      titulo: "Raissa Rocha Machado",
      foto: "img/Raissa_Machado.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Ra%C3%ADssa_Rocha_Machado",
      instagram: "https://instagram.com/raissarochamachadooficial/",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Men's 100m - T53",
      titulo: "Ariosvaldo Fernandes da Silva",
      foto: "img/Ariosvaldo.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Ariosvaldo_Fernandes",
      instagram: "https://instagram.com/parrebrazil",
      medalhas: ["Medalha de Prata"]
    },
    {
      esporte: "Men's 100m - T63",
      titulo: "Vinicius Gonçalves Rodrigues",
      foto: "img/Vinicius_Rodrigues.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Vin%C3%ADcius_Rodrigues",
      instagram: "https://instagram.com/vinirodriguees",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Men's Long Jump - T37",
      titulo: "Mateus Evangelista Cardoso",
      foto: "img/Mateus_Evangelista.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Mateus_Evangelista_Cardoso",
      instagram: "https://instagram.com/mateusvangelista",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Men's Discus Throw - F52",
      titulo: "Andre Rocha",
      foto: "img/andre_rocha.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Andr%C3%A9_Rocha",
      instagram: "https://instagram.com/andrerocha.brasil/",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Men's Javelin Throw - F57",
      titulo: "Cicero Valdiran Lins Nobre",
      foto: "img/cicero.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/C%C3%ADcero_Nobre",
      instagram: "https://instagram.com/cicero_nobre_f57",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Women's 100m - T11",
      titulo: "Lorena Silva Spoladore",
      foto: "img/lorena.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Lorena_Spoladore",
      instagram: "https://instagram.com/lorenaspoladore/",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Women's 100m - T36",
      titulo: "Veronica Hipolito",
      foto: "img/Verônica_Hipólito.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Ver%C3%B4nica_Hip%C3%B3lito",
      instagram: "https://instagram.com/vehipolito/",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Women's 400m - T47",
      titulo: "Maria Clara Augusto da Silva",
      foto: "img/maria_clara.jpg",
      linkWikipedia: "https://pt.wikipedia.org/wiki/Maria_Clara_Augusto",
      instagram: "https://instagram.com/clarinha.augusto/",
      medalhas: ["Medalha de Bronze"]
    },
    {
      esporte: "Women's Club Throw - F32",
      titulo: "Giovanna Boscolo Castilho Gonçalves",
      foto: "img/giovanna.jpg",
      linkWikipedia: "https://en.wikipedia.org/wiki/Giovanna_Boscolo",
      instagram: "https://instagram.com/andreaelizaboscolo",
      medalhas: ["Medalha de Bronze"]
    }
];*/



   
    



let dados = [
  {
    titulo: "Michael Phelps",
    descricao: "Michael Fred Phelps (1985) é um nadador profissional, conquistou trinta e sete recordes mundiais, incluindo o maior número de medalhas de ouro (oito) olímpicas em uma única edição.",
    img: "img/michael.jpg",
    link: "https://pt.wikipedia.org/wiki/Michael_Phelps"
  },
  
  {
    titulo: "Usain Bolt",
    esporte: "Women's Club Throw - F32",
    descricao: "Usain St. Leo Bolt (1986) é um ex-corredor jamaicano, considerado o homem mais rápido do mundo. É o recordista mundial nas provas de 100 metros e 200 metros rasos.",
    img: "img/usain.jpg",
    medalhas: "Medalha de Bronze",
    link: "https://pt.wikipedia.org/wiki/Usain_Bolt",
    instagram: "https://instagram.com/andreaelizaboscolo" 
  },
];
  


