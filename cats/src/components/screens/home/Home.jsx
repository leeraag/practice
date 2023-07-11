import axios from 'axios'
import Dropdown from '../../ui/dropdown/Dropdown'
import CatItem from './cat-item/CatItem'
//import {cats} from './cats.data.js'
import styles from './Home.module.css'
import {useEffect, useState} from 'react'

const baseURL = 'https://api.thecatapi.com/v1/breeds/'
axios.defaults.headers.common['x-api-key'] = 'live_ipBxfmCs6TmpOZCOKk4hGop0DCUBt8rEJ2GacV40K1hiLjJwuFc9Z2c7Z1TB0esj'
const Home = () => {
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        axios.get(baseURL).then(response => {
            //console.log(response.data[0])
            console.log(response.data)
            setBreeds(response.data)
        })
    }, [])
    const [selected, setSelected] = useState(breeds[0])
    const handleChange = (e) => {
        setSelected(e.target.value)
        console.log(e.target.value)
      }

    /*const filteredCats = cats.filter(
        cat => cat.value == selected
    )*/
    const filteredBreed = breeds.filter(
        breed => breed.value == selected
    )

    return (
        <div className={styles.container}>
                <Dropdown selected={selected} onChange={handleChange}/>
                
                {/*<div>
                    {filteredCats.length ? filteredCats.map(cat => (
                    <CatItem key={cat.id} cat={cat}/>
                    ))
                    : <p>There are no cats</p>
                    }
                </div>*/}
                {/*<div>
                    {breeds.length ? breeds.map(breed => (
                    <CatItem key={breed.id} breed={breed}/>
                    ))
                    : <p>There are no cats</p>
                    }
                </div>*/}
                <div>
                    {filteredBreed.length ? filteredBreed.map(breed => (
                    <CatItem key={breed.id} breed={breed}/>
                    ))
                    : <p>There are no cats</p>
                    }
                </div>
        </div>
    )
}

export default Home
