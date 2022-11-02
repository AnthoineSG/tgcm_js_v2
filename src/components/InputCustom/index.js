import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function InputCustom({
  placeholder,
  className,
  required,
  type,
  id,
  name,
  value,
  action,
}) {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(action(e.target.name, e.target.value));
  };

  return (
    <input
      className={className}
      placeholder={placeholder}
      required={required}
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
}

InputCustom.defaultProps = {
  id: null,
  required: null,
};

InputCustom.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default InputCustom;
