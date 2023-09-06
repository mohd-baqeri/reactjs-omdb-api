const MovieCard = ({ movie }) => {
    console.log(movie);
    return (
        <div className='movie'>
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/200/300'} alt={movie.title} />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard;