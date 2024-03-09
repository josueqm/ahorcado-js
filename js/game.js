// Defino palabras disponibles para el juego
const palabras = [
    {
        palabra: 'Eslovenia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EU-Slovenia.svg/435px-EU-Slovenia.svg.png',
        description: "Eslovenia, cuyo nombre oficial es República de Eslovenia es un país ubicado en Europa Central, siendo uno de los veintisiete Estados soberanos que forman la Unión Europea. Limita con Italia al oeste; con el mar Adriático, al suroeste; con Croacia al sur y al este; con Hungría, al noreste; y con Austria, al norte."
    },
    {
        palabra: 'Noruega',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Europe-Norway.svg/1024px-Europe-Norway.svg.png',
        description: "Noruega es un país escandinavo que incluye montañas, glaciares y profundos fiordos costeros. Oslo, su capital, es una ciudad de áreas verdes y museos. En el Museo de barcos vikingos de Oslo, se muestran navíos vikingos preservados del siglo IX. Bergen, con coloridas casas de madera, es el punto de partida de los cruceros hacia el sorprendente fiordo de Sogn. Noruega también es famosa por la pesca, el excursionismo y el esquí, especialmente en el centro olímpico Lillehammer."
    },
    {
        palabra: 'Dinamarca',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/EU-Denmark.svg/1024px-EU-Denmark.svg.png',
        description: 'Dinamarca es un país escandinavo que abarca la península de Jutlandia y varias islas. Está conectado con Suecia a través del puente de Öresund. Copenhague, su capital, cuenta con palacios reales y el colorido puerto de Nyhavn, junto con el parque de atracciones Tívoli y la icónica estatua de "La Sirenita". Odense es la ciudad natal del escritor Hans Christian Andersen, con un centro medieval con calles de adoquines y casas con entramado de madera.'
    },
    {
        palabra: 'Escocia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Scotland_in_the_UK_and_Europe.svg/1024px-Scotland_in_the_UK_and_Europe.svg.png',
        description: "Escocia, el país más septentrional del Reino Unido, es una tierra de áreas naturales en montañas, como los Cairngorms y las Tierras Altas del Noroeste, intercaladas con valles glaciales y lagos. Sus ciudades principales son Edimburgo, la capital, con su incónico castillo sobre un cerro, y Glasgow, famosa por su animado ambiente cultural. Escocia también es famosa por el golf, cuyo primer partido se disputó en el campo Old Course de St Andrews en el siglo XV."
    },
    {
        palabra: 'Estonia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/EU-Estonia.svg/1024px-EU-Estonia.svg.png',
        description: "Estonia, un país de Europa del Norte, limita con el mar Báltico y el golfo de Finlandia. Incluye más de 1,500 islas, y su diverso terreno abarca playas pedregosas, antiguos bosques y muchos lagos. Fue parte de la Unión Soviética y cuenta con varios castillos, iglesias y fortalezas sobre colinas. La capital, Tallin, es conocida por su ciudad antigua conservada, sus museos y la Torre de TV de Tallin de 314 m de alto, que tiene una plataforma de observación."
    },
    {
        palabra: 'Finlandia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/EU-Finland.svg/1024px-EU-Finland.svg.png',
        description: "Finlandia es un país de Europa del Norte que limita con Suecia, Noruega y Rusia. Su capital, Helsinki, ocupa una península y las islas que la rodean en el mar Báltico. En Helsinki, se encuentra la fortaleza marina Suomenlinna del siglo XVIII, el moderno Distrito del Diseño y diversos museos. La aurora boreal se puede ver desde la provincia ártica de Laponia del país, una amplia zona de naturaleza con parques nacionales y centros de esquí."
    },
    {
        palabra: 'Suiza',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Europe-Switzerland.svg/1024px-Europe-Switzerland.svg.png',
        description: "Suiza es un país montañoso de Europa Central, con varios lagos, aldeas y las altas cimas de los Alpes. Sus ciudades tienen barrios medievales, con monumentos como la torre del reloj Zytlogge en su capital, Berna, y el puente de madera de la capilla en Lucerna. El país también es famoso por sus centros de esquí y los senderos de excursionismo. Las industrias bancaria y financiera son clave, y los relojes y el chocolate de Suiza son conocidos en todo el mundo."
    },
    {
        palabra: 'Hungria',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/EU-Hungary.svg/1024px-EU-Hungary.svg.png',
        description: "Hungría es un país sin litoral en Europa central. Su capital, Budapest, está dividida por el río Danubio. Su paisaje urbano tiene sitios icónicos arquitectónicos desde la medieval Castle Hill de Buda y los grandes edificios neoclásicos a lo largo de Pest’s Andrássy Avenue hasta el Puente de las Cadenas del siglo XIX. La influencia turca y romana en la cultura húngara incluye la popularidad de los spas minerales, incluido el lago termal Héviz."
    },
    {
        palabra: 'Suecia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EU-Sweden.svg/1024px-EU-Sweden.svg.png',
        description: "Suecia es una nación escandinava con miles de islas costeras y lagos interiores, junto con extensos bosques boreales y montañas nevadas. Sus principales ciudades, la capital oriental Estocolmo, Malmö y Gotemburgo en el suroeste, son costeras. La ciudad de Estocolmo está construida sobre 14 islas. Tiene más de 50 puentes, además de una ciudad antigua medieval, Gamla Stan, palacios reales y museos, como el Skansen al aire libre."
    },
    {
        palabra: 'Polonia',
        pista: '"País situado en Europa"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/EU-Poland.svg/1024px-EU-Poland.svg.png',
        description: "Polonia es un país de Europa Oriental en el mar Báltico, conocido por su arquitectura medieval y su herencia judía. En la ciudad de Cracovia, el castillo de Wawel del siglo XIV se eleva por sobre la antigua ciudad medieval, donde se encuentra la Lonja de los Paños, un establecimiento comercial renacentista en Rynek Glówny (plaza del mercado). Cerca se encuentra el memorial del campo de concentración Auschwitz-Birkenau y las vastas minas de sal de Wieliczka, con salas y túneles subterráneos."
    },
    {
        palabra: 'Canada',
        pista: 'Pais de Norte America',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CAN_orthographic.svg/800px-CAN_orthographic.svg.png',
        description: "Canadá es el país norteamericano que se extiende desde los Estados Unidos en el sur hasta el círculo polar ártico en el norte. Las ciudades principales incluyen la enorme Toronto, Vancouver, el centro cinematográfico de la costa oeste, las ciudades de habla francesa Montreal y Quebec, y la capital Ottawa. Las vastas franjas de naturaleza de Canadá incluyen el Parque Nacional Banff ubicado en un lago en las Montañas Rocosas. También incluye las cataratas del Niágara, un famoso grupo de enormes cascadas."
    },
    {
        palabra: 'Venezuela',
        pista: '"Pais de Sudamerica con Cataratas Majestuosas"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Venezuela_Orthographic_Map.svg/800px-Venezuela_Orthographic_Map.svg.png',
        description: "Venezuela es un país de la costa norte de Sudamérica con numerosos atractivos naturales. A lo largo de su costa caribeña hay islas tropicales turísticas como la isla de Margarita y el archipiélago de Los Roques. Al noroeste se encuentran los Andes y la ciudad colonial de Mérida, que sirve de base para visitar el Parque Natural de Sierra Nevada. La capital, Caracas, está en el norte."
    },
    {
        palabra: 'Chile',
        pista: 'País, América del Sur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CHL_orthographic_%28%2Ball_claims%29.svg/800px-CHL_orthographic_%28%2Ball_claims%29.svg.png',
        description: "Chile es un país largo y angosto que se extiende por el borde occidental de Sudamérica, con más de 6,000 km de costa en el océano Pacífico. Santiago, su capital, se ubica en un valle rodeado de los Andes y la cordillera de la Costa. En la Plaza de Armas de la ciudad, bordeada de palmeras, se encuentra la catedral neoclásica y el Museo de Historia Nacional. El enorme Parque Metropolitano cuenta con piscinas, un jardín botánico y un zoológico."
    },
    {
        palabra: 'Uruguay',
        pista: 'País, América del Sur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Uruguay_%28orthographic_projection%29.svg/800px-Uruguay_%28orthographic_projection%29.svg.png',
        description: "Uruguay es un país de Sudamérica conocido por su interior verde y costa bordeada de playas. La capital, Montevideo, se ubica en torno a la plaza Independencia, donde alguna vez hubo una ciudadela española. Esta lleva a la Ciudad Vieja, con edificios art deco, casas coloniales y el Mercado del Puerto con muchos restaurantes de carnes. La Rambla es un paseo costero con puestos de pescados, muelles y parques."
    },
    {
        palabra: 'Bolivia',
        pista: 'País, América del Sur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/BOL_orthographic.svg/800px-BOL_orthographic.svg.png',
        description: "Bolivia es un país del centro de Sudamérica, con un terreno variado desde los Andes, el Desierto de Atacama y el bosque pluvial en la cuenca del Amazonas. A más de 3,500 m de altura, su capital administrativa, La Paz, se ubica en el Altiplano de los Andes con el monte nevado Illimani de fondo. Cerca se encuentra el cristalino lago Titicaca, el más grande del continente, que se extiende por la frontera con Perú."
    },
    {
        palabra: 'Paraguay',
        pista: 'País, América del Sur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/PRY_orthographic.svg/800px-PRY_orthographic.svg.png',
        description: "Paraguay es un país sin litoral que se encuentra entre Argentina, Brasil y Bolivia, con grandes extensiones de pantanos, bosques subtropicales y chaco, extensiones de naturaleza que abarcan sabanas y matorrales. La capital, Asunción, en las orillas del río Paraguay, alberga el gran Palacio de Gobierno y el Museo del Barro, que exhibe cerámicas precolombinas y encajes ñandutí, estos últimos disponibles en muchas tiendas."
    },
    {
        palabra: 'CostaRica',
        pista: 'País en Centroamérica',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/CRI_orthographic.svg/800px-CRI_orthographic.svg.png',
        description: "Costa Rica es un país de América Central con una geografía accidentada, que incluye bosques tropicales y costas en el Caribe y el Pacífico. Aunque su capital, San José, es hogar de instituciones culturales, como el Museo del Oro Precolombino, Costa Rica es conocida por sus playas, sus volcanes y su biodiversidad. Aproximadamente un cuarto de su área corresponde a selvas protegidas, repletas de fauna, como el mono araña y los quetzales."
    },
    {
        palabra: 'Cuba',
        pista: 'País en Centroamérica',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/CUB_orthographic.svg/800px-CUB_orthographic.svg.png',
        description: "Cuba, oficialmente República de Cuba, ​ es un país soberano insular, asentado en las Antillas del mar Caribe. El territorio está organizado en quince provincias y un municipio especial con La Habana como capital y ciudad más poblada."
    },
    {
        palabra: 'Colombia',
        pista: 'País, América del Sur',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg/800px-COL_orthographic_%28San_Andr%C3%A9s_and_Providencia_special%29.svg.png',
        description: "Colombia es un país del extremo norte de Sudamérica. Su paisaje cuenta con bosques tropicales, las montañas de los Andes y varias plantaciones de café. En Bogotá, su capital a gran altura, el distrito Zona Rosa es famoso por sus restaurantes y tiendas. Cartagena, en la costa del Caribe, tiene una Ciudad Antigua colonial amurallada, un castillo del siglo XVI y arrecifes de coral cercanos."
    },
    {
        palabra: 'Honduras',
        pista: 'País en Centroamérica',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/HND_orthographic.svg/800px-HND_orthographic.svg.png',
        description: "Honduras es un país de América Central con costas en el mar Caribe al norte y en el océano Pacífico al sur. En el bosque tropical cerca de Guatemala, el antiguo sitio ceremonial maya de Copán tiene jeroglíficos tallados en piedra y estelas, altos monumentos de piedra. En el mar Caribe, se encuentran las Islas de la Bahía, un destino para el buceo que forma parte de la Barrera de Coral Mesoamericana."
    },
    {
        palabra: 'Marruecos',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Morocco_WS-excluded_%28orthographic_projection%29.svg/800px-Morocco_WS-excluded_%28orthographic_projection%29.svg.png',
        description: "Marruecos es un país de África del Norte que limita con el océano Atlántico y el mar Mediterráneo, y se distingue por las influencias culturales bereberes, árabes y europeas. La medina de Marrakech es un barrio medieval similar a un laberinto con entretenimiento en su plaza de Yamaa el Fna y los zocos (mercados) que venden cerámicas, joyas y lámparas de metal. La Alcazaba de los Udayas en la capital, Rabat, es un fuerte real del siglo XII con vista al mar."
    },
    {
        palabra: 'Angola',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Angola_%28orthographic_projection%29.svg/800px-Angola_%28orthographic_projection%29.svg.png',
        description: "Angola es un país sudafricano con terrenos variados que abarca playas tropicales en el Atlántico, un sistema laberíntico de ríos y el desierto subsahariano que se extiende por la frontera hasta Namibia. La historia colonial del país se refleja en su gastronomía con influencia portuguesa y sus hitos, como la Fortaleza de Saõ Miguel que construyeron los portugueses en 1576 para defender la capital, Luanda."
    },
    {
        palabra: 'Egipto',
        pista: '"Morada de Faraones y piramides..."',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/EGY_orthographic.svg/800px-EGY_orthographic.svg.png',
        description: "Egipto, país que une el noreste de África con Medio Oriente, data del período de los faraones. Tiene monumentos de milenios de antigüedad ubicados junto al fértil valle del río Nilo, incluidas las colosales pirámides de Guiza y la Gran Esfinge, al igual que las tumbas del Valle de los Reyes y el Templo de Karnak bordeado de jeroglíficos en Luxor. En la capital, El Cairo, hay monumentos otomanos, como la mezquita de Muhammad Alí y el Museo Egipcio, un tesoro de antigüedades."
    },
    {
        palabra: 'Madagascar',
        pista: 'País en África Oriental, famosa por su fauna y biodiversidad únicas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/MDG_orthographic.svg/800px-MDG_orthographic.svg.png',
        description: "Madagascar es una enorme nación insular frente a la costa sureste de África. Alberga miles de especies animales, como lémures, que solo se encuentran en este lugar, junto con bosques tropicales, playas y arrecifes. Cerca de la ajetreada capital, Antananarivo, se ubica Ambohimanga, un complejo de palacios reales y cementerios en la ladera, junto con la “avenida de los Baobabs”, un camino de tierra bordeado de enormes árboles con siglos de antigüedad."
    },
    {
        palabra: 'Tanzania',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tanzania_%28orthographic_projection%29.svg/800px-Tanzania_%28orthographic_projection%29.svg.png',
        description: 'Tanzania es un país de África Oriental famoso por sus extensas zonas de fauna salvaje. Estas incluyen las llanuras del parque nacional Serengueti, una meca del safari poblada por los "cinco grandes" animales (elefantes, leones, leopardos, búfalos y rinocerontes), y el parque nacional del Kilimanjaro, donde se ubica la montaña más alta de África. En el litoral, se ubican las islas tropicales de Zanzíbar, con influencias árabes, y de Mafia, con un parque marino con tiburones ballena y arrecifes de coral.'
    },
    {
        palabra: 'Camerun',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/CMR_orthographic.svg/800px-CMR_orthographic.svg.png',
        description: "Camerún, oficialmente la República de Camerún​ ​, es un Estado unitario organizado como república en el África central.​ «Limita al sur con Guinea Ecuatorial, a continuación con Gabón, y con República del Congo. Al este limita con República Centroafricana, al noroeste con Chad, y al oeste con Nigeria.»​ "
    },
    {
        palabra: 'Argelia',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Algeria_%28orthographic_projection%29.svg/800px-Algeria_%28orthographic_projection%29.svg.png',
        description: "Argelia es un país del norte de África con costa mediterránea y una gran extensión del desierto del Sáhara. Numerosos imperios han dejado sus legados aquí, como se observa en las antiguas ruinas romanas de Tipaza, junto al mar. En la capital, Argel, el barrio de la casba, situado en la falda de una colina, contiene monumentos otomanos como la mezquita Ketchaoua, de alrededor de 1612, además de callejuelas y escaleras estrechas. La basílica de Nuestra Señora de África, de estilo neobizantino, data del periodo del dominio colonial francés."
    },
    {
        palabra: 'Libia',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Libya_%28orthographic_projection%29.svg/800px-Libya_%28orthographic_projection%29.svg.png',
        description: "Libia, oficialmente el Estado de Libia,​ es un país soberano republicano del norte de África. Su capital es Trípoli. Limita con el mar Mediterráneo al norte, al oeste con Túnez y Argelia, al sur con Níger y Chad, al sureste con Sudán y al este con Egipto."
    },
    {
        palabra: 'Kenia',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kenya_%28orthographic_projection%29.svg/800px-Kenya_%28orthographic_projection%29.svg.png',
        description: "Kenia es un país de África Oriental con una costa en el océano Índico. Su territorio abarca sabana, terrenos en lagos, el espectacular Gran Valle del Rift y zonas montañosas altas. También alberga fauna, como leones, elefantes y rinocerontes. Se realizan safaris desde Nairobi, la capital, a la Reserva Masái Mara, conocida por sus migraciones anuales de ñus, y el Parque Nacional Amboseli, que ofrece vistas del monte Kilimanjaro en Tanzania, de 5,895 m de altura."
    },
    {
        palabra: 'Ghana',
        pista: 'País situado en el continente de Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ghana_%28orthographic_projection%29.svg/800px-Ghana_%28orthographic_projection%29.svg.png',
        description: "Ghana es un país del golfo de Guinea en África Occidental, famoso por su diversa fauna, sus fuertes antiguos y las playas aisladas, como las de Busua. Las ciudades costeras de Elmina y Costa del Cabo contienen posubans (santuarios nativos), edificios coloniales y castillos convertidos en museos que sirven de testimonio del tráfico de esclavos. Al norte de la Costa del Cabo, el enorme Parque Nacional de Kakum tiene una pasarela de tirolesa por sobre los árboles del bosque tropical."
    },
];

