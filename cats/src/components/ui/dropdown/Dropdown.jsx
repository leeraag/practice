import styles from './Dropdown.module.css'
import {cats} from '../../screens/home/cats.data.js'
import { useState } from 'react'

const Dropdown = () => {
    const [selected, setSelected] = useState('')
    return (
        <div>
            <label>
                Breeds:
                    <select 
                        className={styles.dropdown} 
                        
                        onChange={e => {
                            setSelected(e.target.value)
                            console.log(e.target.value)
                        }}
                    >
                        {cats.map(cat => <option key={cat.id} value={cat.value}>{cat.breed}</option>)}
                    </select>
                
            </label>   
        </div>
    )
}

export default Dropdown