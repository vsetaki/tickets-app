import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SortingContainer from '../../containers/SortingContainer';
import TicketsContainer from '../../containers/TicketsContainer';
import globe from '../../images/globe.svg';
import plane from '../../images/plane.svg';

const StyledContainer = styled.div`
  width: 754px; /* wtf?! */
  margin: 0 auto;
  padding-top: 50px;
`;

const StyledMain = styled.div`
  display: flex;
`;

const StyledSidebar = styled.aside`
  width: 232px;
  margin-right: ${props => props.theme.spacing}px;
`;

const StyledSection = styled.section`
  width: 502px;
`;

const StyledLogoBg = styled.img`
  position: absolute;
`;

const StyledLogoPlane = styled.img`
  position: absolute;
  z-index: 2;
  top: 14px;
  transition: all ease 1000ms;
`;

const StyledLogo = styled.button`
  width: 82px;
  height: 89px;
  margin: 0 auto 50px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background: none;
  align-items: center;

  /* :focus ${StyledLogoPlane} {
    transform: rotate3d(0, 0, 1, 360deg);
  } */
`;

const StyledSortingContainer = styled(SortingContainer)`
  margin-bottom: ${props => props.theme.spacing}px;
`;

const Layout = ({ startSearchProcess }) => (
  <StyledContainer>
    <header>
      <StyledLogo onClick={startSearchProcess} role="button">
        <StyledLogoBg src={globe} alt="" />
        <StyledLogoPlane src={plane} alt="" />
      </StyledLogo>
    </header>
    <StyledMain>
      <StyledSidebar>
        {/* <FiltersContainer /> */}
      </StyledSidebar>
      <StyledSection>
        <StyledSortingContainer />
        <TicketsContainer />
      </StyledSection>
    </StyledMain>
  </StyledContainer>
);

Layout.propTypes = {
  startSearchProcess: PropTypes.func.isRequired,
};

export default Layout;
