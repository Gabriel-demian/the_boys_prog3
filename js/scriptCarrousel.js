const carouselData = [
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
  

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselIndicators = document.querySelector('.carousel-indicators');

    carouselData.forEach((item, index) => {
      // Crear indicador
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#carouselTheBoys';
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
      logo.alt = 'The Boys logo';
      logo.classList.add('character_logo_boys');
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