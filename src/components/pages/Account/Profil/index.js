import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { profilInfosData } from 'src/data/profilData';

import './profil.scss';

function Profil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIsLogged = useSelector((state) => state.users.isLogged);
  const userInfos = useSelector((state) => state.users.user);
  const logLocalstorage = useSelector((state) => state.users.logLocalstorage);

  useEffect(() => {
    if (userIsLogged === false && logLocalstorage === true) {
      navigate('/signin');
    }
  }, []);

  const handleInfosIsNull = (info, type) => {
    if (info === '' || info === null) {
      return 'Information non communiquer';
    }
    if (type === 'created_at') {
      return new Date(info).toLocaleDateString('fr-FR');
    }
    return info;
  };

  const handleClickLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <main className="profil">
      <h1 className="profil-title">Profil</h1>

      <div className="profil__infos">
        {profilInfosData.map((profil) => (
          <div className="profil__infos__items" key={profil.id}>
            <p className="profil__infos__items-title">{profil.title}</p>
            <span className="profil__infos__items-content">
              {handleInfosIsNull(
                userInfos[profil.dataToShearch],
                profil.dataToShearch
              )}
            </span>
          </div>
        ))}
      </div>

      <button
        className="profil-button"
        type="button"
        onClick={handleClickLogout}
      >
        Se deconnecter
      </button>
    </main>
  );
}

export default Profil;
