import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIsLogged = useSelector((state) => state.users.isLogged);
  const userInfos = useSelector((state) => state.users.user);

  useEffect(() => {
    if (userIsLogged === false) {
      navigate('/signin');
    }
  }, []);

  const handleInfosIsNull = (info) => {
    if (info === '' || info === null) {
      return 'Information non communiquer';
    }
    return info;
  };

  const handleInfosIsDate = (date) => {
    if (date === '' || date === null) {
      return 'Information non communiquer';
    }
    const newDate = new Date(date).toLocaleDateString('fr-FR');
    return newDate;
  };

  const handleClickLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <main>
      <h1>Profil</h1>

      <div>
        <p>Prenom : {handleInfosIsNull(userInfos.firstname)}</p>
        <p>Nom : {handleInfosIsNull(userInfos.lastname)}</p>
        <p>Date de naissance : {handleInfosIsNull(userInfos.birthday)}</p>
        <p>Email : {handleInfosIsNull(userInfos.email)}</p>
        <p>Numero de telephone : {handleInfosIsNull(userInfos.phone_number)}</p>
        <p>Adresse : {handleInfosIsNull(userInfos.address)}</p>
        <p>Code postal : {handleInfosIsNull(userInfos.postal_code)}</p>
        <p>Ville : {handleInfosIsNull(userInfos.city)}</p>
        <p>Pays : {handleInfosIsNull(userInfos.country)}</p>
        <p>Date de creation : {handleInfosIsDate(userInfos.created_at)}</p>
      </div>

      <button type="button" onClick={handleClickLogout}>
        Se deconnecter
      </button>
    </main>
  );
}

export default Profil;
