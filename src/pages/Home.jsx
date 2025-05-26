import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import './Home.css';

function Home({ carrito, setCarrito }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '7a39b201';
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=batman`;

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === 'True') {
                    // le agregamos un precio random a cada película
                    const moviesConPrecio = data.Search.map(movie => ({
                        ...movie,
                        price: Math.floor(Math.random() * 10) + 5
                    }));
                    setMovies(moviesConPrecio);
                    setError(null);
                } else {
                    setError(data.Error);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Error al cargar los datos');
                setLoading(false);
            });
    }, []);

    const agregarAlCarrito = (pelicula) => {
        setCarrito([...carrito, pelicula]);
    };

    return (
        <div className="home-container">
            <h1>Catálogo de películas</h1>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        pelicula={movie}
                        onAdd={() => agregarAlCarrito(movie)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;

