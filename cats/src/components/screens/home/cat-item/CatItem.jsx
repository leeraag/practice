import styles from '../Home.module.css'


const CatItem = ({cat}) => {
    return (
        <div >
            <div key={cat.id} className={styles.item}>
                <div 
                    className={styles.image}
                    style={
                        {backgroundImage: `url(${cat.image})`}
                    }
                />
                <h1>{cat.breed}</h1>
                <strong>Id: {cat.id}</strong>
                <p>{cat.description}</p>
                <div>
                    <i>{cat.temperament}</i>
                    <br />
                    <p>{cat.country}</p>
                    <br />
                    <p>{cat.weight} kgs</p>
                    <br />
                    <p>{cat.als} avarage life span</p>
                    
                    <br />
                </div>
                <a href='#'> Wikipedia </a>
            </div>
           
        </div>
    )
}

export default CatItem