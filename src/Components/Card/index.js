import {useHistory} from 'react-router-dom'
import './index.css'

const Card = ({title, id, rating, poster}) => {
  const imgSrc =
    poster !== null
      ? `https://image.tmdb.org/t/p/w200${poster}`
      : 'https://res.cloudinary.com/ddox0bhgm/image/upload/v1714107978/no-image-icon-23500_yigeyd.jpg'
  const history = useHistory()
  const handleMovieDetails = () => {
    history.push(`/movie/${id}`)
  }
  return (
    <>
      <li className="card-container">
        <img src={imgSrc} className="card-img" alt={title} />
        <section className="card-section">
          <p className="title">{title}</p>
          <p className="rating">Rating: ⭐{rating.toFixed(1)}</p>
          <button
            type="button"
            onClick={handleMovieDetails}
            className="view-details-btn"
          >
            View Details
          </button>
        </section>
      </li>
    </>
  )
}

export default Card
