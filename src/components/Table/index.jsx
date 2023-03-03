import styles from "./styles.module.css"

const Table = ({ decimists }) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.registerNumber_tab}>Nº</p>
                <p className={styles.name_tab}>Nome Completo</p>
                <p className={styles.registerNumber_tab}>Telefone</p>
            </div>
            {decimists.map((decimist) => (
                <div className={styles.decimist} key={decimist.id}>
                    <div className={styles.registration_container}>
                        <p className={styles.registration_decimist}>
                            {decimist.registration_number}
                        </p>
                    </div>
                    <div className={styles.name_container}>
                        <p className={styles.name_decimist}>
                            {decimist.full_name}
                        </p>
                    </div>
                    <div className={styles.phone_container}>
                        <p className={styles.phone_decimist}>
                            {decimist.phone_number}
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Table;