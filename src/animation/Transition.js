import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

/**
 * A transition element
 */
function Transition(props) {
  const poseJsx = (
    <AnimatePresence>
      {props.spinner && !props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
          key={'spinner'}
        >
          <Spinner color='white' />
        </motion.div>
      )}

      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key='main'
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return poseJsx;
}
Transition.defaultProps = {
  show: false, // Whether the component is loaded
};

// A spinner graphic
function Spinner(props) {
  const StyledSpinnerWrapper = styled.div`
    min-width: 100px;
    width: 100%;
    color: ${props.color}
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const StyledIconWrapper = styled.div`
    animation-name: spin;
    align-items: center;
    max-width: 200px;
    animation-duration: 2500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <StyledSpinnerWrapper>
      <StyledIconWrapper>
        <FontAwesomeIcon
          style={{ fontSize: '65px', display: 'flex', margin: 'auto' }}
          icon={faCircleNotch}
        />
      </StyledIconWrapper>
    </StyledSpinnerWrapper>
  );
}
Spinner.defaultProps = {
  color: 'white',
};

export default Transition;
