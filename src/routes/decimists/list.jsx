import '../../index.css'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ListDecimists() {

  const base_url = "http://localhost:8000/decimists/";

  const [obj, setObj] = useState({});
  const [sort,setSort] = useState({sort:"full_name", order:"registration_number"});
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAll = async () =>{
      try{
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}
        &search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);

      }catch(err){
        console.log(err);
      }
    };

    getAll();
  }, [sort, page, search]);

  return (
    
    <form id="search-form" role="search">
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Pesquisar"
        type="search"
        name="q"
      />
      <div id="search-spinner" aria-hidden hidden={true} />
      <div className="sr-only" aria-live="polite"></div>
    </form>



    
    
  );
}