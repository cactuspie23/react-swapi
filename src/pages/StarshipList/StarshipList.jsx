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
      <div>
        <h3>Starship List</h3>
        {starshipList.length ? 
        <>
          <div className="card-container">
          {starshipList.map(starship =>
            <div key={starship.name} className="card">
              <Link to='/starships' state={{starship}}>
                {starship.name}
              </Link>
            </div>
            )}
          </div>
            
        </> 
        : 
        <>
          <h4>Loading starships...</h4>
        </>}
      </div>
    </>
  )
}

export default StarshipList