(function getDataAPI() {
    let data = [];
    getData('https://api.myjson.com/bins/jdf4s')
        .then((data) => {
            response = data;

            loginButton = document.getElementById('loginButton');
            loginButton.onclick = function() {

                event.preventDefault();
                loginMail = document.getElementById("emailLogin");
                loginPass = document.getElementById("passwordLogin");

                if (data.find(user => user.email == loginMail.value)) {
                    let object = data.find(user => user.email == loginMail.value);
                    let index = data.indexOf(object);
                    if (data[index].password == loginPass.value) {
                        getPage('id_userpage');
                        localStorage.setItem("currentName", data[index].name);

                        userLoggedIn();
                    } else {
                        Swal.fire('Aceasta combinatie de user si parola nu exista');
                    }
                } else Swal.fire('Date incorecte');
            }
        });

})();

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return await response.json();
}


function userLoggedIn() {

    if (localStorage.getItem("currentName")) {
        userHello = document.getElementById('currentUser');
        userHello.innerHTML = localStorage.getItem("currentName");

        btnaut = document.getElementById("btn_autentificare");
        btnaut.innerHTML = 'Contul meu';
        btninr = document.getElementById("btn_inregistrare");
        btninr.innerHTML = 'Logout';


        btnaut.onclick = function() {
            getPage("id_userpage");
        };

        btninr.onlick = function() {
            console.log("delogare");
            localStorage.removeItem("lastname");
            console.log(localStorage.getItem("currentName") + "WTF");
            getPage("id_autentificare");
            btnaut.innerHTML = 'Autentificare';
            btnaut.onclick = function() { getPage("id_autentificare"); }
            btninr.innerHTML = 'Inregistrare';
            btninr.onclick = function() { getPage("id_inregistrare"); }
        };
    }

} //verifica daca exista cineva logat + schimba navbar dreapta sus