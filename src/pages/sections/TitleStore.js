import React from 'react';
import './styles/titleStore.css'

function TitleStore(props) {
  return (
    <div className="TitleStore">
      <span className="TitleStore_title">{props.title}</span>
      <span className="TitleStore_subTitle">{props.subTitle}</span>
    </div>
  )
}

export default TitleStore;
