import styles from './Dropdown.module.css'
import {cats} from '../../screens/home/cats.data.js'

const Dropdown = ({selected, onChange}) => {

    return (
        <div>
            <label>
                Breeds:
                    <select 
                        className={styles.dropdown} 
                        onChange={onChange}
                        value={selected}
                    >

                        {cats.map(cat => <option key={cat.id} value={cat.value}>{cat.breed}</option>)}
                    </select>
            </label>   
        </div>
    )
}

export default Dropdown