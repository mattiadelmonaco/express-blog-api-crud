const posts = [
  {
    id: 1,
    title: "Il segreto del perfetto Ciambellone",
    author: "Luca Moretti",
    content:
      "Un dolce classico della tradizione, semplice da preparare ma sempre delizioso. Scopri la ricetta per un ciambellone soffice e profumato.",
    image: "http://localhost:3000/images/ciambellone.jpeg",
    tags: "dolci, tradizione, ciambellone, ricette facili",
    category: "Dolce",
    available: true,
    recipe: {
      ingredients: [
        "250g di farina",
        "200g di zucchero",
        "3 uova",
        "100ml di latte",
        "100ml di olio di semi",
        "1 bustina di lievito per dolci",
        "Scorza di limone grattugiata",
      ],
      instructions: [
        "Preriscalda il forno a 180°C.",
        "Monta le uova con lo zucchero fino a ottenere un composto spumoso.",
        "Aggiungi l'olio e il latte, mescolando bene.",
        "Incorpora la farina e il lievito setacciati, aggiungendo la scorza di limone.",
        "Versa il composto in uno stampo imburrato e infarinato.",
        "Cuoci per circa 40 minuti, controllando la cottura con uno stecchino.",
      ],
    },
  },
  {
    id: 2,
    title: "Cracker alla Barbabietola: salute e gusto",
    author: "Giulia Rinaldi",
    content:
      "Un'idea originale e sana per uno snack croccante e colorato. Ecco come preparare dei cracker alla barbabietola fatti in casa.",
    image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
    tags: "snack, barbabietola, healthy, ricette vegane",
    category: "Snack",
    available: true,
    recipe: {
      ingredients: [
        "200g di farina integrale",
        "100g di purea di barbabietola",
        "50ml di olio d'oliva",
        "1 cucchiaino di sale",
        "1/2 cucchiaino di bicarbonato",
        "Acqua q.b.",
      ],
      instructions: [
        "Mescola farina, sale e bicarbonato in una ciotola.",
        "Aggiungi la purea di barbabietola e l'olio, amalgamando il tutto.",
        "Versa poca acqua per ottenere un impasto compatto e omogeneo.",
        "Stendi l'impasto sottile e ritaglia i cracker.",
        "Inforna a 180°C per circa 15-20 minuti fino a doratura.",
      ],
    },
  },
  {
    id: 3,
    title: "Pane Fritto Dolce: la bontà che stupisce",
    author: "Federico Bianchi",
    content:
      "Un piatto sorprendente, croccante all'esterno e morbido dentro. Perfetto per la colazione o uno sfizio pomeridiano.",
    image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
    tags: "pane, dolci fritti, colazione, sfiziosità",
    category: "Dolce",
    available: true,
    recipe: {
      ingredients: [
        "4 fette di pane",
        "2 uova",
        "100ml di latte",
        "50g di zucchero",
        "Cannella q.b.",
        "Olio per friggere",
      ],
      instructions: [
        "Sbatti le uova con il latte e lo zucchero.",
        "Immergi le fette di pane nel composto.",
        "Scalda l'olio in padella e friggi il pane fino a doratura.",
        "Scola su carta assorbente e spolvera con cannella e zucchero.",
      ],
    },
  },
  {
    id: 4,
    title: "Pasta alla Barbabietola: un'esplosione di colori",
    author: "Elena De Santis",
    content:
      "Trasforma un piatto tradizionale con l'aggiunta del colore vibrante della barbabietola. Una ricetta semplice e scenografica.",
    image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
    tags: "pasta, barbabietola, vegetariano, creativo",
    category: "Pasta",
    available: true,
    recipe: {
      ingredients: [
        "250g di pasta",
        "100g di barbabietola cotta",
        "50g di formaggio spalmabile",
        "1 spicchio d'aglio",
        "Olio d'oliva q.b.",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Cuoci la pasta in acqua salata.",
        "Frulla la barbabietola con il formaggio e l'aglio.",
        "Scola la pasta e condiscila con la crema di barbabietola.",
        "Aggiungi un filo d'olio e pepe a piacere.",
      ],
    },
  },
  {
    id: 5,
    title: "Torta Paesana: sapori di una volta",
    author: "Matteo Ferraro",
    content:
      "Un dolce della tradizione lombarda che celebra i sapori genuini di una volta. Ecco la ricetta passo passo.",
    image: "http://localhost:3000/images/torta_paesana.jpeg",
    tags: "dolci, tradizione, torta paesana, Lombardia",
    category: "Dolce",
    available: true,
    recipe: {
      ingredients: [
        "300g di pane raffermo",
        "500ml di latte",
        "100g di cacao amaro",
        "150g di zucchero",
        "2 uova",
        "50g di uvetta",
        "50g di pinoli",
      ],
      instructions: [
        "Metti il pane a bagno nel latte caldo e lascialo ammorbidire.",
        "Aggiungi cacao, zucchero, uova, uvetta e pinoli e mescola bene.",
        "Versa il composto in una teglia imburrata.",
        "Cuoci in forno a 180°C per circa 45 minuti.",
        "Lascia raffreddare prima di servire.",
      ],
    },
  },
];

// exports
module.exports = posts;
