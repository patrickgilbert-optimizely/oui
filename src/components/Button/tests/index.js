import React from 'react';
import Button from '../index';
import { shallow } from 'enzyme';

describe('components/Button', () => {
  it('should render a `button` HTML element', () => {
    const component = shallow(<Button>Hello!</Button>);
    expect(component.is('button')).toBe(true);
  });

  it('should render contents that are passed in', () => {
    const component = shallow(<Button>Hello!</Button>);
    expect(component.text()).toBe('Hello!');
  });

  it('should call function that is passed in as `onClick` after click', () => {
    const obj = { func: () => {} };
    spyOn(obj, 'func').and.stub();

    const component = shallow(
      <Button onClick={ obj.func }>Hello!</Button>
    );

    component.simulate('click');

    expect(obj.func).toHaveBeenCalled();
  });

  it('should add an `aria-label` when provided', () => {
    const component = shallow(
      <Button ariaLabel="a11y">Hello!</Button>
    );

    expect(component.is('[aria-label="a11y"]')).toBe(true);
  });

  it('should add the active class if `isActive` is true', () => {
    const component = shallow(
      <Button isActive={ true }>Hello!</Button>
    );

    expect(component.hasClass('is-active')).toBe(true);
  });

  it('should add the disabled attribute if `isDisabled` is true', () => {
    const component = shallow(
      <Button isDisabled={ true }>Hello!</Button>
    );

    expect(component.is('[disabled]')).toBe(true);
  });

  it('should be of type `button` when `isSubmit` is false', () => {
    const component = shallow(
      <Button isSubmit={ false }>Hello!</Button>
    );

    expect(component.is('[type="button"]')).toBe(true);
  });

  it('should be of type `button` when `isSubmit` is not provided', () => {
    const component = shallow(<Button>Hello!</Button>);
    expect(component.is('[type="button"]')).toBe(true);
  });

  it('should be of type `submit` when `isSubmit` is true', () => {
    const component = shallow(
      <Button isSubmit={ true }>Hello!</Button>
    );

    expect(component.is('[type="submit"]')).toBe(true);
  });

  it('should have a properly set size class if `size` is provided', () => {
    const component = shallow(
      <Button size="tiny">Hello!</Button>
    );

    expect(component.hasClass('oui-button--tiny')).toBe(true);
  });

  it('should have a properly set style class if `style` is provided', () => {
    const component = shallow(
      <Button style="outline">Hello!</Button>
    );

    expect(component.hasClass('oui-button--outline')).toBe(true);
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Button testSection="foo">Hello!</Button>
    );

    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should have a properly set width class if `width` is provided', () => {
    const component = shallow(
      <Button width="full">Hello!</Button>
    );

    expect(component.hasClass('oui-button--full')).toBe(true);
  });
});
