import React from 'react';

/* eslint-disable max-len */
const AlignRightLeftIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/align-right-left-16.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRightLeftIcon = (props) => {
  let Svg;
  let SizeClass;

  switch (props.size) {
    case 16:
      Svg = AlignRightLeftIcon16;
      SizeClass = 'oui-icon--16';
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

AlignRightLeftIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRightLeftIcon;

