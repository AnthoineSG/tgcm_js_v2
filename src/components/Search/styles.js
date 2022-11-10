// eslint-disable-next-line import/prefer-default-export
export const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: '2px solid #65938B',
  }),
  // eslint-disable-next-line no-unused-vars
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: '#65938B',
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
};