// Definimos las letras del Abecedario (letras disponibles)
const LETRAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Contenedor de la palabra
let palabraSeleccionada = '';

let pistaPalabra = '';

// Definimos la variable para contar los intentos
let intentos = 5;

// letras disponibles para el juego
// Obtengo el contenedor de letras disponibles
const letrasContainer = document.getElementById('letrasDisponibles');

// Defino un array de letrasUtilizadas
let letrasUtilizadas = [];

// Obtener el nombre de usuario de index.html
let userNameValue = localStorage.getItem('userName');

let userNameElement = document.getElementById('nameUser');

if (userNameElement) {
    userNameElement.innerText = userNameValue;
}

// nueva partida
function iniciarPartida() {
    // Limpiar la mascara de la palabra
    const mascaraPalabra = document.getElementById('mascaraPalabra');
    mascaraPalabra.innerHTML = '';

    // Limpiar las letras utilizadas
    const contenedorLetrasUtilizadas = document.getElementById('letrasUtilizadas');
    contenedorLetrasUtilizadas.innerHTML = '';
    // Limpiar letras disponibles
    letrasContainer.innerHTML = '';
    
    // Reiniciar el estado del juego
    intentos = 5;
    letrasUtilizadas = [];
    // Limpiar el localstorage (si es necesario)
    localStorage.removeItem('mascara');
    localStorage.removeItem('palabraSeleccionada');
    localStorage.removeItem('pista');
    localStorage.removeItem('intentos');
    localStorage.removeItem('letrasUtilizadas');
    // Seleccionamos una palabra aleatoria
    palabraSeleccionada = getRandomWord(palabras);

    // Obtengo la pista de la palabra
    pistaPalabra = palabraSeleccionada.pista;


    // Convertimos la palabra seleccionada a un string JSON para guardarla en localStorage

    // Guardamos la palabra seleccionada y los intentos en localStorage
    localStorage.setItem('palabraSeleccionada', JSON.stringify(palabraSeleccionada));
    localStorage.setItem('pista', pistaPalabra);
    document.getElementById('pistaPalabra').innerText = pistaPalabra;
    localStorage.setItem('intentos', intentos);
    
    // Mostramos la mascara inicial
    mostrarMascaraInicial(palabraSeleccionada);

    location.reload();

    let letrasDisponibles = LETRAS.filter(letra => !letrasUtilizadas.includes(letra));
    actualizarLetrasUtilizadas();
    
    // Crear botones de letras solo si no existen
    if (!document.querySelector('.letra-boton')) {
        letrasDisponibles.forEach(crearBotonLetra);
    }

    // Actualizar la imagen del ahorcado
    actualizarImagenAhorcado();

    // Actualizar el numero de intentos en el DOM
    document.getElementById('intentos').innerHTML = intentos;
}

