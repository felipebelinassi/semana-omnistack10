import React from 'react';

import './styles.css';

function DevItem(props) {
  const { dev } = props;

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatarUrl} alt={dev.name}/>
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.gitHubUserName}`}>Acessar perfil no Github</a>
    </li>
  )
}

export default DevItem;