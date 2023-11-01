/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, screen, fireEvent} from '@testing-library/react-native';

describe('App test', () => {
  it('given the app component, it renders correctly', () => {
    renderer.create(<App />);
  });
  it('given the pressable is pressed, it changes its test to Is pressed', () => {
    const app = render(<App />);
    fireEvent.press(app.getByText('Is not pressed'));
    const changedButton = app.getAllByText('Is pressed');
    expect(changedButton).toHaveLength(1);
  });
});
