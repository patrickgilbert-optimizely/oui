import React from 'react';

/* eslint-disable max-len */
const ExperimentIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/experiment-16.svg');
const ExperimentIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/experiment-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ExperimentIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = ExperimentIcon16;
      SizeClass = 'oui-icon--16';
      break;
    case 24:
      Svg = ExperimentIcon24;
      SizeClass = 'oui-icon--24';
      break;
    default:
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + SizeClass }
      data-test-section={ props.testSection }
    />
  );
};

ExperimentIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ExperimentIcon;

