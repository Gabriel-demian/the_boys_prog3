const carouselBoysData = [
    {
        src: "images/characters/Billy_Butcher.png",
        alt: "Foto de Billy Butcher",
        logo: "images/black_logo.png",
        title: "Billy Butcher",
        description: "Después de la desaparición de su esposa, Becca, Butcher dedicó su vida a luchar contra Vought y sus Super corruptos, especialmente Homelander. Butcher cruzó una línea que nunca imaginó cuando tomó Temp V, una variante del Compound V que te da superpoderes por 24 horas, para poder llevar la pelea directamente a Homelander y Vought. Pero hacerlo tuvo un costo devastador: ahora tiene menos de un año de vida.",
        interval: 10000
    },
    {
        src: "images/characters/Annie_January.png",
        alt: "Foto de Annie January",
        logo: "images/black_logo.png",
        title: "Annie January / Starlight",
        description: "Una ex-heroína de un pequeño pueblo que soñaba con unirse a Los Siete, Annie cumplió su deseo solo para ver de primera mano lo corruptos que Vought y sus Super realmente son. Intentó luchar contra esa corrupción desde dentro de Vought, pero pronto se dio cuenta de que era imposible. Renunció públicamente a Los Siete y se unió a su novio, Hughie, como miembro oficial de Los Muchachos.",
        interval: 2000
    },
    {
        src: "images/characters/Kimiko.png",
        alt: "Foto de Kimiko",
        logo: "images/black_logo.png",
        title: "Kimiko",
        description: "Kimiko fue secuestrada de niña y obligada a ser una niña soldado, una experiencia que la dejó muda. Después de ser inyectada a la fuerza con Compound V por el grupo terrorista Shining Light, se convirtió en una poderosa Supe con la capacidad de curarse rápidamente de incluso las heridas más extremas. Después de ser golpeada por la explosión radioactiva de Soldier Boy y perder sus superpoderes por ello, Kimiko al principio estaba encantada de ser una humana normal.",
        interval: 10000
    },
    {
        src: "images/characters/MothersMilk.png",
        alt: "Foto de MothersMilk",
        logo: "images/black_logo.png",
        title: "MothersMilk",
        description: "Exmarine y brillante táctico, Butcher depende de M.M. para llevar a cabo los planes y mantener al equipo unido. M.M. ha odiado a los Super desde una edad temprana, después de que Soldier Boy matara a varios miembros de su familia. Ese trauma ahora se manifiesta como un comportamiento obsesivo-compulsivo y una diligencia que resulta valiosa en la lucha contra Vought.",
        interval: 10000
    }
];

const carouselSevenData = [
    {
        src: "images/characters/Homelander.png",
        alt: "Foto de Homelander",
        logo: "images/seven_logo.png",
        title: "Homelander",
        description: "El Supe más poderoso de la Tierra y el líder de Los Siete, el principal equipo de superhéroes del mundo, Homelander posee una gama de poderes que incluye superfuerza, vuelo y la capacidad de disparar rayos láser desde sus ojos. Pero detrás de la máscara heroica se encuentra un hombre profundamente perturbado e inestable que se considera un dios, superior a los humanos y a todos los demás Super.",
        interval: 10000
    },
    {
        src: "images/characters/Firecracker.png",
        alt: "Foto de Firecracker",
        logo: "images/seven_logo.png",
        title: "Firecracker",
        description: "También se une a Los Siete Firecracker, una Supe de Daytona Beach, Florida, con una venganza personal contra Starlight.",
        interval: 10000
    },
    {
        src: "images/characters/Black_Noir.png",
        alt: "Foto de Black Noir",
        logo: "images/seven_logo.png",
        title: "Black Noir",
        description: "Un maestro del sigilo, Black Noir es un Supe con una larga historia en Vought. Anteriormente miembro del equipo de superhéroes de Soldier Boy, Payback, desde entonces se ha unido a Los Siete y se ha convertido en uno de los confidentes más cercanos de Homelander.",
        interval: 10000
    }
];

