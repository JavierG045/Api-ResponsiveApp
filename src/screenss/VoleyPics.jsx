import React from 'react';
import './VoleyPics.css';

const VoleyPics = () => {
    const images = [
        {
            src: 'imagenes/RESULTADOD_5.png', caption: 'En un emocionante partido de la VNL, Países Bajos venció a Serbia 3-1. Las neerlandesas destacaron por su potente ataque y sólida defensa, asegurando una victoria clave en la competición'
        },

        { src: 'imagenes/RESULTADOD_6.png', caption: 'En un partido dominante de la VNL, Turquía venció a Tailandia 3-0 en la categoría femenina. Las turcas demostraron su superioridad con un juego sólido y efectivo, asegurando una victoria contundente sin ceder ningún set.' },

        { src: 'imagenes/RESULTADOD_7.png', caption: 'Japón arrasó a Corea en un partido de la VNL femenina, imponiéndose con un contundente 3-0. Las japonesas mostraron un juego dinámico y eficiente, asegurando la victoria sin dar oportunidad a Corea en ningún set.' },

        { src: 'imagenes/RESULTADOD_8.png', caption: 'Brasil superó a Polonia 3-1 en un emocionante enfrentamiento femenino de la VNL. Las brasileñas mostraron su poderío con un juego estratégico y efectivo, asegurando la victoria a pesar de la resistencia de Polonia en el segundo set.' },
        { src: 'imagenes/RESULTADOD_10.png', caption: 'En un emocionante encuentro masculino de la VNL, Brasil derrotó a Irán 3-1. Los brasileños demostraron su dominio con un juego potente y táctico, asegurando la victoria a pesar del esfuerzo de Irán en el segundo set.' },

        {
            src: 'imagenes/RESULTADOD_15.png', caption: 'En un emocionante partido de voleibol masculino en la VNL, Argentina superó a Canadá con un marcador de 3-1. Los argentinos mostraron un juego sólido y determinado, dominando tres sets consecutivos después de un inicio competitivo.'
        },

        { src: 'imagenes/RESULTADOD_26.png', caption: 'En un épico duelo de la VNL masculina, Argentina logró una emocionante victoria sobre Serbia con un ajustado marcador de 3-2. Los argentinos mostraron determinación y habilidad táctica para asegurar la victoria, destacando por su resistencia y eficacia en los momentos decisivos del partido.' },

        { src: 'imagenes/RESULTADOD_46.png', caption: 'En un emocionante partido de la VNL masculina, Japón superó a Alemania en un ajustado encuentro 3-2. Los japoneses mostraron una notable habilidad técnica y resistencia física, asegurando la victoria en un emocionante quinto set que demostró la intensidad y competitividad del encuentro.' },
    ];

    return (
        <div className="voleypics-container">
            <div className='vp-title'>
                <h2>Resultados VNL by LaCombiSports</h2>
                <p>Revisa los resultados de los últimos partidos de la Volleyball Nations League</p>
            </div>
            <div className="voleypics-grid">
                {images.map((image, index) => (
                    <div key={index} className="voleypics-item">
                        <img src={image.src} alt={`Voley Pic ${index + 1}`} />
                        <div className="overlay">
                            <div className="text">{image.caption}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VoleyPics;
