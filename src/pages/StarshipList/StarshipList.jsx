import { useEffect, useState } from "react";
import { getStarshipsList } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipsList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h3>Starship List</h3>
      {starshipList.length ? 
      <>
        {starshipList.map(starship => 
          <div>
            {starship.name}
          </div>
        )}
      </> 
      : 
      <>
        <h4>Loading starships...</h4>
      </>}
    </>
  )
}

export default StarshipList