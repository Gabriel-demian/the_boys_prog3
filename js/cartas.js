// Datos de las cartas
const cardData = {
    theBoys: [
        { 
            title: "Billy Butcher", 
            image: "images/cards/Card_Billy_Butcher.jpg", 
            description: "Después de la desaparición de su esposa, Becca, Butcher dedicó su vida a luchar contra Vought y sus Super corruptos, especialmente Homelander. Butcher cruzó una línea que nunca imaginó cuando tomó Temp V, una variante del Compound V que te da superpoderes por 24 horas, para poder llevar la pelea directamente a Homelander y Vought. Pero hacerlo tuvo un costo devastador: ahora tiene menos de un año de vida." 
        },
        { 
            title: "Annie January / Starlight", 
            image: "images/cards/Card_Starlight.jpg", 
            description: "Una ex-heroína de un pequeño pueblo que soñaba con unirse a Los Siete, Annie cumplió su deseo solo para ver de primera mano lo corruptos que Vought y sus Super realmente son. Intentó luchar contra esa corrupción desde dentro de Vought, pero pronto se dio cuenta de que era imposible. Renunció públicamente a Los Siete y se unió a su novio, Hughie, como miembro oficial de Los Muchachos." 
        },
        { 
            title: "Kimiko", 
            image: "images/cards/Card_Kimiko.jpg", 
            description: "Kimiko fue secuestrada de niña y obligada a ser una niña soldado, una experiencia que la dejó muda. Después de ser inyectada a la fuerza con Compound V por el grupo terrorista Shining Light, se convirtió en una poderosa Supe con la capacidad de curarse rápidamente de incluso las heridas más extremas. Después de ser golpeada por la explosión radioactiva de Soldier Boy y perder sus superpoderes por ello, Kimiko al principio estaba encantada de ser una humana normal." 
        },
        { 
            title: "MothersMilk", 
            image: "images/cards/Card_MothersMilk.jpg", 
            description: "Exmarine y brillante táctico, Butcher depende de M.M. para llevar a cabo los planes y mantener al equipo unido. M.M. ha odiado a los Super desde una edad temprana, después de que Soldier Boy matara a varios miembros de su familia. Ese trauma ahora se manifiesta como un comportamiento obsesivo-compulsivo y una diligencia que resulta valiosa en la lucha contra Vought." 
        },
        {
            title: "Frenchie",
            image: "images/cards/Card_frenchie.png",
            description: "Frenchie es el hombre orquesta de The Boys, con habilidades en armas, explosivos, química y más."
        },
        {
            title: "Hughie Campbell",
            image: "images/cards/Card_Hughie_Campbell.jpg",
            description: "Hughie se unió a la cruzada de Butcher y The Boys contra sus antiguos héroes después de que su novia, Robin, fuera asesinada por uno de ellos."
        },
        {
            title: "Joe Kessler",
            image: "images/cards/Card_Joe_Kessler.jpg",
            description: "Como Oficial de Operaciones de la CIA y veterano de la Guerra contra el Terrorismo, su pasado se remonta a mucho tiempo atrás. Ahora, está presionando a Butcher para que llegue aún más lejos en su guerra contra Homelanderantes de que sea demasiado tarde."
        }
    ],
    theSeven: [
        { 
            title: "Homelander", 
            image: "images/cards/Card_Homelander.jpg", 
            description: "El Supe más poderoso de la Tierra y el líder de Los Siete, el principal equipo de superhéroes del mundo, Homelander posee una gama de poderes que incluye superfuerza, vuelo y la capacidad de disparar rayos láser desde sus ojos. Pero detrás de la máscara heroica se encuentra un hombre profundamente perturbado e inestable que se considera un dios, superior a los humanos y a todos los demás Super." 
        },
        { 
            title: "Firecracker", 
            image: "images/cards/Card_Firecracker.jpg", 
            description: "También se une a Los Siete Firecracker, una Supe de Daytona Beach, Florida, con una venganza personal contra Starlight." },
        { 
            title: "Black Noir", 
            image: "images/cards/Card_Black_Noir.jpg", 
            description: "Un maestro del sigilo, Black Noir es un Supe con una larga historia en Vought. Anteriormente miembro del equipo de superhéroes de Soldier Boy, Payback, desde entonces se ha unido a Los Siete y se ha convertido en uno de los confidentes más cercanos de Homelander." 
        },
        {
            title: "The Deep",
            image: "images/cards/Card_The_Deep.jpg",
            description: "The Deep es el Supe acuático de Los Siete, con súper fuerza, branquias y la habilidad de comunicarse con las criaturas marinas. Fue expulsado de Los Siete cuando Starlight lo acusó públicamente de agresión sexual y desde entonces ha hecho todo lo posible por demostrar su lealtad a Homelander."
        },
        {
            title: "Sister Sage",
            image: "images/cards/Card_Sister_Sage.jpg",
            description: "Conocida por ser la persona más inteligente del planeta, Sister Sage es una Supe de Detroit, Michigan, que es la siguiente en la fila para unirse a Los Siete."
        },
        {
            title: "A-Train",
            image: "images/cards/Card_A-Train.jpg",
            description: "Miembro de Los Siete y el hombre más rápido del mundo, A-Train ha sido un fiel seguidor de Homelander."
        }
    ],
    vought: [
        { 
            title: "Ashley Barrett", 
            image: "images/cards/Card_Ashley_Barrett.jpg", 
            description: "Originalmente publicista de Vought, Ashley escaló rápidamente en la jerarquía corporativa para convertirse en CEO de la empresa. Sin embargo, recibió su ascenso después de que Homelander asesinara a su predecesora, Madelyn Stillwell, y recomendara a Ashley para el puesto. Aterrorizada por Homelander, Ashley ha sido leal hasta el extremo." 

        },
        { 
            title: "Ryan Butcher", 
            image: "images/cards/Card_Ryan_Butcher.jpg", 
            description: "Ryan es el hijo de Homelander y el primer Supe nacido naturalmente, con poderes que igualan a los de su padre. Después de matar accidentalmente a su madre y esposa de Butcher, Becca, Ryan fue acogido por Grace Mallory para ser criado bajo protección de la CIA. Pero tras distanciarse de Butcher, eligió ocupar su lugar al lado de su padre." 
        }
    ],
    electoralCandidates: [
        { 
            title: "Victoria Neuman", 
            image: "images/cards/Card_Victoria_Neuman.jpg", 
            description: "Victoria Neuman es una política en ascenso que fundó la Oficina Federal de Asuntos Superhumanos para responsabilizar a los Super por sus acciones. Victoria y Hughie se hicieron amigos cercanos mientras trabajaban juntos en la OFAS durante un año... hasta que Hughie descubrió que Neuman era la misteriosa Super que hacía explotar cabezas y fue responsable del ataque al Congreso." 
        },
        { 
            title: "Robert Singer", 
            image: "images/cards/Card_Robert_Singer.jpg", 
            description: "Anteriormente el curtido Secretario de Defensa con rencor hacia Vought, 'Dakota Bob' Singer recientemente anunció su candidatura para Presidente de los Estados Unidos. Pero al seleccionar a Victoria Neuman como su compañera de fórmula, sin saberlo, puso en peligro mortal tanto a sí mismo como al país." 
        }
    ]
};

