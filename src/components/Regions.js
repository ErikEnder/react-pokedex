import { React, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { regionAtom } from '../state/region-state'
import axios from 'axios'

export default function DisplayRegions() {
  const [region, setRegion] = useRecoilState(regionAtom)

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/generation/1/')
        console.log(response.data)
        setRegion(response.data)
      }catch(error) {
        console.log(error)
        return []
      }
    }
    fetchRegion()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('Region: ', region)

  function SortPokemon() {
    region.pokemon_species.map((species, index) => {
      return (
        <div key={index}>
          <p>{species.name}</p>
        </div>
      )
    })
  }
  
  return (
    <>
      {SortPokemon()}
    </>
  )
}