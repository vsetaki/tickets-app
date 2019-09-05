import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import globe from '../../images/globe.svg';
import plane from '../../images/plane.svg';

const StyledLogoBg = styled.img`
  position: absolute;
`;

const spin = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledLogoPlane = styled.img`
  position: absolute;
  z-index: 2;
  top: 14px;
  transition: all ease 1000ms;
  animation: ${spin} 1s linear infinite;

  ${props => !props.animate && `
    animation-play-state: paused;
  `}
`;

const StyledLogo = styled.button`
  width: 82px;
  height: 89px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background: none;
  align-items: center;
`;

const PlaneLogo = ({ animate, onClick, ...props }) => (
  <StyledLogo onClick={onClick} role="button" {...props}>
    <StyledLogoBg src={globe} alt="" />
    <StyledLogoPlane animate={animate} src={plane} alt="" />
  </StyledLogo>
);

PlaneLogo.propTypes = {
  onClick: PropTypes.func,
  animate: PropTypes.bool,
};

PlaneLogo.defaultProps = {
  onClick: null,
  animate: false,
};

export default PlaneLogo;
