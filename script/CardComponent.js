let articles = [{
        title: 'Tricky, o pisicuta lipicioasa, are nevoie de stapan',
        text: 'Tricky este o pisicuta in varsta de 1 an si cateva luni, deparazitata, vaccinata si sterilizata. Am salvat-o din strada dupa ce aproape ca ne-a implorat sa o luam de acolo si, dupa ce a stat o perioada internata la o clinica veterinara, o prietena a paginii noastre s-a oferit sa o cazeze temporar. [...] ',
        img: 'images/tricky1.jpg',
        date: 'Bucuresti, 19 Feb, 2019',
        id: 'id_tricky'
    },
    {
        title: 'Catelusa Erica isi cauta un camin iubitor',
        text: 'Erica este o catelusa de un an si jumatate, vaccinata, deparazitata si microcipata. Pe cat este de mare, pe atat este de iubitoare, docila, blanda si inteligenta. Iubeste oamenii si este foarte sociabila cu alti catei. [...]',
        img: 'images/erica1.jpg',
        date: 'Bucuresti, 24 Oct, 2019',
        id: 'id_erica'
    },
    {
        title: 'Dora are nevoie de ajutorul vostru',
        text: 'Dora este un sufletel de nici trei luni care a trecut prin multe probleme la o varsta atat de frageda. Doamna care a gasit-o pe strada, intr-o stare deplorabila, a decis sa o pastreze, insa – pentru ca nu-si poate permite investigatiile si tratamentele de care pisicuta a avut si are in continuare nevoie – am decis sa preluam noi costurile.[...]',
        img: 'images/dora1.jpg',
        date: 'Pitesti, 13 Feb, 2019',
        id: 'id_dora'
    }
]

function clearCards() {
    let cards = document.getElementsByClassName('articlecard');
    for (let i = 0; i < cards.length; i += 1) {
        cards[i].style.display = 'none';
    }
}

function generateCards(articles) {
    clearCards();
    let div_card = document.getElementById('id_acasa');
    for (let i = 0; i < articles.length; i++) {
        div_card.innerHTML = div_card.innerHTML + getCard(articles[i]);
    }
}

function getCard(article) {
    let content = `
    <div class="articlecard">
        <h2 class="articleheader"><a class="link" onclick="getPage('${article.id}')">${article.title}</a></h2>
        <h5 class="articledate">${article.date}</h5>
        <div class="imgleft">
            <img src="${article.img}" alt="${article.id}">
            <div>
                <div class="overlay" onclick="getPage('${article.id}')">
                    <p>Citeste mai departe</p>
                </div>
            </div>
        </div>
        <div class="articletext">
            <p>${article.text}</p>
        </div>
    </div>
    `;
    return content;
}