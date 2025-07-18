// components/SearchBar.tsx
import React from 'react';
import { FaSearch, FaUndo } from 'react-icons/fa';

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
  onReset: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, onSearch, onReset }) => {
  return (
    <div style={{ margin: '1rem 0', display: 'flex', gap: '1rem', maxWidth: '500px' }}>
      <input
        type="text"
        placeholder="Search Username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          background: 'none',
          color: 'white',
          boxShadow:
            'rgb(255 255 255 / 25%) 0px 54px 55px, rgb(255 255 255 / 12%) 0px -12px 30px, rgb(255 255 255 / 12%) 0px 4px 6px, rgb(193 193 193 / 17%) 0px 12px 13px, rgb(255 255 255 / 9%) 0px -3px 5px',
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          backgroundColor: 'rgb(53 125 173)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <FaSearch />
      </button>
      <button
        onClick={onReset}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          backgroundColor: 'rgb(139 24 12)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <FaUndo />
      </button>
    </div>
  );
};

export default SearchBar;
