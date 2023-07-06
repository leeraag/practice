import styles from './Dropdown.module.css'

const Dropdown = () => {
    return (
        <div>
            <label>
                Breeds:
                <select className={styles.dropdown}>
                    <option value="abyssinian">Abyssinian</option>
                    <option value="aegean">Aegean</option>
                    <option value="americanBobtail">American Bobtail</option>
                </select>
            </label>   
        </div>
    )
}

export default Dropdown