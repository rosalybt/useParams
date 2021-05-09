import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from "../age-of-empires-II-generacion-xbox-2.jpg";
import "../App.css";

const Empires = ({ history, location, match }) => {

  const [productos, setProducto] = useState({})

  useEffect(() => {
    fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
      .then(res => res.json())
      .then(data => setProducto(data))
  }, [])

  return (
    <>
      <h1>
        Empires
        </h1>
      <div className="img_brand">
        <img src={img1} alt="Brand img" />
      </div>


      <ul>
        {productos.civilizations && productos.civilizations.map(item => (

          <li key={item.id}>
            <Link to={`/civilization/${item.id}`}>
              {item.name}
            </Link>
          </li>

        ))}
      </ul>

    </>
  )
}

export default Empires