import PropTypes from 'prop-types';
import styled from 'styled-components';

import './buttonCustom.scss';

const Button = styled.button`
  width: 10em;
  font-size: 1.8rem;
  fontweight: eina01Bold;
  cursor: pointer;
  border: none;
  color: #1c213c;
  background-color: #ff9a76;
  margin: 1.5rem 0 3rem 0;
  padding: 0.8rem 1rem;
  transition: 0.3s background;
  &:hover {
    color: #ff9a76;
    background: #1c213c;
  }
`;

function ButtonCustom({ text, click }) {
  return (
    <Button type="button" onClick={click}>
      {text}
    </Button>
  );
}

ButtonCustom.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default ButtonCustom;
