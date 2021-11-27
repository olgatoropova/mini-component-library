/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  if (value < 0 && value > 100) {
    throw new Error(`Value of ProgressBar must be between 0 and 100: ${value}`);
  }

  return <Track style={{'--padding': styles.padding + 'px',
                        '--radius': styles.radius + 'px'}}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin="0"
                aria-valuemax="100">
            <VisuallyHidden>{value}%</VisuallyHidden>
            <IndicatorWrapper>            
              <Indicator style={{'--height': styles.height + 'px',
                                 '--width': value + '%'}}/>
            </IndicatorWrapper>
         </Track>;
};

const Track = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
`;

const IndicatorWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const Indicator = styled.div`
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
