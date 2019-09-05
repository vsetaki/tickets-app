import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SortingContainer from '../../containers/SortingContainer';
import TicketsContainer from '../../containers/TicketsContainer';
import FilterContainer from '../../containers/FilterContainer';
import PlaneLogo from '../PlaneLogo';

const StyledContainer = styled.div`
  width: 754px; /* wtf?! */
  margin: 0 auto;
  padding-top: 59px;
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

const StyledSortingContainer = styled(SortingContainer)`
  margin-bottom: ${props => props.theme.spacing}px;
`;

const StyledPlaneLogo = styled(PlaneLogo)`
  margin: 0 auto 31px;
`;

const Layout = ({ processing, startSearchProcess }) => (
  <StyledContainer>
    <header>
      <StyledPlaneLogo animate={processing} onClick={startSearchProcess} />
    </header>
    <StyledMain>
      <StyledSidebar>
        <FilterContainer />
      </StyledSidebar>
      <StyledSection>
        <StyledSortingContainer />
        <TicketsContainer />
      </StyledSection>
    </StyledMain>
  </StyledContainer>
);

Layout.propTypes = {
  processing: PropTypes.bool.isRequired,
  startSearchProcess: PropTypes.func.isRequired,
};

export default Layout;
