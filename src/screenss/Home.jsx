import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    const goToVolleyballNews = (imageNumber) => {
        return `/volleyball-news?image=${imageNumber}`;
    };

    return (
        <div className="home-container">
            <h1 className="home-title custom-font">Bienvenido a La Combi Sports News</h1>

            <div className="home-after-title">
                <p>
                    Entérate de todas las novedades del MUNDO DEL VOLEIBOL y próximamente de otros deportes, contamos con más de 50k SEGUIDORES en TikTok.
                </p>
            </div>

            <div className="home-content">
                <div className="home-image-grid-container">
                    <div className="home-image-grid">
                        <div className="image-item">
                            <Link to={goToVolleyballNews(1)}>
                                <img src="imagenes/Imagen cuadro 1.jpg" alt="Imagen 1" />
                                <div className="image-text">
                                    <p>Japón acoge nuevamente la VNL</p>
                                </div>
                            </Link>
                        </div>

                        <div className="image-item">
                            <Link to={goToVolleyballNews(2)}>
                                <img src="imagenes/Imagen cuadro 2.jpg" alt="Imagen 2" />
                                <div className="image-text">
                                    <p>Japón se estrena con victoria</p>
                                </div>
                            </Link>
                        </div>

                        <div className="image-item">
                            <Link to={goToVolleyballNews(3)}>
                                <img src="imagenes/Imagen cuadro 3.jpg" alt="Imagen 3" />
                                <div className="image-text">
                                    <p>Argentina cierra su semana</p>
                                </div>
                            </Link>
                        </div>

                        <div className="image-item">
                            <Link to={goToVolleyballNews(4)}>
                                <img src="imagenes/Imagen cuadro 4.jpg" alt="Imagen 4" />
                                <div className="image-text">
                                    <p>Sekita regresa a la selección</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="home-boton">
                <Link to="/voley-pics">
                    <button className="home-button custom-font">Ver Resultados</button>
                </Link>

                <Link to="/volleyball-news">
                    <button className="home-button custom-font">Ver Combi News</button>
                </Link>
            </div>

            <div className="home-2section">
                <div className="home-container2">
                    <h2 className="custom-font">NUESTRA HISTORIA</h2>
                </div>

                <div className="home-content2">
                    <p>
                        Todo comenzó como un grupo de amigos, apasionados por el volleyball, jugamos todos los fines de semana, y un día el que sería el próximo propietario de LA COMBI SPORTS NEWS decidió empezar a compartir información de lo que más le apasionaba.
                    </p>
                    <br />
                    <p>
                        Guiados por la visión de nuestro fundador, Javier, transformamos gradualmente nuestra página en mucho más que una colección de momentos destacados. Con ingenio y determinación, comenzamos a ofrecer noticias, análisis y debates sobre el emocionante mundo del volleyball. Desde entrevistas exclusivas con jugadores hasta coberturas en vivo de los eventos más importantes, nos esforzamos por ofrecer a nuestros seguidores contenido fresco y entretenimiento de calidad.
                    </p>
                    <br />
                    <p>
                        A medida que crecía nuestra comunidad en TikTok, nos dimos cuenta del impacto que podíamos tener en la forma en que los aficionados experimentaban el deporte. Nos convertimos en una fuente confiable de información y entretenimiento, conectando a jugadores y fanáticos en una red apasionada que celebraba la emoción y la camaradería del volleyball. En La Combi Sports News, nuestra historia sigue evolucionando, y esperamos seguir siendo una parte integral del vibrante mundo del volleyball en línea.
                    </p>
                </div>

                <div className="Imagen Combi Sola">
                    <img src="imagenes/LOGO COMBI.png" alt="Imagen 5" style={{ width: '300px', height: 'auto', marginTop: '0px', marginBottom: '20px' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;
