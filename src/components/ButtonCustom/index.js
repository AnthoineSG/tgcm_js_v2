import PropTypes from 'prop-types';
import styled from 'styled-components';

const colorChoose = (color) =>
  (color === 'orange' && '#FF9A76') ||
  (color === 'green' && '#65938B') ||
  (color === 'mode' && '#727fc7') ||
  (color === 'beaute' && '#65938B') ||
  (color === 'alimentation' && '#FFEADB') ||
  (color === 'services' && '#FF9A76') ||
  (color === 'loisirs' && '#ccd463') ||
  (color === 'maison' && '#9c715d');

function ButtonCustom({ text, click, type, color }) {
  const Button = styled.button`
    width: 10em;
    font-size: 1.8rem;
    fontweight: eina01Bold;
    cursor: pointer;
    border: none;
    color: #1c213c;
    background-color: ${colorChoose(color)};
    margin: 1.5rem 0 3rem 0;
    padding: 0.8rem 1rem;
    transition: 0.3s background;
    &:hover {
      color: ${colorChoose(color)};
      background: #1c213c;
    }
  `;

  return (
    <Button type={type} onClick={click}>
      {text}
    </Button>
  );
}

ButtonCustom.defaultProps = {
  click: null,
  color: 'orange',
};

ButtonCustom.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ButtonCustom;
