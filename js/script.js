// Función para cargar un archivo HTML en un contenedor específico
function loadHTML(containerId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            if (containerId === 'header') {
                // Asegura que el script de navegación funcione después de cargar el header
                var script = document.createElement('script');
                script.innerHTML = `function myFunction() {
                    var x = document.getElementById("menu_bar");
                    if (x.className === "") {
                        x.className += " responsive";
                    } else {
                        x.className = "";
                    }
                }`;
                document.getElementById(containerId).appendChild(script);
            }
        })
        .catch(error => console.error('Error al cargar el archivo HTML:', error));
}

// Cargar el header y el footer
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});

/******************************************************************************************************/

function myFunction() {
    var x = document.getElementById("menu_bar");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}

function myFunction() {
    var icon = document.querySelector('.icon');
    var nav = document.querySelector('nav ul');
    icon.classList.toggle('active');
    nav.classList.toggle('active');
}

/******************************************************************************************************/
/********************************* BOTONES CARROUSEL *********************************/
function handleButtonClick(activeButtonId, activeCarouselId) {
    // Ocultar todos los carousels
    const carouselIds = ['carouselTheBoys', 'carouselTheSeven', 'carouselVought', 'carouselElectoral'];
    carouselIds.forEach(id => {
        if (id !== activeCarouselId) {
            document.getElementById(id).classList.add('hidden');
        }
    });

    // Remover la clase 'active' de todos los botones
    const buttonIds = ['theBoys', 'theSeven', 'vought', 'electoralCandidates'];
    buttonIds.forEach(id => {
        if (id !== activeButtonId) {
            document.getElementById(id).classList.remove('active');
        }
    });

    // Mostrar el carousel activo y marcar el botón como activo
    document.getElementById(activeCarouselId).classList.remove('hidden');
    document.getElementById(activeButtonId).classList.add('active');
}


// Asignar el evento de clic a cada botón
document.getElementById('theBoys').addEventListener('click', function () {
    handleButtonClick('theBoys', 'carouselTheBoys');
});

document.getElementById('theSeven').addEventListener('click', function () {
    handleButtonClick('theSeven', 'carouselTheSeven');
});

document.getElementById('vought').addEventListener('click', function () {
    handleButtonClick('vought', 'carouselVought');
});

document.getElementById('electoralCandidates').addEventListener('click', function () {
    handleButtonClick('electoralCandidates', 'carouselElectoral');
});
/******************************************************************************************************/

document.getElementById('electoralCandidates').addEventListener('click', function () {
    console.log('Botón Electoral clickeado');
});