// Obtener palabra aleatoriamente
function getRandomWord(array) {
    let indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

// mostrar la mascara inicial
function mostrarMascaraInicial(palabra) {
    const mascaraPalabra = document.getElementById('mascaraPalabra');
    const mascara = charactersToMask(wordToCharacters(palabra));

    // Añado la  mascara de la palabra al contenedor del DOM
    añadirMascaraToContainer(mascara, mascaraPalabra);
}

// Funcion para verificar si el juego ha terminado
function isGameOver() {
    if (intentos <= 0) {
        terminarPartida('Se ha superado el número maximo de intentos...!!!');
        return true;
    }
    else if (palabraEstaCompletada()) {
        terminarPartida('¡Felicidades! Has completado la palabra...');
        return true;
    }

    // Si ninguna de las condiciones se cumple, el juego continua
    return false;
}

// Funcion que verifica si la mascara de la palabra ha sido revelada
function palabraEstaCompletada() {
    // obtengo el contenedor de los elementos span de la mascar
    const mascaraPalabra = document.getElementById('mascaraPalabra');

    // itera sobre los elementos span dentro del contenedor
    const spans = mascaraPalabra.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
        // Verifico si el span contiene una letra
        if (spans[i].textContent === '') {
            return false;
            break;
        }
    }

    // Si se encontro un '', retorna false porque la palabra no esta completamente revelada
    return true;
}

