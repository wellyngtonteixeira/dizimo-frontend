import styles from "./styles.module.css"

const Sort = ({sort, setSort}) => {
    const onSelectChange = ({currentTarget: input}) => {
        setSort({sort: input.value, ordering: sort.order});
    };
    const onArrowChange = () => {
        if(sort.ordering === "asc") {
            setSort({sort: sort.sort, ordering: "desc"})
        } else {
            setSort({sort: sort.sort, ordering: "asc"})
        }
    }
    return (
        <div className="{styles.container}">
            <p className="{styles.sort_by}">Ordenar por:</p>
            <select 
                className="{styles.select}" 
                defaultValue={sort.sort}
                onChange={onSelectChange}
                >
                    <option value="full_name">Nome</option>
                    <option value="registration_number">Nº</option>
                </select>
                <button className="{styles.arrow_btn}" onClick={onArrowChange}>
                    <p className="{styles.up_arrow">&uarr;</p>
                    <p className="{styles.down_arrow}">&darr;</p>
                </button>
        </div>
    )
}

export default Sort;