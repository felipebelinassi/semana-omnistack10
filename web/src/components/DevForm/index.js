import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
  const [gitHubUserName, setGitHubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      gitHubUserName,
      techs,
      latitude,
      longitude,
    });

    setGitHubUserName('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="gitHubUserName">Usuário do Github</label>
        <input
          name="gitHubUserName"
          id="gitHubUserName"
          required
          value={gitHubUserName}
          onChange={event => setGitHubUserName(event.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            type="number" 
            name="latitude" 
            id="latitude"
            required
            value={latitude}
            onChange={event => setLatitude(event.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={event => setLongitude(event.target.value)}
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  )
}

export default DevForm;