function actualizarImagenAhorcado() {
    // Obtener el número de intentos restantes de localStorage
    let intentos = parseInt(localStorage.getItem('intentos')) || 0;

    let imagenAhorcado = `./media/ahorcado_${intentos}.png`;

    // Actualizar el src de la imagen del ahorcado en el DOM
    document.getElementById('img-ahorcado').src = imagenAhorcado;
}

// mostrar info al terminar el juego y limpiar datos de localStorage
function terminarPartida(mensaje) {
    alert(mensaje);

    // Actualizar el numero de intentos en el DOM
    document.getElementById('intentos').innerHTML = intentos;

    mostrarInfoPalabra();

}

let modalInfo;

function mostrarInfoPalabra() {
    // Inicializo el modal de bootsytrap
    if (!modalInfo) {
        modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'));
    }
    
    // Actualizar el contenido del modal con la informacion de la palabra elegida
    document.getElementById('modalInfoTitle').textContent = palabraSeleccionada.palabra;
    document.getElementById('modalInfoImg').src = palabraSeleccionada.image;
    document.getElementById('modalInfoBody').innerText = palabraSeleccionada.description;

    // Muestro el modal
    modalInfo.show();
}

// Manejar el click en una letra
function manejarClickLetra() {
    // Obtengo la letra del boton clickeado
    let letraSeleccionada = this.textContent;

    console.log(letraSeleccionada)

    // Obtengo el indice de la letra seleccionada en el array LETRAS
    let index = LETRAS.indexOf(letraSeleccionada);

    // movemos la letra utilizada al array de letrasUtilizadas
    moverLetra(LETRAS, letrasUtilizadas, index);

    // Actualizo el contenedor de letras utilizadas
    actualizarLetrasUtilizadas();

    // **** Guarda las letras utilizadas en localStorage ****
    localStorage.setItem('letrasUtilizadas', JSON.stringify(letrasUtilizadas));

    this.remove(); // Elimino el elemento de la letra

    const palabraElegida = palabraSeleccionada.palabra.toUpperCase();

    // Verificamos si la letra del boton esta en la palabra seleccionada
    if (palabraElegida.includes(letraSeleccionada)) {
        // Actualizo el contenedor de la palabra
        actualizarMascaraConLetra(letraSeleccionada, palabraElegida);
    } else {
        //intentos -= 1;
        intentos = parseInt(localStorage.getItem('intentos')) - 1;
        localStorage.setItem('intentos', intentos);
        console.log(intentos)
        // Actualizar imagen ahorcado
        actualizarImagenAhorcado();
        // Actualizar el numero de intentos en el DOM
        document.getElementById('intentos').innerHTML = intentos;
    }

    // verifica si la palabra ha sido revelada
    isGameOver();

}

