import styles from "./styles.module.css"

const Search = ({ setSearch }) => {
    return (
        <input 
            type="text"
            className={styles.search}
            placeholder="Pesquisar"
            onChange={({currentTarget: input}) => setSearch(input.value)} 
        />
    )

};

export default Search;