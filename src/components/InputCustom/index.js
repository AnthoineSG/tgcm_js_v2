import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function InputCustom({
  placeholder,
  className,
  required,
  type,
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
      placeholder={placeholder}
      className={className}
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
}

InputCustom.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default InputCustom;
