import Dropdown from '../../ui/dropdown/Dropdown'
//import styles from './Home.module.css'
import CatItem from './cat-item/CatItem'
import {cats} from './cats.data.js'

const Home = () => {
    return (
        <div>
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
