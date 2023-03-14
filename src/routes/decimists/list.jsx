import '../../index.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import Search from '../../components/Search';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Sort from '../../components/Sort';
export default function ListDecimists() {

  const base_url = "http://localhost:8000/decimists";

  const [obj, setObj] = useState({});
  const [sort,setSort] = useState({sort:"full_name", order:"registration_number"});
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAll = async () =>{
      try{
        const url = `${base_url}?page=${page}&ordering=${sort.sort},${sort.order}&search=${search}`;
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
      <Search setSearch={(search) => setSearch(search)}/>
      <div className='filter_container'>
        <Sort sort={sort} setSort={(sort) => setSort(sort)} />
      </div>
      <div className='table_container'>
            <Table decimists={obj.results ? obj.results:[]}/>
            <Pagination 
              page={page}
              limit={5}
              total={obj.count ? obj.count:0}
              setPage={(page)=> setPage(page)}
            />
      </div>
      
    </div>



    
    
  );
}