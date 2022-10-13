import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  console.log(location.state.starship.url)
  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [])
  console.log(starshipDetails)

  return (
    <>
      <h1>Starship Details</h1>
      {starshipDetails.name ? 
        <>
          <h3>NAME: {starshipDetails.name}</h3>
          <h3>MODEL: {starshipDetails.model}</h3>
          <Link to='/'>RETURN</Link>
        </> 
        : 
        <p>Lodaing details...</p>
      }
    </>
  );
}

export default StarshipDetails;