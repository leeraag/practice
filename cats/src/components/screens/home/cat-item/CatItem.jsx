import styles from '../Home.module.css'


//const CatItem = ({cat}) => {
    const CatItem = ({breed}) => {
    return (
        <div>
            <div key={breed.id} className={styles.item}>
                <div 
                    className={styles.image}
                    
                    style={
                        {backgroundImage: `url(${breed.image})`}
                    }
                /> {/* url ??? */}
                <h1>{breed.name}</h1>
                <strong>Id: {breed.id}</strong>
                <p>{breed.description}</p>
                <div>
                    <i>{breed.temperament}</i>
                    <br />
                    <p>{breed.origin}</p>
                    <br />
                    <p>{breed.weight.imperial} kgs</p>
                    <br />
                    <p>{breed.life_span} avarage life span</p>
                    
                    <br />
                </div>
                <a href='#'> Wikipedia </a>
            </div>
           
        </div>
    )
}

export default CatItem