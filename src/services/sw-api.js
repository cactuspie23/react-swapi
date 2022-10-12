const baseUrl = "https://swapi.dev"

export async function getStarshipsList() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}