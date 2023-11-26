import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa6';
import { IoDiamond } from 'react-icons/io5';

const Navbar = ({ setAllBooks, setActiveBook }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchItem}`
    );
    const data = await res.json();
    setAllBooks(data.items);
    setActiveBook(null);
    setSearchItem('');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="nav-brand">KaezonBooks</div>
      <div className="nav-search" style={{ display: 'flex' }}>
        <div className="search" style={{ display: 'flex' }}>
          <div className="search-icon">
            <FaMagnifyingGlass />
          </div>
          <input
            type="text"
            placeholder="Enter search title for book"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="nav-icons">
        <BsFillBookmarkHeartFill />
        <FaBell />
        <IoDiamond />
        <img
          src="https://source.unsplash.com/random"
          alt=""
          style={{ borderRadius: '50%', height: '50px', width: '50px' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