// actualizar la mascara con la letra seleccionada
function actualizarMascaraConLetra(letra, palabraSeleccionada) {
    // Obtengo el contenedor que contiene los elementos span de la mascara
    const mascaraPalabra = document.getElementById('mascaraPalabra');

    const spans = mascaraPalabra.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        // Compara el contenido de texto del span con la letra proporcionada
        if (palabraSeleccionada[i] === letra) {
            spans[i].textContent = letra;
        }
    }

    // Guardar la mascara actualizada en localStorage
    localStorage.setItem('mascara', mascaraPalabra.innerHTML);
    
}



document.addEventListener('DOMContentLoaded', function() {
    const pistaPalabra = localStorage.getItem('pista');
    palabraSeleccionada = JSON.parse(localStorage.getItem('palabraSeleccionada')) || null;
    const intentos = parseInt(localStorage.getItem('intentos')) || 0;
    letrasUtilizadas = JSON.parse(localStorage.getItem('letrasUtilizadas')) || [];
    const mascaraGuardada = localStorage.getItem('mascara');

    if (pistaPalabra) {
        document.getElementById('pistaPalabra').innerHTML = pistaPalabra;
    }

    if (palabraSeleccionada && intentos) {
        mostrarMascaraInicial(palabraSeleccionada);
    } else {
        iniciarPartida();
    }

    let letrasDisponibles = LETRAS.filter(letra => !letrasUtilizadas.includes(letra));
    actualizarLetrasUtilizadas();

    if (mascaraGuardada) {
        document.getElementById('mascaraPalabra').innerHTML = mascaraGuardada;
    }

    // Crear botones de letras solo si no existen
    if (!document.querySelector('.letra-boton')) {
        letrasDisponibles.forEach(crearBotonLetra);
    }

    // Actualizar la imagen del ahorcado al cargar la pagina
    actualizarImagenAhorcado();
    // Actualizar el numero de intentos en el DOM
    document.getElementById('intentos').innerHTML = intentos;
})



