import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkCuston({ className, action, link, text }) {
  const dispatch = useDispatch();

  const handleClickModal = () => {
    dispatch(action());
  };

  return (
    <Link className={className} onClick={handleClickModal} to={link}>
      {text}
    </Link>
  );
}

LinkCuston.propTypes = {
  className: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkCuston;
