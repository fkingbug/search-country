import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const { push } = useHistory()
  //useHistory возвращает объект и push - метод этого объекта

  const handleSearch = (search, region) => {
    let data = [...countries]
    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }
    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilteredCountries(data)
  }
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data)
      })
    }
  }, [])
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region.toLocaleString(),
              },
              {
                title: 'Capital',
                description: c.capital.toLocaleString(),
              },
            ],
          }
          return <Card key={c.name} onClick={() => push(`/country/${c.name}`)} {...countryInfo} />
        })}
      </List>
    </>
  )
}