// palabra elegida a caracteres - split: retorna un array de substrings
function wordToCharacters(word) {
    let characters = word.palabra.split(''); // Dividimos la palabra elegida en substrings
    return characters;
}

function charactersToMask(array) {
    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
        let caracteres = array[i].toUpperCase(); // caracter a mayuscula
        let caracteresConGuiones = '';
        for (let j = 0; j < caracteres.length; j++) {
            caracteresConGuiones += '_'; // Agregamos un guion bajo para cada caracter
        }
        resultado.push(caracteresConGuiones); // Agregamos el resultado al nuevo array
    }

    return resultado;
}

// Funcion para añadir la mascara de palabra en el contenedor de palabra elegida
function añadirMascaraToContainer(mascara, contenedor) {
    for (let i = 0; i < mascara.length; i++) {
        // Crear un elemento span
        let span = document.createElement('span');
        // Asignar una clase al elemento span
        span.className = 'character';
        // Asignar el contenido del elemento span
        span.textContent = '';
        // Añadir el span al contenedor
        contenedor.appendChild(span);
    }
}

// Funcion para crear un boton por cada letra y agregarlo al contenedor
function crearBotonLetra(letra) {
    const btnLetra = document.createElement('button');
    btnLetra.className = 'btnLetra';
    btnLetra.textContent = letra;
    btnLetra.addEventListener('click', manejarClickLetra);
    letrasContainer.appendChild(btnLetra);
}

