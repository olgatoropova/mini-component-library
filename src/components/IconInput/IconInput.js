import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};


const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unrecognized Input size: ${size}`);
  }
  
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
      <Icon id={icon} size={styles.iconSize} />
    </IconWrapper>
    <TextInput {...delegated} 
            style={{
              '--width': width + 'px',
              '--height': styles.height / 16 + 'rem',
              '--border-thickness': styles.borderThickness + 'px',
              '--font-size': styles.fontSize / 16 + 'rem',
            }} />
 </Wrapper>
 );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
`;

const TextInput = styled.input`
  height: var(--height);
  border: 0;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
export default IconInput;