// Función para crear las cartas
function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.style.width = '18rem';

    const imgElement = document.createElement('img');
    imgElement.src = card.image;
    imgElement.className = 'card-img-top';
    imgElement.alt = `Foto de ${card.title}`;

    const cardBodyElement = document.createElement('div');
    cardBodyElement.className = 'card-body';

    const cardTitleElement = document.createElement('h5');
    cardTitleElement.className = 'card-title';
    cardTitleElement.innerText = card.title;

    const cardTextElement = document.createElement('p');
    cardTextElement.className = 'card-text';
    cardTextElement.innerText = card.description;

    cardBodyElement.appendChild(cardTitleElement);
    cardBodyElement.appendChild(cardTextElement);
    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBodyElement);

    return cardElement;
}

// Función para cargar las cartas en el contenedor adecuado
function loadCards(sectionId, cards) {
    const section = document.getElementById(sectionId);
    section.innerHTML = ''; // Limpiar las cartas anteriores
    cards.forEach(card => {
        const cardElement = createCard(card);
        section.appendChild(cardElement);
    });
}

// Función para manejar el clic en los botones de cartas
function handleCardsButtonClick(activeButtonId, activeCardsId) {
    // Obtener todos los contenedores de cartas
    const cardContainers = document.querySelectorAll('.cards-carousel');
    // Ocultar todos los contenedores de cartas
    cardContainers.forEach(container => container.classList.add('hidden'));
    // Mostrar el contenedor de cartas activo
    document.getElementById(activeCardsId).classList.remove('hidden');

    // Obtener todos los botones de cartas
    const cardButtons = document.querySelectorAll('.cards_btn');
    // Remover la clase 'active' de todos los botones
    cardButtons.forEach(button => button.classList.remove('active'));
    // Agregar la clase 'active' al botón seleccionado
    document.getElementById(activeButtonId).classList.add('active');
}

// Asignar eventos a los botones de cartas
document.getElementById('Boton_theBoys_Cards').addEventListener('click', () => {
    handleCardsButtonClick('Boton_theBoys_Cards', 'BoysCards');
    loadCards('BoysCards', cardData.theBoys);
});

document.getElementById('Boton_Seven_Cards').addEventListener('click', () => {
    handleCardsButtonClick('Boton_Seven_Cards', 'SevenCards');
    loadCards('SevenCards', cardData.theSeven);
});

document.getElementById('Boton_Vought_Cards').addEventListener('click', () => {
    handleCardsButtonClick('Boton_Vought_Cards', 'voughtCards');
    loadCards('voughtCards', cardData.vought);
});

document.getElementById('Boton_Candidates_Cards').addEventListener('click', () => {
    handleCardsButtonClick('Boton_Candidates_Cards', 'electoralCandidatesCards');
    loadCards('electoralCandidatesCards', cardData.electoralCandidates);
});

// Cargar las cartas de 'The Boys' por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    handleCardsButtonClick('Boton_theBoys_Cards', 'BoysCards');
    loadCards('BoysCards', cardData.theBoys);
});
