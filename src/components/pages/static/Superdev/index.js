import superDevData from 'src/data/superDevData';

import './superdev.scss';

function Superdev() {
  return (
    <main className="superdev">
      <h2 className="superdev-title">SuperDevs</h2>
      <ul className="superdev__list">
        {superDevData.map((dev) => (
          <ol className="superdev__list__perso" key={dev.id}>
            <img
              className="superdev__list__perso-image"
              src={dev.img}
              alt={dev.alt}
            />
            <p className="superdev__list__perso-name">{dev.name}</p>
            <p className="superdev__list__perso-description">
              {dev.description}
            </p>
            <p className="superdev__list__perso-role">{dev.role}</p>
          </ol>
        ))}
      </ul>
    </main>
  );
}

export default Superdev;
