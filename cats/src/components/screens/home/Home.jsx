import axios from 'axios'
import Dropdown from '../../ui/dropdown/Dropdown'
import CatItem from './cat-item/CatItem'
import styles from './Home.module.css'
import {useEffect, useState} from 'react'

const baseURL = 'https://api.thecatapi.com/v1/breeds/'
axios.defaults.headers.common['x-api-key'] = 'live_ipBxfmCs6TmpOZCOKk4hGop0DCUBt8rEJ2GacV40K1hiLjJwuFc9Z2c7Z1TB0esj'
const Home = () => {
    const [breeds, setBreeds] = useState([])
    useEffect(() => {
        axios.get(baseURL).then(response => {
            setBreeds(response.data)
        })
    }, [])
    const [selected, setSelected] = useState("default")
    const handleChange = (e) => {
        setSelected(e.target.value)
      }
 
    const filteredBreed = breeds.filter(
        breed => breed.name == selected
    )

    return (
        <div className={styles.container}>
                <Dropdown selected={selected} onChange={handleChange}/>
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
