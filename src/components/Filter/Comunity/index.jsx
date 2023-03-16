import styles from "./styles.module.css"

const Comunity = ({comunities, filterComunity, setFilterComunity}) => {
    const onChange = ({currentTarget: input}) => {
        if(input.checked){
            const state = [...filterComunity, input.value];
            setFilterComunity(state);
        }else {
            const state = filterComunity.filter((val)=> val !== input.value);
            setFilterComunity(state);
        }

    }
    return (
        <div className="{styles.container}">
            <h1 className="{styles.heading}">Filtrar por Comunidade</h1>
            <div className="{styles.comunity_container">
                {comunities.map((comunity) => (
                    <div className="{styles.comunity}" key={comunity.id}>
                        <input 
                        className="{styles.comunity_input}"
                        type="checkbox"
                        value={comunity.id} 
                        onChange={onChange}
                        />
                        <p className="{styles.comunity_label}">{comunity.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comunity;