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


document.getElementById('theSeven').addEventListener('click', function () {
    document.getElementById('carouselTheSeven').classList.remove('hidden');
    document.getElementById('carouselTheBoys').classList.add('hidden');
    document.getElementById('carouselVought').classList.add('hidden');
    document.getElementById('carouselElectoral').classList.add('hidden');

    document.getElementById('theSeven').classList.add('active');
    document.getElementById('theBoys').classList.remove('active');
    document.getElementById('vought').classList.remove('active');
    document.getElementById('electoralCandidates').classList.remove('active');
    document.getElementById('carouselElectoral').classList.remove('active');
});

document.getElementById('theBoys').addEventListener('click', function () {
    document.getElementById('carouselTheBoys').classList.remove('hidden');
    document.getElementById('carouselTheSeven').classList.add('hidden');
    document.getElementById('carouselVought').classList.add('hidden');
    document.getElementById('carouselElectoral').classList.add('hidden');

    document.getElementById('theBoys').classList.add('active');
    document.getElementById('theSeven').classList.remove('active');
    document.getElementById('vought').classList.remove('active');
    document.getElementById('electoralCandidates').classList.remove('active');
    document.getElementById('carouselElectoral').classList.remove('active');
});

document.getElementById('vought').addEventListener('click', function () {
    document.getElementById('carouselVought').classList.remove('hidden');
    document.getElementById('carouselTheBoys').classList.add('hidden');
    document.getElementById('carouselTheSeven').classList.add('hidden');
    document.getElementById('carouselElectoral').classList.add('hidden');

    document.getElementById('vought').classList.add('active');
    document.getElementById('theBoys').classList.remove('active');
    document.getElementById('theSeven').classList.remove('active');
    document.getElementById('electoralCandidates').classList.remove('active');
    document.getElementById('carouselElectoral').classList.remove('active');
});

document.getElementById('electoralCandidates').addEventListener('click', function () {
    document.getElementById('carouselElectoral').classList.remove('hidden');
    document.getElementById('carouselTheBoys').classList.add('hidden');
    document.getElementById('carouselTheSeven').classList.add('hidden');
    document.getElementById('carouselVought').classList.add('hidden');

    document.getElementById('electoralCandidates').classList.add('active');
    document.getElementById('theBoys').classList.remove('active');
    document.getElementById('theSeven').classList.remove('active');
    document.getElementById('vought').classList.remove('active');
});


function myFunction() {
    var x = document.getElementById("menu_bar");
    if (x.className === "") {
      x.className += " responsive";
    } else {
      x.className = "";
    }
  }