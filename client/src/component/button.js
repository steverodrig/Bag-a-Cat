import React from 'react';
import './button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--outliner']
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    //   <Link to='/signin' className='btn-mobile'>
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      // eslint-disable-next-line no-undef
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
    //   </Link>
  )
}