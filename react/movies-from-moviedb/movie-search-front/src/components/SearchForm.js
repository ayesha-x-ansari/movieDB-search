import React  from 'react';

const SearchForm = (props)  => {
  
  const {
    value,
    onChange,
    onSubmit,
  } = props;  

    return (

       <form onSubmit={onSubmit}>
        <input style={{
          type: 'text',
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={onChange} value={value} placeholder="Enter search term"/>
        <button className="btn=btn-search">Search</button>
        </form>
    )
}

export default SearchForm;