// ---- Funcionalidades del juego

// funcion para comparar letra con palabra
function compararLetraConPalabra(letraBoton, palabraSeleccionada) {
    for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (letraBoton === palabraSeleccionada[i]) {
            alert('Haz acertado...!!!');
        }
    }
}

// Funcion para mover las letras utilizadas
function moverLetra(origen, destino, indice) {
    let letra = origen.splice(indice, 1)[0]; // Elimina el elemento y obtiene una copa
    destino.push(letra); // Añade el elemento al array destino
}

let contenedorLetrasUtilizadas = document.getElementById('letrasUtilizadas');

// Actualizar el contenedor de letras utilizadas
function actualizarLetrasUtilizadas() {
    // Limpiar el contenedor antes de agregar nuevos elementos
    while (contenedorLetrasUtilizadas.firstChild) {
        contenedorLetrasUtilizadas.removeChild(contenedorLetrasUtilizadas.firstChild);
    }
    
    // Recorro el array de letras utilizadas para poder mostrar las que fueron utilizadas
    for (let i = 0; i < letrasUtilizadas.length; i++) {
        let btnLetra = document.createElement('button');
        btnLetra.className = 'btnLetra';
        btnLetra.textContent = letrasUtilizadas[i];
        
        contenedorLetrasUtilizadas.appendChild(btnLetra);
    }

    // verifica si la palabra ha sido revelada
}

// Obtener el boton 'Nuevo Juego' del modal
let btnNewGame = document.getElementById('btn-new-game');

btnNewGame.addEventListener('click', function() {
    // Asegurarse que modalInfo ha sido inicializado
    if (modalInfo) {
        // Cerrar el modal
        modalInfo.hide();
    }
    
    // llamo a la funcion iniciarPartida()
    iniciarPartida();
});