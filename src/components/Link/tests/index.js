import React from 'react';
import Link from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Link', () => {
  const mockFunction = () => { console.log('you clicked');};

  it('should render disabled', () => {
    const output = shallow(
      <Link
        href='http://google.com'
        isDisabled={ true }>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render style classes', () => {
    const output = shallow(
      <Link
        style='muted'>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render onclick', () => {
    const output = shallow(
      <Link
        onClick={ mockFunction }>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
