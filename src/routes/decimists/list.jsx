import '../../index.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import Search from '../../components/Search';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Sort from '../../components/Sort';
import Comunity from '../../components/Filter/Comunity'
export default function ListDecimists() {

  const base_url = "http://localhost:8000/decimists";
  const comunities_url = "http://localhost:8000/comunities";

  const [obj, setObj] = useState({});
  const [comunities, setComunities] = useState({});
  const [sort,setSort] = useState({sort:"full_name", order:"registration_number"});
  const [filterComunity, setFilterComunity] = useState([]);
  const [page,setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAll = async () =>{
      try{
        const url = `${base_url}?page=${page}&ordering=${sort.sort},${sort.order}
        &comunity=${filterComunity.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);

      }catch(err){
        console.log(err);
      }
    };

    const getAllComunities = async () =>{
      try{
        const { data } = await axios.get(comunities_url);
        setComunities(data);
        console.log(data);

      }catch(err){
        console.log(err);
      }
    };

    getAll();
    getAllComunities();
  }, [sort, filterComunity, page, search]);

  return (
    
    <div className='wrapper'>
      <Search setSearch={(search) => setSearch(search)}/>
      <div className='filter_container'>
        <Sort sort={sort} setSort={(sort) => setSort(sort)} />
        <Comunity 
          filterComunity={filterComunity}
          comunities={comunities.results ? comunities.results : []}
          setFilterComunity={(comunity) => setFilterComunity(comunity)}
        />
      </div>
      <div className='table_container'>
            <Table decimists={obj.results ? obj.results:[]} comunities={comunities.results ? comunities.results:[]}/>
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