import '../../index.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import Search from '../../components/Search';
import Table from '../../components/Table';
export default function ListDecimists() {

  const base_url = "http://localhost:8000/decimists";

  const [obj, setObj] = useState({});
  const [sort,setSort] = useState({sort:"full_name", order:"registration_number"});
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAll = async () =>{
      try{
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&search=${search}`;
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
    
    <div className='wrapper'>
      <div className='container'>
        <div className='head'>
          <Search setSearch={(search) => setSearch(search)}/>
        </div>
        <div className='body'>
          <div className='table_container'>
            <Table decimists={obj.results ? obj.results:[]}/>
          </div>
          <div className='filter_container'></div>
        </div>
      </div>
    </div>



    
    
  );
}