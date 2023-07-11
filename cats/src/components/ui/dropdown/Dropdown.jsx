import styles from './Dropdown.module.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

const baseURL = 'https://api.thecatapi.com/v1/breeds/'
axios.defaults.headers.common['x-api-key'] = 'live_ipBxfmCs6TmpOZCOKk4hGop0DCUBt8rEJ2GacV40K1hiLjJwuFc9Z2c7Z1TB0esj'

const Dropdown = ({selected, onChange}) => {
    //console.log(selected)
    const [breedIDs, setBreedIDs] = useState([])
    useEffect(() => {
        axios.get(baseURL).then(response => {
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
                        value="default"
                    >
                        <option disabled value="default">Choose a cat</option>
                        {breedIDs.map(breedID => <option key={breedID.id}>{breedID.name}</option>)}
                    </select>
            </label>   
        </div>
    )
}

export default Dropdown