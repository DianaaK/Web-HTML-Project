let dog_adoption = [{
        link: 'http://www.cutu-cutu.ro/content/fabiosa-metis-ciobanesc',
        title: 'Fabiosa',
        img: 'images/caini1.jpeg',
        date: 'Bucuresti, 23 Oct, 2019'
    },
    {
        link: 'http://www.cutu-cutu.ro/content/bebelina',
        title: 'Bebelina',
        img: 'images/caini2.jpg',
        date: 'Bucuresti, 21 Oct, 2019'
    },
    {
        link: 'http://www.cutu-cutu.ro/content/dati-ne-o-sansa',
        title: 'Catelusa',
        img: 'images/caini3.jpg',
        date: 'Galati, 20 Oct, 2019'
    },
    {
        link: 'http://www.cutu-cutu.ro/content/meri-si-tavi-se-pregatesc-pentru-tine',
        title: 'Meri si Tavi',
        img: 'images/caini4.jpg',
        date: 'Bucuresti, 19 Oct, 2019'
    },
    {
        link: 'http://www.cutu-cutu.ro/content/cateluse-jucause-si-iubitoare',
        title: 'Catelusi',
        img: 'images/caini5.jpg',
        date: 'Iasi, 14 Oct, 2019'
    }
]

dog_adoption.push({
    link: 'https://www.adoptiicaini.ro/erica-blanda-docila-iubitoare/',
    title: 'Erica',
    img: 'images/erica2.jpg',
    date: 'Bucuresti, 24 Oct, 2019'
});

dog_adoption.pop();

let cat_adoption = [{
        link: 'http://pisicipecreier.ro/2019/02/19/tricky-o-pisicuta-lipicioasa-are-nevoie-de-adoptie/',
        title: 'Tricky',
        img: 'images/pisici6.jpg',
        date: 'Bucuresti, 19 Feb, 2019'
    },
    {
        link: 'https://cupisici.ro/advert/metis-british/',
        title: 'Eroina',
        img: 'images/pisici1.jpg',
        date: 'Bucuresti, 5 Nov, 2019'
    },
    {
        link: 'https://cupisici.ro/advert/motanel-de-6-luni/',
        title: 'Motanel',
        img: 'images/pisici2.jpg',
        date: 'Bucuresti, 21 Oct, 2019'
    },
    {
        link: 'https://cupisici.ro/advert/pisicuta-de-6-luni-3/',
        title: 'Barbi',
        img: 'images/pisici3.jpg',
        date: 'Bucuresti, 1 Nov, 2019'
    },
    {
        link: 'https://cupisici.ro/advert/adoptie-pui-pisica-3/',
        title: 'Pisicuta',
        img: 'images/pisici4.jpg',
        date: 'Bucuresti, 6 Nov, 2019'
    },
    {
        link: 'https://cupisici.ro/advert/motan-roscat-castrat/',
        title: 'Lamaita',
        img: 'images/pisici5.jpeg',
        date: 'Bucuresti, 5 Nov, 2019'
    }
]

let animal_donations = [{
        link: 'http://pisicipecreier.ro/2019/02/13/dora-are-nevoie-de-ajutorul-vostru/',
        title: 'Dora are nevoie de ajutorul vostru',
        img: 'images/dora2.jpg',
        date: 'Pitesti, 13 Feb, 2019'
    },
    {
        link: 'http://pisicipecreier.ro/2019/02/19/doua-ghemotoace-au-nevoie-de-ajutor/',
        title: 'Doua ghemotoace au nevoie de ajutor',
        img: 'images/ghemotoace.jpg',
        date: 'Bucuresti, 19 Feb, 2019'
    }
]

function clearTiles() {
    let tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i += 1) {
        tiles[i].style.display = 'none';
    }
}

function getTile(article) {
    let content = `
        <div class="zoom tile">
            <a class="link" href="${article.link}" target="_blank">
                <img class="imggrid" src="${article.img}" alt="${article.title}">
                <h5 class="gridtitle">${article.title}</h5>
                <p class="griddate">${article.date}</p>
            </a>
        </div>
    `;
    return content;
}

function generateTiles(articles, container_id) {
    clearTiles();
    let container = document.getElementById(container_id);
    for (let i = 0; i < articles.length; i++) {
        container.innerHTML = container.innerHTML + getTile(articles[i]);
    }
}


function sortTiles(animalArray, grid_type) {
    function compareName(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }

    let sortSelect = document.getElementById("orderTiles");
    let sortType = sortSelect.options[sortSelect.selectedIndex].value;
    switch (sortType) {
        case "numeDesc":
            animalArray.sort(compareName);
            animalArray.reverse();
            break;
        case "numeCresc":
            animalArray.sort(compareName);
            break;
    }
    generateTiles(animalArray, grid_type.id);

}