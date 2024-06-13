import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './VolleyballNews.css';

const VolleyballNews = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const image = searchParams.get('image');
    const imageRefs = useRef([]);

    useEffect(() => {
        if (image && imageRefs.current[image]) {
            imageRefs.current[image].scrollIntoView({ behavior: 'smooth' });
        }
    }, [image]);

    return (
        <div className="volleyballnews-container">
            <h1 className="volleyballnews-title">"COMBI NEWS"</h1>
            <div className="vnaftertitle">
                <p>
                    Prepárate para sumergirte en el emocionante mundo del volleyball con Combi News! Aquí en La Combi Sports News, estamos comprometidos a brindarte las noticias más importantes, emocionantes y exclusivas del mundo del volleyball.
                </p>
            </div>

            <div className="volleyballnews-content">
                <div className="vn-image-grid-container">
                    <div className="vn-image-grid">
                        <div className="vn-image-item" ref={el => imageRefs.current[1] = el}>
                            <div className="news-item">
                                <h2>JAPÓN ACOGE NUEVAMENTE LA VNL</h2>
                                <img src={`imagenes/Imagen cuadro 1.jpg`} alt={`Imagen 1`} />
                                <div className="textweb">
                                    <br />
                                    <p>
                                        Japón, conocido por su profunda tradición en el volleyball, una vez más ha sido seleccionado para acoger la Volleyball Nations League (VNL). Esta prestigiosa competición internacional reúne a los mejores equipos de todo el mundo, ofreciendo un espectáculo de habilidades, estrategia y pasión en la cancha. La decisión de celebrar el torneo en Japón destaca no solo la infraestructura de clase mundial del país sino también su ferviente afición por el deporte, garantizando que los partidos se lleven a cabo en un ambiente electrizante y lleno de energía.
                                        <br />
                                        <br />
                                        El país nipón ha sido un escenario recurrente para eventos de volleyball de alto nivel, gracias a su capacidad organizativa y al entusiasmo de su público. Las ciudades de Tokio, Osaka y Nagoya se preparan para recibir a miles de aficionados, además de los equipos y sus delegaciones. La VNL no solo promueve el volleyball a nivel global, sino que también impulsa el turismo y la economía local, al atraer a visitantes de todo el mundo deseosos de presenciar los enfrentamientos más emocionantes entre las potencias del volleyball.
                                        <br />
                                        <br />
                                        Para los jugadores, competir en Japón es una experiencia única. La pasión y el respeto que los aficionados japoneses muestran hacia el deporte crean una atmósfera inigualable. Los equipos esperan con ansias no solo la competencia en sí, sino también la oportunidad de sumergirse en la rica cultura japonesa y disfrutar de la hospitalidad local. La Volleyball Nations League en Japón promete ser un evento inolvidable, celebrando la excelencia deportiva y fortaleciendo los lazos internacionales a través del volleyball.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="vn-image-item" ref={el => imageRefs.current[2] = el}>
                            <div className="news-item">
                                <h2>JAPÓN SE ESTRENA CON VICTORIA</h2>
                                <img src={`imagenes/Imagen cuadro 2.jpg`} alt={`Imagen 2`} />
                                <div className="textweb">
                                    <br />
                                    <p>
                                        El equipo femenino de Japón comenzó de manera espectacular la tercera semana de la Volleyball Nations League (VNL) femenina, logrando una contundente victoria por 3-0 frente a Corea del Sur. Con una actuación brillante y coordinada, las jugadoras japonesas dominaron cada set, demostrando su preparación y determinación para destacar en el torneo. Este triunfo no solo refuerza la moral del equipo, sino que también subraya su capacidad para enfrentar y superar a oponentes de alto nivel.
                                        <br />
                                        <br />
                                        Durante el partido, las estrellas japonesas como Sarina Koga y Arisa Inoue mostraron un rendimiento excepcional. Koga, con sus potentes remates y saques precisos, fue una pieza clave en la ofensiva del equipo, mientras que Inoue se destacó en la defensa, bloqueando y recuperando balones cruciales. La estrategia del entrenador Masayoshi Manabe se centró en una combinación de velocidad y técnica, lo que permitió a Japón mantener el control del juego y neutralizar las amenazas coreanas de manera efectiva.
                                        <br />
                                        <br />
                                        Esta victoria inicial en la tercera semana de la VNL femenina coloca a Japón en una posición favorable para avanzar en el torneo. El equipo espera mantener este impulso positivo y continuar entregando actuaciones sólidas en los partidos siguientes. Con el apoyo ferviente de sus aficionados y la determinación visible en cada jugadora, Japón está bien encaminado para dejar una marca significativa en esta edición de la VNL femenina. Los seguidores del volleyball japonés están entusiasmados y llenos de esperanza para lo que viene, confiando en que su equipo continuará brillando en el escenario internacional.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="vn-image-item" ref={el => imageRefs.current[3] = el}>
                            <div className="news-item">
                                <h2>ARGENTINA CIERRA SU SEMANA</h2>
                                <img src={`imagenes/Imagen cuadro 3.jpg`} alt={`Imagen 3`} />

                                <div className="textweb">
                                    <br />
                                    <p>
                                        La selección masculina de Argentina ha concluido de manera impresionante su participación en la última semana de la Volleyball Nations League (VNL). El equipo mostró una combinación de talento, cohesión y determinación que les permitió terminar la semana con victorias cruciales. Este desempeño sólido ha elevado el ánimo del equipo y ha reforzado su posición en la tabla de clasificación, dejando a los aficionados entusiasmados por el futuro del volleyball argentino.
                                        <br />
                                        <br />
                                        Durante los partidos de esta semana, Argentina demostró su capacidad para competir al más alto nivel, enfrentándose a algunos de los equipos más fuertes del torneo. Jugadores clave como Bruno Lima y Ezequiel Palacios brillaron en la cancha, ofreciendo actuaciones excepcionales tanto en ataque como en defensa. La estrategia del entrenador Marcelo Méndez, centrada en un juego equilibrado y una defensa robusta, resultó ser eficaz, permitiendo al equipo adaptarse y superar a sus oponentes.
                                        <br />
                                        <br />
                                        El cierre positivo de esta semana en la VNL no solo fortalece la confianza del equipo, sino que también envía un mensaje claro a sus rivales sobre el potencial y la ambición de Argentina en el panorama internacional del volleyball. Con el impulso de estos resultados recientes, la selección argentina masculina está bien posicionada para afrontar los desafíos venideros en el torneo y seguir luchando por un lugar destacado en la competición. Los aficionados esperan con ansias las próximas actuaciones del equipo, confiando en que seguirán entregando momentos memorables en la VNL.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>

                        <div className="vn-image-item" ref={el => imageRefs.current[4] = el}>
                            <div className="news-item">
                                <h2>SEKITA REGRESA A LA SELECCIÓN</h2>
                                <img src={`imagenes/Imagen cuadro 4.jpg`} alt={`Imagen 4`} />
                                <div className="textweb">
                                    <br />
                                    <p>
                                        El talentoso armador japonés, Masahiro Sekita, ha hecho su esperado regreso a la selección nacional después de superar una persistente molestia en los tobillos que lo mantuvo fuera de las canchas durante varios meses. Su recuperación ha sido seguida de cerca por aficionados y compañeros de equipo, quienes celebran su regreso como una gran adición al equipo de Japón. Sekita, conocido por su precisión y visión en el juego, está listo para volver a liderar a su equipo en las competiciones internacionales.
                                        <br />
                                        <br />
                                        La lesión de Sekita había sido un golpe significativo para la selección japonesa, ya que su ausencia se sintió profundamente en la dinámica y el rendimiento del equipo. Durante su recuperación, Sekita se sometió a un riguroso programa de rehabilitación y entrenamiento para asegurar su regreso en plena forma. Ahora, con sus tobillos completamente recuperados, está ansioso por demostrar su valía y contribuir al éxito de Japón en los próximos torneos.
                                        <br />
                                        <br />
                                        El regreso de Sekita no solo fortalece la alineación del equipo, sino que también infunde una nueva motivación y confianza entre sus compañeros. Su liderazgo en la cancha y su habilidad para orquestar jugadas son vitales para las aspiraciones de Japón en la Volleyball Nations League y otros campeonatos internacionales. Los aficionados esperan con entusiasmo ver a Sekita en acción nuevamente, sabiendo que su presencia eleva significativamente las posibilidades de victoria para el equipo nacional.
                                    </p>
                                    <br />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolleyballNews;
