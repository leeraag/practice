import Dropdown from '../../ui/dropdown/Dropdown'
import CatItem from './cat-item/CatItem'
import {cats} from './cats.data.js'
import styles from './Home.module.css'
import { useState } from 'react'


const Home = () => {
    
    const [selected, setSelected] = useState(cats[0].value)

    const handleChange = (e) => {
        setSelected(e.target.value)
        console.log(e.target.value)
      }

    const filteredCats = cats.filter(
        cat => cat.value == selected
    )
    console.log(filteredCats)
    return (
        <div className={styles.container}>
                <Dropdown selected={selected} onChange={handleChange}/>
                
                <div>
                    {filteredCats.length ? filteredCats.map(cat => (
                    <CatItem key={cat.id} cat={cat}/>
                    ))
                    : <p>There are no cats</p>
                    }
                </div>
        </div>
    )
}

export default Home
