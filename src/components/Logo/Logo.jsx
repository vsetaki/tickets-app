import React from 'react';
import PropTypes from 'prop-types';
import { CARRIER_LOGO_CDN } from '../../constants';

const Logo = ({
  code, width, height, ...props
}) => (
  <img
    src={`${CARRIER_LOGO_CDN}/${width}/${height}/${code}.png`}
    width={width}
    height={height}
    alt={code}
    title={code}
    {...props}
  />
);

Logo.propTypes = {
  code: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Logo.defaultProps = {
  width: 110,
  height: 36,
};

export default Logo;
