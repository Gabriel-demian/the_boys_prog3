// Función para manejar el clic en los botones de cartas
function handleCardsButtonClick(activeButtonId, activeCardsId) {
    // Obtener todos los IDs de las secciones de cartas
    const cardsIds = ['BoysCards', 'SevenCards', 'voughtCards', 'electoralCandidatesCards'];

    // Iterar sobre todos los IDs de las secciones de cartas
    cardsIds.forEach(id => {
        // Mostrar la sección de cartas activa y ocultar las demás
        if (id === activeCardsId) {
            document.getElementById(id).classList.remove('hidden');
        } else {
            document.getElementById(id).classList.add('hidden');
        }
    });

    // Remover la clase 'active' de todos los botones de cartas
    const buttonIds = ['Boton_theBoys_Cards', 'Boton_Seven_Cards', 'Boton_Vought_Cards', 'Boton_Candidates_Cards'];
    buttonIds.forEach(id => {
        if (id !== activeButtonId) {
            document.getElementById(id).classList.remove('active');
        }
    });

    // Agregar la clase 'active' al botón de carta seleccionado
    document.getElementById(activeButtonId).classList.add('active');
}

// Asignar el evento de clic a cada botón de cartas cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Boton_theBoys_Cards').addEventListener('click', function () {
        handleCardsButtonClick('Boton_theBoys_Cards', 'BoysCards');
    });

    document.getElementById('Boton_Seven_Cards').addEventListener('click', function () {
        handleCardsButtonClick('Boton_Seven_Cards', 'SevenCards');
    });

    document.getElementById('Boton_Vought_Cards').addEventListener('click', function () {
        handleCardsButtonClick('Boton_Vought_Cards', 'voughtCards');
    });

    document.getElementById('Boton_Candidates_Cards').addEventListener('click', function () {
        handleCardsButtonClick('Boton_Candidates_Cards', 'electoralCandidatesCards');
    });
});

/************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('BoysCards').addEventListener('click', function () {
        console.log('laCartaButcher clickeado');
    });
});
