import React, { useState } from "react";
import "./SearchPage.css";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            fetchResults(searchTerm);
        }
    };

    const fetchResults = (query) => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            .then(response => response.json())
            .then(data => {
                setResults(data.results);
            })
            .catch(error => {
                console.error('Error:', error);
                setResults([]);
            });
    };

    const convertToDollars = (price) => {
        const parsedPrice = parseFloat(price);

        if (!isNaN(parsedPrice)) {
            return `$ ${(parsedPrice / 100).toFixed(2)} USD`;
        } else {
            return "Precio no disponible";
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-page-container">
            <h1>Buscador de Productos</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productSearch">Buscar producto:</label>
                <input
                    type="text"
                    id="productSearch"
                    value={searchTerm}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Buscar</button>
            </form>


            <div className="search-results">
                {results.length === 0 && searchTerm.trim() !== '' && <p>No se encontraron productos.</p>}
                {results.map((product) => (
                    <div key={product.id} className="product">
                        <div className="image-container">
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className="info">
                            <p><strong>{product.title}</strong></p>
                            <p>Precio: {convertToDollars(product.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
