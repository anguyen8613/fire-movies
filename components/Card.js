const Card = ({ thumbnail }) => {
    return <img className="card-img" src={thumbnail.url} alt={thumbnail.title}/>
}

export default Card