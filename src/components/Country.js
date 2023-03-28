import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import "../country.css"

const Country = () => {
  const [country, setCountry] = useState([])
  const [loading, setLoading]= useState(true)
  const {name} = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      fetch(`https://restcountries.com/v2/name/${name}`)
      .then((response) => {
       return response.json()
        
      
      })
      .then((data) => {
        setCountry(data)
        console.log(country)
        setLoading(false)

      })
      .catch((error)=> {
        console.log(error)

      })

    }
    fetchCountryData()
  }, [name])
  return (
    <>
      <section className='country'>
      <Link to= "/" className="btn btn-light">
        <i className='fas fa-arrow-left'></i>Back Home
      </Link>
        {loading ? "loading":country.map((c) => {
          const {numericCode, flag, name, nativeName, population, region, subregion, capital,
          topLevelDomain, currencies, languages, borders}=c
          console.log(c)

          return (
            <article key={numericCode}>
            <div className='country-inner'>
              <div className='flag'>
                <img src={flag} alt={name} />
              </div>

              <div className='country-details'>
              <div> 
              <h2>{name.common}</h2>

                <h5>Native Name: <span>{nativeName}</span> </h5>
                <h5>Population: <span>{population}</span></h5>
                <h5>Region:<span>{region}</span></h5>
                <h5>Sub Region:<span>{subregion}</span></h5>
                <h5>Capital: <span>{capital}</span>
                {' '}
                
                </h5>
                <h5>Top Level Domain:<span>{topLevelDomain}</span></h5>
                <h5>Currencies:<span>{currencies[0].name}</span></h5>
                <h5>Languages:<span>{languages[0].name}</span></h5>
                </div>
                </div>

              </div>

              <div>
                <h3>Border Countries: </h3>
                <div className='borders'>
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    
    </>
  );
}

export default Country;
