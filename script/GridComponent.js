let dog_grid = {
    title: 'Adoptii caini',
    text: 'Daca esti in cautarea micutului tau jucaus, ai ajuns in locul potrivit. Aici poti gasi multe sufletele care abia asteapta sa ajunga acasa si sa-si impartaseasca dragostea.',
    id: 'dogs'
};
let cat_grid = {
    title: 'Adoptii pisici',
    text: 'Daca esti in cautarea micutului tau pufos, ai ajuns in locul potrivit. Aici poti gasi multe sufletele care abia asteapta sa ajunga acasa si sa-si impartaseasca dragostea.',
    id: 'cats'
};
let donation_grid = {
    title: 'Donatii',
    text: 'Dam o mana de ajutor in cazul animalutelor bolnave sau lovite de masini, pentru tratamente si cazari la cabinetele veterinare. Vrei sa donezi? Contacteaza-ne!',
    id: 'donations'
};


function clearTiles() {
    let tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i += 1) {
        tiles[i].style.display = 'none';
    }
}

function generateGrid(grid_type, container_id) {
    let container = document.getElementById(container_id);
    container.innerHTML = getGrid(grid_type);
}

function getGrid(grid) {
    let content = `
        <div class="card" id="plswork">
            <h2 class="articleheader">${grid.title}</h2>
            <p class="articletext">${grid.text}</p>
            <br/>
            <select id="orderTiles">
                <option value=""  selected disabled hidden>Ordoneaza</option>
                <option value="numeCresc">Crescator dupa nume</option>
                <option value="numeDesc">Descrescator dupa nume</option>
            </select>
            <input id="orderButton" type="submit" value="Ordoneaza rezultatele">
            <div class="grid" id="${grid.id}">
            </div>
        </div>
    `;
    return content;
}