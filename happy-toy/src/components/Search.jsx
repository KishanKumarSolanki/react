import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import items from './data';
import Card1 from './Card1.jsx';

const Search = () => {
    const {term} = useParams();
    const [filter, setFilter] = useState([])
    
    useEffect(() => {
        const filtered = () =>{
            const data = items.filter((c)=>c.title.toLowerCase().includes(term.toLowerCase()));
            setFilter(data);
        }
        filtered();
    }, [term])
  return (
    <Card1 items={filter} />
  )
}

export default Search