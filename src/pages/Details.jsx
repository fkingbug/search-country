import axios from 'axios'

import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config'
import { Button } from '../components/Button'
import { Info } from '../components/Info'

export const Details = () => {
  const { name } = useParams()
  const { push, goBack } = useHistory()
  console.log(useHistory())
  const [country, setCountry] = useState(null)
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
  }, [name])
  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  )
}
//export const Details = ({ match }) можно передать в пропсах
//match.params.name хранит в себе имя странны по который мы перешли с помощью метода push
//match.params.name ==  const { name } = useParams()
// название name создалось ниже ':name'
//<Route path='/country/:name' component={Details} />
