import React, { useState } from 'react';

const SearchBar = (props) => {

  const handleOnChange=(event)=>{
    props.setSearch(event.target.value);
  }

  return (
    <div className="container" style={{ width: "500px", marginTop: "60px" }}>
      <form className="d-flex" role="search">
        <input
          className="form-control me-1"
          type="search"
          placeholder="Search for any movie..."
          value={props.search}
          onChange={handleOnChange}
        />
        <button className="btn btn-outline-success" type="submit" >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;