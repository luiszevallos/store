import React from 'react';
import './styles/titlesearch.css'

function TitleSearch(props) {
  return (
    <div className="TitleSearch">
      <span>{props.cant} Products</span>
      <input 
        type="text" 
        name="search"
        onChange={props.onChange}
        placeholder="Search product..."
        value={props.value}
      />
    </div>
  )
}

export default TitleSearch;