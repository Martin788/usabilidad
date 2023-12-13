/*
 * Este será el xml que representa la estructura de la página Web.
 * Cada página tendrá un título, una descripción y una url.
 * El título será el h1 de la página, la descripción todo el texto que se encuentre en la página y la url será la ruta de la página.
 */
const searchIndex = `
    <sitemap>
        <page>
            <title>Sobre Mí</title>
            <description>
                Acerca de mí
                Me llamo Martín Fernández González, tengo 22 años y nací en Oviedo el 8 de Junio de 2001. Cursé el Grado en Ingeniería Informática en la Universidad de Oviedo 
                y actualmente estoy desarrollando mi trabajo de fin de grado en colaboración con la empresa Visionary a la vez que estoy cursando el primer año del Máster en 
                Ingeniería Web en la propia Universidad de Oviedo.
                Mi experiencia laboral
                Como experiencia laboral he trabajo 6 meses de prácticas en la empresa Inetum como desarrollador web. En el departamento en el que estuve asignado se utilizaba
                una nueva tecnología llamada Outsystems. Outsystems es una plataforma de desarrollo low code que permite a las empresas desarrollar aplicaciones empresariales 
                omnicanal y escribiendo la menor cantidad de código posible. Durante mi estancia en la empresa desarrollé 2 páginas web: La primera era una página web para
                la promoción de eventos de diferentes categorías (deportivos, musicales...). La segunda página web era para la gestión de permisos de acceso de una empresa.
            </description>
            <url>index.html</url>
        </page>
        <page>
            <title>Aficiones</title>
            <description>
                La montaña
                Otra de mis aficiones es la montaña. Desde mi infancia, la montaña ha sido una parte fundamental 
                de mi vida. Los paseos en familia cuando era niño iniciaron esta pasión por ella. La sensación
                de libertad que experimentaba al estar rodeado de montañas y bosques era incomparable. 
                Cada excursión era una aventura, una oportunidad de explorar nuevos caminos y descubrir la belleza
                natural que la montaña ofrecía.
                Ahora que soy una persona adulta, continuo sacando tiempo para hacer rutas buscando siempre la 
                tranquilidad que me ofrece la naturaleza, lejos del ajetreo y el bullicio de la ciudad. 
                Aunque ahora tengo la libertad de elegir cuándo y cómo explorarla, nunca olvido esos momentos 
                compartidos en familia que me introdujeron en este apasionante mundo. La montaña sigue siendo 
                mi refugio, un lugar donde puedo reconectar con mis raíces y encontrar paz en la naturaleza.
                El badminton
                Una de mis principales aficiones es el deporte, y en especial el badminton. A pesar de que es
                un deporte que no es tan conocido como podría serlo el fútbol o el baloncesto, es un deporte
                muy interesante y dinámico y que cuenta con miles de personas que lo practican a alto nivel
                alrededor de toda España. El badminton es un deporte que a simple vista no parece que requiera
                demasiado esfuerzo, pero que cuando practicas a un nivel más avanzado es igual o incluso más 
                físico y técnico que otros deportes.
                Comencé a practicar el deporte en 2015, en el Club Bádminton Oviedo y entrené durante 5 años 
                llegando a ganar algún campeonato asturiano en la modalidad de dobles masculino y participando
                en torneos nacionales en ciudades como Santander, Bilbao, Madrid y Toledo. Tras decidir 
                apartarme del deporte por incapacidad de cuadrar horarios con los estudios ahora llevo
                3 años practicando el deporte de manera espontánea y como hobbie un par de veces al mes
                para mantener los conocimientos.
                Videos relacionados
            </description>
            <url>aficiones.html</url>
        </page>
        <page>
            <title>Música</title>
            <description>
                Un poco de introducción
                En esta parte de mi página hablaré sobre uno de mis intereses que es la música. La música es una de las cosas sin las que no puedo vivir, escucho
                música a todas horas, mientras cocino, cuando estudio... 
                Tambien eschucho mucha variedad de música desde pop hasta reggaeton y rap tanto en español como en inglés por lo que me considero una persona
                polivalente en ese aspecto. A continuación te muestro una lista con mis artistas favoritos y algunas de sus canciones que mas me transmiten:
                Artistas
                Aquí una lista sobre mis 7 artistas favoritos: 
                Canciones
            </description>
            <url>musica.html</url>
        </page>
        <page>
            <title>Series y Cine</title>
            <description>
                Mis Series y Peliculas Preferidas
                Un poco de introducción
                En esta parte me gustaría hablar más sobre mis gustos en series y películas, ya que son una parte importante de mí, practicamente todos los días
                saco algo de mi tiempo para poder disfrutar de una serie o pelicula antes de irme a dormir. Veo mucha variedad de generos tanto en peliculas como
                en series, pero sin duda mi género favorito es la acción.
                A continuación, voy a mostrar un top 5 de mis series y peliculas favoritas, con algunos detalles de cada uan como el los actores principales, el director o
                el número de episodios.
                Mis series favoritas
                Mis peliculas favoritas
            </description>
            <url>series_y_cine.html</url>
        </page>
    </sitemap>
`;

function search() {
    var header = document.querySelector('header'); //Cogemos el header de la página
    var form = header.querySelector('form'); //A partir del header obtenemos el formulario
    var input = form.querySelector('input[type="text"]'); //A partir de el formulario obtenemos el input de tipo texto
    var query = input.value.toLowerCase() //Obtenemos el valor del input y lo pasamos a minusculas
    const results = []; //En este array guardaremos los resultados de la busqueda

    // Parseamos el XML para recorrerlo
    const xmlDoc = $.parseXML(searchIndex);
    const $xml = $(xmlDoc);

    /*
     * Recorremos todos los nodos page y para cada uno de ellos comprobamos si el título o la descripción contiene la query
     * Si es así, añadimos el resultado al array de resultados
     */
    $xml.find('page').each(function () {
        
        const title = $(this).find('title').text().toLowerCase();
        const description = $(this).find('description').text().toLowerCase();
        const url = $(this).find('url').text();

        if (title.includes(query) || description.includes(query)) {
            results.push({ title, description, url });
        }
    });

    // En el caso de que se haya encontrado algún resultado, redirigimos a la página donde se encuentra el primer resultado
    if (results.length > 0) {
        console.log("Bien")
        console.log(results[0].url)
        window.location.href = results[0].url;
    } else { // En el caso de que no se haya encontrado ningún resultado, mostramos un mensaje de alerta
        alert('No se encontraron resultados. Pruebe con otra palabra.');
    }
}