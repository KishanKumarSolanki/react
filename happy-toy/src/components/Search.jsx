import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import items from '../data.js';
import Card from './Card.jsx';

const Search = () => {
  const { term } = useParams(); // Get search term from URL
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filtered = () => {
      const data = items.filter((c) =>
        c.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilter(data);
    };
    filtered();
  }, [term]);

  return (<>
      <h1 className="text-center my-4">Search Results for "{term}"</h1>
    <div className="container">
      {filter.length > 0 ? (
        <Card items={filter} />
      ) : (
        <p className="text-center text-muted">No results found.</p>
      )}
    </div>
  </>
  );
};

export default Search;