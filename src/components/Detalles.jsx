import { useParams } from "react-router"
import {useEffect, useState} from 'react'

import Card from './Card'

// import 
const Detalles =()=>{
    const {id} = useParams()
    const [civilization, setCivilization] = useState({})

    useEffect(() => {
        fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
          .then(res => res.json())
          .then(data => setCivilization(data))
      }, [id])
  

 

    return(
        <>
        <h2> More information about 
            <span className="civilization"> {civilization.name} 
            </span>
        </h2>

        <Card
         id={civilization.id}
         name={civilization.name} 
         expansion={civilization.expansion} 
         civilization_bonus={civilization.civilization_bonus}
         />
        </>
    )
}

export default Detalles