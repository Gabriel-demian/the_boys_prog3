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
    loadHTML('carrousel', 'carrousel.html');
    loadHTML('cartas', 'cartas.html');
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
