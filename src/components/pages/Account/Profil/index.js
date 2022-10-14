import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profil() {
  const userLog = useSelector((state) => state.users.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLog === false) {
      navigate('/signin');
    }
  }, []);

  return (
    <main>
      <h1>Profil</h1>
    </main>
  );
}

export default Profil;
