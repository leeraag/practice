import Dropdown from '../../ui/dropdown/Dropdown'
import CatItem from './cat-item/CatItem'
import {cats} from './cats.data.js'
import styles from './Home.module.css'

const Home = () => {

    return (
        <div className={styles.container}>
                <Dropdown />
                
                <div>
                    {cats.length ? cats.map(cat => (
                    <CatItem key={cat.id} cat={cat}/>
                    ))
                    : <p>There are no cats</p>
                    }
                </div>
        </div>
    )
}

export default Home
