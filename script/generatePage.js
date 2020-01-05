function clearColumns() {
    let elems = document.getElementsByClassName('leftcolumn');
    for (let i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
    document.getElementById('container2').style.display = 'none';
    document.getElementById('rightcolumn').style.display = 'block';
    document.getElementById('slider').style.display = 'none';
}

function getPage(page = 'id_'.concat(location.hash.replace('#', ''))) {

    clearColumns();
    switch (page) {
        case 'id_acasa':
            document.getElementById('container2').style.display = 'block';
            generateCards(articles);
            break;
        case 'id_despre-noi':
            break;
        case 'id_adoptii-pisici':
            generateGrid(cat_grid, page);
            generateTiles(cat_adoption, cat_grid.id);
            document.getElementById("orderButton").addEventListener("click", function() {
                sortTiles(cat_adoption, cat_grid)
            });
            break;
        case 'id_adoptii-caini':
            generateGrid(dog_grid, page);
            generateTiles(dog_adoption, dog_grid.id);
            document.getElementById("orderButton").addEventListener("click", function() {
                sortTiles(dog_adoption, dog_grid)
            });
            break;
        case 'id_alte-anunturi':
            let animatie = document.getElementById("container1");
            setInterval(function() {
                animatie.style.display = "block";
            }, 1000);
            break;
        case 'id_donatii':
            generateGrid(donation_grid, page);
            generateTiles(animal_donations, donation_grid.id);
            document.getElementById("orderButton").addEventListener("click", function() {
                sortTiles(animal_donations, donation_grid)
            });
            break;
        case 'id_contact':
            break;
        case 'id_autentificare':
            document.getElementById('rightcolumn').style.display = 'none';
            break;
        case 'id_inregistrare':
            document.getElementById('rightcolumn').style.display = 'none';
            validateForm();
            break;
        case 'id_userpage':
            document.getElementById('rightcolumn').style.display = 'none';
            break;
        case 'id_tricky':
            document.getElementById('rightcolumn').style.display = 'none';
            document.getElementById('slider').style.display = 'block';
            break;
        default:
            page = 'id_acasa';
            document.getElementById('container2').style.display = 'block';
            generateCards(articles);
    }
    location.hash = page.replace('id_', '');
    document.getElementById(page).style.display = 'block';
    document.title = page.replace('id_', '').replace('-', ' ') + ' | AdoptDontShop';
    window.scrollTo(0, 0);

}