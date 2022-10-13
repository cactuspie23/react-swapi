import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])


  return (
    <div className="detail-container">
      {starshipDetails.name ? 
        <div className='info-container'>
          <h3>NAME: {starshipDetails.name}</h3>
          <h3>MODEL: {starshipDetails.model}</h3>
          <Link to='/'>RETURN</Link>
        </div> 
        : 
        <p>Lodaing details...</p>
      }
    </div>
  );
}

export default StarshipDetails;