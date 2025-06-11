import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import BookCard  from './components/BookCard';

export default function App() {
  const [books, setBooks]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios
      .get('https://openlibrary.org/subjects/world.json')
      .then(res => {
        const works = res.data.works.map(w => ({
          id: w.key,
          title: w.title,
          authors: w.authors.map(a => a.name).join(', ')
        }));
        setBooks(works);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading books…</p>;

  // filter + reorder
  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.authors.toLowerCase().includes(search.toLowerCase())
  );
  const sel   = filtered.filter(b => selected.includes(b.id));
  const unsel = filtered.filter(b => !selected.includes(b.id));
  const ordered = [...sel, ...unsel];

  const toggle = id =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev]
    );

  return (
    <div className="app-container">
      {/* Fixed full‐width header/search bar */}
      <div className="header-search">
        <div className="header">
          <span className="header-icon">📚</span>
          <h1 className="title">Book List</h1>
        </div>
        <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      {/* Scrollable book list below */}
      <div className="book-list">
        {ordered.map(b => (
          <BookCard
            key={b.id}
            title={b.title}
            authors={b.authors}
            selected={selected.includes(b.id)}
            onClick={() => toggle(b.id)}
          />
        ))}
      </div>
    </div>
  );
}
