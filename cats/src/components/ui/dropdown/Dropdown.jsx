import styles from './Dropdown.module.css'
//import {cats} from '../../screens/home/cats.data.js'
import axios from 'axios'
import {useEffect, useState} from 'react'

const baseURL = 'https://api.thecatapi.com/v1/breeds/'
axios.defaults.headers.common['x-api-key'] = 'live_ipBxfmCs6TmpOZCOKk4hGop0DCUBt8rEJ2GacV40K1hiLjJwuFc9Z2c7Z1TB0esj'

const Dropdown = ({selected, onChange}) => {
    const [breedIDs, setBreedIDs] = useState([])
    useEffect(() => {
        axios.get(baseURL).then(response => {
            //console.log(response.data[0])
            //console.log(response.data)
            setBreedIDs(response.data)
        })
    }, [])
    return (
        <div>
            <label>
                Breeds:
                    <select 
                        className={styles.dropdown} 
                        onChange={onChange}
                        value={selected}
                    >

                        {breedIDs.map(breedID => <option key={breedID.id}>{breedID.name}</option>)}
                    </select>
            </label>   
        </div>
    )
}

export default Dropdown