const carouselVoughtData = [
    {
        src: "images/characters/Ashley.png",
        alt: "Foto de Ashley",
        logo: "images/vought_logo.png",
        title: "Ashley",
        description: "Originalmente publicista de Vought, Ashley escaló rápidamente en la jerarquía corporativa para convertirse en CEO de la empresa. Sin embargo, recibió su ascenso después de que Homelander asesinara a su predecesora, Madelyn Stillwell, y recomendara a Ashley para el puesto. Aterrorizada por Homelander, Ashley ha sido leal hasta el extremo.",
        interval: 10000
    },
    {
        src: "images/characters/Ryan.png",
        alt: "Foto de Ryan",
        logo: "images/vought_logo.png",
        title: "Ryan",
        description: "Ryan es el hijo de Homelander y el primer Supe nacido naturalmente, con poderes que igualan a los de su padre. Después de matar accidentalmente a su madre y esposa de Butcher, Becca, Ryan fue acogido por Grace Mallory para ser criado bajo protección de la CIA. Pero tras distanciarse de Butcher, eligió ocupar su lugar al lado de su padre.",
        interval: 10000
    }
];

const carouselElectoralData = [
    {
        src: "images/characters/Victoria_Neuman.png",
        alt: "Foto de Victoria Neuman",
        logo: "images/gob.png",
        title: "Victoria Neuman",
        description: "Victoria Neuman es una política en ascenso que fundó la Oficina Federal de Asuntos Superhumanos para responsabilizar a los Super por sus acciones. Victoria y Hughie se hicieron amigos cercanos mientras trabajaban juntos en la OFAS durante un año... hasta que Hughie descubrió que Neuman era la misteriosa Super que hacía explotar cabezas y fue responsable del ataque al Congreso.",
        interval: 10000
    },
    {
        src: "images/characters/Robert_Singer.png",
        alt: "Foto de Robert Singer",
        logo: "images/gob.png",
        title: "Robert Singer",
        description: "Anteriormente el curtido Secretario de Defensa con rencor hacia Vought, 'Dakota Bob' Singer recientemente anunció su candidatura para Presidente de los Estados Unidos. Pero al seleccionar a Victoria Neuman como su compañera de fórmula, sin saberlo, puso en peligro mortal tanto a sí mismo como al país.",
        interval: 10000
    }
];
  
  document.addEventListener("DOMContentLoaded", function() {
    const carousels = [
        { id: 'carouselTheBoys', data: carouselBoysData, innerClass: 'carousel-inner', indicatorsQuery: '.carousel-indicators', logoClass: 'character_logo_boys' },
        { id: 'carouselTheSeven', data: carouselSevenData, innerClass: 'carousel-carouselTheSeven', indicatorsQuery: '#carouselTheSeven .carousel-indicators', logoClass: 'character_logo_seven' },
        { id: 'carouselVought', data: carouselVoughtData, innerClass: 'carousel-carouselVought', indicatorsQuery: '#carouselVought .carousel-indicators', logoClass: 'character_logo_seven' },
        { id: 'carouselElectoral', data: carouselElectoralData, innerClass: 'carousel-carouselElectoral', indicatorsQuery: '#carouselElectoral .carousel-indicators', logoClass: 'character_logo_seven' }
    ];

    carousels.forEach(carousel => {
        const carouselInner = document.querySelector(`.${carousel.innerClass}`);
        const carouselIndicators = document.querySelector(carousel.indicatorsQuery);

        carousel.data.forEach((item, index) => {
            // Crear indicador
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.dataset.bsTarget = `#${carousel.id}`;
            indicator.dataset.bsSlideTo = index;
            indicator.ariaLabel = `Slide ${index + 1}`;
            if (index === 0) {
                indicator.classList.add('active');
                indicator.ariaCurrent = 'true';
            }
            carouselIndicators.appendChild(indicator);

            // Crear item del carrusel
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active');
            carouselItem.dataset.bsInterval = item.interval;

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            img.classList.add('d-block', 'w-20', 'h-20', 'heroes');

            const logoDiv = document.createElement('div');
            const logo = document.createElement('img');
            logo.src = item.logo;
            logo.alt = 'The Seven logo';
            logo.classList.add(carousel.logoClass);
            logoDiv.appendChild(logo);

            const captionDiv = document.createElement('div');
            captionDiv.classList.add('carousel-caption', 'd-none', 'd-md-block');

            const title = document.createElement('h5');
            title.classList.add('text-white');
            title.textContent = item.title;

            const description = document.createElement('p');
            description.classList.add('text-white');
            description.textContent = item.description;

            captionDiv.appendChild(title);
            captionDiv.appendChild(description);

            carouselItem.appendChild(img);
            carouselItem.appendChild(logoDiv);
            carouselItem.appendChild(captionDiv);

            carouselInner.appendChild(carouselItem);
        });
    });
});
